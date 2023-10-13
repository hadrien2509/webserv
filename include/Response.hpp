/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Response.hpp                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/10/12 16:12:24 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/13 23:03:31 by jusilanc         ###   ########.fr       */
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
		const std::string&	getVersion() const;
		const std::string&	getStatus() const;
		const std::string&	getPath() const;
		const std::string&	getContentType() const;
		const std::string&	getContentLength() const;
		const std::string&	getHeader() const;
		const std::string&	getContent() const;
		
		void setResponse(std::string & response);
		void setVersion(std::string & version);
		void setStatus(std::string & status);
		void setPath(std::string & path);
		void setContentType(std::string & contentType);
		void setContentLength(std::string & contentLength);
		void setHeader(std::string & header);
		void setContent(std::string & content);
};

#endif