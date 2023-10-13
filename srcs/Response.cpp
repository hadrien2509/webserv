/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Response.cpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/12 16:43:41 by hgeissle          #+#    #+#             */
<<<<<<< HEAD
/*   Updated: 2023/10/14 01:14:14 by hgeissle         ###   ########.fr       */
=======
/*   Updated: 2023/10/13 23:33:21 by jusilanc         ###   ########.fr       */
>>>>>>> 2bbe9bebdb45d1e7d8c354a459719165ad159d32
/*                                                                            */
/* ************************************************************************** */

#include "Response.hpp"

Response::Response(std::string code, std::string contentPath, std::map<std::string, std::string> &mimeTypes) : _version ("HTTP/1.1"), _status(code)
{
	std::ifstream file(contentPath.c_str()); // Open the file for reading
	if (!file.is_open()) {
		throw std::runtime_error("Could not open file");
	}
	std::stringstream ss1, ss2;
	ss1 << file.rdbuf(); // Read the file
	file.close(); // Close the file
	_content = ss1.str();
	ss2 << _content.length(); // Convert the length to a string
	std::string	contentLength = ss2.str();

	_contentType = mimeTypes[contentPath.substr(contentPath.find_last_of("."))];
	_header = _version + " " + _status + "\r\n";
	_header += "Content-Type: " + _contentType + "\r\n";
	_header += "Content-Length: " + contentLength + "\r\n\r\n";

	_response = _header; // Add the header to the response
	_response += _content; // Add the file content to the response
}

Response::~Response()
{
}

const std::string&	Response::get() const
{
	return (_response);
}

const std::string&	Response::getVersion() const
{
	return (_version);
}

const std::string&	Response::getStatus() const
{
	return (_status);
}

const std::string&	Response::getPath() const
{
	return (_path);
}

const std::string&	Response::getContentType() const
{
	return (_contentType);
}

const std::string&	Response::getContentLength() const
{
	return (_contentLength);
}

const std::string&	Response::getHeader() const
{
	return (_header);
}

const std::string&	Response::getContent() const
{
	return (_content);
}

void Response::setResponse(std::string & response)
{
	_response = response;
}

void Response::setVersion(std::string & version)
{
	_version = version;
}

void Response::setStatus(std::string & status)
{
	_status = status;
}

void Response::setPath(std::string & path)
{
	_path = path;
}

void Response::setContentType(std::string & contentType)
{
	_contentType = contentType;
}

void Response::setContentLength(std::string & contentLength)
{
	_contentLength = contentLength;
}

void Response::setHeader(std::string & header)
{
	_header = header;
}

void Response::setContent(std::string & content)
{
	_content = content;
}
