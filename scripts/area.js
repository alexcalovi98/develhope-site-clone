let user = {
    name: "Alex",
    surname: "Calovi",
    stats: [
        { value: 3.75, maxValue: 5, label: "Media voti esercizi"},
        { value: 80, maxValue: 100, label: "Media voti test"},
        { value: 2, maxValue: 460, label: "Esercizi completati"},
        { value: 10, maxValue: 20, label: "Lezioni frequentate"},
    ]
}

document.addEventListener("DOMContentLoaded", function () {
    // here we are sure that the HTML (DOM) is fully loaded
    renderName()
    renderStats()
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