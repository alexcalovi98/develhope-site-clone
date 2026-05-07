const STUDENTS_FROM_SERVER = [
    { "name": "Felice", "course": "Web Development" },
    { "name": "Rosario", "course": "Web Development" }, 
]

const SERVER_IS_ONLINE = true;

let studentsPromise = new Promise((resolve, reject) => {
    if (SERVER_IS_ONLINE) {
        resolve(STUDENTS_FROM_SERVER)
    } else {
        const error = new Error("The server is offline")
        reject(error)
    }
})

// let studentsPromise = Promise.resolve(STUDENTS_FROM_SERVER)
// let studentsPromise = Promise.reject(new Error("The server is offline"))

// studentsPromise
//     .then((students) => console.log("GET students from the server", students))
//     .catch((error) => console.log(error.message))
//     .finally(() => console.log("END Promise, finally invoked"))

let students = await getStudents()

console.log("Students using async/await", students)

// getStudents()
//     .then((students) => console.log("GET students from the server", students))
//     .catch((error) => console.log(error.message))
//     .finally(() => console.log("END Promise, finally invoked"))

async function getStudents() {
    return new Promise((resolve, reject) => {
        if (SERVER_IS_ONLINE) {
            setTimeout(() => resolve(STUDENTS_FROM_SERVER), 5000)
        } else {
            const error = new Error("The server is offline")
            reject(error)
        }
    })
}