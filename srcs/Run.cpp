/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/12 00:24:57 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

void Config::run()
{
	// Create a socket (IPv4, TCP)
	int sockfd = socket(AF_INET, SOCK_STREAM, 0);
	if (sockfd == -1)
		throw std::runtime_error("Failed to create socket ");

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
		int code = _cluster[0]->checkRequest(request);
		if (code == 404)
		{
			httpResponse = "HTTP/1.1 404 Not Found\r\n"
					"Content-Type: text/html; charset=UTF-8\r\n"
					"Content-Length: ";
		}
		if (code == 200)
		{
			httpResponse = "HTTP/1.1 200 OK\r\n"
                           "Content-Type: text/html; charset=UTF-8\r\n"
                           "Content-Length: ";
		}
		std::string filePath = _cluster[0]->getRessourcePath();
		// std::cout << filePath << std::endl;
		std::ifstream file(filePath.c_str()); // Open the file for reading
		if (!file.is_open()) {
			throw std::runtime_error("Could not open file");
		}

		std::string fileContent;
		std::string line;
		std::stringstream ss1, ss2;

		// Insert the length of the HTML content after Content-Length
		ss1 << file.rdbuf(); // Read the file
		fileContent = ss1.str();
		ss2 << fileContent.length();
		httpResponse += ss2.str();

		// Finish up the headers and add the HTML content
		httpResponse += "\r\n\r\n";

		httpResponse += fileContent; // Add the file content to the string

		// std::cout << httpResponse << std::endl;
		file.close(); // Close the file when done
		send(connection, httpResponse.c_str(), httpResponse.size(), 0);
	}
	close(sockfd);
}
