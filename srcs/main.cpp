/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.cpp                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:44:27 by hgeissle          #+#    #+#             */
/*   Updated: 2023/10/08 13:56:12 by jusilanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Config.hpp"

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
	}
	catch (std::exception &e)
	{
		std::cerr << e.what() << std::endl;
	}
	return (0);
}