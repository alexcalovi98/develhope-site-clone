import axios from "axios"
import type { AccessToken } from "../types/access-token"

const ACCESS_TOKEN_KEY: string = "access_token"
const API_URL = "https://develhope.alexcalovi.dev"

export function getAccessTokenFromLocalStorage(): AccessToken {
    return JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY) ?? "")
}

export function saveAccessTokenInLocalStorage(accessToken: AccessToken) {
    localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(accessToken))
}

export function isAccessTokenPresentInLocalStorage() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function removeAccessTokenFromLocalStorage() {
    //localStorage.clear()
    localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export function login(username: string, password: string): Promise<void> {
    return axios.post(API_URL + "/api/auth/login", {
        email: username,
        password: password
    })
    .then((response) => response.data)
    .then((json) => {
        saveAccessTokenInLocalStorage({
            accessToken: json.access_token,
            tokenType: json.token_type
        })
    })
}