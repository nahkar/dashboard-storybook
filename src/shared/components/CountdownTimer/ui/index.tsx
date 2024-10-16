import { useCountdownTimer } from '../hooks/useCountdownTimer';
import { CountdownType } from '../models/types';
import {
	CountdownTimer__Item,
	CountdownTimer__Label,
	CountdownTimer__List,
	CountdownTimer__Time,
	CountdownTimer__Wrapper,
} from './styled';

type Props = {
	type?: CountdownType;
};
export const CountdownTimer = ({ type = 'start' }: Props) => {
	const { days, hours, minutes } = useCountdownTimer();
	return (
		<CountdownTimer__Wrapper data-testid="countdown">
			<CountdownTimer__List>
				<CountdownTimer__Item>
					<CountdownTimer__Time $type={type}>{days}</CountdownTimer__Time>
					<CountdownTimer__Label>days</CountdownTimer__Label>
				</CountdownTimer__Item>
				<CountdownTimer__Item>
					<CountdownTimer__Time $type={type}>{hours}</CountdownTimer__Time>
					<CountdownTimer__Label>hours</CountdownTimer__Label>
				</CountdownTimer__Item>
				<CountdownTimer__Item>
					<CountdownTimer__Time $type={type}>{minutes}</CountdownTimer__Time>
					<CountdownTimer__Label>minutes</CountdownTimer__Label>
				</CountdownTimer__Item>
			</CountdownTimer__List>
		</CountdownTimer__Wrapper>
	);
};
