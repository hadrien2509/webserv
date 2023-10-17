/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Config.hpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:41:26 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/17 18:38:37 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef CONFIG_HPP
# define CONFIG_HPP

# include <iostream>
# include <fstream>
# include <sstream>
# include <string>
# include <vector>
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

class Server;

class Config
{
	private:
	
		void		_openConfig(const std::string &);
		
		void		_parseServer(std::istringstream &);
		void		_parseLocation(std::istringstream &, Server *);
		void		_parseServerName(std::istringstream &, Server *);
		void		_parseListen(std::istringstream &, Server *);
		void		_parseRoot(std::istringstream &, Server *);
		void		_parseIndex(std::istringstream &, Server *);
		void		_parseErrorPage(std::istringstream &, Server *);
		void		_parseCgiPath(std::istringstream &, Server *);
		void		_parseCgiExt(std::istringstream &, Server *);
		
		void		_parseRoot(std::istringstream &, Location *);
		void		_parseIndex(std::istringstream &, Location *);
		
		// void		_parseErrorPage(std::istringstream &, Server *);
		// void		_parseAutoIndex(std::istringstream &, Location *);
		std::string	_getRessourceType(std::istringstream &);
		
		void		_createPoll();
		void		_addPollfd(int fd, short events);
		
		std::string					_ignoreComments(std::string line);
		std::vector<Server*>		_cluster;
		std::ifstream				_configFile;
		size_t						_pollsize;
		pollfd*						_poll;
		
		std::map<int, Server*>		_serverSocketToServer;
		std::map<int, Server*>		_clientSocketToServer;
		std::map<int, Response*>	_clientSocketToResponse;
		
	public :
	
		void run();
		
		Config();
		Config(const std::string &);
		~Config();
    	Config(const Config &copy);
		Config &operator=(const Config &copy);
};

#endif