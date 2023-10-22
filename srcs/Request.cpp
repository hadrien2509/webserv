/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Request.cpp                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/10 14:58:01 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/22 01:53:49 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Request.hpp"

Request::Request(const int& connection) : _connection(connection)
{
	std::string request;

	char	buffer[1024] = {0};
	int		ret;

	ret = recv(_connection, buffer, 1023, 0);

	if (ret != -1)
		buffer[ret] = '\0';
	// std::cerr << "BUFFER: " << buffer << std::endl;
	// if (!ret)
	// 	std::cout << "\rConnection was closed by client.\n" << std::endl;
	// else if (ret == -1)
	// 	std::cout << "\rRead error, closing connection.\n" << std::endl;

	request += buffer;
	_parseRequest(request);
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

void	Request::_parseRequest(const std::string &request)
{
	std::istringstream iss(request);
	//std::cout << "\n\n\n" << request << std::endl;
	std::string line;
	if (std::getline(iss, line))
	{
		std::istringstream iss2(line);
		// std::cout << "request : " << line << std::endl;
		iss2 >> _method >> _path >> _httpVersion;
	}
	size_t pos = _path.find('?');

    if (pos != std::string::npos) {
        _querryString = _path.substr(pos + 1);
        _path = _path.substr(0, pos);
    }
		//std::cout << _querryString << std::endl;
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
