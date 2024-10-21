import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/api/', // Asegúrate de que esta URL coincida con la ubicación de tu servidor PHP
});

export default api;
