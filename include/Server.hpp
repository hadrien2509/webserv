#ifndef SERVER_HPP
# define SERVER_HPP

# include "Config.hpp"

class Location;

class Request;

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
		void	addPort(int port);
		void	addLocation(std::string ressourceType, Location *location);

		const int&			getPort() const;
		const std::string&	getServerName() const;
		DIR*				getRoot() const;
		std::string			getRootPath() const;
		const std::vector<std::string>&	getIndex() const;
		const std::map<std::string,Location*>&	getLocations() const;
		const std::string&	getRessourcePath() const;
		
		const std::vector<std::string>&	getCgiExtension() const;
		const std::vector<std::string>&	getCgiPath() const;
		void				openRoot();
		int					checkRequest(Request &request);

		const std::string&		cgiHandler();

    private:
		std::vector<int> 					_ports;
		std::string							_serverName;
		std::map<std::string,Location*>		_locations;
		std::string							_host;
		DIR*								_root;
		std::string							_rootPath;
		std::vector<std::string>			_index;
		bool								_autoIndex;
		std::map<int, std::string>			_errorPage;
		std::string							_allowMethods;
		std::string							_ressourcePath;

        std::vector<std::string> 			_cgiPath;  //needed here?
        std::vector<std::string> 			_cgiExtension;
};

#endif
