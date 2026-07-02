import axios from "axios"
import type { User } from "../types/user.js"
import { getAccessTokenFromLocalStorage } from "./auth_service.js"

const API_URL = "https://develhope.alexcalovi.dev"

export function getUser(): Promise<User> {
    return axios.get(API_URL + "/api/me", {
        headers: {
            "Authorization": "Bearer " + getAccessTokenFromLocalStorage().accessToken
        }
    })
    .then((response) => response.data)
    .then((json) => {
        return {
            name: json.nome,
            surname: json.cognome
        }
    })
}
