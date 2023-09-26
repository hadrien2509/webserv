# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: hgeissle <hgeissle@student.s19.be>         +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/07/14 18:00:17 by hgeissle          #+#    #+#              #
#    Updated: 2023/09/26 14:07:13 by hgeissle         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

NAME = Webserv

SRCS =	srcs/main.cpp\
		srcs/Config.cpp\
		
INCLUDE_DIR = include
		
OBJS		= $(SRCS:.cpp=.o)
RM			= rm -f
COMPILER	= c++
FLAGS		= -Wall -Wextra -Werror -std=c++98 -fsanitize=address -g3

.cpp.o:
	${COMPILER} ${FLAGS} -I$(INCLUDE_DIR) -c $< -o ${<:.cpp=.o}

$(NAME): ${OBJS}
	${COMPILER} ${FLAGS} $(OBJS) -o $(NAME)

all: $(NAME)
    
fclean: clean
	$(RM) $(NAME)
    
clean:
	$(RM) -f $(OBJS) $(OBJS_B)
    
re: fclean all

.PHONY: all clean fclean re .cpp.o