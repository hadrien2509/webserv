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
        int _port;
        std::string _host;
        std::string _server_name;
        std::string _error_page;
        std::string _root;
        std::string _index;
        std::string _cgi_path;
        std::string _cgi_extension;
};

#endif