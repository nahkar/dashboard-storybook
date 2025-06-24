import { useQuery } from '@tanstack/react-query';

import { fetchActions } from '../api/fetchActions';
import { actionQueryKeys } from './queryKeys';

export const useActionsQuery = () => {
	return useQuery({
		queryKey: actionQueryKeys.allActions,
		queryFn: fetchActions,
		select: (response) => response.data,
	});
};
