/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.hpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:20:40 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/10 14:02:25 by hgeissle         ###   ########.fr       */
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
		Response*	_errorResponse(const std::string &response, int code, Request &request);
		bool 		_checkMethod(std::string method);
		
		std::vector<std::string>			_index;
		std::string							_rootPath;
		std::string							_serverRoot;
		bool								_autoIndex;
		std::vector<std::string>			_allowMethods;
		std::map<std::string, std::string>	_mimeTypes;
		std::map<int, std::string>			_errorPage;
		std::string							_uri;
		std::string							_serverName;

		std::vector<std::string>			_cgiExtension;
		std::vector<std::string>			_cgiPath;
		size_t								_timeout;
		
		std::string							_redirectURL;
		int									_redirectCode;
		bool								_redirect;
		
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
		void			setAutoIndex(bool);
		void			setTimeout(size_t);
		void			setRedirectURL(std::string, int code);
		void			clearAllowMethods();

		std::string									getRootPath() const;
		const std::vector<std::string>&				getIndex() const;
		const bool&									getAutoIndex() const;
		const std::vector<std::string>&				getAllowMethods() const;
		const std::vector<std::string>&				getCgiExtension() const;
		const std::vector<std::string>&				getCgiPath() const;
		const std::map<std::string, std::string> 	getMimeTypes() const;
		const std::string&							getUri() const;
		const size_t&								getTimeout() const;
		const std::string&							getServerName() const;
		
		const std::string&							getRedirectURL() const;
		const bool&									getRedirect() const;
		const int&									getRedirectCode() const;

		Response*		checkRequest(Request& request);
};

# include "Server.hpp"

#endif