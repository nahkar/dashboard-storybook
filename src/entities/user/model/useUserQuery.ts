import { useQuery } from '@tanstack/react-query';

import { fetchUser } from '../api/fetchUser';
import { userQueryKeys } from './queryKeys';

export const useUserQuery = () => {
	return useQuery({
		queryKey: userQueryKeys.me,
		queryFn: fetchUser,
		select: (response) => response.data,
	});
};
