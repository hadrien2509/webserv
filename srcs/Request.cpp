/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Request.cpp                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/10 14:58:01 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/25 19:43:26 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Request.hpp"

Request::Request(std::string str, int fd, Server* server) : _connection(fd)
{

	(void)server;      // Needed for client max body size and server name
	std::cout << "--------------------------------------------" << std::endl;
	//std::cout << "Request received : \n" << str << std::endl;
	_parseRequest(str);

	std::cout << "--------------------------------------------" << std::endl;
}

Request::Request(const Request &src) : _connection(src._connection)
{
	*this = src;
}

Request::~Request()
{
}

Request	&Request::operator=(const Request &rhs)
{
	if (this != &rhs)
	{
	}
	return (*this);
}

void Request::getBody(std::string request)
{
    std::string body;
    const unsigned long pos = request.find("\r\n\r\n");

    if (pos != std::string::npos) {
        _querryString = request.substr(pos + 4);
    }
}

void	Request::_parseRequest(const std::string &request)
{
	std::istringstream iss(request);
	std::string line;
	if (std::getline(iss, line))
	{
		std::istringstream iss2(line);
		// std::cout << "request : " << line << std::endl;
		iss2 >> _method >> _path >> _httpVersion;
	}
	size_t pos = _path.find('?');

    if (pos != std::string::npos) {
        if (_method == "GET")
			_querryString = _path.substr(pos + 1);
        _path = _path.substr(0, pos);
    }
	if (_method != "GET")
	{
		getBody(request);
	}
	std::cout << "mathod <" << _method << "> path <" << _path << "> querry <" << _querryString << ">" << std::endl;
}

const std::string&	Request::getMethod() const
{
	return (_method);
}

const std::string&	Request::getPath() const
{
	return (_path);
}

void	Request::setPath(std::string path){
	_path = path;
}

const std::string&	Request::getHttpVersion() const
{
	return (_httpVersion);
}

std::string&	Request::getQuerryString()
{
	return (_querryString);
}
