import axios from "axios";

const api = axios.create({
    // baseURL: 'https://api.github.com'
    // baseURL: 'http://localhost:9099'
    baseURL: 'http://138.121.25.135:9099'
})

export default api;