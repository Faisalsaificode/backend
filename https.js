// create a server using nodejs

// import http library/module
const http = require('http');

// create server
const server = http.createServer((req, res) => {
    console.log(req.url);

    res.write("Welcome to my application ");

    if (req.url == "/product") {
        res.end("This is product page.");
        return; // stop further execution
    } else if (req.url == "/user") {
        res.end("This is user page.");
        return; // stop further execution
    }

    // default response
    res.end("Welcome to the NodeJS Server");
});

// specify the port to listen to client request
server.listen(3101, () => {
    console.log('Server is listening on port 3100');
});
  