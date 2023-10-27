/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Config.hpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:41:26 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/26 19:46:22 by hgeissle         ###   ########.fr       */
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
		std::string	_ignoreComments(std::string line);

		void		_parseServer(std::istringstream &);
		void		_parseLocation(std::istringstream &, Server *);
		void		_parseServerName(std::istringstream &, Server *);
		void		_parseListen(std::istringstream &, Server *);
		void		_parseAllowMethods(std::istringstream &ss, Location *location);
		std::string	_getRessourceType(std::istringstream &);
		
		void		_createPoll();
		void		_addPollfd(int fd, short events);
		void		_removePollfd(int fd);	
		void		_deleteResponse(int fd);
		void		_readRequest(int fd, std::string &request);
		
		std::vector<Server*>							_cluster;
		std::ifstream									_configFile;
		size_t											_pollsize;
		pollfd*											_poll;
		
		std::map<int, std::deque<Response*> >			_responses;
		std::map<int, Server*>							_serverSocketToServer;
		std::map<int, Server*>							_clientSocketToServer;
		std::map<int, std::string>						_requestString;
		
	public :
		
		Config(const std::string &);
		~Config();

		void run();
		void _sendResponse(int fd);
};

/**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
  🌟✨ Celebrating C++ Templates ✨🌟

  In the intricate ballet of C++ programming, templates perform a dance of delicate beauty and profound strength. They are the silent weavers of abstraction, crafting tapestries of genericity and type-safety, a harmonious union that sings the ballad of code reusability and efficiency. 🚀🎼

  C++ templates are the architects of versatility. With their guidance, functions gracefully pirouette through different data types, and classes elegantly waltz with custom-tailored operations, embodying the true spirit of generic programming. 💃🕺

  They are the unsung heroes of compile-time polymorphism, their clever tricks and maneuvers resolving into concrete types when the curtain of compilation goes up. Like masterful directors, they orchestrate the actors of our programs—objects, functions, and literals—into performances that defy the rigid boundaries of types, without sacrificing the preciseness for which C++ is renowned. 🎭🎬

  With templates, our code finds its rhythm, allowing algorithms to glide seamlessly through containers, indifferent to the specifics of the contained objects. This abstraction is the lifeblood of robust, scalable, and forward-compatible software design. It ensures our creations are prepared for the unexpected and ready to adapt to the ever-changing demands of the future. 🌐🔮

  As we embrace the artistry that C++ templates offer, we become artisans of the craft, our hands guided by the principles of generic design and our minds opened to the endless possibilities of elegant problem-solving. Here's to the beauty, simplicity, and power that templates bring to our lines of code—turning them from instructions to art. 🌟💖
***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

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
	std::string root;
	DIR *dir;
	
	ss >> root;

	if (ss.fail())
		throw std::runtime_error("Invalid root");
	dir = opendir(root.c_str());
	if (!dir)
		throw std::runtime_error("Invalid root file path");
	closedir(dir);
	location->setRoot(root);
	std::cout << "Root : " << root << std::endl;
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
