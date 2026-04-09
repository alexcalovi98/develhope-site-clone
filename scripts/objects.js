let student = {
    name: "Felice Russo",
    age: 27,
    isAttending: true,
    course: "Web Development"
}

let student2 = {
    fullName: "Felice Russo",
    age: 27,
    isAttending: true,
    course: "Web Development"
}

console.log("Student", student)
console.log("Student name is: " + student.name)
// console.log("Student name is: " + student["name"])

console.log("---------------------------")

let num = 10
let numCopy = num

numCopy = numCopy + 1

console.log("Num is", num, "Num copy is", numCopy)

// WARNING: this code doesn't copy the object, but pass only the reference (so it's the same entity)
// let studentCopy = student

// studentCopy.name = "Rosario Floridia"
// studentCopy.age = 26

// console.log("Student is", student, "Student copy is", studentCopy)

let studentCopy = {...student} //or you can use also Object.assign({}, student)

studentCopy.name = "Rosario Floridia"
studentCopy.age = 26

console.log("Student is", student, "Student copy is", studentCopy)

console.log("---------------------------")

let containsSurname = "surname" in student
console.log("The student contains the surname key?", containsSurname)

for (let key in student) {
    console.log("Student key:", key)
    console.log("Value:", student[key]) //student["age"] it's equal to student.age
}

console.log("---------------------------")

function Student(name, age, isAttending, course) {
    this.name = name;
    this.age = age;
    this.isAttending = isAttending;
    this.course = course;
    this.sayHello = () => console.log("Hello!", this.name)
}

let firstStudent = new Student("Felice Russo", 27, true, "Web Development")
firstStudent.sayHello()
let secondStudent = new Student("Rosario Floridia", 26, true, "Web Development")
secondStudent.sayHello()
let thirdStudent = new Student("Nicolau Alfredo", 24, true, "Web Development")
thirdStudent.sayHello()

console.log(firstStudent, secondStudent, thirdStudent)

