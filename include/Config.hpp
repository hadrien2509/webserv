/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Config.hpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:41:26 by hgeissle          #+#    #+#             */
/*   Updated: 2023/09/26 17:34:16 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef CONFIG_HPP
# define CONFIG_HPP

# include <iostream>
# include <fstream>
# include <sstream>
# include <string>
# include <vector>
# include "Server.hpp"
# include "Location.hpp"

class Config
{
	private:
	
		void		_parseServer();
		void		_parseLocation();
		void		_parseServerName(std::istringstream &);
		void		_parseListen(std::istringstream &);
		void		_openConfig(const std::string &);
		std::string	_ignoreComments(std::string line);
		//std::vector<Server> _cluster;
		std::ifstream _configFile;
		
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