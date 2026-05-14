const USER_STORAGE_KEY = "user"

export function getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY))
}

export function saveUserInLocalStorage(user) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
}

export function isUserPresentInLocalStorage() {
    return localStorage.getItem(USER_STORAGE_KEY)
}

export  function removeUserFromLocalStorage() {
    //localStorage.clear()
    localStorage.removeItem(USER_STORAGE_KEY)
}