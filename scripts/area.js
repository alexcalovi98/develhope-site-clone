import { navigateTo, LOGIN_ROUTE } from "./utility/navigation.js";
import { removeAccessTokenFromLocalStorage } from "./data/auth_service.js";
import { getUser } from "./data/user_service.js";
import { getStats } from "./data/stats_service.js";
import { getCourses } from "./data/courses_service.js";

getUser().then((user) => renderUser(user));
getStats().then((stats) => renderStats(stats));

document.addEventListener("DOMContentLoaded", function () {
  // here we are sure that the HTML (DOM) is fully loaded
  listenLogoutButton();
});

function renderUser(user) {
  let userNameSpan = document.getElementsByClassName("user-name")[0];
  //console.log("Here the span retrieved by class name 'user-name'", userNameSpan)

  userNameSpan.textContent = user.name + " " + user.surname;
}

function renderStats(stats) {
  let userStatsContainer = document.getElementsByClassName(
    "user-stats-container",
  )[0];

  stats.forEach((stat) => {
    let newHtmlStat = `<div class="user-stats">
            <span>${stat.value}/${stat.maxValue}</span>
            <br>
            <span>${stat.label}</span>
        </div>`;

    userStatsContainer.innerHTML += newHtmlStat;
  });
}

function listenLogoutButton() {
  let logoutButton = document.querySelector(".logout-button");
  logoutButton.addEventListener("click", () => {
    removeAccessTokenFromLocalStorage();
    navigateTo(LOGIN_ROUTE);
  });
}
//  JS AGGIUNTO PER CARICARE I CORSI E RENDERIZZARLI IN PAGINA
const container = document.querySelector("#courses-list");
function renderCourses(courses) {
  container.innerHTML = "";
  courses.forEach((course) => {
    const card = document.createElement("article");
    card.className = "course-card";
    card.innerHTML = `
      <h3>${course.nome}</h3>
      <p>Video: ${course["numero_video"]}</p>
      <p>Inizio: ${course["data_inizio"]}</p>
      <p>Esercizi: ${course["esercizi_completati"]} / ${course["esercizi_disponibili"]}</p>
    `;
    container.appendChild(card);
  });
}
getCourses()
  .then((courses) => {
    renderCourses(courses);
  })
  .catch((error) => {
    console.error(error);
    container.innerHTML = "<p>Impossibile caricare i corsi.</p>";
  });
