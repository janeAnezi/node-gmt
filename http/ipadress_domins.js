// the communication between the browser and the server is via http

// creating a local server, which can actively listen to request and respond to them


const http = require('http');

// const fs = require('fs');


// that is the method that creates a server for us
const server = http.createServer((request, response) => {
    console.log('request made');
    // console.log(request.url);
    // console.log(request.method);

    // console.log(request.url, request.method);

    // set header content type
    // response.setHeader('Content-Type', 'text/html');
    // response.write('Hey i am your server, and i just responded')

    // response.write('<h1>hello you</h1>')
    
    // basic routing
    // let path = './';
    // switch(request.url) {
    //     case '/':
    //         path += 'index.html';
    //         break;
    //     case '/about':
    //         path += 'about.html';
    //         break;
    //     default:
    //         path += '404.html';
    //         break
    // }


    // set the response text
    // response.write('HELLO PROGRAMERS');
    // response.write('<h1>Let Get Coding</h1>')
    // response.end();

    // sending an html file
    // fs.readFile('./http/index.html', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         response.end();
    //     } else {
    //         // response.write(data);
    //         response.end(data);
    //     }
    // })


}); 





server.listen(4000, 'localhost', () => {
    console.log('listening for request on port 4000');
})





// localhost is like a domain name on the web
// But this takes us to a very specific address
// usually 127.0.0.1 which points directly to "Own computer"
// 3000 is the port number, which is a number that identifies a specific process on a computer

// port numbers are a specific channel or a gate way into our computer
// our server also need port numbers to communicate through
// the port number is the address of the server

