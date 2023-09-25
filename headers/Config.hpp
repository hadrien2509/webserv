/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Config.hpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:41:26 by hgeissle          #+#    #+#             */
/*   Updated: 2023/09/25 16:09:43 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef CONFIG_HPP
# define CONFIG_HPP

# include <iostream>
# include <fstream>
# include <sstream>
# include <string>
# include <vector>

class Config
{
	private:
		void _checkProgramArgument(int, char**);
		std::vector<Server> _cluster;
		
	public :
		Config();
		Config(int, char**);
		~Config();
    	Config(const Config &copy);
		Config &operator=(const Config &copy);
};

#endif