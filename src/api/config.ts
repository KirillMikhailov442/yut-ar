import axios from 'axios'

export const apiComfortService = axios.create({
    baseURL: 'https://api.comfortar.thescript.agency/v1/'
})

