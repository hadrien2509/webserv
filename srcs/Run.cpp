/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/07 14:43:18 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

void Config::_readRequest(pollfd& poll, struct sockaddr_in addr) {
    char buffer[BUFFER_SIZE];
    bool requestComplete = false;
	memset(buffer, 0, BUFFER_SIZE);
	while (!requestComplete) {
        int ret = recv(poll.fd, buffer, BUFFER_SIZE -1, 0);
		if (ret == 0) {
            std::cout << "Client disconnected" << std::endl;
            _endPoll(poll.fd);
            return;
        }
        if (ret == -1) {
            std::cout << "Error : " << strerror(errno) << std::endl;
            _endPoll(poll.fd);
            return;
        }
		if (_requests[poll.fd] == NULL)
		{
			try
			{
				Server *server = _clientSocketToServer[poll.fd];
				_requests[poll.fd] = new Request(buffer, ret, poll.fd, server, addr);
			}
			catch (std::exception &e)
			{
				std::cerr << "Error : " << e.what() << std::endl;
				_responses[poll.fd].push_back(new Response("413", "Payload Too Large", "HTTP/1.1"));
				_sendResponse(poll.fd);
				_endPoll(poll.fd); // Pour éviter qu'il continue à envoyer
				return;
			}
		}
		else
			_requests[poll.fd]->appendRequest(buffer, ret);
        size_t pos = _requests[poll.fd]->getStrRequest().find("\r\n\r\n");
        if (pos != std::string::npos) {
            requestComplete = true;
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
		/*
		*/
	if (response->getStatus() == "200 OK")
		std::cout << GREEN;
	else
		std::cout << RED_BOLD;
	std::cout << "Response : status <"<< response->getStatus() << ">" << DEFAULT << std::endl;
	int ret = send(fd, response->get().c_str(), response->get().size(), 0);
	if (ret == -1)
	{
		std::cout << "Error : " << strerror(errno) << std::endl;
		_endPoll(fd);
		return;
	}
	_deleteResponse(fd);
}

void Config::_createPoll()
{
	for (size_t i = 0; i < _cluster.size(); i++)
		_pollsize += _cluster[i]->getPollfds().size();
	_poll = new pollfd[_pollsize];
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

void Config::_endPoll(int fd)
{
	_clientSocketToServer.erase(fd);
	_clientSocketToServerAddr.erase(fd);
	close(fd);

	if (_requests[fd])
	{
		delete _requests[fd];
		_requests[fd] = NULL;
	}
	if (_responses[fd].empty())
		_responses.erase(fd);
	fd = -1;
}
void Config::_removePolls()
{
    size_t newPollSize = 0;
    for (size_t i = 0; i < _pollsize; i++)
    {
        if (_poll[i].fd != -1)
        {
            _poll[newPollSize] = _poll[i];
            newPollSize++;
        }
		else
			std::cout << RED_BOLD << "Polls removed" << DEFAULT << std::endl;
    }
    if (newPollSize < _pollsize)
    {
        struct pollfd *newPoll = new struct pollfd[newPollSize];
        for (size_t i = 0; i < newPollSize; i++)
            newPoll[i] = _poll[i];
        delete[] _poll;
        _poll = newPoll;
        _pollsize = newPollSize;
    }
}


void Config::_addPollfd(int fd, short events)
{
	for (size_t i = 0; i < _pollsize; i++)
		if (_poll[i].fd == fd)
			return;
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
				_endPoll(_poll[i].fd);
			}
			else if (_poll[i].revents & POLLHUP)
			{
				_endPoll(_poll[i].fd);
				std::cerr << "POLLHUP" << std::endl;
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
						continue;
					_clientSocketToServer[client_socket] = server;
					sockaddr_in server_addr;
					socklen_t server_addr_len = sizeof(server_addr);
					getsockname(_poll[i].fd, (struct sockaddr *)&server_addr, &server_addr_len);
					_clientSocketToServerAddr[client_socket] = server_addr;
					_addPollfd(client_socket, POLLIN | POLLOUT);
				}
				else
				{
					sockaddr_in addr = _clientSocketToServerAddr[_poll[i].fd];
					_readRequest(_poll[i], addr);
				}
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
					if ( request->getMethod() == "GET")
						std::cout << BLUE;
					else
						std::cout << PURPLE_BOLD;
					std::cout << "\nRequest  : Method <" << request->getMethod() << "> ";
					std::cout << "Path <" << request->getPath() << ">" << DEFAULT << std::endl;
					Location *location = server->checkLocation(*request);
					if (location)
						response = location->checkRequest(*request);
					else
						response = server->checkRequest(*request);
					delete _requests[_poll[i].fd];
					_requests[_poll[i].fd] = NULL;
					_responses[_poll[i].fd].push_back(response);
					_sendResponse(_poll[i].fd);
				}
			}
		}
		_removePolls();
	}
}