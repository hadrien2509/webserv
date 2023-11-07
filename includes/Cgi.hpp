/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cgi.hpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:24:44 by jusilanc          #+#    #+#             */
/*   Updated: 2023/11/07 15:57:06 by jusilanc         ###   ########.fr       */
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
# include <unistd.h>
# include <signal.h>
# include <stdlib.h>
# include "Request.hpp"

class Cgi
{
	private:
		Cgi();
		Cgi(const Cgi & src);
		Cgi& operator=(const Cgi & src);
		
		char**	_mapToEnv(std::map<std::string, std::string> & env);
		void	_ressourceToEnv();
		
		std::string	_method;
		std::string	_ressourcePath;
		std::string _varExtension;
		Request		_request;
		
		std::map<std::string, std::string>	_exePath; // all path to the interpreter ex: php, python, perl, ...
		std::map<std::string, std::string>	_env; // personalized env ex: for php norm || can be NULL
		std::string					_path; // path to the cgi file

		std::string					_toIn;
		std::string					_fromOut;

		size_t						_timeOut;

		int							_port;
		std::string					_httpVersion;

	public:
		Cgi(const std::vector<std::string> & extension, std::vector<std::string> envExecutable, Request & req);
		~Cgi();

		const std::string& run();
		std::string getExtension() const;
		void setTimeOut(size_t ms);
		size_t getTimeOut(void) const;
		
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
					return ("CgiException: file or iterpretor not found");
				}
		};
		
		class CgiInternalException: public std::exception
		{
			public:
				const char * what() const throw()
				{
					return ("CgiException: internal error");
				}
		};
};

#endif
