/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cgi.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:28:09 by jusilanc          #+#    #+#             */
/*   Updated: 2023/11/03 13:54:04 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Cgi.hpp"

Cgi::Cgi(const std::vector<std::string> & extension, std::vector<std::string> envExecutable, Request & req): _request(req)
{
	std::istringstream iss(req.getPath());
	
	if (envExecutable.size() != extension.size() || envExecutable.empty())
		throw CgiEnvExtException();
	
	std::vector<std::string>::iterator itExe = envExecutable.begin();
	for (std::vector<std::string>::iterator it = const_cast<std::vector<std::string> &> (extension).begin(); it != extension.end(); it++)
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

char** Cgi::_mapToEnv(std::map<std::string, std::string> & env)
{
	char **ret = new char*[env.size() + 1];
	
	int i = 0;
	if (!ret)
		return (NULL);
	for (std::map<std::string, std::string>::iterator it = env.begin(); it != env.end(); it++)
	{
		std::string tmp = it->first + "=" + it->second;
		ret[i] = new char[tmp.size() + 1];
		strcpy(ret[i], tmp.c_str());
		i++;
	}
	ret[i] = NULL;
	return (ret);
}

void Cgi::_ressourceToEnv()
{
	std::stringstream ss;
	ss << _toIn.size();
	_env["REQUEST_METHOD"] = _method;
	if (_method != "POST")
		_env["QUERY_STRING"] = _toIn;
	_env["CONTENT_LENGTH"] = ss.str();
	_env["CONTENT_TYPE"] = "text/html";
	_env["CONTENT_LENGTH"] = ss.str();
	_env["SERVER_NAME"] = "localhost"; // temporary hardcoded
	_env["SERVER_PORT"] = "80"; // temporary hardcoded
	_env["SCRIPT_NAME"] = _path;
	_env["PATH_INFO"] = _path;
	_env["SERVER_PROTOCOL"] = "HTTP/1.1"; // temporary hardcoded
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
	const char *arg[] = {_exePath[_varExtension].c_str(), totalPath.c_str(), NULL};
		
	_ressourceToEnv();
	char **env = _mapToEnv(_env);

	fdInSave = dup(STDIN_FILENO);
	fdOutSave = dup(STDOUT_FILENO);

	if (!arg[0] || std::string(arg[0]).size() == 0)
	{
		for (int i = 0; env[i] != NULL; i++) {
        	delete[] env[i];
		}
		delete[] env;
		throw CgiNotCgiException();
	}
	if (access(arg[0], F_OK) != 0 || access(arg[1], F_OK) != 0)
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

	pid = fork();
	if (pid == -1)
	{
		close(fdIn[0]);
		close(fdIn[1]);
		close(fdOut[0]);
		close(fdOut[1]);
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

		
		execve(_exePath[_varExtension].c_str(), const_cast<char *const *> (arg), env);
		std::cerr << "CGI exception: execve failed" << std::endl;
		write(fdOut[1], "500 Internal Server Error\n", 26);
		for (int i = 0; env[i] != NULL; i++)
        	delete[] env[i];
		delete[] env;
		throw CgiException();
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
				std::cerr << "CGI timeout: " << _timeOut << "ms" << std::endl;
				usleep(1000 * _timeOut);
				kill(pid, SIGTERM);
				exit(2);
			}
		}
		close(fdIn[0]);
		close(fdOut[1]);
		dup2(fdIn[1], STDIN_FILENO);
		dup2(fdOut[0], STDOUT_FILENO);
		if (_method == "POST")
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
	return (_fromOut);
}
