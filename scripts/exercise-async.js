// Classe che gestisce un quiz, ha delle domande con le risposte ed un countdown di 1 minuto per rispondere
// Deve avere dei metodi per rispondere al quiz e restituire lo stato del countdown
const DEFAULT_TIME_LIMIT = 10 * 1000

function Quiz(questions = [], timeLimitMs = DEFAULT_TIME_LIMIT) {
    this.questions = questions;
    this.timeLimitMs = timeLimitMs;
    this.timerId = null;
    
    this.start = () => {
        this.timerId = setInterval(() => {
            this.timeLimitMs = this.timeLimitMs - 1000
            console.log("Quiz remaining seconds", this.remainingTimeInSeconds())

            if (this.timeLimitMs === 0) { //clear interval if the time is finished, we don't want negative numbers
                clearInterval(this.timerId)
                this.timerId = null;
            }

        }, 1000) //start the countdown
    }

    this.isStarted = () => this.timerId !== null //the quiz is started if there is an id (set in start method)

    this.remainingTimeInSeconds = () => this.timeLimitMs / 1000
}

const quiz = new Quiz()

console.log("Quiz started?", quiz.isStarted())

console.log("Quiz remaining seconds", quiz.remainingTimeInSeconds())

console.log("\n---QUIZ START---\n")

quiz.start()

console.log("Quiz started?", quiz.isStarted())

console.log("Quiz remaining seconds", quiz.remainingTimeInSeconds())