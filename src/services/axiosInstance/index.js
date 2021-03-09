/* eslint-disable camelcase */
import axios from "axios";

const axiosInstance = axios.create();

// Crear un interceptor para inyectar el token/cartToken en cada llamada
// Indicamos cual es el base url de la API
axiosInstance.interceptors.request.use(
  async (config) => {
    const headers = {
      Accept: "application/x-www-form-urlencoded",
      "Content-Type": "application/json",
    };

    config.headers = headers;
    config.baseURL = "http://localhost:8000/api/";

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Cuando se produce un error en la llamada verificamos si el token ha expirado
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    console.error(originalRequest, error.message);

    return Promise.reject(error);
  },
);

export default axiosInstance;
