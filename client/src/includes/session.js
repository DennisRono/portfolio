export function getJwtToken() {
    return sessionStorage.getItem("jwt")
}

export function setJwtToken(token) {
    sessionStorage.setItem("jwt", token)
}

export function getRefreshToken() {
    return sessionStorage.getItem("refreshToken")
}

export function setRefreshToken(token) {
    sessionStorage.setItem("refreshToken", token)
}

export function backend() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return 'http://localhost:5000/'
    } else {
        return 'https://api.denniskibet.com/'
    }
}