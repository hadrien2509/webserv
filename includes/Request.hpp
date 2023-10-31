/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Request.hpp                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/10 14:58:25 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/26 19:34:01 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef REQUEST_HPP
#define REQUEST_HPP

#include <iostream>
#include <string>
#include <sstream>
#include <sys/socket.h>

class Server;

class Request
{
private:
	const int _connection;
	std::string _method;
	std::string _path;
	std::string _header;
	std::string _httpVersion;
	std::string _querryString;
	std::string	_boundary;
	unsigned long _contentLength;

	void _parseRequest(const std::string &);
	unsigned long _extractData(const std::string &header);
	void _extractBoundary(const std::string& httpRequest);

public:
	Request(std::string str, int fd, Server *);
	Request(const Request &);
	~Request();
	Request &operator=(const Request &);

	const std::string &getMethod() const;
	const std::string &getPath() const;
	const std::string &getHeader() const;
	const std::string &getHttpVersion() const;
	std::string &getQuerryString();
	void setHeader(const std::string &request);
	void setPath(std::string path);
	void setBody(std::string request);
	bool isComplete();
	bool createFileFromData(const std::string &folderPath);
};

#endif