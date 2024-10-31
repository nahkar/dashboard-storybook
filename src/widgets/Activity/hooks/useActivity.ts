import { useState } from 'react';

import { ActivityType } from '../models/types';

type Props = {
	activities: ActivityType[];
};
export const useActivity = ({ activities = [] }: Props) => {
	const [activityPage, setActivityPage] = useState(1);
	const COUNT = 5;
	const end = activityPage * COUNT;
	const handleShowMore = () => {
		setActivityPage(activityPage + 1);
	};

	const handleShowLess = () => {
		setActivityPage(1);
	};
	const renderData = activities.slice(0, end);
	const isShowMore = renderData.length < activities.length;
	return {
		renderData,
		isShowMore,
		handleShowMore,
		handleShowLess,
	};
};
