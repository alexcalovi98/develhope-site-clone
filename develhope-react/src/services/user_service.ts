import type { User } from "../types/user.js"
import { getAccessTokenFromLocalStorage } from "./auth_service.js"

const API_URL = "https://develhope.alexcalovi.dev"

export function getUser(): Promise<User> {
    return fetch(API_URL + "/api/me", {
        headers: {
            "Authorization": "Bearer " + getAccessTokenFromLocalStorage().accessToken
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
