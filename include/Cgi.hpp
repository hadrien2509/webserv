/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cgi.hpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:24:44 by jusilanc          #+#    #+#             */
/*   Updated: 2023/10/14 00:27:41 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef CGI_HPP
# define CGI_HPP

# include <vector>
# include <map>
# include <cstring>
# include <iostream>
# include <istream>
# include <sstream>
# include <sys/wait.h>

# include "unistd.h"
# include "Request.hpp"
# include "Response.hpp"
# include "Server.hpp"

class Cgi
{
	private:
		Cgi();
		Cgi(const Cgi & src);
		Cgi& operator=(const Cgi & src);
		
		char**	_mapToEnv(std::map<std::string, std::string> & env);
		void	_ressourceToEnv();
		void	_initEnv();
		
		std::string	_ressourcePath;
		
		std::map<std::string, std::string>	_exePath; // all path to the interpreter ex: php, python, perl, ...
		std::map<std::string, std::string>	_env; // personalized env ex: for php norm || can be NULL
		std::string					_path; // path to the cgi file

		std::string					_toIn;
		std::string					_fromOut;

	public:
		Cgi(const std::vector<std::string> & extension, std::vector<std::string> envExecutable, const std::string & ressourcePath);
		~Cgi();

		const std::string run();
		
		class CgiException: public std::exception
		{
			public:
				const char * what() const throw()
				{
					return ("CgiException: unknown error");
				}
		};

		class CgiForkException: public std::exception
		{
			public:
				const char * what() const throw()
				{
					return ("CgiException: fork failed");
				}
		};

		class CgiPipeException: public std::exception
		{
			public:
				const char * what() const throw()
				{
					return ("CgiException: pipe failed");
				}
		};

		class CgiEnvExtException: public std::exception
		{
			public:
				const char * what() const throw()
				{
					return ("CgiException: env and extension size mismatch");
				}
		};

		class CgiPathException: public std::exception
		{
			public:
				const char * what() const throw()
				{
					return ("CgiException: empty path");
				}
		};

		class CgiNotCgiException: public std::exception
		{
			public:
				const char * what() const throw()
				{
					return ("CgiException: not a cgi file");
				}
		};

		class CgiFileException: public std::exception
		{
			public:
				const char * what() const throw()
				{
					return ("CgiException: iterpretor not found");
				}
		};
};

const std::string		cgiHandler(std::vector<std::string> extension, std::vector<std::string> envExecutable, const std::string & ressourcePath);
// Response cgiHandler(Request & req);

#endif
