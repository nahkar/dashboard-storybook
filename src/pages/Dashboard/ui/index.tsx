import {
	StyledContainer,
	StyledContentWrapper,
	StyledMainWrapper,
	StyledSidebarRightWrapper,
} from '@/app/styles/global';
import { Tabs } from '@/features/Tabs';
import { Forward } from '@/shared/components/Forward';
import { Activity } from '@/widgets/Activity';
import { Calendar } from '@/widgets/Calendar';
import { Events } from '@/widgets/Events';
import { Menu } from '@/widgets/Menu';

import { StyledDashboardHeader } from './styled';

export const Dashboard = () => {
	return (
		<>
			<Menu />
			<StyledMainWrapper>
				<StyledContentWrapper>
					<StyledDashboardHeader>
						<Forward title="New Event" linkLabel="Add Now" linkUrl="/events/new" type="new" />
						<Forward
							title="All Events"
							linkLabel="View On Old SW"
							linkUrl="/events/new"
							type="all"
						/>
					</StyledDashboardHeader>
					<Tabs initialActiveIndex={1} />
					<StyledContainer $mb={10} />
					<Events />
				</StyledContentWrapper>
				<StyledSidebarRightWrapper>
					<Activity />
					<StyledContainer $mb={20} />
					<Calendar />
				</StyledSidebarRightWrapper>
			</StyledMainWrapper>
		</>
	);
};
