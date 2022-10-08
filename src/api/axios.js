import axios from "axios"

let baseURL = 'http://localhost:5000/'

export const api = async (method = 'GET', slug = '', data = {}, headers={'Content-Type': 'application/json'}) => {
    let config = {
        method: method,
        url: baseURL+slug,
        headers: headers,
        data : JSON.stringify(data)
    }
    const response = await axios(config)
    return response.data
}