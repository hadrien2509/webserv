/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.cpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:21:31 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/06 15:38:01 by hgeissle         ###   ########.fr       */
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
	
}

Location &Location::operator=(const Location &copy)
{
	if (this != &copy)
	{
		
	}
	return (*this);
}

std::string		Location::getRoot() const
{
	return (this->_root);
}

std::string		Location::getIndex() const
{
	return (this->_index);
}

std::string		Location::getAutoIndex() const
{
	return (this->_autoIndex);
}

std::string		Location::getAllowMethods() const
{
	return (this->_allowMethods);
}

std::string		Location::getCgiExtension() const
{
	return (this->_cgiExtension);
}

std::string		Location::getCgiPath() const
{
	return (this->_cgiPath);
}

void			Location::setRoot(DIR *dir)
{
	this->_root = dir;
}

void			Location::addIndex(std::string index)
{
	this->_index.push_back(index);
}
