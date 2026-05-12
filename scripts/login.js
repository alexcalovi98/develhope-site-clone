// login(username, password) -> Promise (a buon fine oppure NON a buon fine)
// se le credenziali corrispondono a alex.calovi@develhope.co e DVHPassword21!
// la promise va risolta in maniera positiva restituendo un oggetto con nome e cognome dell'utente (Alex Calovi)
// altrimenti un errore

// login("alex.calovi@develhope.co", "DVHPassword21!")
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Finally!"))

// async/await

tryLogin()

async function tryLogin() {
    try {
        let result = await login("alex.calovi@develhope.co", "DVHPassword21!")
        console.log(result)
    } catch(e) {
        console.log(e)
    }
}

console.log("Test")

function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "alex.calovi@develhope.co" && password === "DVHPassword21!") {
            setTimeout(() => resolve({ name: "Alex", surname: "Calovi" }), 2000)
        } else {
            reject("Credentials are not correct")
        }
    })
}

//DB
// 1 alex.calovi@develhope.co DVHPassword21!
// 2 luca.verdi@develhope.co password1234!
// 3 ...
// 4 ...
// ...

let insertedUsername = ""
let insertedPassword = ""

document.addEventListener("DOMContentLoaded", function () {
    let emailInput = document.querySelector("[name=email]")
    let passwordInput = document.querySelector("[name=password]")
    let loginButton = document.querySelector(".submit-btn")

    emailInput.addEventListener('keyup', (event) => {
        insertedUsername = event.target.value
        loginButton.disabled = !isButtonEnabled()
    })

    passwordInput.addEventListener('keyup', (event) => {
        insertedPassword = event.target.value
        loginButton.disabled = !isButtonEnabled()
    })

    loginButton.addEventListener('click', () => {
        performLogin()
    })

    console.log(loginButton)
});

let performLogin = () => login(insertedUsername, insertedPassword)
        .then(() => window.location.href = "area.html")
        .catch(() => alert("Wrong credentials"))

let isButtonEnabled = () => insertedUsername.length >= 8 && insertedPassword.length >= 8;