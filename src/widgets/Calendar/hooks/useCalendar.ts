import { Action } from '@/entities/action/model/types';
import { useActionsQuery } from '@/entities/action/model/useActionsQuery';
import { format } from 'date-fns';
import { useMemo } from 'react';

export const useCalendar = () => {
	const { data } = useActionsQuery();

	const groupedData = useMemo(() => {
		return data?.reduce<Record<string, Action[]>>((acc, item) => {
			const formattedDate = format(item.date, 'MMMM dd, yyyy');
			(acc[formattedDate] ??= []).push(item);
			return acc;
		}, {});
	}, [data]);

	const sortedGroupedData = useMemo(() => {
		return Object.entries(groupedData ?? {}).sort(
			(a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime(),
		);
	}, [groupedData]);

	return {
		data: sortedGroupedData,
	};
};
