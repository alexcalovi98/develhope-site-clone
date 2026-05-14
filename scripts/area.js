import { navigateTo, LOGIN_ROUTE } from "./utility/navigation.js"
import { getUserFromLocalStorage, removeUserFromLocalStorage } from "./data/user_service.js"

let user = getUserFromLocalStorage()

document.addEventListener("DOMContentLoaded", function () {
    // here we are sure that the HTML (DOM) is fully loaded
    renderName()
    renderStats()
    listenLogoutButton()
});

function renderName() {
    let userNameSpan = document.getElementsByClassName("user-name")[0]
    //console.log("Here the span retrieved by class name 'user-name'", userNameSpan)
    
    userNameSpan.textContent = user.name + " " + user.surname
}

function renderStats() {
    let userStatsContainer = document.getElementsByClassName("user-stats-container")[0]

    user.stats.forEach(stat => {
        let newHtmlStat = 
        `<div class="user-stats">
            <span>${stat.value}/${stat.maxValue}</span>
            <br>
            <span>${stat.label}</span>
        </div>`

        userStatsContainer.innerHTML += newHtmlStat
    })
}

function listenLogoutButton() {
    let logoutButton = document.querySelector(".logout-button")
    logoutButton.addEventListener('click', () => {
        removeUserFromLocalStorage()
        navigateTo(LOGIN_ROUTE)
    })
}