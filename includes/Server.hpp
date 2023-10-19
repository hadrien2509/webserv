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

# include "Request.hpp"
# include "Response.hpp"
# include "Location.hpp"
# include "Config.hpp"

class Server
{
    public:
        Server();
        ~Server();
        Server(const Server &copy);
        Server &operator=(const Server &copy);

		void	setServerName(std::string serverName);
		void	setHost(std::string host);
		void	setRoot(DIR * root, std::string rootPath);
		void	addIndex(std::string index);
		void	setErrorPage(int errorCode, std::string errorPage);
		void	setCgiPath(std::vector<std::string> cgi_path);
		void	setCgiExtension(std::vector<std::string> cgi_extension);

		void	addCgiExtension(std::string extension);
		void	addCgiPath(std::string path);
		void	addPort(int port);
//		void	addLocation(std::string ressourceType, Location *location);
		void	addLocation(Location *location);

		const std::string&							getServerName() const;
		DIR*										getRoot() const;
		const std::string&							getRootPath() const;
		const std::vector<std::string>&				getIndex() const;
		//const std::map<std::string,Location*>&		getLocations() const;
		const std::vector<Location*>				getLocations() const;
		const std::string&							getRessourcePath() const;
		const std::map<int, std::string>&			getErrorPage() const;
		const std::string&							getHost() const;
		const std::vector<std::string>&				getAllowMethods() const;
		const bool&									getAutoIndex() const;
		const std::map<std::string, std::string>&	getMimeTypes() const;
		const std::vector<struct pollfd>&			getPollfds() const;
		Response*									getResponse() const;
		void										deleteResponse();
		void										addResponse(Response *response);
		
		const std::vector<std::string>&				getCgiExtension() const;
		const std::vector<std::string>&				getCgiPath() const;
		void						openRoot();
		Response*					checkRequest(Request &request);

		Location*					checkLocation(Request &request);
		

    private:
		std::vector<struct pollfd>			_pollfds;
		std::string							_serverName;
		//std::map<std::string,Location*>	_locations;
		std::vector<Location*>				_locations;
		std::string							_host;
		DIR*								_root;
		std::string							_rootPath;
		std::vector<std::string>			_index;
		bool								_autoIndex;
		std::map<int, std::string>			_errorPage;
		std::vector<std::string>			_allowMethods;
		std::string							_ressourcePath;
		std::stack<Response*>				_responses;

	    std::map<std::string, std::string>	_mimeTypes;

        std::vector<std::string> 			_cgiPath;  //needed here?
        std::vector<std::string> 			_cgiExtension;
		Location* checkPathLocation(Request& request);
		Location* checkExtensionLocation(Request& request);
};

#endif
