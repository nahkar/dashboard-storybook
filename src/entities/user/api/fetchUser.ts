import { apiClient } from '@/app/config/apiClient';

import type { User } from '../model/types';

export const fetchUser = async (): Promise<User> => {
	const { data } = await apiClient.get('/user/me');
	return data;
};
