/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Config.cpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/24 22:22:14 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/12 13:34:21 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

void Config::_parseListen(std::istringstream &ss, Server *server)
{
	int	port;
	ss >> port;
	if (ss.fail())
		throw std::runtime_error("Invalid port");
	server->addPort(port);
	std::cout << "Port : " << port << std::endl;
}

void Config::_parseServerName(std::istringstream &ss, Server *server)
{
	std::string _serverName;

	ss >> _serverName;
	server->setServerName(_serverName);
	std::cout << "Server name : " << _serverName << std::endl;
}

void Config::_parseErrorPage(std::istringstream &ss, Server *server)
{
	std::string errorPage;
	int			errorCode;

	ss >> errorCode >> errorPage ;
	server->setErrorPage(errorCode, errorPage);
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

	std::string line, type;
	while (std::getline(_configFile, line))
	{
		line = _ignoreComments(line);
		std::istringstream ss(line);
		if (ss.eof())
			continue ;
		ss >> type;
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
		else if (type == "}")
			return ;
		else
			throw std::runtime_error("Unknown type in configuration file");
	}
}

void Config::_parseIndex(std::istringstream &ss, Location *location)
{
	std::string _index;

	while (ss >> _index)
	{
		if (ss.fail())
			throw std::runtime_error("Invalid index");
		location->addIndex(_index);
		std::cout << "Index : " << _index << std::endl;
	}
}

void Config::_parseIndex(std::istringstream &ss, Server *server)
{
	std::string _index;

	while (ss >> _index)
	{
		if (ss.fail())
			throw std::runtime_error("Invalid index");
		server->addIndex(_index);
		std::cout << "Index : " << _index << std::endl;
	}
}

void Config::_parseRoot(std::istringstream &ss, Location *location)
{
	std::string _root;
	DIR *dir;
	
	ss >> _root;

	if (ss.fail())
		throw std::runtime_error("Invalid root");
	dir = opendir(_root.c_str());
	if (!dir)
		throw std::runtime_error("Invalid root file path");
	location->setRoot(dir, _root);
	std::cout << "Root : " << _root << std::endl;
}

void Config::_parseRoot(std::istringstream &ss, Server *server)
{
	std::string _root;
	DIR *dir;
	
	ss >> _root;

	if (ss.fail())
		throw std::runtime_error("Invalid root");
	dir = opendir(_root.c_str());
	if (!dir)
		throw std::runtime_error("Invalid root file path");
	server->setRoot(dir, _root);
	std::cout << "Root : " << _root << std::endl;
}

std::string Config::_getRessourceType(std::istringstream &ss)  //add things here!!
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

	Location *location = new Location;
	server->addLocation(ressourceType, location);

	std::string line, type;
	while (std::getline(_configFile, line))
	{
		line = _ignoreComments(line);
		std::istringstream ss(line);
		if (ss.eof())
			continue ;
		ss >> type;
		if (type == "location")
			throw std::runtime_error("Location block inside location block");
		else if (type == "root")
			_parseRoot(ss, location);
		else if (type == "index")
			_parseIndex(ss, location);
		// else if (type == "autoindex")
		// 	_parseAutoindex(ss, location);
		// else if (type == "error_page")
		// 	_parseErrorPage(ss, location);
		// else if (type == "client_max_body_size")
		// 	_parseClientMaxBodySize(ss, location);
		// else if (type == "allow_methods")
		// 	_parseAllowMethods(ss, location);
		// else if (type == "cgi")
		// 	_parseCgi(ss, location);
		else if (type == "}")
			return ;
		else
			throw std::runtime_error("Unknown type in configuration file");
	}
}

void Config::_openConfig(const std::string &input)
{
	_configFile.open(input.c_str());
	if (!_configFile.is_open())
		throw std::runtime_error("Failed to open configuration file");
}

Config::Config(const std::string &input)
{
	_openConfig(input);
	std::string line, type;
	while (std::getline(_configFile, line))
	{
		line = _ignoreComments(line);
		std::istringstream ss(line);
		if (ss.eof())
			continue;
		ss >> type;
		if (type == "server")
			_parseServer(ss);
		else
			throw std::runtime_error("Unknown type in configuration file");
	}
}

Config::~Config()
{
	_configFile.close();
	for (std::vector<Server*>::iterator it = _cluster.begin(); it != _cluster.end(); it++)
		delete (*it);
}
