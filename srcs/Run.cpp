/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/13 10:34:56 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

void Config::run()
{
	// Create a socket (IPv4, TCP)
	int sockfd = socket(AF_INET, SOCK_STREAM, 0);
	if (sockfd == -1)
		throw std::runtime_error("Failed to create socket ");


	int optval = 1;
    if (setsockopt(sockfd, SOL_SOCKET, SO_REUSEADDR, &optval, sizeof(optval)) == -1)
	{
		throw std::runtime_error("Failed to set socket options");
	    close(sockfd);
	}
	// Listen to port 80 on any address
	sockaddr_in sockaddr;
	sockaddr.sin_family = AF_INET;
	sockaddr.sin_addr.s_addr = INADDR_ANY;
	sockaddr.sin_port = htons(80); // htons is necessary to convert a number to
								   // network byte order
	if (bind(sockfd, (struct sockaddr *)&sockaddr, sizeof(sockaddr)) < 0)
		throw std::runtime_error("Failed to bind to port. errno: ");

	// Start listening. Hold at most 10 connections in the queue
	if (listen(sockfd, 10) < 0)
		throw std::runtime_error("Failed to listen on socket. errno: ");

	while (1)
	{
		// Grab a connection from the queue	
		size_t addrlen = sizeof(sockaddr);
		int connection = accept(sockfd, (struct sockaddr *)&sockaddr, (socklen_t *)&addrlen);
		if (connection < 0)
			throw std::runtime_error("Failed to grab connection. errno: ");

		// Read from the connection
		Request request(connection);

		// Send a message to the connection

		std::string httpResponse;
		Response* response = _cluster[0]->checkRequest(request);
		httpResponse = response->get();
		delete response;

		// Now, 'file_contents' contains the entire file as a string
		
		// std::cout << file_contents << std::endl;
		
		// std::string response = fileContent;
		
		// try
		// {
		// 	/* code */
		// 	std::string strFromCgi = cgiHandler(_cluster[0]->getCgiExtension(), _cluster[0]->getCgiPath(), request.getPath());
		// 	send(connection, strFromCgi.c_str(), strFromCgi.size(), 0);
		// }
		// catch(const std::exception& e)
		// {
		// 	std::cerr << e.what() << '\n';
		// }
		
		
		
		send(connection, httpResponse.c_str(), httpResponse.size(), 0);
	}
	close(sockfd);
}
