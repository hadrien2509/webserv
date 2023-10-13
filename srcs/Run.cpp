/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/13 16:04:46 by jusilanc         ###   ########.fr       */
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
            _poll[currentIndex++] = temp[j];
	}
}

void Config::run()
{
	// Create a socket (IPv4, TCP)

	_createPoll();
	while (1)
	{
		poll(_poll, _pollsize, -1);  // Infinite timeout for simplicity
		
		for (size_t i = 0; i < _pollsize; i++)
		{
            if (_poll[i].revents & POLLIN) {
                // The listen socket is ready, indicating an incoming connection.
                sockaddr_in client_addr;
                socklen_t client_addr_len = sizeof(client_addr);
                int client_socket = accept(_poll[i].fd, (struct sockaddr*)&client_addr, &client_addr_len);

				if (client_socket < 0)
					throw std::runtime_error("Failed to grab connection. errno: ");

				// Read from the connection
				Request request(client_socket);

				// Send a message to the connection
				std::string httpResponse;
				Response* response = _cluster[0]->checkRequest(request);
				httpResponse = response->get();
				delete response;
				

				try
				{
				/* code */
					std::string strFromCgi = cgiHandler(_cluster[0]->getCgiExtension(), _cluster[0]->getCgiPath(), request.getPath());
					send(client_socket, strFromCgi.c_str(), strFromCgi.size(), 0);
				}
				catch(const Cgi::CgiNotCgiException& e)
				{
					send(client_socket, httpResponse.c_str(), httpResponse.size(), 0);
				}
				catch(const std::exception& e)
				{
					std::cerr << e.what() << '\n';
				}
            }
        }
	}
}
