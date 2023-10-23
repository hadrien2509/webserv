/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Response.cpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/12 16:43:41 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/23 15:22:49 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Response.hpp"

Response::Response()
{
}

Response::Response(std::string code, Request& req) : _version(req.getHttpVersion()), _status(code)
{
	_header = _version + " " + _status + "\r\n";
	_header += "Content-Type: text/html\r\n";

	if (code == "400 Bad Request")
	{
		_content = "<html><body><h1>400 Bad Request</h1></body></html>";
	}
	else if (code == "401 Unauthorized")
	{
		_content = "<html><body><h1>401 Unauthorized</h1></body></html>";
	}
	else if (code == "403 Forbidden")
	{
		_content = "<html><body><h1>403 Forbidden</h1></body></html>";
	}
	else if (code == "404 File Not Found")
	{
		_content = "<html><body><h1>404 File Not Found</h1></body></html>";
	}
	else if (code == "405 Method Not Allowed")
	{
		_content = "<html><body><h1>405 Method Not Allowed</h1></body></html>";
	}
	else if (code == "500 Internal Server Error")
	{
		_content = "<html><body><h1>500 Internal Server Error</h1></body></html>";
	}
	else if (code == "500 Internal Server Error")
	{
		_content = "<html><body><h1>500 Internal Server Error</h1></body></html>";
	}
	
	std::stringstream ss;	
	ss << _content.length();
	_contentLength = ss.str();
	_header += "Content-Length: " + _contentLength + "\r\n\r\n";
	
	_response = _header + _content;
}

Response::Response(std::string code, std::string content, std::string version) : _version (version), _status(code), _contentType("text/html"), _content(content)
{
	std::stringstream ss;

	ss << _content.length(); // Convert the length to a string
	_contentLength = ss.str();
	_header = _version + " " + _status + "\r\n";
	_header += "Content-Type: " + _contentType + "\r\n";
	_header += "Content-Length: " + _contentLength + "\r\n\r\n";
	_response = _header + _content;
}

Response::Response(std::string code, Request& req, std::map<std::string, std::string> &mimeTypes) : _version (req.getHttpVersion()), _status(code)
{	
	std::ifstream file(req.getPath().c_str()); // Open the file for reading
	if (!file.is_open())
		std::cerr << "can't open file : " << req.getPath() << std::endl;//throw std::runtime_error("Could not open file");
	std::stringstream ss1, ss2;
	ss1 << file.rdbuf(); // Read the file
	file.close(); // Close the file
	_content = ss1.str();
	ss2 << _content.length(); // Convert the length to a string
	_contentLength = ss2.str();

	if (req.getPath().find_last_of(".") == std::string::npos)
		_contentType = "text/html";
	else
		_contentType = mimeTypes[req.getPath().substr(req.getPath().find_last_of("."))];
	_header = _version + " " + _status + "\r\n";
	_header += "Content-Type: " + _contentType + "\r\n";
	_header += "Content-Length: " + _contentLength + "\r\n\r\n";

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

void Response::setResponse(const std::string & response)
{
	_response = response;
}

void Response::setVersion(std::string & version)
{
	_version = version;
}

void Response::setStatus(const std::string & status)
{
	_status = status;
}

void Response::setPath(std::string & path)
{
	_path = path;
}

void Response::setContentType(const std::string & contentType)
{
	_contentType = contentType;
}

void Response::setContentLength(const std::string & contentLength)
{
	_contentLength = contentLength.length();
}

void Response::setHeader(std::string & header)
{
	_header = header;
}

void Response::setContent(const std::string & content)
{
	_content = content;
	_contentLength = content.length();
}
