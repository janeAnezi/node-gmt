let myName = 'jane';
console.log(myName);

const greet = (name) => {
    console.log(`Hello ${name}`);
}

greet('Ahnnie')

console.log(globalThis);

setTimeout(() => {
    console.log('in the time out')
    clearInterval(int)
}, 3000)

let int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);

// we use node to access the server side and the backend.