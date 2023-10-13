NAME = webserv

FLAGS = -Wall -Werror -Wextra -std=c++98
FSANITIZE = -g3 -fsanitize=address

FILES = main.cpp Config.cpp Location.cpp Server.cpp Run.cpp Request.cpp Response.cpp\
			cgi/Cgi.cpp cgi/cgiHandler.cpp
# FILES_CGI = Cgi.cpp cgiHandler.cpp
INCLUDE_DIR = include

OBJS_DIR = objs
SRCS_DIR = srcs
SRCS = $(addprefix ${SRCS_DIR}/, $(FILES))
# SRCS_CGI = $(addprefix ${SRCS_DIR}/cgi/, $(FILES_CGI))
OBJS = $(addprefix ${OBJS_DIR}/, ${FILES:%.cpp=%.o})
RM		= rm -rf

all: $(NAME)

$(NAME): $(OBJS)
	@c++ $(FLAGS) -o $(NAME) $(OBJS) $(FSANITIZE)
	@echo "\n\033[0;32mDone !\n\033[0m"

${OBJS_DIR}/%.o: ${SRCS_DIR}/%.cpp
	@mkdir -p ${@D}
	@printf "\033[0;33mGenerating webserv objects... %-38.38s\r" $@
	@c++ $(FLAGS) -I $(INCLUDE_DIR) $(FSANITIZE) -c $< -o $@

clean:
	@${RM} -r ${OBJS_DIR}
	rm -f $(OBJS)

fclean: clean
	rm -f $(NAME)

re: fclean all

.PHONY: all clean fclean re