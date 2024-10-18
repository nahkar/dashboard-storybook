import { useEffect, useState } from 'react';

import { CountdownType } from '../models/types';

type Props = {
	type: CountdownType;
};
export const useCountdownTimer = ({ type }: Props) => {
	const initialTime = type === 'ended' ? 0 : 60 * 60 * 24 * 2; // 2 days
	const [timeRemaining, setTimeRemaining] = useState(initialTime);

	useEffect(() => {
		const timerInterval = setInterval(() => {
			setTimeRemaining((prevTime) => {
				if (prevTime === 0) {
					clearInterval(timerInterval);
					return 0;
				} else {
					return prevTime - 1;
				}
			});
		}, 1000);

		return () => clearInterval(timerInterval);
	}, []);

	const days = Math.floor(timeRemaining / (3600 * 24));
	const hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
	const minutes = Math.floor((timeRemaining % 3600) / 60);
	const seconds = timeRemaining % 60;
	return {
		days,
		hours,
		minutes,
		seconds,
	};
};
