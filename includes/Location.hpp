/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.hpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:20:40 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/18 15:43:56 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef LOCATION_HPP
# define LOCATION_HPP

# include <iostream>
# include <string>
# include <vector>
# include <map>
# include <dirent.h>
# include <unistd.h>

# include "Request.hpp"
# include "Response.hpp"

class Server;

class Location
{
	private:
		std::vector<std::string>			_index;
		DIR*								_root;
		std::string							_rootPath;
		bool								_autoIndex;
		std::vector<std::string>			_allowMethods;
		std::vector<std::string>			_cgiExtension;
		std::vector<std::string>			_cgiPath;
		std::map<std::string, std::string>	_mimeTypes;
		std::map<int, std::string>			_errorPage;
		
	public :
		Location();
		Location(Server*);
		Location(const Location &);
		~Location();
		Location &operator=(const Location &);
		
		const DIR*						getRoot() const;
		std::string						getRootPath() const;
		const std::vector<std::string>&	getIndex() const;
		const bool&						getAutoIndex() const;
		const std::vector<std::string>&	getAllowMethods() const;
		const std::vector<std::string>&	getCgiExtension() const;
		const std::vector<std::string>&	getCgiPath() const;
		const std::map<std::string, std::string> getMimeTypes() const;

		void			setRoot(DIR*, std::string);
		void			addIndex(std::string);
		Response*		checkRequest(Request& request);
};

# include "Server.hpp"

#endif