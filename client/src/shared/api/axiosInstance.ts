import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
} from '../lib/localStorage/tokenStorage';
import { authService } from './services/authService';

export const tokenRefreshInstance = axios.create({
  baseURL: 'http://localhost:5252/',
  withCredentials: true,
});

const instance = axios.create({
  baseURL: 'http://localhost:5252/',
  withCredentials: true,
});

const isTokenExpired = (token: string) => {
  const { exp } = jwtDecode(token);
  return exp ? Date.now() >= exp * 1000 : false;
};

instance.interceptors.request.use(
  async (config) => {
    let token = getTokenFromLocalStorage();

    // Проверяем, истек ли токен
    if (token && isTokenExpired(token)) {
      try {
        // Обновляем токен с помощью отдельного экземпляра axios
        const newToken = await authService.refresh();
        console.log(newToken);
        setTokenToLocalStorage(newToken.access_token);
        token = newToken.access_token; // Обновляем переменную для заголовка
      } catch (error) {
        console.error('Ошибка обновления токена:', error);
        return Promise.reject(error); // Если не удалось обновить токен, отклоняем запрос
      }
    }

    // Добавляем токен в заголовки запроса
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
