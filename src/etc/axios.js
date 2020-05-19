import axios from 'axios';

const apiUrl = 'https://api.exchangeratesapi.io/';
const instance = axios.create({
    baseURL: apiUrl,
});

export default instance;
