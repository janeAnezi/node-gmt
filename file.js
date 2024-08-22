
const fs = require('fs'); //import the core modules that we need to interact with our file system

// console.log(fs);
// reading files
fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);  // this is going to output  a buffer which is the package of data that was sent when we run the file
} )

// writing files
// fs.writeFile('./docs/blog.txt', 'Good day its Node Time!', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Done writing the file')

// })

// fs.writeFile('./docs/assgnment.txt', 'This is my first new file', () => {
//     console.log('File was written')
// })

// console.log('runs first');



// fs.writeFile('./docs/blog1.txt', 'This is a new file that i just created', () => {
//     console.log('File was written too');
// })

// directories

// fs.mkdir('./assets', (err) => {
//     if(err) {
//        console.log(err); 
//     }
//     console.log('assets folder created!');
// })


// fs.rmdir('./data', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('folder renoved');
// })








// creating and removing file if it exists

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err); 
//         }
//         console.log('assets folder created!');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//             if(err) {
//                console.log(err); 
//             }
//             console.log('assets folder removed!');
//         })
// }

// // deleting files
// if(fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('file deleted');
//     })
// }






// if(fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('file deleted!');
//     })
//}

// fs.unlink('./docs/assgnment.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File deleted!');
// })

