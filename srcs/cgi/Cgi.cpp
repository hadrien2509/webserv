/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cgi.cpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:28:09 by jusilanc          #+#    #+#             */
/*   Updated: 2023/10/11 21:45:19 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Cgi.hpp"

Cgi::Cgi():
{
}

Cgi::Cgi(std::vector<std::string> extension, std::vector<std::string> env, std::vector<std::string> ressourcePath)
{
	std::istringstream iss(ressourcePath);
	_ext = extension;
	_env = env;
	_ressourcePath = ressourcePath;

	std::string	param;
	getline(iss, _path, '?');
	std::cout << iss << std::endl;
}

Cgi::Cgi(const Cgi & src)
{
	*this = src;
}

Cgi::~Cgi()
{
}

Cgi::operator=(const Cgi & src)
{
	return (*this);
}


