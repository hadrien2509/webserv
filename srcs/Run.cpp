/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Run.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/09 15:33:20 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/21 19:12:05 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"
#include <unistd.h>
#include <fcntl.h>

extern int g_escape;

void Config::_readRequest(Socket *socket, struct sockaddr_in addr) {
    char buffer[BUFFER_SIZE];
    bool requestComplete = false;
	std::string totalBuff;

    while (!requestComplete) {
        int ret = recv(socket->getFd(), buffer, BUFFER_SIZE - 1, 0);
		if (ret == 0) {
            std::cerr << "Socket disconnected" << std::endl;
            _endPoll(socket->getFd());
            return;
        }
        if (ret == -1) {
			std::cerr << "Error reading request" << std::endl;
            _endPoll(socket->getFd());
            return;
        }
		buffer[ret] = '\0';
		totalBuff.append(buffer, ret);
        size_t pos = totalBuff.find("\r\n\r\n");
        if (pos != std::string::npos) {
            requestComplete = true;
        }
		if (ret < BUFFER_SIZE - 1)
			requestComplete = true;
	}
	if (socket->getRequest() == NULL) {
		try {
			Server *server = _clientSocketToServer[socket->getFd()];
			socket->setRequest(new Request(totalBuff.c_str(), totalBuff.size(), server, addr));
		} catch (Request::BodyTooLargeException &e) {
			std::cerr << RED_BOLD << "Error : " << e.what() << DEFAULT << std::endl;
			socket->setResponse(_clientSocketToServer[socket->getFd()]->errorResponse("413 Payload Too Large", 413, NULL));
			_sendResponse(socket);
			_endPoll(socket->getFd());
			return;
		}catch (Request::HostNotFoundException &e) {
			std::cerr << RED_BOLD << "Error : " << e.what() << DEFAULT << std::endl;
			socket->setResponse(_clientSocketToServer[socket->getFd()]->errorResponse("400 Bad Request", 400, NULL));
			_sendResponse(socket);
			_endPoll(socket->getFd());
			return;
		}
	} else
		socket->getRequest()->appendRequest(totalBuff.c_str(), totalBuff.size());
}

static void ft_sleep(int ms)
{
	struct timeval tv;
	tv.tv_sec = ms / 1000;
	tv.tv_usec = (ms % 1000) * 1000;
	select(0, NULL, NULL, NULL, &tv);
}

void Config::_sendResponse(Socket *socket) {
    Response *response = socket->getResponse();
	int code = std::atoi(response->getStatus().c_str()) / 100;
    if (!response)
        return;
    if ( code == 2)
        std::cout << GREEN;
	else if ( code == 3)
		std::cout << AMBER;
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

void Config::run()
{
	_createPoll();
	while (g_escape)
	{
		if ((poll(_poll, _pollsize, -1)) <= 0)
			continue;

		for (size_t i = 0; i < _pollsize; i++)
		{
			int fd = _poll[i].fd;
			Socket *socket = _getSocket(fd);
			if (_poll[i].revents & POLLERR)
			{
				_endPoll(fd);
			}
			else if (_poll[i].revents & POLLHUP)
			{
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
					if (client_socket < 0)
						continue;
					ft_sleep(3);
					_clientSocketToServer[client_socket] = server;
					sockaddr_in server_addr;
					socklen_t server_addr_len = sizeof(server_addr);
					getsockname(fd, (struct sockaddr *)&server_addr, &server_addr_len);
					_clientSocketToServerAddr[client_socket] = server_addr;
					_addPoll(client_socket, POLLIN | POLLOUT);
					break;
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