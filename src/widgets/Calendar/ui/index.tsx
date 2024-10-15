import { calendarData } from '../models/data';
import { CalendarType } from '../models/types';
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

type Props = {
	schedule?: CalendarType[];
};

export const Calendar = ({ schedule = calendarData }: Props) => {
	return (
		<Calendar__Wrapper data-testid="calendar">
			{schedule.map((data, index) => {
				return (
					<Calendar__ListWrapper key={index}>
						<Calendar__ListHeader $isFirst={!index}>
							<Calendar__HeaderDay>{data.day}</Calendar__HeaderDay>
							<Calendar__HeaderDate>{data.date}</Calendar__HeaderDate>
						</Calendar__ListHeader>
						<Calendar__DataList>
							{data.data.map((day) => (
								<Calendar__DataItem key={day.time}>
									<Calendar__DataTimeWrapper>
										<Calendar__DataTime>{day.time}</Calendar__DataTime>
									</Calendar__DataTimeWrapper>
									<Calendar__DataDescriptionWrapper>
										<Calendar__EventName>{day.eventName} </Calendar__EventName>
										<Calendar__EventAction>{day.action}</Calendar__EventAction>
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
