import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bce0-177-53-231-52.ngrok.io'
});


export default api;