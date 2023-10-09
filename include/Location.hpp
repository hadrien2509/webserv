/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Location.hpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/26 17:20:40 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/09 14:28:19 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef LOCATION_HPP
# define LOCATION_HPP

# include "Config.hpp"

class Location
{
	private:
		std::vector<std::string>	_index;
		DIR*						_root;
		std::string					_autoIndex;
		std::string					_allowMethods;
		std::string					_cgiExtension;
		std::string					_cgiPath;
		
	public :
		Location();
		Location(const Location &);
		~Location();
		Location &operator=(const Location &);
		
		DIR*							getRoot() const;
		std::vector<std::string>		getIndex() const;
		std::string						getAutoIndex() const;
		std::string						getAllowMethods() const;
		std::string						getCgiExtension() const;
		std::string						getCgiPath() const;

		void			setRoot(DIR *);
		void			addIndex(std::string);
};

#endif