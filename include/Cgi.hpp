/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cgi.hpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:24:44 by jusilanc          #+#    #+#             */
/*   Updated: 2023/10/12 13:11:39 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef CGI_HPP
# define CGI_HPP

#include <vector>
#include <map>
#include <string>
#include <iostream>
#include <istream>
#include <sstream>
#include "unistd.h"
#include <sys/wait.h>

class Cgi
{
	private:
		Cgi();
		Cgi(const Cgi & src);
		Cgi& operator=(const Cgi & src);
		
		std::string	_ressourcePath;
		
		std::vector<std::string>	_ext; // extension to be handled by cgi
		std::vector<std::string>	_envExecutable; // path to the executable ex: /usr/bin/bash /usr/bin/php /usr/bin/python3
		std::map<std::string, std::string>	_envVar; // personalized env ex: for php norm || can be NULL
		
		std::vector<std::string>	_env; // personalized env ex: for php norm || can be NULL
		
		std::string					_path; // path to the cgi file
		std::string					_toIn;
		std::string					_fromOut;

	public:
		Cgi(const std::vector<std::string> & extension, std::vector<std::string> envExecutable, const std::string & ressourcePath);
		~Cgi();

		const std::string run();
		
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
};

const std::string		cgiHandler(const std::vector<std::string> & extension, std::vector<std::string> envExecutable, const std::string & ressourcePath);

#endif
