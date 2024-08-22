const people = ['jane','joe', 'able','samson'];

const age = [34, 89, 45, 12]

console.log(people);

// module.exports = 'working with modules';
// module.exports = people;


const greet = () => {
    console.log('greetings!!!');
}
// greet();

module.exports = {people, age, greet}
