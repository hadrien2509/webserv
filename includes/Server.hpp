#ifndef SERVER_HPP
# define SERVER_HPP

# include <iostream>
# include <string>
# include <vector>
# include <map>
# include <dirent.h>
# include <stack>
# include <sys/socket.h>
# include <netinet/in.h>
# include <poll.h>
# include <unistd.h>
# include <sys/types.h>
# include <sys/stat.h>
# include <errno.h>

# include "Request.hpp"
# include "Response.hpp"
# include "Location.hpp"
# include "Config.hpp"

class Server
{
    private:
		void		_initMimeTypes();
		Response*	_errorResponse(const std::string &response, int code, Request &request);

		std::vector<struct pollfd>			_pollfds;
		std::string							_serverName;
		std::vector<Location*>				_locations;
		std::string							_host;
		std::string							_rootPath;
		std::vector<std::string>			_index;
		bool								_autoIndex;
		std::map<int, std::string>			_errorPage;
		std::vector<std::string>			_allowMethods;
		std::string							_ressourcePath;
		size_t								_maxBodySize;

	    std::map<std::string, std::string>	_mimeTypes;

        std::vector<std::string> 			_cgiPath;
        std::vector<std::string> 			_cgiExtension;
		size_t 								_timeout;

    public:
        Server();
        ~Server();

		void	setServerName(std::string serverName);
		void	setHost(std::string host);
		void	setRoot(std::string rootPath);
		void	addIndex(std::string index);
		void	setErrorPage(int errorCode, std::string errorPage);
		void	setCgiPath(std::vector<std::string> cgi_path);
		void	setCgiExtension(std::vector<std::string> cgi_extension);
		void	setAutoIndex(bool autoIndex);
		void	setMaxBodySize(size_t maxBodySize);
		void	addCgiExtension(std::string extension);
		void	addCgiPath(std::string path);
		void	addPort(int port);
		void	addLocation(Location *location);
		void	setTimeout(size_t timeout);

		const std::string&							getServerName() const;
		const std::string&							getRootPath() const;
		const std::vector<std::string>&				getIndex() const;
		const std::vector<Location*>				getLocations() const;
		const std::string&							getRessourcePath() const;
		const std::map<int, std::string>&			getErrorPage() const;
		const std::string&							getHost() const;
		const std::vector<std::string>&				getAllowMethods() const;
		const bool&									getAutoIndex() const;
		const std::map<std::string, std::string>&	getMimeTypes() const;
		const std::vector<struct pollfd>&			getPollfds() const;
		const size_t&								getMaxBodySize() const;
		
		const std::vector<std::string>&				getCgiExtension() const;
		const std::vector<std::string>&				getCgiPath() const;
		const size_t&								getTimeout() const;

		Response*					checkRequest(Request &request);
		Location*					checkLocation(Request &request);

};

std::string autoIndexGenerator(const std::string& root, const std::string& path);

#endif
