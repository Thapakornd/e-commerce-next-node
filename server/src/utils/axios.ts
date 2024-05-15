import axios from "axios";

const instance = axios.create({
    baseURL: process.env.AUTH0_IDENTIFIER,
    timeout: 1000
})

export default instance