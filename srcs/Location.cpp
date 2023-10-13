/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.cpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:21:31 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/13 19:15:25 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Location.hpp"

Location::Location()
{
}

Location::Location(Server *server)
{
	_rootPath = server->getRootPath();
	_root = opendir(_rootPath.c_str());
	_autoIndex = server->getAutoIndex();
	_allowMethods = server->getAllowMethods();
	_cgiExtension = server->getCgiExtension();
	_cgiPath = server->getCgiPath();
	_index = server->getIndex();
	_mimeTypes = server->getMimeTypes();
	_errorPage = server->getErrorPage();
}

Location::Location(const Location &copy)
{
	*this = copy;
}

Location::~Location()
{
	closedir(_root);
}

Location &Location::operator=(const Location &copy)
{
	if (this != &copy)
	{
		
	}
	return (*this);
}

const DIR*		Location::getRoot() const
{
	return (this->_root);
}

std::string		Location::getRootPath() const
{
	return (this->_rootPath);
}

const std::vector<std::string>&	Location::getIndex() const
{
	return (this->_index);
}

const bool&	Location::getAutoIndex() const
{
	return (this->_autoIndex);
}

const std::vector<std::string>&	Location::getAllowMethods() const
{
	return (this->_allowMethods);
}

const std::vector<std::string>&	Location::getCgiExtension() const
{
	return (this->_cgiExtension);
}

const std::vector<std::string>&	Location::getCgiPath() const
{
	return (this->_cgiPath);
}

void Location::setRoot(DIR *dir, std::string rootPath)
{
	this->_root = dir;
	this->_rootPath = rootPath;
}

void			Location::addIndex(std::string index)
{
	this->_index.push_back(index);
}

Response* Location::checkRequest(Request& request)
{
	std::string ressourcePath;
	std::string ressourceType;

	if (request.getPath() == "/")
	{
		for (std::vector<std::string>::const_iterator it = _index.begin(); it != _index.end(); it++)
		{
			ressourcePath = _rootPath + "/" + (*it);
			if (access(ressourcePath.c_str(), F_OK) == 0)
				return (new Response("200 OK", ressourcePath, _mimeTypes));
		}
		if (_autoIndex)
		{
			std::cout << "AutoIndex" << std::endl;
			return (new Response("200 OK", ressourcePath, _mimeTypes));
		}
		else
		{
			ressourcePath = _rootPath + "/" + _errorPage[403];
			return (new Response("403 Forbidden", ressourcePath, _mimeTypes));
		}
	}
	ressourcePath = _rootPath + request.getPath();
	if (access(ressourcePath.c_str(), F_OK) == 0)
		return (new Response("200 OK", ressourcePath, _mimeTypes));
	ressourcePath = _rootPath + "/" + _errorPage[404];
	return (new Response("404 Not Found", ressourcePath, _mimeTypes));
}