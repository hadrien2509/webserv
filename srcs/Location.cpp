/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.cpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:21:31 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/18 19:39:54 by jusilanc         ###   ########.fr       */
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

const std::map<std::string, std::string> Location::getMimeTypes() const
{
	return (this->_mimeTypes);
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
	if (request.getPath() == "/")
	{
		for (std::vector<std::string>::const_iterator it = _index.begin(); it != _index.end(); it++)
		{
			request.setPath(_rootPath + "/" + (*it));
			
			if (access(request.getPath().c_str(), F_OK) == 0)
			{
				try
				{
					Response *response = cgiHandler(request, this);
					return (response);
				}
				catch(const std::exception& e)
				{
					return (new Response("200 OK", request.getPath(), _mimeTypes));
					std::cerr << e.what() << '\n';
				}
			}
		}
		if (_autoIndex)
		{
			std::cout << "AutoIndex" << std::endl;
			return (new Response("200 OK", request.getPath(), _mimeTypes));
		}
		else
		{
			request.setPath(_rootPath + "/" + _errorPage[403]);
			return (new Response("403 Forbidden", request.getPath(), _mimeTypes));
		}
	}
	request.setPath(_rootPath + request.getPath());
	if (access(request.getPath().c_str(), F_OK) == 0)
	{
		try
		{
			Response *response = cgiHandler(request, this);
			return (response);
		}
		catch (const std::exception &e)
		{
			return (new Response("200 OK", request.getPath(), _mimeTypes));
			std::cerr << e.what() << '\n';
		}
	}
	request.setPath(_rootPath + "/" + _errorPage[404]);
	return (new Response("404 Not Found", request.getPath(), _mimeTypes));
}