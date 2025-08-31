import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_API_URL;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

// axios
const apiClient = axios.create({
    baseURL : BASE_URL,
    headers: {
        'X-API-KEY' : API_KEY
    }
})

// error axios
export const isAxiosError = axios.isAxiosError

// Eksternal Var
export default apiClient;