/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/28 12:32:11 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

void Config::_readRequest(pollfd& poll) {
    char buffer[1024];
    bool requestComplete = false;

    while (!requestComplete) {
        int ret = recv(poll.fd, buffer, sizeof(buffer), 0);

        if (ret == 0) {
            std::cout << "Client disconnected" << std::endl;
            _removePollfd(poll.fd);
            return;
        }
        if (ret == -1) {
            std::cout << "Error : " << strerror(errno) << std::endl;
            _removePollfd(poll.fd);
            return;
        }
		if (_requests[poll.fd] == NULL)
		{
			try
			{
				Server *server = _clientSocketToServer[poll.fd];
				_requests[poll.fd] = new Request(buffer, poll.fd, server);
			}
			catch (std::exception &e)
			{
				std::cerr << "Error : " << e.what() << std::endl;
				_responses[poll.fd].push_back(new Response("413", "Payload Too Large", "HTTP/1.1"));
				_sendResponse(poll.fd);
				return;
			}
		}
		else
			_requests[poll.fd]->appendRequest(buffer, ret);
		// Append the received data to the request
        //request.append(buffer, ret);
        // Check if the request is complete
        size_t pos = _requests[poll.fd]->getStrRequest().find("\r\n\r\n");
        if (pos != std::string::npos) {
            requestComplete = true;
            // Extract the headers and the body separately if needed
            // Example: std::string headers = request.substr(0, pos + 4);
            //           std::string body = request.substr(pos + 4);
        }
    }
}

void Config::_sendResponse(int fd)
{
	if (_responses[fd].empty())
		return;
	Response* response = _responses[fd].front();
	if (response == NULL)
		return;
	std::cout << "Response : status <"<< response->getStatus() << ">" << std::endl;
	int ret = send(fd, response->get().c_str(), response->get().size(), 0);
	if (ret == -1)
	{
		std::cout << "Error : " << strerror(errno) << std::endl;
		_removePollfd(fd);
		return;
	}
	_removePollfd(fd);
	_deleteResponse(fd);
}

void Config::_createPoll()
{
	for (size_t i = 0; i < _cluster.size(); i++)
		_pollsize += _cluster[i]->getPollfds().size();

	// Allocate the memory
	_poll = new pollfd[_pollsize];

	// Copy the data
	size_t currentIndex = 0;
	for (size_t i = 0; i < _cluster.size(); i++)
	{
		std::vector<struct pollfd> temp = _cluster[i]->getPollfds();
		for (size_t j = 0; j < temp.size(); j++)
		{
			_poll[currentIndex++] = temp[j];
			_serverSocketToServer[temp[j].fd] = _cluster[i];
		}
	}
}

void Config::_removePollfd(int fd)
{
	close(fd);
	for (size_t i = 0; i < _pollsize; i++)
	{
		if (_poll[i].fd == fd)
		{
			for (size_t j = i; j < _pollsize - 1; j++)
			{
				_poll[j] = _poll[j + 1];
			}
			_pollsize--;

			struct pollfd *newPoll = new struct pollfd[_pollsize];
			for (size_t j = 0; j < _pollsize; j++)
			{
				newPoll[j] = _poll[j];
			}
			delete[] _poll;
			_poll = newPoll;
			break;
		}
	}
}

void Config::_addPollfd(int fd, short events)
{
	for (size_t i = 0; i < _pollsize; i++)
	{
		if (_poll[i].fd == fd)
			return;
	}

	struct pollfd *newPoll = new struct pollfd[_pollsize + 1];
	for (size_t i = 0; i < _pollsize; i++)
		newPoll[i] = _poll[i];
	newPoll[_pollsize].fd = fd;
	newPoll[_pollsize].events = events;
	delete[] _poll;
	_poll = newPoll;
	_pollsize++;
}

void Config::run()
{
	_createPoll();
	while (1)
	{
		if ((poll(_poll, _pollsize, -1)) <= 0)
			continue;
		for (size_t i = 0; i < _pollsize; i++)
		{
			if (_poll[i].revents & POLLERR)
			{
				std::cerr << "POLL QUIT" << std::endl;
				_removePollfd(_poll[i].fd);
			}
			else if (_poll[i].revents & POLLHUP)
			{
				std::cerr << "POLLHUP" << std::endl;
				_removePollfd(_poll[i].fd);
			}
			else if (_poll[i].revents & POLLIN)
			{
				if (_serverSocketToServer.find(_poll[i].fd) != _serverSocketToServer.end())
				{
					Server *server = _serverSocketToServer[_poll[i].fd];
					sockaddr_in client_addr;
					socklen_t client_addr_len = sizeof(client_addr);
					int client_socket = accept(_poll[i].fd, (struct sockaddr *)&client_addr, &client_addr_len);
					if (client_socket < 0)
						throw std::runtime_error("Failed to grab connection. errno: ");
					_clientSocketToServer[client_socket] = server;
					_addPollfd(client_socket, POLLIN | POLLOUT);
				}
				else
					_readRequest(_poll[i]);
			}
			else if (_poll[i].revents & POLLOUT && _requests[_poll[i].fd])
			{
				Server *server = _clientSocketToServer[_poll[i].fd];
				Response *response;
				Request *request = _requests[_poll[i].fd];
				request->setBody();
				if (request->isComplete())
				{
				/*
				*/
					std::cout << "\nRequest  : Method <" << request->getMethod() << "> ";
					std::cout << "Path <" << request->getPath() << ">" << std::endl;
					//std::cout << "querry <" << request->getQuerryString() << ">" << std::endl;
					Location *location = server->checkLocation(*request);
					if (location)
						response = location->checkRequest(*request);
					else
						response = server->checkRequest(*request);
					delete _requests[_poll[i].fd];//_requests[i].clear();
					_requests[_poll[i].fd] = NULL;
					_responses[_poll[i].fd].push_back(response);
					_sendResponse(_poll[i].fd);
				}
			}
		}
	}
}