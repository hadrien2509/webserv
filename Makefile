# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jusilanc <jusilanc@s19.be>                 +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/07/14 18:00:17 by hgeissle          #+#    #+#              #
#    Updated: 2023/10/08 11:59:58 by jusilanc         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# ============================================================================= #

NAME = Webserv

# ============================================================================= #

SRCS =	main.cpp Config.cpp

CLASS =

TEMPLATE =

# ============================================================================= #
		
BASE_SRC = $(addprefix srcs/, $(SRCS))
CLASS_SRC = $(addprefix srcs/class/, $(CLASS))
TEMPLATE_SRC = $(addprefix srcs/template/, $(TEMPLATE))

# ============================================================================= #

INCLUDE_DIR = include

# ============================================================================= #

BASE_OBJS = $(BASE_SRC:.cpp=.o)
CLASS_OBJS = $(CLASS_SRC:.cpp=.o)
TEMPLATE_OBJS = $(TEMPLATE_SRC:.cpp=.o)

OBJS		= $(BASE_OBJS) $(CLASS_OBJS) $(TEMPLATE_OBJS)

# ============================================================================= #

RM			= rm -f
COMPILER	= c++
FLAGS		= -Wall -Wextra -Werror -std=c++98 -fsanitize=address -g3

.cpp.o:
	${COMPILER} ${FLAGS} -I$(INCLUDE_DIR) -c $< -o ${<:.cpp=.o}

$(NAME): ${OBJS}
	${COMPILER} ${FLAGS} $(OBJS) -o $(NAME)

# ============================================================================= #

all: $(NAME)
    
fclean: clean
	$(RM) $(NAME)
    
clean:
	$(RM) -f $(OBJS) $(OBJS_B)
    
re: fclean all

.PHONY: all clean fclean re .cpp.o

# ============================================================================= #
