// callback: readFile(callback), downloadData(callback)
// used often when you need to do something later (for example you have to wait for file upload or data download)

function main(fnc) {
    fnc()
}

main(() => console.log("Hello"))
main(() => console.log("World"))

// setTimeout vs setInterval
// setTimeout -> to do something with a delay
// setInterval -> to do something every X milliseconds

//setTimeout(() => console.log("Hello World delayed of 3 seconds"), 3000)
//let intervalId = setInterval(() => console.log("Hello World every 1 seconds"), 1000)

//setTimeout(() => clearInterval(intervalId), 10000)

// EXERCISE 1

// Ogni studente viene pubblicato con un ritardo crescente:
// Marco dopo 1s, Sara dopo 3s, Luca dopo 5s... (+2s/studente)
// Alla fine: "Tutti i voti sono stati pubblicati!"
const voti = [
  { studente: "Marco", voto: 85 },
  { studente: "Sara", voto: 92 },
  { studente: "Luca", voto: 67 },
  { studente: "Anna", voto: 78 }
];

// Optimized solution by Felice Russo
// voti.forEach((student, index) => {
//   setTimeout(() => {
//     console.log("Student " + student.studente + " ha preso: " + student.voto);
//   }, (index * 2 + 1) * 1000);
// });

// Other solution
// let delay = 1000

// voti.forEach((student, index) => {
//     console.log("Called setTimeout with delay", delay)
//     let currentDelay = delay;
//     setTimeout(() => {
//         console.log("Delay/s", currentDelay / 1000)
//         console.log("Student " + student.studente + " ha preso: " + student.voto)
//     }, currentDelay)

//     delay = delay + 2000
// })

// EXERCISE 2
// Ogni 100ms stampa una lettera in più
// "C" → "Ci" → "Cia" → "Ciao" → "Ciao " → "Ciao r"...
// Quando il messaggio è completo, ferma il timer
function digitaMessaggio(testo) {
    let index = 0;
    const timerId = setInterval(() => {
        if (index >= testo.length) {
            printChar("\n")
            clearInterval(timerId)
            return
        }
        printChar(testo[index])
        index++
    }, 100)

}

digitaMessaggio("Ciao ragazzi, benvenuti alla lezione!");

function printChar(char) {
    if (char === undefined) {
        process.stdout.write("undefined")
    } else {
        process.stdout.write(char)
    }
}