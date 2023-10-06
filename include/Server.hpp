#ifndef SERVER_HPP
# define SERVER_HPP

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
		void	setRoot(DIR * root);
		void	addIndex(std::string index);
		void	setErrorPage(std::string errorPage);
		void	setCgiPath(std::string cgi_path);
		void	setCgiExtension(std::string cgi_extension);
		void	addPort(int port);
		void	addLocation(std::string ressourceType, Location *location);

    private:
		std::vector<int> 					_ports;
		std::string							_serverName;
		std::map<std::string,Location*>		_locations;
		std::string							_host;
		DIR*								_root;
		std::vector<std::string>			_index;
		std::string							_errorPage;

        std::string 						_cgi_path;  //needed here?
        std::string 						_cgi_extension;
};	

#endif