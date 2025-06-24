import axios from 'axios';

import { config } from './config';

export const apiClient = axios.create({
	baseURL: config.SERVER_URL,
	withCredentials: config.USE_SESSION === 'true' ? true : false,
});

