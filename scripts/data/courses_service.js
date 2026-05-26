import { getAccessTokenFromLocalStorage } from "./auth_service.js";

const API_URL = "https://develhope.alexcalovi.dev/api";

export function getCourses() {
  return fetch(API_URL + "/courses", {
    headers: {
      Authorization: "Bearer " + getAccessTokenFromLocalStorage().access_token,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return json.map((course) => {
        return {
          id: course.id,
          nome: course.nome,
          numero_video: course.numero_video,
          esercizi_completati: course.esercizi_completati,
          esercizi_disponibili: course.esercizi_disponibili,
          data_inizio: course.data_inizio,
        };
      });
    });
}
