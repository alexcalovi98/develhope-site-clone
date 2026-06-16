import { getAccessTokenFromLocalStorage } from "./auth_service.js"

const API_URL = "https://develhope.alexcalovi.dev"

export function getUser() {
    return fetch(API_URL + "/api/me", {
        headers: {
            "Authorization": "Bearer " + getAccessTokenFromLocalStorage().access_token
        }
    })
    .then((response) => response.json())
    .then((json) => {
        return {
            name: json.nome,
            surname: json.cognome
        }
    })
}
