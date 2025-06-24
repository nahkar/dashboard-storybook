import { apiClient } from '@/app/config/apiClient';

import type { ActionResponse } from '../model/types';

export const fetchActions = async (): Promise<ActionResponse> => {
	const { data } = await apiClient.get<ActionResponse>('/events/actions');
	return data;
};
