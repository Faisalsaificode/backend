const http = require('http')

const server = http.createServer((req, res)=>{
    res.write('this is coming from nodejs server')
    console.log(req.url)
    if(req.url == '/first'){
        return res.end('\nthis is first response')
    }
    res.end("\nthis is default response")
})

server.listen(3200,(req, res)=>{
    console.log('server is listening at 3200')
})