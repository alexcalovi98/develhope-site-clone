let students = [
  {
    nomeCognome: "Mario Rossi",
    eta: 22,
    corso: "web developer",
    voto: 45,
  },
  {
    nomeCognome: "Giacomo Lombardi",
    eta: 23,
    corso: "data science",
    voto: 60,
  },

  {
    nomeCognome: "Mario Rossi",
    eta: 28,
    corso: "web developer",
    voto: 60,
  },

  {
    nomeCognome: "Mario Rossi",
    eta: 21,
    corso: "data science",
    voto: 70,
  },

  {
    nomeCognome: "Mario Rossi",
    eta: 30,
    corso: "web developer",
    voto: 55,
  },
];
let promotedStudents = getPromossi(students, 60);
function getPromossi(students, soglia) {
  let promossi = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].voto >= soglia) {
      promossi.push(students[i]);
    }
  }
  return promossi;
}
console.log(promotedStudents);
console.log("==========================");

let corso = getCourse(students, "data science");
function getCourse(students, course) {
  let studentsInCourse = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].corso === course) {
      studentsInCourse.push(students[i]);
    }
  }

  if (studentsInCourse.length == 0) {
    return "Nessuno studente trovato per questo corso";
  }

  return studentsInCourse;
}

console.log(corso);
console.log("==========================");

function mediaAcademy(students) {
  let somma = 0;
  for (let i = 0; i < students.length; i++) {
    somma = somma + students[i].voto;
  }
  somma = somma / students.length;
  return somma;
}
console.log(mediaAcademy(students).toFixed(1));
let newStudent = iscriviStudente(
  students,
  "Giacomo Verdi",
  18,
  "web developer",
  90,
);
function iscriviStudente(students, nome, eta, corso, voto) {
  let studente = {
    nomeCognome: nome,
    eta: eta,
    corso: corso,
    voto: voto,
  };
  students.push(studente);
  return students;
}
console.log(students);
