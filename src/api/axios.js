import axios from "axios"

let baseURL = 'https://api.denniskibet.com/'

export const api = async (method = 'GET', slug = '', data = {}, headers={}) => {
    let config = {
        method: method,
        url: baseURL+slug,
        headers: headers,
        data : JSON.stringify(data)
    }
    const response = await axios(config)
    return response.data
}