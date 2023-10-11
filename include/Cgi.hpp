/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cgi.hpp                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:24:44 by jusilanc          #+#    #+#             */
/*   Updated: 2023/10/11 20:35:37 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef CGI_HPP
# define CGI_HPP

#include <vector>
#include <string>
#include <iostream>

class Cgi
{
	private:
		Cgi();
		Cgi(const Cgi & src);
		Cgi& operator=(const Cgi & src);
		
		std::vector<std::string>	_ressourcePath;
		
		std::vector<std::string>	_ext;
		std::vector<std::string>	_env;
		
		std::vector<std::string>	_path;
		std::vector<std::string>	_toIn;

	public:
		Cgi(std::vector<std::string> extension, std::vector<std::string> env, std::vector<std::string> ressourcePath);
		~Cgi();
};


#endif
