/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Server.cpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 14:09:10 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/06 16:20:38 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Server.hpp"

Server::Server()
{
	
}

Server::Server(const Server &copy)
{
	*this = copy;
}

Server::~Server()
{
	
}

Server &Server::operator=(const Server &copy)
{
	if (this != &copy)
	{
		
	}
	return (*this);
}

void	Server::setServerName(std::string serverName)
{
	_serverName = serverName;
}

void	Server::setHost(std::string host)
{
	_host = host;
}

void	Server::setRoot(std::string root)
{
	_root = root;
}

void	Server::setIndex(std::vector<std::string> index)
{
	_index = index;
}

void	Server::setErrorPage(std::string errorPage)
{
	_errorPage = errorPage;
}

void	Server::setCgiPath(std::string cgi_path)
{
	_cgi_path = cgi_path;
}

void	Server::setCgiExtension(std::string cgi_extension)
{
	_cgi_extension = cgi_extension;
}

void	Server::addPort(int port)
{
	_ports.push_back(port);
}

void	Server::addLocation(std::string ressourceType, Location *location)
{
	_locations[ressourceType] = location;
}