/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/09 19:17:55 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

void Config::run()
{
	// Create a socket (IPv4, TCP)
	int sockfd = socket(AF_INET, SOCK_STREAM, 0);
	if (sockfd == -1)
		throw std::runtime_error("Failed to create socket " + std::to_string(errno));

	// Listen to port 80 on any address
	sockaddr_in sockaddr;
	sockaddr.sin_family = AF_INET;
	sockaddr.sin_addr.s_addr = INADDR_ANY;
	sockaddr.sin_port = htons(80); // htons is necessary to convert a number to
								   // network byte order
	if (bind(sockfd, (struct sockaddr *)&sockaddr, sizeof(sockaddr)) < 0)
		throw std::runtime_error("Failed to bind to port. errno: " + std::to_string(errno));

	// Start listening. Hold at most 10 connections in the queue
	if (listen(sockfd, 10) < 0)
		throw std::runtime_error("Failed to listen on socket. errno: " + std::to_string(errno));

	// Grab a connection from the queue
	size_t addrlen = sizeof(sockaddr);
	int connection = accept(sockfd, (struct sockaddr *)&sockaddr, (socklen_t *)&addrlen);
	if (connection < 0)
		throw std::runtime_error("Failed to grab connection. errno: " + std::to_string(errno));

	// Read from the connection
	char buffer[1000];

	memset(buffer, 0, 1000);
	size_t bytesRead = read(connection, buffer, 1000);
	if (bytesRead < 0)
		throw std::runtime_error("Failed to read from socket. errno: " + std::to_string(errno));
	std::cout << "The message was: " << buffer;

	// Send a message to the connection
	
	struct dirent *entry;
	while ((entry = readdir(_cluster[0]->getRoot())) != NULL)
	{
		std::cout << entry->d_name << std::endl;
		if (entry->d_name == _cluster[0]->getIndex()[1])
			break ;
	}
	std::string filePath = _cluster[0]->getRootPath() + "/" + entry->d_name;
	std::cout << filePath << std::endl;
	std::ifstream file(filePath); // Open the file for reading
    if (!file.is_open()) {
        throw std::runtime_error("Could not open file");
    }

    std::string file_contents;
    std::string line;
    while (std::getline(file, line)) {
        file_contents += line + "\n"; // Append each line to the string
    }

    file.close(); // Close the file when done

    // Now, 'file_contents' contains the entire file as a string
	std::cout << file_contents << std::endl;
	
	std::string response = file_contents;
	send(connection, response.c_str(), response.size(), 0);

	// Close the connections
	close(connection);
	close(sockfd);
}