import { CountdownTimer } from '@/shared/components/CountdownTimer';

import { Box } from '@mui/material';

import { StyledCardTimerLabel, StyledCardTimerWrapper } from './styled';

export const Timer = () => {
	return (
		<StyledCardTimerWrapper>
			<Box>
				<StyledCardTimerLabel>Time Until</StyledCardTimerLabel>
				<StyledCardTimerLabel>Event Close Date</StyledCardTimerLabel>
			</Box>
			<CountdownTimer />
		</StyledCardTimerWrapper>
	);
};
