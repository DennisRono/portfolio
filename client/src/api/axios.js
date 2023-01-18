import axios from "axios"
import { backend } from '../includes/session'

export const api = async (method = 'GET', slug = '', data = {}, headers={}) => {
    let config = {
        method: method,
        url: backend()+slug,
        headers: headers,
        data : data
    }
    console.log(data);
    const response = await axios(config)
    return response
}