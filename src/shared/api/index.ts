import axios, {AxiosRequestConfig, CreateAxiosDefaults} from 'axios';
import { toast } from 'react-toastify';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

export const http = axios.create({
    baseURL: BASE_API_URL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
} as CreateAxiosDefaults);

// Request interceptor for API calls
http.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        return config;
    },
    (error) => {
        toast.error(
            error?.response?.data?.message
                ? error?.response?.data?.message
                : 'Неопределенная ошибка',
            {
                toastId: 'UploadReqError',
            }
        );
        return Promise.reject(error);
    }
);

// Response interceptor for API calls
http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // localStorage.removeItem('token');
        toast.error(
            error?.response?.data?.message
                ? error?.response?.data?.message
                : 'Неопределенная ошибка',
            {
                toastId: 'UploadError',
            }
        );
        return Promise.reject(error);
    }
);