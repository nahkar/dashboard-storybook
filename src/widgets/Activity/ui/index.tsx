import { activityData } from '../models/data';
import { ActivityType } from '../models/types';
import { ActivityItem } from './ActivityItem';
import { ShowMore } from './ShowMore';
import successIcon from './img/success.icon.svg';
import { Activity__Footer, Activity__Header, Activity__List, Activity__Wrapper } from './styled';

type Props = {
	activities?: ActivityType[];
};
export const Activity = ({ activities = activityData }: Props) => {
	return (
		<Activity__Wrapper data-testid="activity">
			<Activity__Header>
				Activity <img src={successIcon} alt="" />
			</Activity__Header>
			<Activity__List>
				{activities.map((activity) => (
					<ActivityItem activity={activity} key={activity.id} />
				))}
			</Activity__List>
			<Activity__Footer>
				<ShowMore />
			</Activity__Footer>
		</Activity__Wrapper>
	);
};
