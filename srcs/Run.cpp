/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/14 18:54:46 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"
#include <unistd.h>
#include <fcntl.h>

void Config::_readRequest(Socket *socket, struct sockaddr_in addr) {
    char buffer[BUFFER_SIZE];
    bool requestComplete = false;
    memset(buffer, 0, BUFFER_SIZE);

    while (!requestComplete) {
        int ret = recv(socket->getFd(), buffer, BUFFER_SIZE - 1, 0);

        if (ret == 0) {
            std::cout << "Socket disconnected" << std::endl;
            _endPoll(socket->getFd());
            return;
        }

        if (ret == -1) {
            _endPoll(socket->getFd());
            return;
        }

        if (socket->getRequest() == NULL) {
            try {
                Server *server = _clientSocketToServer[socket->getFd()];
                socket->setRequest(new Request(buffer, ret, socket->getFd(), server, addr));
            } catch (std::exception &e) {
                std::cerr << "Error : " << e.what() << std::endl;
                socket->setResponse(new Response("413", "Payload Too Large", "HTTP/1.1"));
                _sendResponse(socket);
                _endPoll(socket->getFd());
                return;
            }
        } else
            socket->getRequest()->appendRequest(buffer, ret);

        size_t pos = socket->getRequest()->getStrRequest().find("\r\n\r\n");
        if (pos != std::string::npos) {
            requestComplete = true;
        }
    }
}

void Config::_sendResponse(Socket *socket) {
    Response *response = socket->getResponse();
    if (!response)
        return;
    if (response->getStatus() == "200 OK")
        std::cout << GREEN;
    else
        std::cout << RED_BOLD;

    std::cout << "Response : status <" << response->getStatus() << ">" << DEFAULT << std::endl;

    int ret = send(socket->getFd(), response->get().c_str(), response->get().size(), 0);

    if (ret == -1) {
        _endPoll(socket->getFd());
        return;
    }

    socket->deleteResponse();
}

void Config::_createPoll()
{
	for (size_t i = 0; i < _cluster.size(); i++)
		_pollsize += _cluster[i]->getPollfds().size();
	_poll = new pollfd[_pollsize];
  size_t currentIndex = 0;
  for (size_t i = 0; i < _cluster.size(); i++)
  {
    std::vector<struct pollfd> temp = _cluster[i]->getPollfds();
  	for (size_t j = 0; j < temp.size(); j++)
	{
      Socket *socket = new Socket;
      socket->setFd(temp[j].fd);
      _sockets.push_back(socket);
      _poll[currentIndex++] = temp[j];
      _serverSocketToServer[temp[j].fd] = _cluster[i];
    }
  }
}

void Config::_endPoll(int fd)
{
	_clientSocketToServer.erase(fd);
	_clientSocketToServerAddr.erase(fd);
	for (size_t i = 0; i < _pollsize; i++)
	{
		if (_poll[i].fd == fd)
		{
			for (size_t j = i; j < _pollsize - 1; j++)
			{
				_poll[j] = _poll[j + 1];
			}
			_pollsize--;

			struct pollfd *newPoll = new struct pollfd[_pollsize];
			for (size_t j = 0; j < _pollsize; j++)
			{
				newPoll[j] = _poll[j];
			}
			delete[] _poll;
			_poll = newPoll;
			break;
		}
	}
	Socket *socket = _getSocket(fd);
	_sockets.erase(std::find(_sockets.begin(), _sockets.end(), socket));
	delete socket;
}

void Config::_addPoll(int fd, short events)
{
	for (size_t i = 0; i < _pollsize; i++)
		if (_poll[i].fd == fd)
			return;
	struct pollfd *newPoll = new struct pollfd[_pollsize + 1];
	for (size_t i = 0; i < _pollsize; i++)
		newPoll[i] = _poll[i];
	newPoll[_pollsize].fd = fd;
	newPoll[_pollsize].events = events;
	Socket *socket = new Socket;
	socket->setFd(fd);
	_sockets.push_back(socket);
	
	delete[] _poll;
	_poll = newPoll;
	_pollsize++;
}

pollfd *Config::_getPoll(int fd)
{
	for (size_t i = 0; i < _pollsize; i++)
		if (_poll[i].fd == fd)
			return &_poll[i];
	return NULL;
}

Socket *Config::_getSocket(int fd)
{
	for (size_t i = 0; i < _sockets.size(); i++)
		if (_sockets[i]->getFd() == fd)
			return _sockets[i];
	return NULL;
}

void Config::run()
{
	_createPoll();
	while (1)
	{
		if ((poll(_poll, _pollsize, -1)) <= 0)
			continue;
		for (size_t i = 0; i < _pollsize; i++)
		{
			int fd = _poll[i].fd;
			Socket *socket = _getSocket(fd);
			if (_poll[i].revents & POLLERR)
			{
				std::cerr << "POLL QUIT " << fd << std::endl;
				_endPoll(fd);
			}
			else if (_poll[i].revents & POLLHUP)
			{
				//std::cerr << "POLLHUP" << std::endl;
				_endPoll(fd);
			}
			else if (_poll[i].revents & POLLIN)
			{
				if (_serverSocketToServer.find(fd) != _serverSocketToServer.end())
				{
					Server *server = _serverSocketToServer[fd];
					sockaddr_in client_addr;
					socklen_t client_addr_len = sizeof(client_addr);
					int client_socket = accept(fd, (struct sockaddr *)&client_addr, &client_addr_len);
					usleep(2500);
					if (client_socket < 0)
						continue;
					_clientSocketToServer[client_socket] = server;
					sockaddr_in server_addr;
					socklen_t server_addr_len = sizeof(server_addr);
					getsockname(fd, (struct sockaddr *)&server_addr, &server_addr_len);
					_clientSocketToServerAddr[client_socket] = server_addr;
					_addPoll(client_socket, POLLIN | POLLOUT);
				}
				else
				{
					sockaddr_in addr = _clientSocketToServerAddr[fd];
					_readRequest(socket, addr);
				}
			}
			else if (_poll[i].revents & POLLOUT && socket && socket->getRequest())
			{
				Server *server = _clientSocketToServer[fd];
				Request *request = socket->getRequest();
				request->setBody();
				if (request->isComplete())
				{
					if ( request->getMethod() == "GET")
						std::cout << BLUE;
					else
						std::cout << PURPLE_BOLD;
					std::cout << "\nRequest  : Method <" << request->getMethod() << "> ";
					std::cout << "Path <" << request->getPath() << ">" << DEFAULT << std::endl;
					Location *location = server->checkLocation(*request);
					if (location)
						socket->setResponse(location->checkRequest(*request));
					else
						socket->setResponse(server->checkRequest(*request));
    				socket->deleteRequest();
					_sendResponse(socket);
				}
			}
		}
	}
}