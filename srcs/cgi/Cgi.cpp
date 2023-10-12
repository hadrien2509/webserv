/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cgi.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:28:09 by jusilanc          #+#    #+#             */
/*   Updated: 2023/10/13 01:36:59 by jusilanc         ###   ########.fr       */
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

Cgi::Cgi(std::vector<std::string> & extension, std::vector<std::string> envExecutable, const std::string & ressourcePath)
{
	std::istringstream iss(ressourcePath);
	
	if (envExecutable.size() != extension.size())
		throw CgiEnvExtException();
	
	std::vector<std::string>::iterator itExe = envExecutable.begin();
	for (std::vector<std::string>::iterator it = extension.begin(); it != extension.end(); it++)
	{
		_exePath.insert(std::pair<std::string, std::string>(*it, *itExe));
		itExe++;
	}
	// _ext = extension;
	// _envExecutable = envExecutable;
	_ressourcePath = ressourcePath;

	std::string	param;
	getline(iss, _path, '?');
	getline(iss, _toIn);
	_path = "webmajordome" + _path; // need to change waiting for location block
	// std::cout << "CGI ISS: " << _toIn << std::endl;
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
		_toIn = src._toIn;
		_fromOut = src._fromOut;
	}
	return (*this);
}

const std::string Cgi::run()
{
	pid_t pid;
	int oldStdin;
	(void)oldStdin;
	int oldStdout;
	(void)oldStdout;
	int fdIn[2];
	int fdOut[2];
	int ret = 1;
	char buffer[1024];
	
	// oldStdin = dup(STDIN_FILENO);
	// oldStdout = dup(STDOUT_FILENO);
	
	if (!strchr(_path.c_str(), '.'))
		throw CgiPathException();
	std::string varExtention = strchr(_path.c_str(), '.');
	const char *arg[] = {_exePath[varExtention].c_str(), _path.c_str(), NULL};
	if (!arg[0] || std::string(arg[0]).size() == 0)
		throw CgiNotCgiException();

	if (pipe(fdIn) == -1)
	{
		throw CgiPipeException();
	}

	if (pipe(fdOut) == -1)
	{
		close(fdIn[0]);
		close(fdIn[1]);
		throw CgiPipeException();
	}


	pid = fork();

	if (pid == -1)
	{
		throw CgiForkException();
	}
	else if (!pid)
	{
		// here for the execve

		close(fdIn[1]);
		close(fdOut[0]);
		dup2(fdIn[0], STDIN_FILENO);
		dup2(fdOut[1], STDOUT_FILENO);

		std::cerr << "CGI: " << _toIn << std::endl;
		// write(fdIn[1], _toIn.c_str(), _toIn.size());

		execve(_exePath[varExtention].c_str(), const_cast<char *const *> (arg), NULL); // need to add path form interpreter ex: python... and _env
		std::cerr << "CGI exception: execve failed" << std::endl;
		write(fdOut[1], "500 Internal Server Error\n", 26);
	}
	else
	{
		// here for the waitpid
		close(fdIn[1]);
		dup2(fdOut[0], STDOUT_FILENO);
		close(fdIn[0]);
		close(fdOut[1]);
		waitpid(-1, NULL, 0);

		while (ret > 0)
		{
			ret = read(fdOut[0], buffer, 1023);
			buffer[ret] = '\0';
			_fromOut += std::string(buffer, ret);
		}
		close(fdOut[0]);
		close(fdIn[1]);
	}
	return (_fromOut);
}
