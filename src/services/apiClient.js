import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL, //my backend
    withCredentials: true, // send cookies automatically (refresh token)
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
});

export default apiClient;