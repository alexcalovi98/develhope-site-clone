// Classe che gestisce un quiz, ha delle domande con le risposte ed un countdown di 1 minuto per rispondere
// Deve avere dei metodi per rispondere al quiz e restituire lo stato del countdown
const DEFAULT_TIME_LIMIT = 10 * 1000

function Quiz(questions = [], timeLimitMs = DEFAULT_TIME_LIMIT) {
    this.questions = questions;
    this.timeLimitMs = timeLimitMs;
    this.timerId = null;
    
    this.start = () => {
        this.timerId = setInterval(() => {
            this.timeLimitMs = this.timeLimitMs - 1000 // -1s
            console.log("Quiz remaining seconds", this.remainingTimeInSeconds())

            if (this.timeLimitMs === 0) { //clear interval if the time is finished, we don't want negative numbers
                clearInterval(this.timerId)
                this.timerId = null;
                console.log("\n---INTERVAL END---")
                console.log(Date(), "\n")
            }

        }, 1000) //start the countdown
    }

    this.isOngoing = () => this.timerId !== null //the quiz is started if there is an id (set in start method)

    this.remainingTimeInSeconds = () => this.timeLimitMs / 1000
}

const quiz = new Quiz()

console.log("Quiz is ongoing?", quiz.isOngoing())

console.log("Quiz remaining seconds", quiz.remainingTimeInSeconds())

console.log("\n---QUIZ START---")
console.log(Date(), "\n")

quiz.start()

console.log("Quiz ongoing?", quiz.isOngoing())

console.log("Quiz remaining seconds", quiz.remainingTimeInSeconds())

setTimeout(() => {
    console.log("\n---AFTER 15 SECONDS---")
    console.log(Date())
    console.log("Quiz ongoing?", quiz.isOngoing())
}, 15000)