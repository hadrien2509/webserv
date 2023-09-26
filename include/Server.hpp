#ifndef SERVER_HPP
# define SERVER_HPP

# include <iostream>
# include <string>

class Server
{
    public:
        Server();
        ~Server();
        Server(const Server &copy);
        Server &operator=(const Server &copy);

    private:
		std::vector<int> 			_ports;
		std::string					_serverName;
		std::vector<Location>		_locations;
		std::string					_host;
		std::string					_root;
		std::vector<std::string>	_index;
		std::string					_errorPage;

        std::string 				_cgi_path;  //needed here?
        std::string 				_cgi_extension;
};

#endif