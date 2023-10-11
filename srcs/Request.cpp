/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Request.cpp                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/10 14:58:01 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/11 14:43:00 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Request.hpp"

Request::Request(const int& connection) : _connection(connection)
{
	ssize_t bytesRead;
	char buffer[1000];
	std::string request;

	bytesRead = recv(_connection, buffer, 1000, 0);
	request += buffer;
	if (bytesRead == -1)
		throw std::runtime_error("Failed to read request");
	std::cout << request << std::endl;
	_parseRequest(request);
}

Request::Request(const Request &src) : _connection(src._connection)
{
	*this = src;
}

Request::~Request()
{
	close(_connection);
}

Request	&Request::operator=(const Request &rhs)
{
	if (this != &rhs)
	{
	}
	return (*this);
}

void	Request::_parseRequest(const std::string &request)
{
	std::istringstream iss(request);
	
	std::string line;
	if (std::getline(iss, line))
	{
		std::istringstream iss2(line);
		
		iss2 >> _method >> _path >> _httpVersion;
	}
	// else
	// 	throw std::runtime_error("Failed to parse request");
}

const std::string&	Request::getMethod() const
{
	return (_method);
}

const std::string&	Request::getPath() const
{
	return (_path);
}

const std::string&	Request::getHttpVersion() const
{
	return (_httpVersion);
}
