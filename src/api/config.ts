import axios from 'axios';
import Cookies from 'js-cookie';

export const apiComfortService = axios.create({
  baseURL: 'https://api.comfortar.thescript.agency/v1/',
});

apiComfortService.interceptors.request.use(config => {
  const token = Cookies.get('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
