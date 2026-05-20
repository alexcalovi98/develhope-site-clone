import { getAccessTokenFromLocalStorage } from "./auth_service.js"

const API_URL = "http://localhost:8000/api"

export function getUser() {
    return fetch(API_URL + "/me", {
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