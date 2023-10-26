/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.hpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:20:40 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/26 19:31:26 by hgeissle         ###   ########.fr       */
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
		std::string							_rootPath;
		bool								_autoIndex;
		std::vector<std::string>			_allowMethods;
		std::vector<std::string>			_cgiExtension;
		std::vector<std::string>			_cgiPath;
		std::map<std::string, std::string>	_mimeTypes;
		std::map<int, std::string>			_errorPage;
		std::string							_uri;
		
	public :
		Location(Server*);
		Location(const Location &);
		~Location();
		Location &operator=(const Location &);

		void			setRoot(std::string);
		void			setUri(std::string);
		void			addIndex(std::string);
		void			setErrorPage(int, std::string);
		void			addAllowMethods(std::string);
		void			addCgiExtension(std::string extension);
		void			addCgiPath(std::string path);
		bool 			checkMethod(std::string method);
		void			setAutoIndex(bool);

		std::string									getRootPath() const;
		const std::vector<std::string>&				getIndex() const;
		const bool&									getAutoIndex() const;
		const std::vector<std::string>&				getAllowMethods() const;
		const std::vector<std::string>&				getCgiExtension() const;
		const std::vector<std::string>&				getCgiPath() const;
		const std::map<std::string, std::string> 	getMimeTypes() const;
		const std::string&							getUri() const;

		Response*		checkRequest(Request& request);
};

# include "Server.hpp"

#endif