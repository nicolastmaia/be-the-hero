import axios from 'axios';

const baseURL = 'http://192.168.1.106:3333';

const api = axios.create({
  baseURL: baseURL,
});

export default api;
