# Webserv

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/your-repo/actions)
[![Coverage](https://img.shields.io/badge/coverage-92%25-yellowgreen)](https://your-repo.com/coverage)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://your-repo.com/releases)

Webserv is a high-performance, lightweight, and configurable HTTP server implementation in C++. It is designed to handle multiple client connections concurrently and serve static and dynamic content efficiently.

## Table of Contents

- [Project Overview](#project-overview)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)
- [Main Features](#main-features)
- [Front-end Logic](#front-end-logic)
- [Back-end Logic](#back-end-logic)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Additional Resources](#additional-resources)
- [Contact](#contact)

## Project Overview

Webserv is a robust and scalable HTTP server that aims to provide a reliable and efficient solution for serving web content. It supports various features, including handling multiple client connections, serving static files, executing CGI scripts, and managing server configurations through a configuration file.

The project is designed to be highly configurable, allowing users to customize server settings, define server blocks, and configure locations for specific URL paths. Additionally, Webserv supports various HTTP methods, error handling, and automatic directory indexing.

## How to Run

To run the Webserv project locally, follow these steps:

1. **Prerequisites**:
   - C++ compiler (e.g., GCC, Clang)
   - Make utility

2. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/webserv.git
   ```

3. **Build the project**:
   ```bash
   cd webserv
   make
   ```

4. **Run the server**:
   ```bash
   ./webserv [config_file]
   ```
   Replace `[config_file]` with the path to your desired configuration file. If no configuration file is provided, the default `configs/default.conf` will be used.

5. **Access the server**:
   Once the server is running, you can access it by opening a web browser and navigating to `http://localhost:[port]`, where `[port]` is the port specified in the configuration file.

6. **Running tests**:
   ```bash
   make test
   ```

## Project Structure

```
/Volumes/Storage/goinfre/hgeissle/webserv
├── .git/
├── includes/
│   ├── Cgi.hpp
│   ├── Config.hpp
│   ├── Location.hpp
│   ├── Request.hpp
│   ├── Response.hpp
│   ├── Server.hpp
│   └── Socket.hpp
├── servers/
│   ├── breakout/
│   │   ├── index.html
│   │   ├── pong.html
│   │   ├── error_pages/
│   │   ├── img/
│   │   ├── scripts/
│   │   └── styles/
│   ├── InstaPet/
│   ├── siege/
│   └── webmajordome/
├── srcs/
│   ├── Config.cpp
│   ├── Location.cpp
│   ├── main.cpp
│   ├── poll.cpp
│   ├── Request.cpp
│   ├── Response.cpp
│   ├── Run.cpp
│   ├── Server.cpp
│   ├── Socket.cpp
│   └── cgi/
│       └── Cgi.cpp
└── configs/
    └── default.conf
```

- `.git/`: Git repository metadata.
- `includes/`: Header files for the project.
- `servers/`: Directory containing various server configurations and test cases.
- `srcs/`: Source code files for the project.
- `configs/`: Configuration files for the server.

## Main Features

- **Concurrent Client Handling**: Webserv can handle multiple client connections concurrently using the `poll` system call.
- **Static File Serving**: Serve static files (HTML, CSS, JavaScript, images, etc.) efficiently.
- **CGI Script Execution**: Execute CGI scripts (e.g., PHP, Python, Bash) and handle their output.
- **Configuration File Support**: Configure server settings, server blocks, and locations through a configuration file.
- **HTTP Method Support**: Support for various HTTP methods (GET, POST, DELETE).
- **Error Handling**: Customizable error pages for different HTTP error codes.
- **Automatic Directory Indexing**: Generate an index page for directories if no index file is present.
- **Redirect Support**: Redirect requests to different URLs based on configuration.

## Front-end Logic

Webserv serves static files and handles client requests efficiently. It supports various front-end technologies, including HTML, CSS, JavaScript, and modern web frameworks like React, Angular, and Vue.js.

The project includes several test cases and examples in the `servers/` directory, showcasing different front-end implementations, such as the "Breakout" game and the "InstaPet" application.

## Back-end Logic

The back-end of Webserv is implemented in C++ and follows a modular design. The main components include:

- **Config**: Responsible for parsing the configuration file and managing server settings.
- **Server**: Handles server-level operations, such as listening for incoming connections and managing locations.
- **Location**: Manages specific URL paths and their configurations, including CGI script execution and file serving.
- **Request**: Parses and manages incoming HTTP requests.
- **Response**: Generates and sends HTTP responses to clients.
- **Socket**: Handles client connections and manages communication with clients.
- **Cgi**: Executes CGI scripts and handles their input and output.

Webserv utilizes the `poll` system call to handle multiple client connections concurrently and efficiently manage I/O operations.

## Contribution Guidelines

We welcome contributions to the Webserv project! If you'd like to contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure that the code follows the project's coding conventions.
3. Write tests for your changes and ensure that all existing tests pass.
4. Commit your changes and push them to your forked repository.
5. Open a pull request against the main repository, providing a clear description of your changes and their purpose.

Please note that all contributions are subject to review, and we may request changes or provide feedback before merging.

## License

This project is licensed under the [MIT License](LICENSE).

## Additional Resources

- [Webserv Documentation](https://your-repo.com/docs)
- [HTTP Protocol Specification](https://www.rfc-editor.org/rfc/rfc9112.html)
- [CGI Specification](https://www.rfc-editor.org/rfc/rfc3875.html)

## Contact

If you have any questions, issues, or suggestions regarding the Webserv project, please feel free to reach out to us:

- Email: [your-email@example.com](mailto:your-email@example.com)
- GitHub Issues: [https://github.com/your-repo/webserv/issues](https://github.com/your-repo/webserv/issues)

We appreciate your feedback and contributions!
