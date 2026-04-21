console.log("Start async script")

setTimeout(() => console.log("Hello world"), 5000) //after 5 second, 1s = 1000ms

setTimeout(greeting, 2000, "Alex", "Calovi")

let id = setInterval(greeting, 1000, "Mario", "Rossi")

setTimeout(() => clearInterval(id), 10000)

function greeting(name, surname) {
    console.log("Hi " + name + " " + surname)
}

console.log("---------------------------")

// let index = 0;

// let newId = setInterval(() => {
//     index++
//     console.log("Index", index)

//     if (index === 10) {
//         console.log("Clear interval")
//         clearInterval(newId)
//     }
// }, 1000)



