console.log("Hello World!")

// this is comment

let emptyVariable
console.log("Empty variable is:", emptyVariable)

console.log("---------------------------")

let studentName = "Felice Russo" //string
let studentAge = 20 //number
let isStudentAttending = false //boolean
let isStudentAbsent = !isStudentAttending

console.log("The student name is " + studentName + ", has " + studentAge + " years old and is attending: " + isStudentAttending)
console.log("The student is absent?", isStudentAbsent)

let studentVote
studentVote = 10
studentVote = 8

console.log("The student vote is: " + studentVote)

const STUDENT_FISCAL_CODE = "FLCRSS021099L378Q"
// This throws an error, decomment it to try the error in console
// STUDENT_FISCAL_CODE = "YYY"

// WARNING: var is the old way to declare a variable, prefer to use let
var studentAddress = "Via Rossi 4"

console.log("---------------------------")

let firstVote = 5
let secondVote = 10

let votesSum = firstVote + secondVote
let votesAverage = votesSum / 2

console.log("The sum of two votes:", votesSum)
console.log("The average of two votes:", votesAverage)

console.log("---------------------------")

let firstVoteStr = "5" //This is a bad code
let secondVoteStr = "10" //This is a bad code

// We can use some special functions to change the type of a variable
// Number(), Boolean(), String()

let votesSumFromString = Number(firstVoteStr) + Number(secondVoteStr)
let votesAverageFromString = votesSumFromString / 2

console.log("The sum (from string) of two votes:", votesSumFromString)
console.log("The average (from string) of two votes:", votesAverageFromString)

let conversionStringToNumber = Number("develhope")
console.log("Trying to convert 'develhope' to a number:", conversionStringToNumber)

// Falsy values: undefined, null, NaN, '', 0, false
// The other values are always true
let conversionToBoolean = Boolean(NaN)
console.log("Conversion to boolean", conversionToBoolean)

console.log("---------------------------")

let isTwentyYearsOld = studentAge === 20 //studentAge === "20" results as false
console.log("Is the student 20 years old?", isTwentyYearsOld)

let isAdult = studentAge >= 18
console.log("Is the student an adult?", isAdult)

let firstChar = "A" //ASCII decimal 65
let secondChar = "a" //ASCII decimal 95
console.log("Char comparison as a number: ", firstChar >= secondChar)

console.log("---------------------------")

// Logical operators
// AND (&&): to result true all the conditions must be true
let isStudentPromoted = isStudentAttending && votesAverage >= 6
console.log("THE STUDENT IS PROMOTED?", isStudentPromoted)

//OR (||): to result true only one condition must be true
let hasStudentFailed = !isStudentAttending || isStudentAbsent || votesAverage < 6
console.log("HAS THE STUDENT FAILED?", hasStudentFailed)

// You can use && and || together wrapping conditions in ()