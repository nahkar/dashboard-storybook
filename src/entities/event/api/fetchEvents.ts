import { apiClient } from '@/app/config/apiClient';

import type { EventCardListResponse } from '../model/types';

type Params = {
	offset?: number;
	limit?: number;
	orderBy?: {
		field?: string;
		param?: 'asc' | 'desc';
	};
};
export const fetchEvents = async ({
	offset = 0,
	limit = 10,
	orderBy = {
		field: 'created',
		param: 'desc',
	},
}: Params): Promise<EventCardListResponse> => {
	const { data } = await apiClient.get<EventCardListResponse>(
		`/event-cards?offset=${offset}&limit=${limit}&orderBy[field]=${orderBy.field}&orderBy[param]=${orderBy.param}`,
	);
	return data;
};
