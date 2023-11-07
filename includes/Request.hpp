/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Request.hpp                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/10 14:58:25 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/07 14:42:53 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef REQUEST_HPP
#define REQUEST_HPP

#include <iostream>
#include <string>
#include <sstream>
#include <sys/socket.h>
# include <netinet/in.h> // For sockaddr_in

class Server;

class Request
{
private:
	const int _connection;
	std::string _strRequest;
	std::string _method;
	std::string _path;
	std::string _header;
	std::string _httpVersion;
	std::string _querryString;
	std::string	_boundary;
	unsigned long _contentLength;
	sockaddr_in		_addr;

	void _parseRequest(const std::string &);
	void _extractData(const std::string &header);
	void _extractBoundary(const std::string& httpRequest);

public:
	Request(std::string str, int fd, Server *, struct sockaddr_in addr);
	Request(const Request &);
	~Request();
	Request &operator=(const Request &);

	const std::string &getMethod() const;
	const std::string &getPath() const;
	const std::string &getHeader() const;
	const std::string &getHttpVersion() const;
	const std::string &getStrRequest() const;
	const sockaddr_in &getSockAddr() const;
	void appendRequest(char *str, int nb);
	std::string &getQuerryString();
	void setHeader(const std::string &request);
	void setPath(std::string path);
	void setBody();
	bool isComplete();
	bool createFileFromData(const std::string &folderPath);
	class BodyTooLargeException: public std::exception
		{
			public:
				const char * what() const throw()
				{
					return ("body too large");
				}
		};
};

#endif