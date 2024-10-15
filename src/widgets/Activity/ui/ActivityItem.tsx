import { ActivityType } from '../models/types';
import clockIcon from './img/clock.icon.svg';
import {
	Activity__Item,
	Activity__ItemName,
	Activity__ItemTime,
	Activity__ItemWrapper,
} from './styled';

type Props = {
	activity: ActivityType;
};
export const ActivityItem = ({ activity }: Props) => {
	return (
		<Activity__Item>
			<Activity__ItemWrapper>
				<Activity__ItemName>
					<b>{activity.owner}</b> {activity.action} <b>{activity.target}</b> {activity.description}{' '}
					<b>{activity.eventName}</b>
				</Activity__ItemName>
				<Activity__ItemTime>
					<img src={clockIcon} alt="" /> {activity.date}
				</Activity__ItemTime>
			</Activity__ItemWrapper>
		</Activity__Item>
	);
};
