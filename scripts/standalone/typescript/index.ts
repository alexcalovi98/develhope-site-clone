//primitive types: boolean, string, number

//typescript has also any, but it's a bad practice
//empty typescript types: undefined (implicit), null (explicit)

let studentName: string = "Alex Calovi"
console.log("Name", studentName)

let studentAvg: number | null = null
console.log("AVG", studentAvg)

// TYPE ALIAS
type Avg = number | null | undefined

type Student = {
    readonly name: string,
    readonly surname: string,
    avg?: Avg,
    course: string
}

let student: Student = {
    name: "Alex",
    surname: "Calovi",
    course: "Web Development"
}

student.avg = 85

console.log("Student", student)

// FUNCTIONS WITH TYPESCRIPT
// return void means the function returns nothing
printFullName(student.name, student.surname)

let fullName: string = calculateFullName(student.name, student.surname)
console.log("[RETURN] The full name is " + fullName)

function printFullName(name: string, surname: string) {
    console.log("The full name is " + name + " " + surname);
}

function calculateFullName(name: string, surname: string): string {
    return name + " " + surname;
}

// ARRAY
let students: Student[] = [
    {
        name: "Alex",
        surname: "Calovi",
        avg: 85,
        course: "Web Development"
    },
    {
        name: "Mario",
        surname: "Rossi",
        avg: 85,
        course: "AI Week"
    }
]

students.forEach((student: Student, index: number) => {
    console.log("Student " + (index + 1) + " name = " + student.name)
})

// TUPLE
const tuple: [string, number] = ["key", 0]
console.log("This is a tuple:", tuple)

// FUNCTION TYPE ALIAS
// type Logger = (message: string) => void

// const logInfo: Logger = (message) => {
//   console.log("INFO:", message);
// };

// IS THE SAME OF

// const logInfo = (message: string): void => {
//   console.log("INFO:", message);
// };