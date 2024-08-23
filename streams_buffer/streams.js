// when we have a large data we would want it to start using it before it is read. and this is STREAMS
//  to start using data before it is finished loading
//  In this process, small chunk of data are packaged up in the form of a buffer

const fs = require('fs') // first we require our file system module

const readStream = fs.ReadStream('../docs/blog2.txt')    // here we are telling node where to read data from
//  we are reading from a file called blog2.txt in the docs folder

// const writeStream = fs.WriteStream('../docs/blog3.txt')

readStream.on('data', (chunck) => { // 'on' is an event listener
   console.log('....new info......');
   console.log(chunck.toString());
   // console.log(chuck.toString()) // here we are logging the data as it is being read

   // writeStream.write('\n NEW CHUNCK\n')
   // writeStream.write(chunck)

})

// readStream.pipe(writeStream);


// another core built in module is the http module - to create server whichnis what is used to manage the backend of a website

