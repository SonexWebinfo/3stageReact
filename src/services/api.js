import axios from 'axios';

export const api = axios.create({
   // baseURL: 'http://127.0.0.1:8000',  // Update with your Laravel API URL
    baseURL: 'https://backend-api.3stage.in',  // Update with your Laravel API URL
    withCredentials: true,  // ✅ Important for Laravel Sanctum
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

// Automatically attach token if available
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // ✅ Ensure token is stored in localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));
