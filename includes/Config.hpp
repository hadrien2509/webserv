/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Config.hpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:41:26 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/21 15:01:51 by jusilanc         ###   ########.fr       */
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
# include "Socket.hpp"

#define BUFFER_SIZE 1024
#define GREEN_BOLD "\033[1;32m"
#define GREEN "\033[32m"
#define DEFAULT "\033[0m"
#define RED_BOLD "\033[1;31m"
#define AMBER "\033[33m"
#define PURPLE_BOLD "\033[1;35m"
#define BLUE "\033[36m"

class Config
{
	private:
	
		void 		_removePolls();
		void 		_initializeFds();
		Socket*		_getSocket(int fd);
		pollfd*		_getPoll(int fd);
		void		_openConfig(const std::string &);
		std::string	_ignoreComments(std::string line);
		void		_parseServer(std::istringstream &);
		void		_parseLocation(std::istringstream &, Server *);
		void		_parseServerName(std::istringstream &, Server *);
		void		_parseListen(std::istringstream &, Server *);
		std::string	_getRessourceType(std::istringstream &);
		void		_createPoll();
		void		_addPoll(int fd, short events);
		void		_endPoll(int fd);
		void		_readRequest(Socket *socket, struct sockaddr_in addr);
		void		_sendResponse(Socket *socket);

		std::vector<Server*>							_cluster;
		std::ifstream									_configFile;
		size_t											_pollsize;
		pollfd*											_poll;
		
		std::map<int, Server*>							_serverSocketToServer;
		std::map<int, Server*>							_clientSocketToServer;
		std::map<int, sockaddr_in>						_clientSocketToServerAddr;
		std::vector<Socket*>							_sockets;
		
	public :
		
		Config(const std::string &);
		~Config();

		void run();
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
void _parseAllowMethods(std::istringstream &ss, T *server)
{
	server->clearAllowMethods();
	std::string method;
	while (ss >> method)
	{
		if (ss.fail())
			throw std::runtime_error("Invalid method");
		if (method == "GET" || method == "POST" || method == "DELETE")
			server->addAllowMethods(method);
	}
}

template<typename T>
void	_parseRedirect(std::istringstream &ss, T* server)
{
	std::string path;
	int			code;

	ss >> code >> path;
	if (ss.fail() || (code != 301 && code != 302))
		throw std::runtime_error("Invalid redirection status code in configuration, use 301 or 302");
	server->setRedirectURL(path, code);
}

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
void	_parseTimeout(std::istringstream &ss, T* server)
{
	size_t timeout;
	
	ss >> timeout;
	if (ss.fail())
		throw std::runtime_error("Invalid timeout");
	server->setTimeout(timeout);
}

template<typename T>
void _parseClientMaxBodySize(std::istringstream &ss, T* server)
{
	size_t	maxBodySize;

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
	}
}

template<typename T>
Response *cgiHandler(Request & req, T *serv)
{
	Cgi cgi(serv->getCgiExtension(), serv->getCgiPath(), req);
	cgi.setTimeOut(serv->getTimeout());
	return (new Response("200 OK", cgi.run(), req.getHttpVersion()));
}

#endif
