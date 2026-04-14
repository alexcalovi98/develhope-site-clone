// Esercizio: "La School Academy"
// Crea un programma JavaScript che gestisce gli studenti di un'accademia utilizzando array, oggetti e condizioni.
// Parte 1 — Creare i dati
// Definisci un array chiamato studenti contenente almeno 5 oggetti. Ogni oggetto rappresenta uno studente con le proprietà: nome (stringa), eta (numero), corso (stringa, es. "Web Development", "UX Design", "Data Science") e media (numero da 0 a 100).
// Parte 2 — Promossi e bocciati
// Scrivi una funzione getPromossi(studenti, soglia) che riceve l'array e una soglia di sufficienza, e restituisce un nuovo array con solo gli studenti che hanno una media uguale o superiore alla soglia.
// Parte 3 — Cercare per corso
// Scrivi una funzione cercaPerCorso(studenti, corso) che restituisce tutti gli studenti iscritti a un determinato corso. Se non trova nessuno, deve restituire il messaggio "Nessuno studente trovato per questo corso.".
// Parte 4 — Statistiche dell'Academy
// Scrivi una funzione mediaAcademy(studenti) che calcola e restituisce la media dei voti di tutta l'accademia, arrotondata a una cifra decimale.
// Parte 5
// Aggiungi una funzione iscriviStudente(studenti, nome, eta, corso, media) che crea un nuovo oggetto studente, lo aggiunge all'array e restituisce l'elenco aggiornato.

let students = [
    new ExerciseStudent("Mario Rossi", 26, "Web Development", 75),
    new ExerciseStudent("Enrico Verdi", 22, "Data Science", 100),
    new ExerciseStudent("Luca Rossi", 22, "Data Science", 55),
    new ExerciseStudent("Giovanna Verdi", 22, "UX Design", 85),
    new ExerciseStudent("Alex Verdi", 22, "Web Development", 60),
]

let promotedStudents = getPromoted(students, 60)
console.log("Promoted students", promotedStudents)

console.log("---------------------------")

let webStudents = searchByCourse(students, "Web Development")
console.log("Students attending Web Development Course: ", webStudents)

console.log("---------------------------")

let mobileStudents = searchByCourse(students, "Mobile Development")
console.log("Students attending Mobile Development Course: ", mobileStudents)

function getPromoted(students, threashold) {
    console.log("Threashold is:", threashold)
    
    // More advanced JS, but the best practice to filter an array, we use the academic approach
    // let promotedStudents = students.filter((element) => element.avg >= threashold)
    
    let promotedStudents = []

    for (let i = 0; i < students.length; i++) {
        let student = students[i]
        if (student.avg >= threashold) {
            // if student is promoted, we add it to the promoted array
            promotedStudents.push(student)
        }
    }

    return promotedStudents;
}

function searchByCourse(students, course) {
    let studentsInCourse = []

    for (let i = 0; i < students.length; i++) {
        let student = students[i]
        if (student.course === course) {
            studentsInCourse.push(student)
        }
    }

    if (studentsInCourse.length == 0) {
        return "Nessuno studente trovato per questo corso"
    }

    return studentsInCourse;
}

function ExerciseStudent(name, age, course, avg) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.avg = avg;
}