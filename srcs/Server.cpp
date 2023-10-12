/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Server.cpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 14:09:10 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/12 15:52:44 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Server.hpp"

Server::Server() : _autoIndex(false)
{
	
}

Server::Server(const Server &copy)
{
	*this = copy;
}

Server::~Server()
{
	closedir(_root);
	for (std::map<std::string, Location*>::iterator it = _locations.begin(); it != _locations.end(); it++)
		delete it->second;
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

void	Server::setRoot(DIR* root, std::string rootPath)
{
	_root = root;
	_rootPath = rootPath;
}

void	Server::addIndex(std::string index)
{
	_index.push_back(index);
}

void	Server::setCgiPath(std::vector<std::string> cgiPath)
{
	_cgiPath = cgiPath;
}

void	Server::setCgiExtension(std::vector<std::string> cgiExtension)
{
	_cgiExtension = cgiExtension;
}

void	Server::addPort(int port)
{
	_ports.push_back(port);
}

void	Server::addLocation(std::string ressourceType, Location *location)
{
	_locations[ressourceType] = location;
}

const std::string&	Server::getServerName() const
{
	return (_serverName);
}

DIR*			Server::getRoot() const
{
	return (_root);
}

std::string		Server::getRootPath() const
{
	return (_rootPath);
}

const std::vector<std::string>&	Server::getIndex() const
{
	return (_index);
}


const std::vector<std::string>&	Server::getCgiExtension() const
{
	return (_cgiExtension);
}

const std::vector<std::string>&	Server::getCgiPath() const
{
	return (_cgiPath);
}

void Server::openRoot()
{
	_root = opendir(_rootPath.c_str());
	if (_root == NULL)
		throw std::runtime_error("Error: Could not open root directory" + _rootPath);
}

const std::map<std::string,Location*>&	Server::getLocations() const
{
	return (_locations);
}

void Server::setErrorPage(int errorCode, std::string errorPage)
{
	_errorPage[errorCode] = errorPage;
}

const std::string&	Server::getRessourcePath() const
{
	return (_ressourcePath);
}

void Server::addCgiPath(std::string cgiPath)
{
	_cgiPath.push_back(cgiPath);
}

void Server::addCgiExtension(std::string cgiExtension)
{
	_cgiExtension.push_back(cgiExtension);
}

int Server::checkRequest(Request &request)
{
	if (request.getPath() == "/")
	{
		for (std::vector<std::string>::const_iterator it = _index.begin(); it != _index.end(); it++)
		{
			_ressourcePath = _rootPath + "/" + (*it);
			if (access(_ressourcePath.c_str(), F_OK) == 0)
				return (200);
		}
		if (_autoIndex)
		{
			std::cout << "AutoIndex" << std::endl;
			return (200);
		}
		else
		{
			_ressourcePath = _rootPath + "/" + _errorPage[403];
			return (403);
		}
	}
	_ressourcePath = _rootPath + request.getPath();
	if (access(_ressourcePath.c_str(), F_OK) == 0)
		return (200);
	_ressourcePath = _rootPath + "/" + _errorPage[404];
	return (404);
}