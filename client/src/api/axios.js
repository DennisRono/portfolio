import axios from "axios"
import { backend } from '../includes/session'

export const api = async (method = 'GET', slug = '', data = {}, headers={'Content-Type': 'application/json','access-control-expose-headers' : 'Authorization'}) => {
    let config = {
        method: method,
        url: backend()+slug,
        headers: headers,
        data : data
    }
    return axios(config).then(res => res).catch (err => console.error(err))
}