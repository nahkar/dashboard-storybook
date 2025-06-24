import { apiClient } from '@/app/config/apiClient';

import type { UserResponse } from '../model/types';

export const fetchUser = async (): Promise<UserResponse> => {
	const { data } = await apiClient.get<UserResponse>('/user/me');
	return data;
};
