/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Request.cpp                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/10 14:58:01 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/21 14:59:40 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Request.hpp"
#include "Server.hpp"
#include <fstream>

bool fileExists(const std::string &filePath) {
    std::ifstream file(filePath.c_str());
    bool exists = file.good();
    file.close();
    return exists;
}

bool Request::createFileFromData(const std::string &folderPath)
{
    std::cout << "start downloading..." << std::endl;
    size_t startPos = 0;
    size_t endPos = 0;
    while ((startPos = _querryString.find(_boundary, startPos)) != std::string::npos) {
        startPos += _boundary.length();
        endPos = _querryString.find(_boundary, startPos);
        if (endPos == std::string::npos) {
            if (startPos + 4 >= _contentLength)
                return true;
            std::cerr << "End delimiter found." << std::endl;
            return false;
        }
        size_t filenamePos = _querryString.find("filename=\"", startPos);
        if (filenamePos == std::string::npos) {
            std::cerr << "Filename not found." << std::endl;
            return false;
        }

        filenamePos += 10; // Move to the beginning of the filename
        size_t filenameEnd = _querryString.find("\"", filenamePos);
        if (filenameEnd == std::string::npos) {
            std::cerr << "Invalid filename format." << std::endl;
            return false;
        }

        std::string filename = _querryString.substr(filenamePos, filenameEnd - filenamePos);

        if (filename.empty()) 
            filename = "untitled";
        std::string filePath = folderPath + "/" + filename;
        int fileIndex = 0;
        std::string baseFilename = filename.substr(0, filename.find_last_of('.'));
        size_t lastDotPos = filename.find_last_of('.');
        std::string extension = "";
        if (lastDotPos != std::string::npos)
            extension = filename.substr(lastDotPos);
        
        while (fileExists(filePath)) {
            // File with the same name already exists, append a number in parentheses
            fileIndex++;
            std::ostringstream oss;
            oss << " (" << fileIndex << ")";
            filename = baseFilename + oss.str() + extension;
            filePath = folderPath + "/" + filename;
        }

        size_t contentPos = _querryString.find("\r\n\r\n", startPos);
        if (contentPos == std::string::npos) {
            std::cerr << "File content not found." << std::endl;
            return false;
        }

        contentPos += 4; // Move past the newline characters \r\n\r\n
        std::string fileContent = _querryString.substr(contentPos, endPos - contentPos);

        std::ofstream outputFile(filePath.c_str(), std::ios::out | std::ios::binary);
        if (!outputFile) {
            std::cerr << "Failed to create the file." << std::endl;
            return false;
        }
        outputFile.write(fileContent.c_str(), fileContent.size());
        outputFile.close(); // Fermeture du fichier après écriture
        std::cerr << "File '" << filename << "' created in '" << folderPath << "'." << std::endl;
        startPos = endPos;
    }
    return true;
}

void Request::_extractBoundary(const std::string& httpRequest) {
    std::string boundaryString = "; boundary=";

    size_t pos = httpRequest.find(boundaryString);
    
    if (pos != std::string::npos)
	{
		pos += boundaryString.length();
	    _boundary = "--" + httpRequest.substr(pos); 
		_boundary.resize(_boundary.size() - 1);// rm \n
    }
}

void Request::setHeader(const std::string &request) {
    size_t doubleLineBreakPos = request.find("\r\n\r\n");

    if (doubleLineBreakPos != std::string::npos) {
        _header = request.substr(0, doubleLineBreakPos);
    } else {
        _header = request;
    }
}

Request::Request(const char* str, int nb, int fd, Server *server, struct sockaddr_in addr) : _connection(fd), _addr(addr)
{
	_contentLength = 0;
	appendRequest(str, nb);
	_parseRequest(_strRequest);
	if (_host != "localhost" && _host != "127.0.0.1" && _host != server->getServerName())
		throw Request::HostNotFoundException();
	_serverName = server->getServerName();
	if (server->getMaxBodySize() < _contentLength)
	{
		std::cout << "max body size : " << server->getMaxBodySize() << std::endl;
		throw Request::BodyTooLargeException();
	}
}

Request::Request(const Request &src) : _connection(src._connection)
{
	*this = src;
}

Request::~Request()
{
}

Request &Request::operator=(const Request &rhs)
{
	if (this != &rhs)
	{
	}
	return (*this);
}

void Request::appendRequest(const char *str, int nb)
{
	_strRequest.append(str, nb);
}

void Request::setBody()
{
	if (_strRequest.empty() || !_contentLength)
		return ;
	if (_contentLength > 0 && _strRequest.size() > _contentLength && _querryString.empty())
	{
		_querryString = _strRequest.substr(_strRequest.find("\r\n\r\n") + 4);
		if (_querryString.size() > _contentLength)
			_querryString.resize(_contentLength);
	}
}

void Request::_extractData(const std::string &header)
{
	std::istringstream iss(header);
	std::string line;

	while (std::getline(iss, line))
	{
		size_t colonPos = line.find(':');
		if (colonPos != std::string::npos)
		{
			std::string headerName = line.substr(0, colonPos);
			std::string headerValue = line.substr(colonPos + 1);

			// Remove leading and trailing spaces and tabs from the value
			size_t firstChar = headerValue.find_first_not_of(" \t");
			if (firstChar != std::string::npos)
				headerValue = headerValue.substr(firstChar);

			size_t lastChar = headerValue.find_last_not_of(" \t");
			if (lastChar != std::string::npos)
				headerValue = headerValue.substr(0, lastChar + 1);
			if (headerName == "Content-Length")
			{
				std::istringstream valueStream(headerValue);
				if (!(valueStream >> _contentLength))
					_contentLength = 0;
			}
			else if (headerName == "Content-Type")
				_extractBoundary(headerValue);
			else if (headerName == "Host")
			{
				_host = headerValue;
				_host.resize(_host.size() - 1);
				if (_host.find(':') != std::string::npos)
					_host.resize(_host.find(':'));
			}
		}
	}
}

bool Request::isComplete()
{
	if (_contentLength == 0)
		return (true);
	if (_querryString.size() >= _contentLength)
		return (true);
	return (false);
}

void Request::_parseRequest(const std::string &request)
{
	std::string headerName;
	std::string headerValue;

	setHeader(request);
	std::istringstream iss(request);
	std::string line;
	if (std::getline(iss, line))
	{
		std::istringstream iss2(line);
		iss2 >> _method >> _path >> _httpVersion;
	}
	size_t pos = _path.find('?');

	if (pos != std::string::npos)
	{
		if (_method == "GET")
			_querryString = _path.substr(pos + 1);
		_path = _path.substr(0, pos);
	}
	_extractData(request);
}

const std::string &Request::getMethod() const
{
	return (_method);
}

const std::string &Request::getPath() const
{
	return (_path);
}

const std::string &Request::getHeader() const
{
	return (_header);
}

const std::string &Request::getStrRequest() const
{
	return (_strRequest);
}

void Request::setPath(std::string path)
{
	_path = path;
}

const std::string &Request::getHttpVersion() const
{
	return (_httpVersion);
}

std::string &Request::getQuerryString()
{
	return (_querryString);
}

const sockaddr_in& Request::getSockAddr() const
{
	return (_addr);
}

const std::string &Request::getServerName() const
{
	return (_serverName);
}
