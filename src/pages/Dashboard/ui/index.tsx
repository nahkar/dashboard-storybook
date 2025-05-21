import {
	StyledContainer,
	StyledContentWrapper,
	StyledMainWrapper,
	StyledSidebarRightWrapper,
} from '@/app/styles/global';
import { useUserQuery } from '@/entities/user/model/useUserQuery';
import { Search } from '@/features/Search';
import { Tabs } from '@/features/Tabs';
import { Forward } from '@/shared/components/Forward';
import { Activity } from '@/widgets/Activity';
import { Calendar } from '@/widgets/Calendar';
import { Card } from '@/widgets/Card';
import { Menu } from '@/widgets/Menu';

import { StyledDashboardCardItem, StyledDashboardCardList, StyledDashboardHeader } from './styled';

export const Dashboard = () => {
	const { data, isLoading } = useUserQuery();
	console.log(isLoading, data);
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
					<Search title="Event List" />
					<StyledContainer $mb={10} />
					<StyledDashboardCardList>
						<StyledDashboardCardItem>
							<Card />
						</StyledDashboardCardItem>
						<StyledDashboardCardItem>
							<Card />
						</StyledDashboardCardItem>
						<StyledDashboardCardItem>
							<Card />
						</StyledDashboardCardItem>
					</StyledDashboardCardList>
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
