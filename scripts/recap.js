let studentName = "Felice Russo"

sayHelloToTheStudent(studentName)

let helloString = buildHelloToTheStudentString(studentName)
console.log(helloString)

// I'm delegating the console.log to the function
function sayHelloToTheStudent(name) {
    console.log("Hello!", name)
}

// Returning function
function buildHelloToTheStudentString(name) {
    return "Hello to the student " + name + "!"
}

console.log("---------------------------")

const CURRENT_YEAR = 2026
let studentBirthYear = 1999
let schoolStartYear = 1950

let studentYears = calculateYearDifference(studentBirthYear, CURRENT_YEAR)
console.log("The student is " + studentYears + " years old")

let studentSchoolDifferenceInYears = calculateYearDifference(schoolStartYear, studentBirthYear)
console.log("The difference between the student and the schoold is " + studentSchoolDifferenceInYears + " years old")

function calculateYearDifference(firstYear, secondYear) {
    return secondYear - firstYear;
}

// Callback
setTimeout(function() {
    console.log("Late hello")
}, 10000)

