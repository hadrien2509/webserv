/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Response.hpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/12 16:12:24 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/13 10:40:12 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef RESPONSE_HPP
# define RESPONSE_HPP

# include "Config.hpp"

class Response
{
	private :
		std::string	_version;
		std::string	_status;
		std::string	_path;
		std::string _contentType;
		std::string _contentLength;
		std::string _response;

		std::string _header;
		std::string _content;
		
	public :
		Response(std::string code, std::string contentPath, std::map<std::string, std::string>& mimeTypes);
		~Response();
		
		const std::string&	get() const;
};

#endif