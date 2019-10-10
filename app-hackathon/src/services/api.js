import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.83.123.51:3000/'
});

export default api;
