/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cgi.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:28:09 by jusilanc          #+#    #+#             */
/*   Updated: 2023/10/12 18:21:22 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Cgi.hpp"

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
		_envVar.insert(std::pair<std::string, std::string>(*it, *itExe));
		itExe++;
	}
	// _ext = extension;
	// _envExecutable = envExecutable;
	_ressourcePath = ressourcePath;

	std::string	param;
	getline(iss, _path, '?');
	getline(iss, _toIn);
	_path = "webmajordome" + _path; // need to change waiting for location block
	std::cout << "CGI ISS: " << _toIn << std::endl;
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

		write(fdIn[1], _toIn.c_str(), _toIn.size());

		if (!strchr(_path.c_str(), '.'))
			throw CgiPathException();
		std::string varExtention = strchr(_path.c_str(), '.');
		const char *arg[] = {_envVar[varExtention].c_str(), _path.c_str(), NULL};

		std::cerr << "CGI: " << _envVar[varExtention].c_str() << std::endl;
		std::cerr << "CGI: " << const_cast<char *const *> (arg)[0] << std::endl;

		execve(_envVar[varExtention].c_str(), const_cast<char *const *> (arg), NULL); // need to add path form interpreter ex: python... and _env
		std::cerr << "HERE 2" << std::endl;
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
		std::cerr << "HERE 1" << std::endl;

		while (ret > 0)
		{
			ret = read(fdOut[0], buffer, 1023);
			buffer[ret] = '\0';
			_fromOut += std::string(buffer, ret);
		}
		close(fdOut[0]);
		close(fdIn[1]);
	}
	std::cerr << "OUTPUT OF CGI: " << _fromOut << std::endl;
	return (_fromOut);
}
