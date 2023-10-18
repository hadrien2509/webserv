/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cgi.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:28:09 by jusilanc          #+#    #+#             */
/*   Updated: 2023/10/18 23:18:21 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Cgi.hpp"

/*
	"body" has to be sent to the cgi by using the pipe stdin
	and ...?name=yolo&email=kappa... has to be sent to the cgi by using the env -> _toIn split by & and =
	need to define the "header" in the env
*/

Cgi::Cgi()
{
}

Cgi::Cgi(const std::vector<std::string> & extension, std::vector<std::string> envExecutable, const std::string & ressourcePath)
{
	std::istringstream iss(ressourcePath);
	
	if (envExecutable.size() != extension.size())
		throw CgiEnvExtException();
	
	std::vector<std::string>::iterator itExe = envExecutable.begin();
	for (std::vector<std::string>::iterator it = const_cast<std::vector<std::string> &> (extension).begin(); it != extension.end(); it++)
	{
		_exePath.insert(std::pair<std::string, std::string>(*it, *itExe));
		itExe++;
	}
	_ressourcePath = ressourcePath;

	// std::cerr << "CGI ressourcePath: " << _ressourcePath << std::endl;
	getline(iss, _path, '?');
	getline(iss, _toIn);
	// _path = "webmajordome" + _path; // need to change waiting for location block
	// std::cerr << "CGI Path: " << _path << std::endl;
}

Cgi::Cgi(const Cgi & src)
{
	*this = src;
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

void Cgi::_initEnv()
{
	// temporary hardcoded
	
	_env["REQUEST_METHOD"] = "GET";
	_env["QUERY_STRING"] = _toIn;
	_env["CONTENT_TYPE"] = "text/html";
	_env["CONTENT_LENGTH"] = "0";
	_env["SERVER_NAME"] = "localhost";
	_env["SERVER_PORT"] = "80";
	_env["SCRIPT_NAME"] = _path;
	_env["PATH_INFO"] = _path;
	_env["SERVER_PROTOCOL"] = "HTTP/1.1";
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
	_initEnv();
	// std::istringstream iss(_toIn);
	// std::string tmp;
	
	// while (getline(iss, tmp, '&'))
	// {
	// 	std::istringstream iss2(tmp);
	// 	std::string key;
	// 	std::string value;
	// 	getline(iss2, key, '=');
	// 	getline(iss2, value);
	// 	_env[key] = value;
	// }
}

std::string Cgi::getExtension() const
{
	return (_varExtension);
}

const std::string& Cgi::run()
{
	pid_t pid;
	int fdOut[2];
	int ret = 1;
	char buffer[1024];
	
	std::string totalPath = _path;
	std::cerr << "CGI: " << totalPath << std::endl;
	// std::cerr << "HERE" << '\n';
	if (!strchr(totalPath.c_str(), '.'))
		throw CgiPathException();

	_varExtension = strchr(totalPath.c_str(), '.');
	const char *arg[] = {_exePath[_varExtension].c_str(), totalPath.c_str(), NULL};
		
	// char **env process
	_ressourceToEnv();
	char **env = _mapToEnv(_env);
	// =================


	if (!arg[0] || std::string(arg[0]).size() == 0)
	{
		delete [] env;
		throw CgiNotCgiException();
	}
	if (access(arg[0], F_OK) != 0 || access(arg[1], F_OK) != 0)
	{
		delete [] env;
		throw CgiFileException();
	}
	if (pipe(fdOut) == -1)
	{
		delete [] env;
		throw CgiPipeException();
	}

	pid = fork();

	if (pid == -1)
	{
		delete [] env;
		throw CgiForkException();
	}
	else if (!pid)
	{
		close(fdOut[0]);
		dup2(fdOut[1], STDOUT_FILENO);

		execve(_exePath[_varExtension].c_str(), const_cast<char *const *> (arg), env);
		std::cerr << "CGI exception: execve failed" << std::endl;
		write(fdOut[1], "500 Internal Server Error\n", 26);
	}
	else
	{
		dup2(fdOut[0], STDOUT_FILENO);
		close(fdOut[1]);
		waitpid(-1, NULL, 0);
		delete [] env;

		while (ret > 0)
		{
			ret = read(fdOut[0], buffer, 1023);
			buffer[ret] = '\0';
			_fromOut += std::string(buffer, ret);
		}
		close(fdOut[0]);
	}
	return (_fromOut);
}
