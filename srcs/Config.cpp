/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Config.cpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/24 22:22:14 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/10 13:57:50 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

void Config::_parseListen(std::istringstream &ss, Server *server)
{
	int	port;
	while (ss >> port)
	{
		if (ss.fail())
			throw std::runtime_error("Invalid port");
		server->addPort(port);
		std::cout << "Port : " << port << std::endl;
		std::cout << "URL : http://localhost:" << port << std::endl;
	}
}

void Config::_parseServerName(std::istringstream &ss, Server *server)
{
	std::string _serverName;

	ss >> _serverName;
	server->setServerName(_serverName);
	std::cout << "Server name : " << _serverName << std::endl;
}

std::string Config::_ignoreComments(std::string line) //skip comments and empty lines
{
	std::istringstream ss(line);
	if (ss.eof())
		return line;
	std::getline(ss, line, ';');
	std::istringstream ss2(line);
	if (ss2.eof())
		return line;
	std::getline(ss2, line, '#');
	return line;
}

void Config::_parseServer(std::istringstream &ssold)
{
	std::string	brace;
	ssold >> brace;
	if ((brace != "{") || ssold.fail())
		throw std::runtime_error("Invalid server block");

	Server* server = new Server;
	_cluster.push_back(server);

	std::string line;
	while (std::getline(_configFile, line))
	{
		std::string type;
		line = _ignoreComments(line);
		std::istringstream ss(line);
		if (ss.eof())
			continue ;
		ss >> type;
		if (type.size() == 0)
			continue ;
		if (type == "location")
			_parseLocation(ss, server);
		else if (type == "server")
			throw std::runtime_error("Server block inside server block");
		else if (type == "listen")
			_parseListen(ss, server);
		else if (type == "server_name")
			_parseServerName(ss, server);
		else if (type == "root")
			_parseRoot(ss, server);
		else if (type == "index")
			_parseIndex(ss, server);
		else if (type == "error_page")
			_parseErrorPage(ss, server);
		else if (type == "cgi_path")
			_parseCgiPath(ss, server);
		else if (type == "cgi_ext")
			_parseCgiExt(ss, server);
		else if (type == "allow_methods")
			_parseAllowMethods(ss, server);
		else if (type == "autoindex")
			_parseAutoIndex(ss, server);
		else if (type == "client_max_body_size")
			_parseClientMaxBodySize(ss, server);
		else if (type == "cgi_timeout")
			_parseTimeout(ss,server);
		else if (type == "return")
			_parseRedirect(ss, server);
		else if (type == "}")
			return ;
		else
			throw std::runtime_error("Unknown type in configuration file");
	}
}

std::string Config::_getRessourceType(std::istringstream &ss)
{
	std::string ressourceType;
	ss >> ressourceType;
	if (ss.fail())
		throw std::runtime_error("Invalid ressource type");
	return ressourceType;
}

void Config::_parseLocation(std::istringstream &ss, Server *server)
{
	std::string	ressourceType;
	ressourceType = _getRessourceType(ss);

	Location *location = new Location(server);

	server->addLocation(location);
	location->setUri(ressourceType);
	std::string line;
	while (std::getline(_configFile, line))
	{
		std::string type;
		line = _ignoreComments(line);
		std::istringstream ss(line);
		if (ss.eof())
			continue ;
		ss >> type;
		if (type.size() == 0)
			continue ;
		if (type == "location")
			throw std::runtime_error("Location block inside location block");
		else if (type == "root")
			_parseRoot(ss, location);
		else if (type == "index")
			_parseIndex(ss, location);
		else if (type == "autoindex")
			_parseAutoIndex(ss, location);
		else if (type == "error_page")
			_parseErrorPage(ss, location);
		else if (type == "timeout")
			_parseTimeout(ss, location);
		// else if (type == "client_max_body_size")
		// 	_parseClientMaxBodySize(ss, location);
		else if (type == "allow_methods")
			_parseAllowMethods(ss, location);
		else if (type == "cgi_path")
			_parseCgiPath(ss, location);
		else if (type == "cgi_ext")
			_parseCgiExt(ss, location);
		else if (type == "return")
			_parseRedirect(ss, location);
		else if (type == "}")
			return ;
		else
			throw std::runtime_error("Unknown type in configuration file");
	}
}

void Config::_deleteResponse(int fd)
{
	if (_responses.find(fd) != _responses.end())
	{
		delete _responses[fd].front();
		_responses[fd].pop_front();
		if (_responses[fd].empty())
			_responses.erase(fd);
	}
}

void Config::_openConfig(const std::string &input)
{
	_configFile.open(input.c_str());
	if (!_configFile.is_open())
		throw std::runtime_error("Failed to open configuration file");
}

/* ************************************************************************** */
/* ----------------------- CONSTRUCTOR & DESTRUCTOR ------------------------- */
/* ************************************************************************** */

Config::Config(const std::string &input) : _pollsize(0), _poll(NULL)
{
	_openConfig(input);
	std::string line;
	while (std::getline(_configFile, line))
	{
		std::string type;
		line = _ignoreComments(line);
		std::istringstream ss(line);
		//std::cout << "line config : " << line << std::endl;
		if (ss.eof())
			continue ;
		ss >> type;
		if (type.size() == 0)
			continue ;
		if (type == "server")
			_parseServer(ss);
		else
			throw std::runtime_error("Unknown type in configuration file");
	}
}

Config::~Config()
{
	if (_configFile.is_open())
		_configFile.close();
	for (std::vector<Server*>::iterator it = _cluster.begin(); it != _cluster.end(); it++)
		delete (*it);
	for (std::map<int, std::deque<Response*> >::iterator it = _responses.begin(); it != _responses.end(); it++)
	{
		while (!it->second.empty())
		{
			delete it->second.front();
			it->second.pop_front();
		}
	}
	if (_poll)
		delete [] _poll;
}
