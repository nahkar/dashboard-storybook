import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const USERNAME = import.meta.env.VITE_AUTH_USERNAME;
const PASSWORD = import.meta.env.VITE_AUTH_PASSWORD;

export const apiClient = axios.create({
	baseURL: SERVER_URL,
});

apiClient.interceptors.request.use(
	(config) => {
		config.headers['Authorization'] = `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
