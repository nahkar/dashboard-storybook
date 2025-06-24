import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchEvents } from '../api/fetchEvents';
import { eventQueryKeys } from './queryKeys';

export const useEventInfiniteQuery = (limit = 10) => {
	return useInfiniteQuery({
		queryKey: [...eventQueryKeys.allEvents, limit],
		queryFn: ({ pageParam = 0 }) =>
			fetchEvents({
				offset: pageParam,
				limit,
				orderBy: {
					field: 'created',
					param: 'desc',
				},
			}),
		select: (data) => ({
			pages: data.pages.map((page) => ({
				data: page.data,
				meta: page.meta,
			})),
			pageParams: data.pageParams,
		}),
		getNextPageParam: (lastPage, allPages) => {
			if (!lastPage.meta.hasMore) {
				return undefined;
			}
			const totalLoadedItems = allPages.reduce((total, page) => total + page.data.length, 0);
			return totalLoadedItems;
		},
		initialPageParam: 0,
	});
};
