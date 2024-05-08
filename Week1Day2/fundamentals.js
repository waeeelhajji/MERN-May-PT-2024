//?--------Scoop

// var name = "bob"

// function SayHi() {
//     name = "alice"
//     console.log(name)
// }

// SayHi()//?
// console.log(name) //?


//?--------Hoisting
// console.log("What is x?",x)
const x = 5


//primitive Datatypes
// Number
// String
// Boolean
// Null / undefined
// x = "aaa"
// console.log(x)


//complex Datatypes
//Array
//Objects

// const arr = [11, 22, 33, 44]
// arr[0] = "bob"



// console.log(arr)

// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
// }

// person = "Another Person"
// console.log(person)

//?=====Destructuring
// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     createdAt: 1543945177623
// };
// const firstName = person.firstName
// const email = person.email
// console.log(firstName, email)

// const { firstName, password } = person
// console.log(firstName, password)


// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const animalIndexOne = animals[1]
// const animalIndexlast = animals[4]

// const [,,LastAnimal,,] = animals
// console.log(LastAnimal)


//?===== Rest/Spread

// pass by reference and pass by value 
//--------0x0014FE
const a = [10, 20, 30]
const b = [...a]

console.log(a === b)
b.push(10000)



console.log(a)//?
console.log(b)//?

