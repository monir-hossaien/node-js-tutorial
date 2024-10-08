const fs = require('fs')
const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        fs.readFile('index.html', (err, data)=>{
            if (err){
                res.writeHead(200, {'content-type':'text/html'});
                res.write('file not found')
                res.end()
            }else{
                res.writeHead(200, {'content-type':'text/html'});
                res.write(data)
                res.end()
            }
        })
    }
    else if(req.url === '/about'){
        fs.readFile('about.html', (err, data)=>{
            if (err){
                res.writeHead(200, {'content-type':'text/html'});
                res.write('file not found')
                res.end()
            }else{
                res.writeHead(200, {'content-type':'text/html'});
                res.write(data)
                res.end()
            }
        })
    }
    else if(req.url === '/service'){
        fs.readFile('service.html', (err, data)=>{
            if (err){
                res.writeHead(200, {'content-type':'text/html'});
                res.write('file not found')
                res.end()
            }else{
                res.writeHead(200, {'content-type':'text/html'});
                res.write(data)
                res.end()
            }
        })
    }
    else if(req.url === '/contact'){
        fs.readFile('contact.html', (err, data)=>{
            if (err){
                res.writeHead(200, {'content-type':'text/html'});
                res.write('file not found')
                res.end()
            }else{
                res.writeHead(200, {'content-type':'text/html'});
                res.write(data)
                res.end()
            }
        })
    }

});

server.listen(9090, ()=>{
    console.log('server run success on 9090 port')
})