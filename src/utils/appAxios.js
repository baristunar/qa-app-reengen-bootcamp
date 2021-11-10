import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:false,
    headers:{
        "Content-Type":" application/json"
    }
})

export const appAxios = axiosInstance;