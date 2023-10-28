/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Request.cpp                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/10 14:58:01 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/25 19:43:26 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Request.hpp"
#include <fstream>

void createFileFromData(const std::string& data, const std::string& folderPath) {
	std::cout << "data lenght : " << data.size()<< std::endl;
	std::cout << "data : " << data << std::endl;
std::string delimiter = "-----------------------------";
    size_t startPos = data.find(delimiter);
    if (startPos == std::string::npos) {
        std::cerr << "Invalid data format." << std::endl;
        return;
    }

    // Find the end delimiter
    size_t endPos = data.find(delimiter, startPos + delimiter.length());
    if (endPos == std::string::npos) {
        std::cerr << "End delimiter not found." << std::endl;
        return;
    }

    // Find the filename
    size_t filenamePos = data.find("filename=\"", startPos);
    if (filenamePos == std::string::npos) {
        std::cerr << "Filename not found." << std::endl;
        return;
    }
    filenamePos += 10; // Move to the beginning of the filename
    size_t filenameEnd = data.find("\"", filenamePos);
    if (filenameEnd == std::string::npos) {
        std::cerr << "Invalid filename format." << std::endl;
        return;
    }
    std::string filename = data.substr(filenamePos, filenameEnd - filenamePos);

    // Create the full file path
    std::string filePath = folderPath + "/" + filename;

    // Find the start of the file content
    size_t contentPos = data.find("\n\n", startPos);
    if (contentPos == std::string::npos) {
        std::cerr << "File content not found." << std::endl;
        return;
    }
    contentPos += 2; // Move past the newline characters

    // Extract the file content
    std::string fileContent = data.substr(contentPos, endPos - contentPos);

    // Write the content to the file
    std::ofstream outputFile(filePath.c_str(), std::ios::out | std::ios::binary);
    if (!outputFile) {
        std::cerr << "Failed to create the file." << std::endl;
        return;
    }

    outputFile.write(fileContent.c_str(), fileContent.size());
    outputFile.close();

    std::cout << "File '" << filename << "' created in '" << folderPath << "'." << std::endl;
}


Request::Request(std::string str, int fd, Server* server) : _connection(fd)
{

	(void)server;      // Needed for client max body size and server name
	std::cout << "--------------------------------------------" << std::endl;
	std::cout << "Request received : \n" << str << std::endl;
	_parseRequest(str);

	if (_method == "PUT")
	{
		std::cout << "download file ..." << std::endl;
		createFileFromData(_querryString, "downloads");
	}
	std::cout << "--------------------------------------------" << std::endl;
}

Request::Request(const Request &src) : _connection(src._connection)
{
	*this = src;
}

Request::~Request()
{
}

Request	&Request::operator=(const Request &rhs)
{
	if (this != &rhs)
	{
	}
	return (*this);
}

void Request::getBody(std::string request)
{
    std::string body;
    const unsigned long pos = request.find("\r\n\r\n");

    if (pos != std::string::npos) {
        _querryString = request.substr(pos + 4);
    }
}

void	Request::_parseRequest(const std::string &request)
{
	std::istringstream iss(request);
	std::string line;
	if (std::getline(iss, line))
	{
		std::istringstream iss2(line);
		// std::cout << "request : " << line << std::endl;
		iss2 >> _method >> _path >> _httpVersion;
	}
	size_t pos = _path.find('?');

    if (pos != std::string::npos) {
        if (_method == "GET")
			_querryString = _path.substr(pos + 1);
        _path = _path.substr(0, pos);
    }
	if (_method != "GET")
	{
		getBody(request);
	}
	//std::cout << "method <" << _method << "> path <" << _path << "> querry <" << _querryString << ">" << std::endl;
}

const std::string&	Request::getMethod() const
{
	return (_method);
}

const std::string&	Request::getPath() const
{
	return (_path);
}

void	Request::setPath(std::string path){
	_path = path;
}

const std::string&	Request::getHttpVersion() const
{
	return (_httpVersion);
}

std::string&	Request::getQuerryString()
{
	return (_querryString);
}
