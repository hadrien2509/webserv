/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cgiHandler.cpp                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:24:09 by jusilanc          #+#    #+#             */
/*   Updated: 2023/10/13 22:32:48 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Cgi.hpp"

// Response& cgiHandler(Request & req)
// {
// 	Cgi cgi();
// 	Response res("200", "path", "mimeTypes");
	
// 	return (res);
// }

const std::string cgiHandler(std::vector<std::string> extension, std::vector<std::string> envExecutable, const std::string & ressourcePath)
{
	Cgi cgi(extension, envExecutable, ressourcePath);

	try
	{
		return (cgi.run());
	}
	catch(const Cgi::CgiNotCgiException& e)
	{
		throw Cgi::CgiNotCgiException();
	}
	catch(const std::exception& e)
	{
		std::cerr << e.what() << '\n';
		throw Cgi::CgiException();
	}
	return ("ERROR");
}
