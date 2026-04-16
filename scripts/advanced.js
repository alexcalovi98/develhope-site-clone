// Template strings

let personName = "Alex"
let personAge = 28

console.log(`Ciao ${personName}, ${personAge} anni, come va?`)

let person = {
    name: "Alex",
    surname: "Calovi",
    age: 28,
}

console.log(`Ciao ${person.name}, ${person.age} anni, come va?`)

console.log("---------------------------")

// Destructuration

const {name : n, age} = person

console.log(`Name is ${n} and age is ${age}`)

let array = ["Alex", "Matteo", "Daniele"]

const [firstName, secondName] = array
console.log(firstName, secondName)

// Rest parameters

console.log(sum(5, 10, 2, 10))

function sum(...values) {
    return values.reduce((previous, current) => previous + current, 0);
}

console.log("---------------------------")

// Spread operator

let student = {
    ...person,
    course: "Web Development"
}

console.log(student)
console.log(...array)

let valuesToSum = [30, 40]

//console.log(sum(valuesToSum)) IT DOESN'T WORK
console.log(sum(...valuesToSum))

