import axios from 'axios'

export const clientAxios = axios.create({
    baseURL: 'http://localhost:3001/api'
})