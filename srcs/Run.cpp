/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/18 14:09:04 by jusilanc         ###   ########.fr       */
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
				Server *server = _serverSocketToServer[_poll[i].fd];
				if (server)
				{
					sockaddr_in client_addr;
                	socklen_t client_addr_len = sizeof(client_addr);
               		int client_socket = accept(_poll[i].fd, (struct sockaddr*)&client_addr, &client_addr_len);

					if (client_socket < 0)
						throw std::runtime_error("Failed to grab connection. errno: ");

					std::cout << "New connection from " << client_socket << std::endl;
					_clientSocketToServer[client_socket] = server;
					_addPollfd(client_socket, POLLIN | POLLOUT);
				}
				else
				{
					server = _clientSocketToServer[_poll[i].fd];
					if (!server)
						throw std::runtime_error("Server not found");
					Request request(_poll[i].fd);
					Location *location = server->checkLocation(request);
					Response* response = NULL;
					try
					{
						std::string strFromCgi;
						if (location)
							response = cgiHandler(request, location);
						else
							response = cgiHandler(request, server);
							// strFromCgi = cgiHandler(server->getCgiExtension(), server->getCgiPath(), request.getPath());
					}
					catch(const Cgi::CgiNotCgiException& e)
					{
						if (location)
							response = location->checkRequest(request);
						else
							response = server->checkRequest(request);
					}
					catch(const Cgi::CgiFileException& e)
					{
						// 404 --> will be modified with next version of cgi handler
						std::cerr << e.what() << '\n';
					}
					catch(const std::exception& e)
					{
						std::cerr << e.what() << '\n';
					}
					server->addResponse(response);
				}
			}
			else if (_poll[i].revents & POLLOUT)
			{
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
