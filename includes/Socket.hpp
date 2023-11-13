#ifndef CLIENT_HPP
#define CLIENT_HPP

#include "Request.hpp"
#include "Response.hpp"

class Socket {
	public:
    	Socket(void);
    	~Socket(void);
        Socket& operator=(const Socket& other);
		void		setRequest(Request *request);
		void		setResponse(Response *response);
		void		setFd(int fd);
		Request		*getRequest(void);
		Response	*getResponse(void);
		int			getFd(void);
		void		deleteResponse(void);
		void		deleteRequest(void);

	private:
		Request		*_request;
		Response	*_response;
		int			_fd;
};

#endif
