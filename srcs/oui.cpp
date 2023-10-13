#include <iostream>
#include "Response.hpp"
#include "Request.hpp"
#include "Server.hpp"

Location *getLocation(Request *request, Server *serv)
{
    std::string bestMatch = "";
	Location *location = NULL;
	std::map<std::string, Location*>::const_iterator it = serv->getLocations().begin();
    while (it != serv->getLocations().end()) {
        if (request->getPath().find(it->first) == 0 && it->first.length() > bestMatch.length()) {
			bestMatch = it->first;
            location = it->second;
        }
        ++it;
    }
    return (location);
}
/*
Request *adaptPath(Request *request, Location *loc)
{
	if (loc == NULL)
		return (request);
std::cout << "ORIGINE = " << request->getPath() << std::endl;
std::cout << "ORIGINE = " << loc->getPath() << std::endl;
//request->setPath(request->getPath().substr(loc->getRootPath().length()));
std::string test = request->getPath().substr(loc->getPath().length());
std::cout << "NEW = " << test << std::endl;
return (request);
}
*/