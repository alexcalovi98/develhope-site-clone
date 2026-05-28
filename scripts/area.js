import { navigateTo, LOGIN_ROUTE } from "./utility/navigation.js"
import { removeAccessTokenFromLocalStorage } from "./data/auth_service.js"
import { getUser } from "./data/user_service.js";
import { getStats } from "./data/stats_service.js";
import { getCourse } from "./data/courses_service.js";

getUser().then(user => renderUser(user))
getStats().then(stats => renderStats(stats))
getCourse().then(course => renderCourse(course))

document.addEventListener("DOMContentLoaded", function () {
    // here we are sure that the HTML (DOM) is fully loaded
    listenLogoutButton()
});

function renderUser(user) {
    let userNameSpan = document.getElementsByClassName("user-name")[0]
    //console.log("Here the span retrieved by class name 'user-name'", userNameSpan)
    
    userNameSpan.textContent = user.name + " " + user.surname
}

function renderStats(stats) {
    let userStatsContainer = document.getElementsByClassName("user-stats-container")[0]

    stats.forEach(stat => {
        let newHtmlStat = 
        `<div class="user-stats">
            <span>${stat.value}/${stat.maxValue}</span>
            <br>
            <span>${stat.label}</span>
        </div>`

        userStatsContainer.innerHTML += newHtmlStat
    })
}

function renderCourse(course) {
    let userCorsiContainer = document.getElementsByClassName("user-stats-courses")[0]

    console.log(course)
    course.forEach(courses => {
    let userCourseHTML = `
        <div class="user-courses__card">
            <h2>${courses.name}</h2>
            <div class="user-courses__card-stats">
                <div class="user-courses__card-stats__top">
                    <div class="user-courses__card-stats__value">
                        <img class="course-img" src="../images/video.svg" width="18" height="18">
                        <span class="span-stats">${courses.number_videos} video</span>
                    </div>
                    <div class="user-courses__card-stats__value">
                        <img class="course-img" src="../images/code.svg" width="18" height="18">
                        <span class="span-stats">${courses.completed_excersises}/${courses.available_exercise} esercizi</span>
                    </div>
                </div>    
                <div class="user-courses__card-stats__bottom">  
                    <div class="user-courses__card-stats__value">  
                        
                            <img class="course-img" src="../images/status.svg" width="18" height="18">
                            <span class="span-stats">Iniziato: ${courses.date_start}</span>
                        
                    </div>
                </div>
            </div>
                <div class="user-courses__card-footer-container">
                <div class="progress-container">
                    <span>${courses.completedPercentage}% completato</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${courses.completedPercentage}%"></div>
                        </div>
                    </div>
                <button class="card-btn">Continua Corso</button></div>
            
        </div>
    `;

        userCorsiContainer.innerHTML += userCourseHTML
    })
}

function listenLogoutButton() {
    let logoutButton = document.querySelector(".logout-button")
    logoutButton.addEventListener('click', () => {
        removeAccessTokenFromLocalStorage()
        navigateTo(LOGIN_ROUTE)
    })
}