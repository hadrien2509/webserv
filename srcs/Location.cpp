/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.cpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:21:31 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/11 20:45:47 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Location.hpp"

Location::Location()
{
}

Location::Location(const Location &copy)
{
	*this = copy;
}

Location::~Location()
{
	closedir(_root);
}

Location &Location::operator=(const Location &copy)
{
	if (this != &copy)
	{
		
	}
	return (*this);
}

const DIR*		Location::getRoot() const
{
	return (this->_root);
}

std::string		Location::getRootPath() const
{
	return (this->_rootPath);
}

const std::vector<std::string>&	Location::getIndex() const
{
	return (this->_index);
}

const std::string&	Location::getAutoIndex() const
{
	return (this->_autoIndex);
}

const std::string&	Location::getAllowMethods() const
{
	return (this->_allowMethods);
}

const std::string&	Location::getCgiExtension() const
{
	return (this->_cgiExtension);
}

const std::string&	Location::getCgiPath() const
{
	return (this->_cgiPath);
}

void Location::setRoot(DIR *dir, std::string rootPath)
{
	this->_root = dir;
	this->_rootPath = rootPath;
}

void			Location::addIndex(std::string index)
{
	this->_index.push_back(index);
}
