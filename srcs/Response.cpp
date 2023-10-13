/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Response.cpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/12 16:43:41 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/14 00:45:19 by hgeissle         ###   ########.fr       */
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