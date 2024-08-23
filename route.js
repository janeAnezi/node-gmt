const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('sever has beeen visited');

    res.setHeader('Content-Type', 'text/html')

     // basic routing
    let path = './http/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us': // redirecting the about-me to about page
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break
    }
    
   res.write('<h1>Here is your response</h1>')
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        }else {
            res.write(data)
            res.end()
        }
    })

})
server.listen(8000, () => {console.log('listening at port 8000');})

// the status code describes the type of response sent to the brouser and how successful the response is
// 200 - ok
// 301 - resource moved
// 404 - not found
// 500 - internal server error

//  100 rang - informational responses
// 200 range - success codes
// 300 range - codes for redirects
// 400 range - user or client error codes
// 500 range - server error codes

// Express help us to manage all of these thedious process in a much easier and a more elegant way
// Using express package to handle all our routes/resquests and responses
// Express is a third party package
// Nodemon saves us the stress of having to restart our server manually, so this is going to help us with a development workflow