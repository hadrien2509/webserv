/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Server.cpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 14:09:10 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/22 12:55:27 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Server.hpp"

/* ************************************************************************** */
/* ----------------------- CONSTRUCTOR & DESTRUCTOR --------------------------*/
/* ************************************************************************** */

void Server::_initMimeTypes()
{
	_mimeTypes[".aac"] = "audio/aac";
	_mimeTypes[".abw"] = "application/x-abiword";
	_mimeTypes[".arc"] = "application/octet-stream";
	_mimeTypes[".avi"] = "video/x-msvideo";
	_mimeTypes[".azw"] = "application/vnd.amazon.ebook";
	_mimeTypes[".bin"] = "application/octet-stream";
	_mimeTypes[".bz"] = "application/x-bzip";
	_mimeTypes[".bz2"] = "application/x-bzip2";
	_mimeTypes[".csh"] = "application/x-csh";
	_mimeTypes[".css"] = "text/css";
	_mimeTypes[".csv"] = "text/csv";
	_mimeTypes[".doc"] = "application/msword";
	_mimeTypes[".docx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
	_mimeTypes[".eot"] = "application/vnd.ms-fontobject";
	_mimeTypes[".epub"] = "application/epub+zip";
	_mimeTypes[".gif"] = "image/gif";
	_mimeTypes[".htm"] = "text/html";
	_mimeTypes[".html"] = "text/html";
	_mimeTypes[".ico"] = "image/x-icon";
	_mimeTypes[".ics"] = "text/calendar";
	_mimeTypes[".jar"] = "application/java-archive";
	_mimeTypes[".jpeg"] = "image/jpeg";
	_mimeTypes[".jpg"] = "image/jpeg";
	_mimeTypes[".js"] = "application/javascript";
	_mimeTypes[".json"] = "application/json";
	_mimeTypes[".mid"] = "audio/midi";
	_mimeTypes[".midi"] = "audio/midi";
	_mimeTypes[".mpeg"] = "video/mpeg";
	_mimeTypes[".mpkg"] = "application/vnd.apple.installer+xml";
	_mimeTypes[".odp"] = "application/vnd.oasis.opendocument.presentation";
	_mimeTypes[".ods"] = "application/vnd.oasis.opendocument.spreadsheet";
	_mimeTypes[".odt"] = "application/vnd.oasis.opendocument.text";
	_mimeTypes[".oga"] = "audio/ogg";
	_mimeTypes[".ogv"] = "video/ogg";
	_mimeTypes[".ogx"] = "application/ogg";
	_mimeTypes[".otf"] = "font/otf";
	_mimeTypes[".png"] = "image/png";
	_mimeTypes[".pdf"] = "application/pdf";
	_mimeTypes[".ppt"] = "application/vnd.ms-powerpoint";
	_mimeTypes[".pptx"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
	_mimeTypes[".rar"] = "application/x-rar-compressed";
	_mimeTypes[".rtf"] = "application/rtf";
	_mimeTypes[".sh"] = "application/x-sh";
	_mimeTypes[".svg"] = "image/svg+xml";
	_mimeTypes[".swf"] = "application/x-shockwave-flash";
	_mimeTypes[".tar"] = "application/x-tar";
	_mimeTypes[".tif"] = "image/tiff";
	_mimeTypes[".tiff"] = "image/tiff";
	_mimeTypes[".ts"] = "application/typescript";
	_mimeTypes[".ttf"] = "font/ttf";
	_mimeTypes[".vsd"] = "application/vnd.visio";
	_mimeTypes[".wav"] = "audio/x-wav";
	_mimeTypes[".weba"] = "audio/webm";
	_mimeTypes[".webm"] = "video/webm";
	_mimeTypes[".webp"] = "image/webp";
	_mimeTypes[".woff"] = "font/woff";
	_mimeTypes[".woff2"] = "font/woff2";
	_mimeTypes[".xhtml"] = "application/xhtml+xml";
	_mimeTypes[".xls"] = "application/vnd.ms-excel";
	_mimeTypes[".xlsx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
	_mimeTypes[".xml"] = "application/xml";
	_mimeTypes[".xul"] = "application/vnd.mozilla.xul+xml";
	_mimeTypes[".zip"] = "application/zip";
	_mimeTypes[".3gp"] = "video/3gpp";
	_mimeTypes[".3g2"] = "video/3gpp2";
	_mimeTypes[".7z"] = "application/x-7z-compressed";
}

Server::Server() : _autoIndex(false), _maxBodySize(0), _timeout(100), _nbPorts(0)
{
	_initMimeTypes();
}

Server::~Server()
{
	for (std::vector<Location*>::iterator it = _locations.begin(); it != _locations.end(); it++)
		delete (*it);
}

/* ************************************************************************** */
/* ------------------------------- SETTERS -----------------------------------*/
/* ************************************************************************** */

void	Server::setServerName(std::string serverName)
{
	_serverName = serverName;
}

void	Server::setHost(std::string host)
{
	_host = host;
}

void	Server::setRoot(std::string rootPath)
{
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

void	Server::setMaxBodySize(size_t maxBodySize)
{
	_maxBodySize = maxBodySize;
}


void	Server::addPort(int port)
{
	// Create a socket (IPv4, TCP)
	int sockfd = socket(AF_INET, SOCK_STREAM, 0);
	if (sockfd == -1)
		throw std::runtime_error("Failed to create socket ");


	int optval = 1;
    if (setsockopt(sockfd, SOL_SOCKET, SO_REUSEADDR, &optval, sizeof(optval)) == -1)
	{
		throw std::runtime_error("Failed to set socket options");
	    close(sockfd);
	}

	sockaddr_in sockaddr;
	sockaddr.sin_family = AF_INET;
	sockaddr.sin_addr.s_addr = INADDR_ANY;
	sockaddr.sin_port = htons(port); // htons is necessary to convert a number to network byte order
	if (bind(sockfd, (struct sockaddr *)&sockaddr, sizeof(sockaddr)) < 0)
		throw std::runtime_error("Failed to bind to port.");

	// Start listening. Hold at most 50 connections in the queue
	if (listen(sockfd, 200) < 0)
		throw std::runtime_error("Failed to listen on socket.");
	
	struct pollfd poll_fd;
	poll_fd.fd = sockfd;
	poll_fd.events = POLLIN;

	_pollfds.push_back(poll_fd);
	_nbPorts++;
}

void Server::addLocation(Location *location)
{
	_locations.push_back(location);
}

void Server::setAutoIndex(bool autoIndex)
{
	_autoIndex = autoIndex;
}

void Server::setTimeout(size_t timeout)
{
	_timeout = timeout;
}

void Server::setRedirectURL(std::string url, int code)
{
	_redirectURL = url;
	_redirect = true;
	_redirectCode = code;
}

void Server::addAllowMethods(std::string method)
{
	this->_allowMethods.push_back(method);
}

/* ************************************************************************** */
/* ------------------------------- GETTERS -----------------------------------*/
/* ************************************************************************** */

const std::string&	Server::getServerName() const
{
	return (_serverName);
}

const std::string&		Server::getRootPath() const
{
	return (_rootPath);
}

const std::vector<std::string>&	Server::getIndex() const
{
	return (_index);
}

const std::vector<struct pollfd>&	Server::getPollfds() const
{
	return (_pollfds);
}

const size_t&	Server::getMaxBodySize() const
{
	return (_maxBodySize);
}

const std::vector<std::string>&	Server::getCgiExtension() const
{
	return (_cgiExtension);
}

const std::vector<std::string>&	Server::getCgiPath() const
{
	return (_cgiPath);
}

const size_t&	Server::getTimeout() const
{
	return (_timeout);
}

const std::string&	Server::getHost() const
{
	return (_host);
}

const std::map<std::string, std::string>&	Server::getMimeTypes() const
{
	return (_mimeTypes);
}

const bool& Server::getAutoIndex() const
{
	return (_autoIndex);
}

const std::vector<std::string>&	Server::getAllowMethods() const
{
	return (_allowMethods);
}

const std::vector<Location*>	Server::getLocations() const
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

const std::map<int, std::string>&	Server::getErrorPage() const
{
	return (_errorPage);
}

void Server::addCgiPath(std::string cgiPath)
{
	_cgiPath.push_back(cgiPath);
}

void Server::addCgiExtension(std::string cgiExtension)
{
	_cgiExtension.push_back(cgiExtension);
}

const bool& Server::getRedirect() const
{
	return (_redirect);
}

const std::string&	Server::getRedirectURL() const
{
	return (_redirectURL);
}

const int& Server::getRedirectCode() const
{
	return (_redirectCode);
}
const int& Server::getNumberPorts() const
{
	return (_nbPorts);
}

/* ************************************************************************** */
/* ----------------------------- AUTO-INDEX ----------------------------------*/
/* ************************************************************************** */

std::string autoIndexGenerator(const std::string& root, const std::string& path, const std::string& uri)
{
	std::string	uricopy;

	if (uri[uri.length() - 1] == '/')
		uricopy = uri.substr(0, uri.length() - 1);
	else
		uricopy = uri;
	std::string	fullPath = root + path;
	std::string html = "<html><head><title>Index of " + uricopy + path + "</title></head><body><h1>Index of " + uricopy + path + "</h1><hr><pre>";
	struct dirent *dir;
	DIR *d = opendir(fullPath.c_str());
	if (d)
	{
		while ((dir = readdir(d)) != NULL)
		{
			std::string name = dir->d_name;
			if (path[path.length() - 1] == '/')
				html += "<a href=\"" + uricopy + path + name + "\">" + name + "</a><br>";
			else
				html += "<a href=\"" + uricopy + path + "/" + name + "\">" + name + "</a><br>";
		}
		closedir(d);
	}
	html += "</pre><hr></body></html>";
	return (html);
}

/* ************************************************************************** */
/* ------------------------------- METHODS -----------------------------------*/
/* ************************************************************************** */

bool Server::_checkMethod(std::string method)
{
	for (std::vector<std::string>::iterator it = _allowMethods.begin(); it != _allowMethods.end(); it++)
	{
		if (*it == method)
			return (true);
	}
	return (false);
}

Location* Server::checkLocation(Request& request)
{
    std::string bestMatch = "";
    Location* location = 0;
    const std::vector<Location*>& locations = _locations;
	std::string requestPath = request.getPath();
	std::string originalPath = request.getPath();
    size_t firstSlash = requestPath.find('/', 1);

    if (firstSlash != std::string::npos)
        requestPath = requestPath.substr(0, firstSlash + 1);	
	else if (requestPath.find('.') == std::string::npos)
		requestPath = requestPath + "/";
	for (std::vector<Location*>::const_iterator it = locations.begin(); it != locations.end(); ++it) {
		Location* loc = *it;
		const std::string& locationUri = loc->getUri();
		size_t match = requestPath.find(locationUri);
		if (match != std::string::npos && match == 0 && (locationUri.length() == 1 || locationUri.length() + 1 == requestPath.length())) {
			bestMatch = locationUri;
			location = loc;
		}
    }
	if (!location)
		return (NULL);
	if (location->getUri() != "/")
		request.setPath(originalPath.substr(location->getUri().length()));
	if (originalPath[0] !='/')
  		request.setPath("/" + originalPath);
	return location;
}

Response* Server::errorResponse(const std::string& error, int code, Request* request)
{
	if (!request)
		request = new Request();
	if (_errorPage.find(code) != _errorPage.end() && (access((_rootPath + _errorPage[code]).c_str(), R_OK) == 0))
	{
		request->setPath(_rootPath + "/" + _errorPage[code]);
		return (new Response(error, *request, _mimeTypes));
	}
	else
		return (new Response(error, *request));
}

void	Server::clearAllowMethods()
{
	this->_allowMethods.clear();
}

Response* Server::checkRequest(Request& request)
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
			return (errorResponse("405 Method Not Allowed", 405, &request));
		}

		if (request.getHeader().find("Content-Type: multipart/form-data") != std::string::npos)
		{
			if (request.createFileFromData(_rootPath + request.getPath()))
				return (new Response("200 OK", "File Upload", request.getHttpVersion()));
			return (errorResponse("500 Internal Server Error", 500, &request));
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
			return (errorResponse("404 Not Found", 404, &request));
		}
		if (access(fullPath.c_str(),R_OK))
		{
			return (errorResponse("403 Forbidden", 403, &request));
		}
		if (statbuf.st_mode & S_IFDIR)
		{
			for (std::vector<std::string>::const_iterator it = _index.begin(); it != _index.end(); it++)
			{
				fullPath = _rootPath + request.getPath() + (*it);
				if (access(fullPath.c_str(), R_OK) == 0)
				{
					request.setPath(_rootPath + request.getPath() + (*it));
					try
					{
						Response *response = cgiHandler(request, this);
						return (response);
					}
					catch(const Cgi::CgiNotCgiException& e)
					{
						return (new Response("200 OK", request, _mimeTypes));
					}
					catch(const Cgi::CgiPathException& e)
					{
						return (new Response("200 OK", request, _mimeTypes));
					}
					catch(const Cgi::CgiEnvExtException& e)
					{
						return (new Response("200 OK", request, _mimeTypes));
					}
				}
			}
			if (_autoIndex)
			{
				std::string autoIndex = autoIndexGenerator(_rootPath, request.getPath(), _rootPath);
				return (new Response("200 OK", autoIndex, request.getHttpVersion()));
			}
			else
			{
				return (errorResponse("403 Forbidden", 403, &request));
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
				return (new Response("200 OK", request, _mimeTypes));
			}
			catch(const Cgi::CgiPathException& e)
			{
				return (new Response("200 OK", request, _mimeTypes));
			}
			catch(const Cgi::CgiEnvExtException& e)
			{
				return (new Response("200 OK", request, _mimeTypes));
			}
		}
		return NULL;
	}catch (const std::exception &e)
	{
		std::cerr << e.what() << '\n';
		return (errorResponse("500 Internal Server Error", 500, &request));
	}
}
