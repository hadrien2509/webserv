/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Server.cpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 14:09:10 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/14 00:57:43 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Server.hpp"

Server::Server() : _autoIndex(false)
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

const std::vector<struct pollfd>&	Server::getPollfds() const
{
	return (_pollfds);
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
	// Listen to port 80 on any address
	sockaddr_in sockaddr;
	sockaddr.sin_family = AF_INET;
	sockaddr.sin_addr.s_addr = INADDR_ANY;
	std::cout << port << std::endl;
	sockaddr.sin_port = htons(port); // htons is necessary to convert a number to
								   // network byte order
	if (bind(sockfd, (struct sockaddr *)&sockaddr, sizeof(sockaddr)) < 0)
		throw std::runtime_error("Failed to bind to port. errno: ");

	// Start listening. Hold at most 10 connections in the queue
	if (listen(sockfd, 10) < 0)
		throw std::runtime_error("Failed to listen on socket. errno: ");
	
	struct pollfd poll_fd;
	poll_fd.fd = sockfd;
	poll_fd.events = POLLIN;

	_pollfds.push_back(poll_fd);
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

const std::string&		Server::getRootPath() const
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

Location *Server::checkLocation(Request &request)
{
    std::string bestMatch = "";
	Location *location = NULL;
	std::map<std::string, Location*>::const_iterator it = _locations.begin();
    while (it != _locations.end()) {
        if (request.getPath().find(it->first) == 0 && it->first.length() > bestMatch.length()) {
			bestMatch = it->first;
            location = it->second;
        }
        ++it;
    }
    return (location);
}

Response* Server::checkRequest(Request& request)
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