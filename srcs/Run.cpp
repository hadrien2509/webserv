/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/18 23:44:36 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

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

void Config::_addPollfd(int fd, short events)
{
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

	_createPoll();
	while (1)
	{
		// std::cout << "Waiting for connections..." << std::endl;
		if (poll(_poll, _pollsize, -1) <= 0)  // Infinite timeout for simplicity
			continue;
		for (size_t i = 0; i < _pollsize; i++)
		{
            if (_poll[i].revents & POLLIN)
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
					Server* server = _clientSocketToServer[_poll[i].fd];
					Request request(_poll[i].fd);
					std::cout << request.getPath() << std::endl;
					Location *location = server->checkLocation(request);
					Response *response;
					if (location)
						response = location->checkRequest(request);
					else
						response = server->checkRequest(request);
					server->addResponse(response);
				}
			}
			else if (_poll[i].revents & POLLOUT)
			{
				if (_clientSocketToServer.find(_poll[i].fd) == _clientSocketToServer.end())
					continue;
				Server*	server = _clientSocketToServer[_poll[i].fd];
				Response* response = server->getResponse();
				if (response == NULL)
					continue;
				std::string httpResponse = response->get();
				server->deleteResponse();

				send(_poll[i].fd, httpResponse.c_str(), httpResponse.size(), 0);
			}
        }
	}
}
