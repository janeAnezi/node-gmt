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
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
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