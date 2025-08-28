const express = require('express')

// create express server
const server = express();

//handle default request
server.get('/', (req, res) =>{
    res.send("welcome to express server")
});


// listen to the request on port

server.listen(3000, () =>{
    console.log('Server is listening on 3000')
})

