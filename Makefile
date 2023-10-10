NAME = webserv

FLAGS = -Wall -Werror -Wextra -std=c++98
FSANITIZE = -g3 -fsanitize=address

FILES = main.cpp Config.cpp Location.cpp Server.cpp Run.cpp
INCLUDE_DIR = include

OBJS_DIR = objs
SRCS_DIR = srcs
SRCS = $(addprefix ${SRCS_DIR}/, $(FILES))
OBJS = $(addprefix ${OBJS_DIR}/, ${FILES:%.cpp=%.o})
RM		= rm -rf

all: $(NAME)

$(NAME): $(OBJS)
	c++ $(FLAGS) -o $(NAME) $(OBJS) $(FSANITIZE)

${OBJS_DIR}/%.o: ${SRCS_DIR}/%.cpp
	@mkdir -p ${@D}
	c++ $(FLAGS) -I $(INCLUDE_DIR) $(FSANITIZE) -c $< -o $@

clean:
	@${RM} -r ${OBJS_DIR}
	rm -f $(OBJS)

fclean: clean
	rm -f $(NAME)

re: fclean all

.PHONY: all clean fclean re