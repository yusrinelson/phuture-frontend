import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', //my backend
    withCredentials: true, // send cookies automatically (refresh token)
    headers: {
        'Content-Type': 'application/json'
    },
});

export default apiClient;