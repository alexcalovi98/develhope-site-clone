import { navigateTo, PRIVATE_AREA_ROUTE } from "./utility/navigation.js"
import { users } from "./data/users.js"
import { saveUserInLocalStorage, isUserPresentInLocalStorage } from "./data/user_service.js"

let insertedUsername = ""
let insertedPassword = ""

// AT THE START OF THE SCRIPT
checkIfUserIsLoggedIn()

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
});

let performLogin = () => login(insertedUsername, insertedPassword)
        .then((user) => {
            saveUserInLocalStorage(user)
            navigateTo(PRIVATE_AREA_ROUTE)
        })
        .catch(() => alert("Wrong credentials"))

let isButtonEnabled = () => insertedUsername.length >= 8 && insertedPassword.length >= 8;


// FUNCTIONS
function checkIfUserIsLoggedIn() {
    if (isUserPresentInLocalStorage()) navigateTo(PRIVATE_AREA_ROUTE)
}

function login(username, password) {
    return new Promise((resolve, reject) => {
        let user = users.find((user) => user.username === username && user.password === password)
        if (user !== undefined) {
            delete user.password
            setTimeout(() => resolve(user), 2000)
        } else {
            reject("Credentials are not correct")
        }
    })
}