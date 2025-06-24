import { Action } from '@/entities/action/model/types';
import { useActionsQuery } from '@/entities/action/model/useActionsQuery';
import { format } from 'date-fns';
import { useMemo } from 'react';

import { useCalendar } from '../hooks/useCalendar';
import { ViewAll } from './ViewAll';
import {
	Calendar__DataDescriptionWrapper,
	Calendar__DataItem,
	Calendar__DataList,
	Calendar__DataTime,
	Calendar__DataTimeWrapper,
	Calendar__EventAction,
	Calendar__EventName,
	Calendar__Footer,
	Calendar__HeaderDate,
	Calendar__HeaderDay,
	Calendar__ListHeader,
	Calendar__ListWrapper,
	Calendar__Wrapper,
} from './styled';

export const Calendar = () => {
	const { data } = useCalendar();
	if (!data) {
		return null;
	}

	return (
		<Calendar__Wrapper data-testid="calendar">
			{data.map(([date, actions], index) => {
				return (
					<Calendar__ListWrapper key={index}>
						<Calendar__ListHeader $isFirst={!index}>
							<Calendar__HeaderDay>{format(date, 'EEEE')}</Calendar__HeaderDay>
							<Calendar__HeaderDate>{format(date, 'MMMM dd, yyyy')}</Calendar__HeaderDate>
						</Calendar__ListHeader>
						<Calendar__DataList>
							{actions.map((action) => (
								<Calendar__DataItem key={action.eventId}>
									<Calendar__DataTimeWrapper>
										<Calendar__DataTime>{format(action.date, 'h:mma')}</Calendar__DataTime>
									</Calendar__DataTimeWrapper>
									<Calendar__DataDescriptionWrapper>
										<Calendar__EventName>{action.eventName} </Calendar__EventName>
										<Calendar__EventAction>{action.key}</Calendar__EventAction>
									</Calendar__DataDescriptionWrapper>
								</Calendar__DataItem>
							))}
						</Calendar__DataList>
					</Calendar__ListWrapper>
				);
			})}
			<Calendar__Footer>
				<ViewAll />
			</Calendar__Footer>
		</Calendar__Wrapper>
	);

};
