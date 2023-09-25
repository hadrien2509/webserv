/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.cpp                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/25 14:44:27 by hgeissle          #+#    #+#             */
/*   Updated: 2023/09/25 15:49:16 by hgeissle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <Config.hpp>

int main(int ac, char **av)
{
	try
	{
		Config conf(ac, av);
	}
	catch (std::exception &e)
	{
		std::cerr << e.what() << std::endl;
	}
	return (0);
}