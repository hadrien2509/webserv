/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Request.hpp                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/10 14:58:25 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/13 19:37:08 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef REQUEST_HPP
# define REQUEST_HPP

# include "Config.hpp"
# include "Cgi.hpp"

class Request
{
	private :
		const int		_connection;
		std::string		_method;
		std::string		_path;
		std::string		_httpVersion;
		
		void _parseRequest(const std::string &);

	public :
		Request(const int &);
		Request(const Request &);
		~Request();
		Request &operator=(const Request &);
		
		const std::string&	getMethod() const;
		const std::string&	getPath() const;
		const std::string&	getHttpVersion() const;
		void	setPath(std::string path);
};

#endif