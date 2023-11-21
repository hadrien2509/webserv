/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cgi.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:28:09 by jusilanc          #+#    #+#             */
/*   Updated: 2023/11/21 14:32:33 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Cgi.hpp"

Cgi::Cgi(const std::vector<std::string> &extension, std::vector<std::string> envExecutable, Request &req)
    : _request(req), _timeOut(0), _port(0)
{
    std::istringstream iss(req.getPath());

    _port = htons(req.getSockAddr().sin_port);
    _httpVersion = req.getHttpVersion();
    if (envExecutable.size() != extension.size() || envExecutable.empty())
        throw CgiEnvExtException();

    std::vector<std::string>::iterator itExe = envExecutable.begin();
    for (std::vector<std::string>::iterator it = const_cast<std::vector<std::string> &>(extension).begin(); it != extension.end(); it++)
    {
        _exePath.insert(std::pair<std::string, std::string>(*it, *itExe));
        itExe++;
    }
    _ressourcePath = req.getPath() + "?" + req.getQuerryString();

    _path = req.getPath();
    _toIn = req.getQuerryString();
    _method = req.getMethod();
}

Cgi::~Cgi()
{
}

Cgi& Cgi::operator=(const Cgi & src)
{
	if (this != &src)
	{
		_env = src._env;
		_path = src._path;
		_fromOut = src._fromOut;
	}
	return (*this);
}

void Cgi::setTimeOut(size_t ms)
{
	_timeOut = ms;
}

size_t Cgi::getTimeOut(void) const
{
	return (_timeOut);
}

char **Cgi::_mapToEnv(std::map<std::string, std::string> &env)
{
    char **ret = new char *[env.size() + 1];

    int i = 0;
    if (!ret)
        return (NULL);
    std::map<std::string, std::string>::iterator it;
    for (it = env.begin(); it != env.end(); it++)
    {
        std::string tmp = it->first + "=" + it->second;
        ret[i] = new char[tmp.size() + 1];
        strcpy(ret[i], tmp.c_str());
        i++;
    }
    ret[i] = NULL;
    return (ret);
}

static void ft_sleep(int ms)
{
	struct timeval tv;
	tv.tv_sec = ms / 1000;
	tv.tv_usec = (ms % 1000) * 1000;
	select(0, NULL, NULL, NULL, &tv);
}

void Cgi::_ressourceToEnv()
{
	std::stringstream ss;
	ss << _toIn.size();

	std::string realPath(_path);
	realPath.erase(realPath.find_last_of('/'), realPath.size());
	

	_env["REQUEST_METHOD"] = _method;
	_env["PWD"] = realPath;
	if (_method != "POST")
		_env["QUERY_STRING"] = _toIn;
	_env["CONTENT_TYPE"] = "text/html";
	_env["CONTENT_LENGTH"] = ss.str();
	_env["SERVER_NAME"] = _request.getServerName();

	std::stringstream port;
	port << _port;
	_env["SERVER_PORT"] = port.str();

	_env["SCRIPT_NAME"] = _path;
	_env["PATH_INFO"] = _path;
	_env["SERVER_PROTOCOL"] = _httpVersion;
}

std::string Cgi::getExtension() const
{
	return (_varExtension);
}

const std::string& Cgi::run()
{
	pid_t pid;
	pid_t pidTimeOut;
	int fdIn[2];
	int fdOut[2];
	int fdInSave;
	int fdOutSave;
	int ret = 1;
	char buffer[1024];
	
	std::string totalPath = _path;
	if (!strchr(totalPath.c_str(), '.'))
		throw CgiPathException();

	_varExtension = strchr(totalPath.c_str(), '.');
	size_t lastSlash = totalPath.find_last_of('/');
	const char *arg[] = {_exePath[_varExtension].c_str(), &totalPath.c_str()[lastSlash + 1], NULL};
		
	_ressourceToEnv();
	char **env = _mapToEnv(_env);
	
	if (!arg[0] || std::string(arg[0]).size() == 0)
	{
		for (int i = 0; env[i] != NULL; i++) {
        	delete[] env[i];
		}
		delete[] env;
		throw CgiNotCgiException();
	}
	if (access(arg[0], F_OK) != 0 || access(totalPath.c_str(), F_OK) != 0)
	{
		for (int i = 0; env[i] != NULL; i++) {
        	delete[] env[i];
		}
		delete[] env;
		throw CgiFileException();
	}
	if (pipe(fdIn) == -1)
	{
		throw CgiPipeException();
	}
	if (pipe(fdOut) == -1)
	{
		close(fdIn[0]);
		close(fdIn[1]);
		for (int i = 0; env[i] != NULL; i++) {
        	delete[] env[i];
		}
		delete[] env;
		throw CgiPipeException();
	}

	fdInSave = dup(STDIN_FILENO);
	fdOutSave = dup(STDOUT_FILENO);

	pid = fork();
	if (pid == -1)
	{
		close(fdIn[0]);
		close(fdIn[1]);
		close(fdOut[0]);
		close(fdOut[1]);
		close(fdInSave);
		close(fdOutSave);
		for (int i = 0; env[i] != NULL; i++)
        	delete[] env[i];
		delete[] env;
		throw CgiForkException();
	}
	else if (!pid)
	{
		close(fdIn[1]);
		close(fdOut[0]);
		dup2(fdIn[0], STDIN_FILENO);
		dup2(fdOut[1], STDOUT_FILENO);

		totalPath.erase(totalPath.find_last_of('/'), totalPath.size());
		if (!chdir(totalPath.c_str()))
			execve(_exePath[_varExtension].c_str(), const_cast<char *const *> (arg), env);
		std::cerr << "CGI exception: execve failed" << std::endl;
		write(fdOut[1], "500 Internal Server Error\n", 26);
		for (int i = 0; env[i] != NULL; i++)
        	delete[] env[i];
		delete[] env;
		std::exit(1);
	}
	else
	{
		if (_timeOut != 0)
		{

			pidTimeOut = fork();
			if (pidTimeOut == -1)
			{
				for (int i = 0; env[i] != NULL; i++)
					delete[] env[i];
				delete[] env;
				throw CgiException();
			}
			else if (!pidTimeOut)
			{
				ft_sleep(_timeOut);
				kill(pid, SIGTERM);
				std::exit(2);
			}
		}
		close(fdIn[0]);
		close(fdOut[1]);
		dup2(fdIn[1], STDIN_FILENO);
		dup2(fdOut[0], STDOUT_FILENO);
		if (_method == "POST" || _method == "DELETE")
		{
			std::stringstream ss;
			ss << _toIn.size();
			_env["CONTENT_LENGTH"] = std::string(ss.str());
			write(fdIn[1], _toIn.c_str(), _toIn.size());
		}
		int retVal = 0;
		waitpid(pid, &retVal, 0);
		if (_timeOut != 0)
			kill(pidTimeOut, SIGTERM);
		while (retVal == 0 && ret > 0)
		{
			ret = read(fdOut[0], buffer, 1023);
			buffer[ret] = '\0';
			_fromOut += std::string(buffer, ret);
			if (ret < 1023)
				break;
		}
		close(fdIn[1]);
		close(fdOut[0]);
		dup2(fdInSave, STDIN_FILENO);
		dup2(fdOutSave, STDOUT_FILENO);
		if (retVal != 0)
		{
			for (int i = 0; env[i] != NULL; i++)
				delete[] env[i];
			delete[] env;
			throw CgiInternalException();
		}
	}
	for (int i = 0; env[i] != NULL; i++)
        delete[] env[i];
    delete[] env;
	close(fdInSave);
	close(fdOutSave);
	return (_fromOut);
}
