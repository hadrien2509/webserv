/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/14 23:27:41 by hgeissle         ###   ########.fr       */
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
			_socketToServer[temp[j].fd] = _cluster[i];
		}
	}
}

void Config::run()
{
	// Create a socket (IPv4, TCP)

	_createPoll();
	while (1)
	{
		std::cout << "Waiting for connections..." << std::endl;
		if (poll(_poll, _pollsize, -1) <= 0)  // Infinite timeout for simplicity
			continue;
		for (size_t i = 0; i < _pollsize; i++)
		{
            if (_poll[i].revents & POLLIN) {
                // The listen socket is ready, indicating an incoming connection.
                sockaddr_in client_addr;
                socklen_t client_addr_len = sizeof(client_addr);
                int client_socket = accept(_poll[i].fd, (struct sockaddr*)&client_addr, &client_addr_len);

				if (client_socket < 0)
					throw std::runtime_error("Failed to grab connection. errno: ");

				std::cout << "New connection from " << client_socket << std::endl; 
				struct pollfd connection;
				connection.fd = client_socket;
				connection.events = POLLIN;
				while (poll(&connection, 1, 100) > 0)
				{
					Request request(client_socket);
					Server *server = _socketToServer[_poll[i].fd];
					Location *location = server->checkLocation(request);
					Response* response;
					if (location)
						response = location->checkRequest(request);
					else
						response = server->checkRequest(request);
					std::string httpResponse = response->get();
					delete response;

					send(client_socket, httpResponse.c_str(), httpResponse.size(), 0);
					// try
					// {
					// /* code */
					// 	std::string strFromCgi;
					// 	if (location)
					// 		strFromCgi = cgiHandler(location->getCgiExtension(), location->getCgiPath(), request.getPath());
					// 	else
					// 		strFromCgi = cgiHandler(server->getCgiExtension(), server->getCgiPath(), request.getPath());
					// 	send(client_socket, strFromCgi.c_str(), strFromCgi.size(), 0);
					// }
					// catch(const Cgi::CgiNotCgiException& e)
					// {
					// 	send(client_socket, httpResponse.c_str(), httpResponse.size(), 0);
					// 	std::cerr << e.what() << '\n';
					// }
					// catch(const std::exception& e)
					// {
					// 	std::cerr << e.what() << '\n';
					// }
				}
				close(client_socket);
            }
        }
	}
}
