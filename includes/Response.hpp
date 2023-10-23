/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Response.hpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/12 16:12:24 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/23 14:30:17 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef RESPONSE_HPP
# define RESPONSE_HPP

# include <iostream>
# include <string>
# include <map>
# include <sstream>
# include <fstream>

# include "Request.hpp"

class Response
{
	private :
		std::string	_version; // version of http ex: HTTP/1.1
		std::string	_status; // status of response ex: 200 OK
		std::string	_path; // path of content ex: /index.html that gets read for content (unless cgi)
		std::string _contentType; // type of content ex: text/html from _mimeTypes (server || config)
		std::string _contentLength; // content length ex: 1234
		std::string _response; // string with all data ex: html content

		std::string _header;	// header of response ex: HTTP/1.1 200 OK\r\nContent-Type: text/html\r\nContent-Length: 1234\r\n\r\n
		std::string _content;	// content of response ex: <html><body><h1>Hello World!</h1></body></html>
		
	public :
		Response();
		Response(std::string code, Request& req);
		Response(std::string code, std::string content, std::string version);
		Response(std::string code, Request& req, std::map<std::string, std::string>& mimeTypes);
		~Response();
		
		const std::string&	get() const;
		const std::string&	getVersion() const;
		const std::string&	getStatus() const;
		const std::string&	getPath() const;
		const std::string&	getContentType() const;
		const std::string&	getContentLength() const;
		const std::string&	getHeader() const;
		const std::string&	getContent() const;
		
		void setResponse(const std::string & response);
		void setVersion(std::string & version);
		void setStatus(const std::string & status);
		void setPath(std::string & path);
		void setContentType(const std::string & contentType);
		void setContentLength(const std::string & contentLength);
		void setHeader(std::string & header);
		void setContent(const std::string & content);
};

#endif