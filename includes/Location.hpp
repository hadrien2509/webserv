/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.hpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:20:40 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/30 16:07:12 by hgeissle         ###   ########.fr       */
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
		Response* _errorResponse(const std::string &response, int code, Request &request);
		
		std::vector<std::string>			_index;
		std::string							_rootPath;
		bool								_autoIndex;
		std::vector<std::string>			_allowMethods;
		std::map<std::string, std::string>	_mimeTypes;
		std::map<int, std::string>			_errorPage;
		std::string							_uri;

		std::vector<std::string>			_cgiExtension;
		std::vector<std::string>			_cgiPath;
		size_t								_timeout;
		
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
		void			setTimeout(size_t);

		std::string									getRootPath() const;
		const std::vector<std::string>&				getIndex() const;
		const bool&									getAutoIndex() const;
		const std::vector<std::string>&				getAllowMethods() const;
		const std::vector<std::string>&				getCgiExtension() const;
		const std::vector<std::string>&				getCgiPath() const;
		const std::map<std::string, std::string> 	getMimeTypes() const;
		const std::string&							getUri() const;
		const size_t&								getTimeout() const;

		Response*		checkRequest(Request& request);
};

# include "Server.hpp"

#endif