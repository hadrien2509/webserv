/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.cpp                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: samy <samy@student.42.fr>                  +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:44:27 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/11 08:57:33 by samy             ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"
#include <sys/socket.h> // For socket functions
#include <netinet/in.h> // For sockaddr_in

void displayName() {
    std::cout << "$$\\      $$\\ $$$$$$$$\\ $$$$$$$\\   $$$$$$\\  $$$$$$$$\\ $$$$$$$\\  $$\\    $$\\" << std::endl;
    std::cout << "$$ | $\\  $$ |$$  _____|$$  __$$\\ $$  __$$\\ $$  _____|$$  __$$\\ $$ |   $$ |" << std::endl;
    std::cout << "$$ |$$$\\ $$ |$$ |      $$ |  $$ |$$ /  \\__|$$ |      $$ |  $$ |$$ |   $$ |" << std::endl;
    std::cout << "$$ $$ $$\\$$ |$$$$$\\    $$$$$$$\\ |\\$$$$$$\\  $$$$$\\    $$$$$$$  |\\$$\\  $$  |" << std::endl;
    std::cout << "$$$$  _$$$$ |$$  __|   $$  __$$\\  \\____$$\\ $$  __|   $$  __$$<  \\$$\\$$  /" << std::endl;
    std::cout << "$$$  / \\$$$ |$$ |      $$ |  $$ |$$\\   $$ |$$ |      $$ |  $$ |  \\$$$  /" << std::endl;
    std::cout << "$$  /   \\$$ |$$$$$$$$\\ $$$$$$$  |\\$$$$$$  |$$$$$$$$\\ $$ |  $$ |   \\$  /" << std::endl;
    std::cout << "\\__/     \\__|\\________|\\_______/  \\______/ \\________|\\__|  \\__|    \\_/" << std::endl;
}

int main(int ac, char **av)
{
	std::string configPath;
	
	displayName();
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
		conf.init();
		conf.run();
	}
	catch (std::exception &e)
	{
		std::cerr << e.what() << std::endl;
	}
	return (0);
}