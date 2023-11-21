/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.cpp                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:44:27 by hgeissle          #+#    #+#             */
/*   Updated: 2023/11/21 18:17:07 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"
#include <sys/socket.h> // For socket functions
#include <netinet/in.h> // For sockaddr_in

int g_escape = 1;

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

static void signalHandler(int signum)
{
	if (signum == SIGINT)
	{
		std::cout << std::endl << "Exiting..." << std::endl;
		g_escape = 0;
	}
}

int main(int ac, char **av)
{
	std::string configPath;

	displayName();
	signal(SIGPIPE, SIG_IGN);
	signal(SIGINT, signalHandler);
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
		std::cerr << RED_BOLD << e.what() << DEFAULT << std::endl;
	}
	return (0);
}