import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3333/' //Sempre colocar http:// senao dá erro.
});

export default api;
