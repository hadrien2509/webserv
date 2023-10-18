/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cgiHandler.cpp                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/11 16:24:09 by jusilanc          #+#    #+#             */
/*   Updated: 2023/10/18 12:17:26 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Cgi.hpp"

Response cgiHandler(Request & req, Server & server)
{
	Cgi cgi(server.getCgiExtension(), server.getCgiPath(), req.getPath());
	Response res;

	try
	{
		res.setResponse(cgi.run());
		res.setVersion(const_cast<std::string &> (req.getHttpVersion()));
		res.setStatus(std::string("200 OK"));
		// res.setPath();
		res.setContent(const_cast<std::string &> (res.get()));
		// res.setContentType();
		res.setContentLength(res.getContent());
		// res.setHeader();
		
	}
	catch(const Cgi::CgiFileException& e)
	{
		throw Cgi::CgiFileException();
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
	return (res);
}

const std::string cgiHandler(std::vector<std::string> extension, std::vector<std::string> envExecutable, const std::string & ressourcePath)
{
	Cgi cgi(extension, envExecutable, ressourcePath);

	try
	{
		return (cgi.run());
	}
	catch(const Cgi::CgiFileException& e)
	{
		throw Cgi::CgiFileException();
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
