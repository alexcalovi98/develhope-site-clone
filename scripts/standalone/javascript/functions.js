hello("Felice", "Russo")
hello("Nicolau", "Alfredo")
hello("Rosario", "Florida")
hello("Federico Maria", "Calato")

function hello(studentName, studentSurname) {
    console.log("Hello " + studentName + " " + studentSurname)
}

console.log("---------------------------")

// arrowHello("Alex", "Calovi") -> this throws an error
let arrowHello = (studentName, studentSurname) => {
    return "Hello " + studentName + " " + studentSurname
}

console.log("[ARROW] It's a function", arrowHello)
console.log("[ARROW] Invocation", arrowHello("Alex", "Calovi"))

let result = arrowHello("Alex", "Calovi")
console.log("[ARROW] Result:", result);