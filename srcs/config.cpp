/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   config.cpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/24 22:22:14 by hgeissle          #+#    #+#             */
/*   Updated: 2023/09/25 16:22:42 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "../headers/Config.hpp"

std::string _checkProgramArgument(int ac, char **av)
{
	std::string input;
	switch (ac) :
	{
		case 1:
			input = "conf/default.conf";
			break;
		case 2:
			input = av[1];
			break;
		default:
			throw std::runtime_error("Wrong number of arguments");
	}
	return (input);
}

void Config::Config(int ac, char **av)
{
	std::string input = _checkProgramArgument(ac, av);
	std::ifstream	configFile(input);
	if (!configFile.is_open())
		throw std::runtime_error("Failed to open configuration file");
	std::string line;
	std::stringstream ss;
    std::getline(confgFile, line, '{')
	ss << line;
	
	
}
