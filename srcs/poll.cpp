#include "Config.hpp"

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
    Socket *socket = new Socket;
    socket->setFd(fd);
    _sockets.push_back(socket);
    newPoll[0].fd = fd;
    newPoll[0].events = events;
    for (size_t i = 0; i < _pollsize; i++)
    {
        newPoll[i + 1] = _poll[i];
    }
    delete[] _poll;
    _poll = newPoll;
    _pollsize++;
}
