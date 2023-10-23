/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Request.hpp                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/10 14:58:25 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/23 12:18:24 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef REQUEST_HPP
# define REQUEST_HPP

#include <iostream>
#include <string>
#include <sstream>
#include <sys/socket.h>

class Request
{
	private :
		const int		_connection;
		std::string		_method;
		std::string		_path;
		std::string		_httpVersion;
		std::string		_querryString;
		
		void _parseRequest(const std::string &);

	public :
		Request(const int &);
		Request(const Request &);
		~Request();
		Request &operator=(const Request &);
		
		const std::string&	getMethod() const;
		const std::string&	getPath() const;
		const std::string&	getHttpVersion() const;
		std::string&	getQuerryString();
		void	setPath(std::string path);
		void getBody(std::string request);
};

#endif