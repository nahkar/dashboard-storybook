import { CountdownTimer } from '@/shared/components/CountdownTimer';

import { Box } from '@mui/material';

import { Card__TimerLabel, Card__TimerWrapper } from './styled';

export const Timer = () => {
	return (
		<Card__TimerWrapper>
			<Box>
				<Card__TimerLabel>Time Until</Card__TimerLabel>
				<Card__TimerLabel>Event Close Date</Card__TimerLabel>
			</Box>
			<CountdownTimer />
		</Card__TimerWrapper>
	);
};
