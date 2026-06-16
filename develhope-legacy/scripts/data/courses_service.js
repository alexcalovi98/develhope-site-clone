import { getAccessTokenFromLocalStorage } from "./auth_service.js"

const API_URL = "https://develhope.alexcalovi.dev";


export function getCourse() {
    return fetch(API_URL + "/api/courses", {
            headers: {
                "Authorization": "Bearer " + getAccessTokenFromLocalStorage().access_token
            }
        })
        .then((response) => response.json())
        // .then((json) => {
        //     return {
        //         id: json.id,
        //         nome: json.nome,
        //         numero_video: json.numero_video,
        //         esercizi_completati: json.esercizi_completati,
        //         esercizi_disponibili: json.esercizi_disponibili,
        //         data_inizio: json.data_inizio,
        // }
        // })
        .then((json) => {
           return json.map(course => {
                return {
                    id: course.id,
                    name: course.nome,
                    number_videos: course.numero_video,
                    completed_excersises: course.esercizi_completati,
                    available_exercise: course.esercizi_disponibili,
                    date_start: course.data_inizio,
                    completedPercentage: Math.round((course.esercizi_completati / course.esercizi_disponibili) * 100)
                }
           })
        })
}
