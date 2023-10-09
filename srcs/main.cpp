/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.cpp                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:44:27 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/09 15:33:52 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"
#include <sys/socket.h> // For socket functions
#include <netinet/in.h> // For sockaddr_in

int main(int ac, char **av)
{
	std::string configPath;

	switch (ac)
	{
		case 1:
			configPath = "configs/default.conf";
			break;
		case 2:
			configPath = av[1];
			break;
		default:
			std::cerr << "Wrong number of arguments" << std::endl;
			return (1);
	}
	try
	{
		Config conf(configPath);
		
		conf.run();
	}
	catch (std::exception &e)
	{
		std::cerr << e.what() << std::endl;
	}
	return (0);
}