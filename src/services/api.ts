import axios, { AxiosInstance, isAxiosError } from 'axios';
import { getToken } from './token';
import toast from 'react-hot-toast';

const BASE_URL = 'https://16.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(null, (error) => {
    if (isAxiosError(error)) {
      if (error.code === 'ERR_NETWORK') {
        toast.error(error.message);
      }

      if (error.response && error.response.status >= 500) {
        toast.error('Server error');
      }
    }
  });

  return api;
};

export { createAPI };
