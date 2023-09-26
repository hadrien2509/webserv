/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Config.cpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/24 22:22:14 by hgeissle          #+#    #+#             */
/*   Updated: 2023/09/26 16:47:52 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

void Config::_parseListen(std::istringstream &ss)
{
	std::string port;
	ss >> port;
	std::cout << "Port : " << port << std::endl;
}

void Config::_parseServerName(std::istringstream &ss)
{
	std::string serverName;
	ss >> serverName;
	std::cout << "Server name : " << serverName << std::endl;
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

void Config::_parseServer()
{
	std::string line, type;
	while (std::getline(_configFile, line))
	{
		line = _ignoreComments(line);
		std::istringstream ss(line);
		if (ss.eof())
			continue ;
		ss >> type;
		// if (type == "location")
		// 	_parseLocation();
		if (type == "server")
			throw std::runtime_error("Server block inside server block");
		else if (type == "listen")
			_parseListen(ss);
		else if (type == "server_name")
			_parseServerName(ss);
		else if (type == "}")
			return ;
		else
			throw std::runtime_error("Unknown type in configuration file");
	}
}

void Config::_parseLocation()
{
	
}

void Config::_openConfig(const std::string &input)
{
	_configFile.open(input);
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
			_parseServer();
		else
			throw std::runtime_error("Unknown type in configuration file");
	}
}

Config::~Config()
{
	_configFile.close();
}