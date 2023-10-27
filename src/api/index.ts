import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

export const dentalineApi = axios.create({
    baseURL: VITE_API_URL
});

dentalineApi.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('token') || "{}");
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})