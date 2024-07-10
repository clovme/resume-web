import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000
});

// 请求拦截器
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const expires = localStorage.getItem('expires');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  const params = new URLSearchParams(location.search);
  const rid = params.get("rid") ? params.get("rid") : 0
  if (config.url) {
    let ridUri = config.url.includes('?') ? `&rid=${rid}` : `?rid=${rid}`
    config.url = `${config.url}${ridUri}`;
  }
  if (expires && new Date(expires).getTime() < new Date().getTime()) {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    location.href = `${location.protocol}//${location.host}`
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
  const token = localStorage.getItem('token');
  if (token && response.data.code === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    location.href = `${location.protocol}//${location.host}`
  }
  return response;
}, error => {
  return Promise.reject(error);
});

export default instance;
