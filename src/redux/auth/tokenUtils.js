import axios from 'axios';

export const persistToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
  localStorage.removeItem('token');
};