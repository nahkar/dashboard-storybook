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
	const { days, hours, minutes } = useCountdownTimer({ type });
	return (
		<CountdownTimer__Wrapper data-testid="countdown">
			<CountdownTimer__List>
				<CountdownTimer__Item>
					<CountdownTimer__Time $type={type}>{!days ? '0 0' : days}</CountdownTimer__Time>
					<CountdownTimer__Label $type={type}>days</CountdownTimer__Label>
				</CountdownTimer__Item>
				<CountdownTimer__Item>
					<CountdownTimer__Time $type={type}>{!hours ? '0 0' : hours}</CountdownTimer__Time>
					<CountdownTimer__Label $type={type}>hours</CountdownTimer__Label>
				</CountdownTimer__Item>
				<CountdownTimer__Item>
					<CountdownTimer__Time $type={type}>{!minutes ? '0 0' : minutes}</CountdownTimer__Time>
					<CountdownTimer__Label $type={type}>minutes</CountdownTimer__Label>
				</CountdownTimer__Item>
			</CountdownTimer__List>
		</CountdownTimer__Wrapper>
	);
};
