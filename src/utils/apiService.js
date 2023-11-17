import axios from 'axios';

const apiService = axios.create({
    baseURL: "https://nice-lime-kangaroo-yoke.cyclic.app/api",
    withCredentials: true
})

export default apiService;
