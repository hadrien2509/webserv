/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Config.hpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:41:26 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/08 14:00:35 by jusilanc         ###   ########.fr       */
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
# include <dirent.h>

# include "Server.hpp"
# include "Location.hpp"

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
		
		void		_parseRoot(std::istringstream &, Location *);
		void		_parseIndex(std::istringstream &, Location *);
		
		// void		_parseErrorPage(std::istringstream &, Server *);
		// void		_parseAutoIndex(std::istringstream &, Location *);
		std::string	_getRessourceType(std::istringstream &);
		
		std::string				_ignoreComments(std::string line);
		std::vector<Server*>	_cluster;
		std::ifstream			_configFile;
		
	public :
		std::vector<int>	getPorts() const;
		std::string 		getServerName() const;

		Config();
		Config(const std::string &);
		~Config();
    	Config(const Config &copy);
		Config &operator=(const Config &copy);
};

#endif