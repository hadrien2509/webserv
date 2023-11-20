/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.cpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:21:31 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/20 20:03:13 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Location.hpp"

/* ************************************************************************** */
/* ------------------------------ CONSTRUCTORS ------------------------------ */
/* ************************************************************************** */

Location::Location(Server *server)
{
	_rootPath = server->getRootPath();
	_serverRoot = server->getRootPath();
	_autoIndex = server->getAutoIndex();
	_allowMethods = server->getAllowMethods();
	_cgiExtension = server->getCgiExtension();
	_cgiPath = server->getCgiPath();
	_index = server->getIndex();
	_mimeTypes = server->getMimeTypes();
	_errorPage = server->getErrorPage();
	_timeout = server->getTimeout();
	_redirect = server->getRedirect();
	_redirectURL = server->getRedirectURL();
	_redirectCode = server->getRedirectCode();
	_serverName = server->getServerName();
}

Location::Location(const Location &copy)
{
	*this = copy;
}

Location::~Location()
{
}

Location &Location::operator=(const Location &copy)
{
	if (this != &copy)
	{
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

/* ************************************************************************** */
/* -------------------------- GETTERS & SETTERS ----------------------------- */
/* ************************************************************************** */

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

const size_t&	Location::getTimeout() const
{
	return (this->_timeout);
}

const std::map<std::string, std::string> Location::getMimeTypes() const
{
	return (this->_mimeTypes);
}

const std::string&	Location::getRedirectURL() const
{
	return (this->_redirectURL);
}

const bool&	Location::getRedirect() const
{
	return (this->_redirect);
}

const int& Location::getRedirectCode() const
{
	return (this->_redirectCode);
}

const std::string& Location::getServerName() const
{
	return (this->_serverName);
}

void Location::setRoot(std::string rootPath)
{
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

void Location::addIndex(std::string index)
{
	this->_index.push_back(index);
}

void Location::addAllowMethods(std::string method)
{
	this->_allowMethods.push_back(method);
}

void Location::addCgiPath(std::string cgiPath)
{
	_cgiPath.push_back(cgiPath);
}

void Location::addCgiExtension(std::string cgiExtension)
{
	_cgiExtension.push_back(cgiExtension);
}

void Location::setAutoIndex(bool autoIndex)
{
	this->_autoIndex = autoIndex;
}

void Location::setErrorPage(int errorCode, std::string errorPage)
{
	this->_errorPage[errorCode] = errorPage;
}

void Location::setTimeout(size_t timeout)
{
	this->_timeout = timeout;
}

void Location::setRedirectURL(std::string url, int code)
{
	_redirectURL = url;
	_redirect = true;
	_redirectCode = code;
}

/* ************************************************************************** */
/* ------------------------------- METHODS ---------------------------------- */
/* ************************************************************************** */

bool Location::_checkMethod(std::string method)
{
	for (std::vector<std::string>::iterator it = _allowMethods.begin(); it != _allowMethods.end(); it++)
		if (*it == method)
			return (true);
	return (false);
}

Response* Location::_errorResponse(const std::string& error, int code, Request& request)
{
	if (_errorPage.find(code) != _errorPage.end() && (access((_serverRoot + _errorPage[code]).c_str(), F_OK) == 0))
	{
		request.setPath(_serverRoot + _errorPage[code]);
		return (new Response(error, request, _mimeTypes));
	}
	else
		return (new Response(error, request));
}

Response* Location::checkRequest(Request& request)
{
	try
	{
		if (_redirect)
		{
			if (_redirectCode == 301)
				return (new Response("301 Moved Permanently\r\nLocation: " + _redirectURL, "301 Moved Permanently", request.getHttpVersion()));
			else if (_redirectCode == 302)
				return (new Response("302 Found\r\nLocation: " + _redirectURL, "302 Found", request.getHttpVersion()));
		}
		std::string	fullPath = _rootPath + request.getPath();
		struct stat statbuf;

		if (!_checkMethod(request.getMethod()))
		{
			return (_errorResponse("403 Forbidden", 403, request));
		}

		if (request.getHeader().find("Content-Type: multipart/form-data") != std::string::npos)
		{
			if (request.createFileFromData(_rootPath + request.getPath()))
				return (new Response("200 OK", "File Upload", request.getHttpVersion()));
			return (_errorResponse("500 Internal Server Error", 500, request));
		}
		
		for (size_t i = 0; i < fullPath.size(); i++)
		{
			if (fullPath[i] == '%' && fullPath[i + 1] == '2' && fullPath[i + 2] == '0')
			{
				fullPath[i] = ' ';
				fullPath.erase(i + 1, 2);
			}
		}
		stat(fullPath.c_str(), &statbuf);
		if (access(fullPath.c_str(),F_OK))
		{
			return (_errorResponse("404 Not Found", 404, request));
		}
		if (access(fullPath.c_str(),R_OK))
		{
			return (_errorResponse("403 Forbidden", 403, request));
		}
		if (statbuf.st_mode & S_IFDIR)
		{
			for (std::vector<std::string>::const_iterator it = _index.begin(); it != _index.end(); it++)
			{
				fullPath = _rootPath + request.getPath() + (*it);
				if (access(fullPath.c_str(), F_OK) == 0)
				{
					request.setPath(_rootPath + request.getPath() + (*it));
					try
					{
						Response *response = cgiHandler(request, this);
						
						return (response);
					}
					catch(const Cgi::CgiNotCgiException& e)
					{
						if (_redirect)
						{
							return (redirectHandler(this, request));
						}
						return (new Response("200 OK", request, _mimeTypes));
					}
					catch(const Cgi::CgiPathException& e)
					{
						if (_redirect)
						{
							return (redirectHandler(this, request));
						}
						return (new Response("200 OK", request, _mimeTypes));
					}
					catch(const Cgi::CgiEnvExtException& e)
					{
						if (_redirect)
							return (redirectHandler(this, request));
						return (new Response("200 OK", request, _mimeTypes));
					}
				}
				else if (errno == EACCES)
				{
					return (_errorResponse("403 Forbidden", 403, request));
				}
			}
			if (_autoIndex)
			{
				std::string autoIndex = autoIndexGenerator(_rootPath, request.getPath(), _uri);
				if (_redirect)
					return (cgiRedirectHandler(this, autoIndex, request.getHttpVersion()));
				return (new Response("200 OK", autoIndex, request.getHttpVersion()));
			}
			else
			{
				return (_errorResponse("403 Forbidden", 403, request));
			}
		}
		if (statbuf.st_mode & S_IFREG)
		{
			request.setPath(fullPath);
			try
			{
				Response *response = cgiHandler(request, this);
				return (response);
			}
			catch(const Cgi::CgiNotCgiException& e)
			{
				if (_redirect)
					return (redirectHandler(this, request));
				return (new Response("200 OK", request, _mimeTypes));
			}
			catch(const Cgi::CgiPathException& e)
			{
				if (_redirect)
				{
					return (redirectHandler(this, request));
				}
				return (new Response("200 OK", request, _mimeTypes));
			}
			catch(const Cgi::CgiEnvExtException& e)
			{
				if (_redirect)
					return (redirectHandler(this, request));
				return (new Response("200 OK", request, _mimeTypes));
			}
		}
		return NULL;
	}catch (const std::exception &e)
	{
		std::cerr << e.what() << '\n';
		return (_errorResponse("500 Internal Server Error", 500, request));
	}
}