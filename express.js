const express = require('express')

// espress app
const app = express();

// listen for request
app.listen(3000)

app.get('/', (req,res) => {
    // res.send('<h1>Welcome to EXPRESS</h1>') // this automatically handles the content type response type as well as the status code
})

app.get('/about', (req,res) => {
    // res.send('now to the about page')
})