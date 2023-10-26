/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Config.hpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:41:26 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/26 14:51:10 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef CONFIG_HPP
# define CONFIG_HPP

# include <iostream>
# include <fstream>
# include <sstream>
# include <string>
# include <vector>
# include <algorithm>
# include <stack>
# include <map>
# include <cstdlib>
# include <dirent.h>
# include <sys/socket.h> // For socket functions
# include <netinet/in.h> // For sockaddr_in
# include <iostream> // For cout
# include <unistd.h> // For read
# include <string.h> // For memset
# include <poll.h> // For poll

# include "Location.hpp"
# include "Server.hpp"
# include "Request.hpp"
# include "Cgi.hpp"
# include "Response.hpp"

class Config
{
	private:
	
		void		_openConfig(const std::string &);
		
		void		_parseServer(std::istringstream &);
		void		_parseLocation(std::istringstream &, Server *);
		void		_parseServerName(std::istringstream &, Server *);
		void		_parseListen(std::istringstream &, Server *);

		void		_parseAllowMethods(std::istringstream &ss, Location *location);
		
		std::string	_getRessourceType(std::istringstream &);
		
		void		_createPoll();
		void		_addPollfd(int fd, short events);
		void		_removePollfd(int fd);
		
		void										_deleteResponse(int fd);
		
		std::string					_ignoreComments(std::string line);
		std::vector<Server*>		_cluster;
		std::ifstream				_configFile;
		size_t						_pollsize;
		pollfd*						_poll;
		std::map<int, std::deque<Response*> >			_responses;
		
		std::map<int, Server*>		_serverSocketToServer;
		std::map<int, Server*>		_clientSocketToServer;
		std::map<int, Response*>	_clientSocketToResponse;
		
	public :

		void run();

		Config(const std::string &);
		~Config();
		Config &operator=(const Config &copy);
		void _sendResponse(int fd);

		
};

template<typename T>
void	_parseCgiPath(std::istringstream &ss, T* server)
{
	std::string path;
	while (ss >> path)
		server->addCgiPath(path);
}

template<typename T>
void	_parseCgiExt(std::istringstream &ss, T* server)
{
	std::string extension;
	while (ss >> extension)	
		server->addCgiExtension(extension);
}

template<typename T>
void _parseClientMaxBodySize(std::istringstream &ss, T* server)
{
	int	maxBodySize;
	
	ss >> maxBodySize;
	if (ss.fail())
		throw std::runtime_error("Invalid max body size");
	server->setMaxBodySize(maxBodySize);
}

template<typename T>
void _parseErrorPage(std::istringstream &ss, T* server)
{
	std::string errorPage;
	int			errorCode;

	ss >> errorCode >> errorPage ;
	server->setErrorPage(errorCode, errorPage);
}

template<typename T>
void _parseAutoIndex(std::istringstream &ss, T* location)
{
	std::string		tmp;
	
	ss >> tmp;
	if (tmp == "on")
		location->setAutoIndex(true);
	else if (tmp == "off")
		location->setAutoIndex(false);
}

template<typename T>
void _parseRoot(std::istringstream &ss, T* location)
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

template<typename T>
void _parseIndex(std::istringstream &ss, T*	location)
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

template<typename T> Response *cgiHandler(Request & req, T *serv)
{
	Cgi cgi(serv->getCgiExtension(), serv->getCgiPath(), req.getPath(), req.getQuerryString(), req.getMethod());

	try
	{
		return (new Response("200 OK", cgi.run(), req.getHttpVersion()));
	}
	catch(const Cgi::CgiFileException& e)
	{
		// res->setStatus("404 Not Found");
		throw Cgi::CgiFileException();
	}
	catch(const Cgi::CgiNotCgiException& e)
	{
		// delete res;
		throw Cgi::CgiNotCgiException();
	}
	catch(const std::exception& e)
	{
		// std::cerr << e.what() << '\n';
		// delete res;
		throw Cgi::CgiException();
	}
	// std::cerr << "Response: " << res->getStatus() << std::endl;
	// return (NULL);
}

#endif
