/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/23 12:14:36 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

void Config::send_response(int fd)
{
	Response* response = this->getResponse(fd);
	if (response == NULL)
		return;
	this->deleteResponse(fd);
	//std::cout << "\n\n" << response->getHeader() << "\n\n\n\n" << std::endl;
	send(fd, response->get().c_str(), response->get().size(), 0);
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
    for (size_t i = 0; i < _pollsize; i++) {
        if (_poll[i].fd == fd) {
            // Supprimez ce descripteur de fichier du tableau _poll
            for (size_t j = i; j < _pollsize - 1; j++) {
                _poll[j] = _poll[j + 1];
            }
            _pollsize--;

            // Réallouez le tableau _poll avec la nouvelle taille
			//std::cout << "Pollsize: " << _pollsize << std::endl;
            struct pollfd* newPoll = new struct pollfd[_pollsize];
            for (size_t j = 0; j < _pollsize; j++) {
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
			return; // Pollfd already exists
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
	// Create a socket (IPv4, TCP)
	int IDK;
	_createPoll();
	while (1)
	{
		if ((IDK = poll(_poll, _pollsize, -1)) <= 0)  // Infinite timeout for simplicity
			continue;
		for (size_t i = 0; i < _pollsize; i++)
		{
			if (_poll[i].revents & POLLERR)
			{
				std::cerr << "POLL QUIT" << std::endl;
				send_response(_poll[i].fd);
				_removePollfd(_poll[i].fd);
			}
			else if (_poll[i].revents & POLLHUP)
			{
				std::cerr << "POLLHUP" << std::endl;
				send_response(_poll[i].fd);
				_removePollfd(_poll[i].fd);
			}
          	else if (_poll[i].revents & POLLIN)
			{
				if (_serverSocketToServer.find(_poll[i].fd) != _serverSocketToServer.end())
				{
					Server *server = _serverSocketToServer[_poll[i].fd];
					sockaddr_in client_addr;
                	socklen_t client_addr_len = sizeof(client_addr);
               		int client_socket = accept(_poll[i].fd, (struct sockaddr*)&client_addr, &client_addr_len);
					if (client_socket < 0)
						throw std::runtime_error("Failed to grab connection. errno: ");
					std::cout << "New connection in " << _poll[i].fd << std::endl;
					_clientSocketToServer[client_socket] = server;
					_addPollfd(client_socket, POLLIN | POLLOUT);
				}
				else
				{
					//std::cerr << "Required to read: parse request to get the payload to include in cgi->POST" << std::endl;
					Server* server = _clientSocketToServer[_poll[i].fd];
					Request request(_poll[i].fd);
					if (request.getPath() == "")
						continue;
					// std::cerr << "Response: " << request.getMethod() << std::endl;
					Location *location = server->checkLocation(request);
					Response *response;
					if (location)
						response = location->checkRequest(request); 
					else
						response = server->checkRequest(request);
					this->addResponse(_poll[i].fd, response);
				}
			}
			if (_poll[i].revents & POLLOUT)
				send_response(_poll[i].fd);
        }
	}
}
