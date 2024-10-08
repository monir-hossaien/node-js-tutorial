
// How Request Response Model Works in node js
/*
// import http module
const http = require("http");
// creating a server
const server = http.createServer((req, res)=>{

    // Request handling logic
    if(req.url === '/'){
        res.write('This is Home page');
    }
    else if(req.url === '/about'){
        res.write('This is About page');
    }
    else if(req.url === '/service'){
        res.write('This is service page');
    }
    else if(req.url === '/portfolio'){
        res.write('This is Portfolio page');
    }
    else if(req.url === '/contact'){
        res.write('This is Contact page');
    }

    res.end()

});

// Starting the server
server.listen(8000,()=>{
    console.log('Server run successful');
})

 */


// node js url module
//url.parse()
/*
const http = require("http");
const url = require('url');
const server = http.createServer((req,res)=>{

    let myUrl= 'https://example.com/pathname?name=JohnDoe&age=30';

    const parseUrl = url.parse(myUrl);

    res.write(parseUrl.hostname);

    res.end();

});

server.listen(8080, ()=>{
    console.log('server run success on 8080 port');
});

 */



// url.format() function
/*
const url = require('url');

const urlObject = {
    protocol: 'http',
    hostname: 'example.com',
    port: 8080,
    pathname: '/pathname',
    query: { search: 'test' }
};

const formatUrl = url.format(urlObject);
console.log(formatUrl)

 */

/*
const {URL} = require('url');

const parseUrl = new URL('https://example.com/pathname?name=JohnDoe&age=30');

console.log(parseUrl);

 */



// Working with Query Parameters
/*
const {URL} = require('url');

const myUrl = new URL('https://example.com/pathname?name=JohnDoe&age=30');

// get parameter name
const queryParameterName = myUrl.searchParams.get("name");
console.log(queryParameterName)


// get parameter age
const queryParameterAge = myUrl.searchParams.get("age");
console.log(queryParameterAge);


// Adding a parameter
 myUrl.searchParams.append('city', 'Dhaka');
console.log(myUrl.toString());


// Removing a parameter
myUrl.searchParams.delete('age');
console.log(myUrl.toString());

 */


// fs module read file asyncronus way

/* const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        fs.readFile('index.html', (err, data)=>{
            res.writeHead(200, {'content-type':'text/html'})
            res.write(data)
            res.end()
        });
    }

    if(req.url === '/about'){
        fs.readFile('about.html', (err, data)=>{
            res.writeHead(200, {'content-type':'text/html'})
            res.write(data)
            res.end()
        });
    }
});

server.listen(9000, ()=>{
    console.log('server run success on 9000 port');
})

 */





// fs module read file syncronus way

/*// import http module
const http = require('http');
// import fs module
const fs = require('fs');

// create server
const server = http.createServer((req, res)=>{

    if(req.url === '/'){

        const data = fs.readFileSync('index.html');
        res.writeHead(200, {'content-type':'text/html'})
        res.write(data)
        res.end()


    }

    if(req.url === '/about'){

        const data = fs.readFileSync('about.html')
        res.writeHead(200, {'content-type':'text/html'})
        res.write(data)
        res.end()
    }
});

server.listen(9000, ()=>{
    console.log('server run success on 9000 port');
})*/





// fs module file write asyncronus way
/*const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((req, res)=>{

    let a = 10
    let b = 60
    let sum = a + b

    if(req.url === '/'){
        fs.writeFile('demo.txt', `${sum}`,(err)=>{
            if(err){
                res.writeHead(200, {'content-type':'text/html'})
                res.write("file write error")
                res.end()
            }else{
                res.writeHead(200, {'content-type':'text/html'})
                res.write("file write success")
                res.end()
            }
        });
    }

});

server.listen(9000, ()=>{
    console.log('server run success on 9000 port');
})*/



// fs module file write syncronus way
/*
const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((req, res)=>{

    let a = 10
    let b = 9000
    let sum = a + b

    if(req.url === '/'){
        fs.writeFileSync('demo.txt', `${sum}`);

        try {
            res.writeHead(200, {'content-type':'text/html'})
            res.write("file write success")
            res.end()
        }catch (e) {
            res.writeHead(200, {'content-type':'text/html'})
            res.write("file write error")
            res.end()
        }

    }

});

server.listen(9000, ()=>{
    console.log('server run success on 9000 port');
})*/




/*// fs module file rename asyncronus way
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

    fs.rename('demo1.txt', 'demo.txt', ()=>{
        try {
            res.writeHead(200, {'content-type':'application/json'})
            res.write('file rename success')
            res.end()
        }catch (e) {
            res.writeHead(400, {'content-type':'application/json'})
            res.write('file not found')
            res.end()
        }
    })
})
server.listen(7000, ()=>{
    console.log("server run success on 7000 port")
})*/




// fs module file rename syncronus way
/*
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

    fs.renameSync('demo.txt', 'demo1.txt')
    try {
        res.writeHead(200, {'content-type':'application/json'})
        res.write('file rename success')
        res.end()
    }catch (e) {
        res.writeHead(400, {'content-type':'application/json'})
        res.write('file not found')
        res.end()
    }
})
server.listen(7000, ()=>{
    console.log("server run success on 7000 port")
})
*/





// fs module file delete asyncronus way
/*const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

    fs.unlink('service.html',(err)=>{

        if(err){
            res.writeHead(400, {'content-type':'application/json'})
            res.write('file not found')
            res.end()
        }
        else{
            res.writeHead(200, {'content-type':'application/json'})
            res.write('file delete success')
            res.end()

        }
    })
})
server.listen(7000, ()=>{
    console.log("server run success on 7000 port")
})*/



// fs module file delete syncronus way
/*const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

    try {
        fs.unlinkSync('demo1.txt')
        res.writeHead(200, {'content-type':'application/json'})
        res.write('file delete success')
        res.end()
    }catch (e) {
        res.writeHead(400, {'content-type':'application/json'})
        res.write('file not found')
        res.end()
    }
})
server.listen(7000, ()=>{
    console.log("server run success on 7000 port")
})*/


// fs module file exits
/*
const fs = require('fs')
fs.access('/index.html', (err)=>{
    console.log(err ? 'file is exits' : 'file not exits')
})*/


// const fs = require('fs')
//
// try{
//     fs.accessSync('index.html')
//     console.log('file is exits')
// }catch (e) {
//     console.log('file not exits')
// }




/*const math = require("./math");

// destruct
const {add, subtraction} = math;
console.log(add(5, 8))
console.log(subtraction(9, 8))*/




const data = require('./data.json');

console.log(data.address.dis)




