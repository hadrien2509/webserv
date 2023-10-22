/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.cpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: samy <samy@student.42.fr>                  +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:21:31 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/21 20:30:35 by samy             ###   ########.fr       */
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
		_root = copy._root;
		_rootPath = copy._rootPath;
		_autoIndex = copy._autoIndex;
		_allowMethods = copy._allowMethods;
		_cgiExtension = copy._cgiExtension;
		_cgiPath = copy._cgiPath;
		_mimeTypes = copy._mimeTypes;
		_errorPage = copy._errorPage;
		_uri = copy._uri;
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

const std::string&	Location::getUri() const
{
	return (this->_uri);
}

void Location::setUri(std::string uri)
{
	if (uri[0] == '*')
		this->_uri = uri.substr(1);
	else
		this->_uri = uri;
}

void			Location::addIndex(std::string index)
{
	this->_index.push_back(index);
}

//addAllowMethods
void Location::addAllowMethods(std::string method)
{
	this->_allowMethods.push_back(method);
}

//check if the method is allowed
bool Location::checkMethod(std::string method)
{
	for (std::vector<std::string>::iterator it = _allowMethods.begin(); it != _allowMethods.end(); it++)
	{
		if (*it == method)
			return (true);
	}
	return (false);
}

Response* Location::checkRequest(Request& request)
{
	if (!checkMethod(request.getMethod()))
		return (new Response("405 Method Not Allowed", _rootPath + "/" + _errorPage[405], _mimeTypes));
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
					std::cerr << e.what() << '\n';
					return (new Response("200 OK", request.getPath(), _mimeTypes));
				}
			}
		}
		// ======================= Auto-index =======================
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
		// ==========================================================
	}
	request.setPath(_rootPath + request.getPath());
	if (access(request.getPath().c_str(), F_OK) == 0)
	{
		try
		{
			Response *response = cgiHandler(request, this);
			return (response);
		}
		catch (const Cgi::CgiNotCgiException &e)
		{
			return (new Response("200 OK", request.getPath(), _mimeTypes));
		}
		catch (const std::exception &e)
		{
			std::cerr << e.what() << '\n';
		}
	}
	request.setPath(_rootPath + "/" + _errorPage[404]);
	return (new Response("404 Not Found", request.getPath(), _mimeTypes));
}