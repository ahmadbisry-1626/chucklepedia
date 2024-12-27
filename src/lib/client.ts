import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://v2.jokeapi.dev/joke/',
    timeout: 3000
})
