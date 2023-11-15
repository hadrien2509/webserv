#include "Socket.hpp"
#include <iostream>
#include <unistd.h>

/* ************************************************************************** */
/*                          Constructor & Destructor                          */
/* ************************************************************************** */
Socket::Socket(void): _request(NULL), _response(NULL), _fd(-1){}

Socket::~Socket(void) {
	if (_request)
		delete _request;
	if (_response)
		delete _response;
	if (_fd != -1)
		close(_fd);
}


/* ************************************************************************** */
/*                          Public Member functions                           */
/* ************************************************************************** */

void	Socket::setRequest(Request *request) {
	_request = request;
}

void	Socket::setResponse(Response *response) {
	_response = response;
}

void	Socket::setFd(int fd) {
	_fd = fd;
}

Request	*Socket::getRequest(void) {
	return (_request);
}

Response	*Socket::getResponse(void) {
	return (_response);
}

int		Socket::getFd(void) {
	return (_fd);
}

void		Socket::deleteResponse(void) {
	if (_response)
		delete _response;
	_response = NULL;
}

void		Socket::deleteRequest(void) {
	if (_request)
		delete _request;
	_request = NULL;
}