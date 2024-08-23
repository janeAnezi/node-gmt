const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('sever has be visited');

    res.setHeader('Content-Type', 'text/html')

})
server.listen(8000, () => {console.log('listening at port 8000');})