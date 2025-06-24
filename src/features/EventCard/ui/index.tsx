import { EventCard as EventCardType } from '@/entities/event/model/types';
import { Button } from '@/features/Button';
import { FlipCard } from '@/shared/components/FlipCard';
import linkIcon from '@assets/link.icon.svg';

import { Box } from '@mui/material';

import { useCard } from '../hooks/useCard';
import { Available } from './Available';
import { DateInfo } from './DateInfo';
import { EventIncomplete } from './EventIncomplete';
import { LocationInfo } from './LocationInfo';
import { PriceInfo } from './PriceInfo';
import { Statistics } from './Statistics';
import { TicketInfo } from './TicketInfo';
import { Timer } from './Timer';
import { UpcomingActions } from './UpcomingActions';
import eventLogo from './img/event_logo.png';
import moreIcon from './img/more.icon.svg';
import {
	StyledCardContentInner,
	StyledCardContentWrapper,
	StyledCardEventInfo,
	StyledCardEventInfoButtonWrapper,
	StyledCardEventName,
	StyledCardHeader,
	StyledCardHeaderBtn,
	StyledCardLogoNameWrapper,
	StyledCardWrapper,
} from './styled';

type Props = {
	isIncomplete?: boolean;
	event: EventCardType;
};
export const EventCard = ({ isIncomplete, event }: Props) => {
	const {
		activeAvailable,
		handleActiveAvailable,
		isFavorite,
		handleIsFavorite,
		isActiveAdditionalInfo,
		handleIsActiveAdditionalInfo,
		isFlipped,
		handleFlip,
	} = useCard();
console.log(event);
	return (
		<>
			<FlipCard
				isFlipped={isFlipped}
				front={
					<StyledCardWrapper data-testid="card">
						<StyledCardHeader>
							<StyledCardEventInfo>
								<StyledCardLogoNameWrapper>
									<img src={eventLogo} alt="" />
									<Box>
										<StyledCardEventName>{event.name}</StyledCardEventName>
										<StyledCardEventName>Northwest Qualifier</StyledCardEventName>
									</Box>
								</StyledCardLogoNameWrapper>
								<Box>
									<StyledCardEventName>
										&nbsp;
										<StyledCardHeaderBtn>
											<img src={moreIcon} alt="" />
										</StyledCardHeaderBtn>
									</StyledCardEventName>
									<StyledCardEventName>
										&nbsp;
										<StyledCardHeaderBtn>
											<img src={linkIcon} alt="" />
										</StyledCardHeaderBtn>
									</StyledCardEventName>
								</Box>
							</StyledCardEventInfo>
							<StyledCardEventInfoButtonWrapper>
								<Button isFavorite={isFavorite} handleIsFavorite={handleIsFavorite} type="star" />
								<Button
									onClick={handleFlip}
									isActiveAdditionalInfo={isActiveAdditionalInfo}
									handleIsActiveAdditionalInfo={handleIsActiveAdditionalInfo}
									type="info"
								/>
							</StyledCardEventInfoButtonWrapper>
						</StyledCardHeader>
						<StyledCardContentWrapper $isIncomplete={isIncomplete}>
							{isIncomplete && <EventIncomplete />}
							<StyledCardContentInner $isIncomplete={isIncomplete}>
								<Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
									<Timer />
									<Statistics />
								</Box>
								<Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '17px' }}>
									<UpcomingActions />
									<Available
										activeAvailable={activeAvailable}
										handleActiveAvailable={handleActiveAvailable}
									/>
								</Box>
							</StyledCardContentInner>
						</StyledCardContentWrapper>
					</StyledCardWrapper>
				}
				back={
					<StyledCardWrapper>
						<StyledCardHeader>
							<StyledCardEventInfo>
								<StyledCardLogoNameWrapper>
									<img src={eventLogo} alt="" />
									<Box>
										<StyledCardEventName>GTV 2023 Pacific</StyledCardEventName>
										<StyledCardEventName>Northwest Qualifier</StyledCardEventName>
									</Box>
								</StyledCardLogoNameWrapper>
								<Box>
									<StyledCardEventName>
										&nbsp;
										<StyledCardHeaderBtn>
											<img src={moreIcon} alt="" />
										</StyledCardHeaderBtn>
									</StyledCardEventName>
									<StyledCardEventName>
										&nbsp;
										<StyledCardHeaderBtn>
											<img src={linkIcon} alt="" />
										</StyledCardHeaderBtn>
									</StyledCardEventName>
								</Box>
							</StyledCardEventInfo>
							<StyledCardEventInfoButtonWrapper>
								<Button isFavorite={isFavorite} handleIsFavorite={handleIsFavorite} type="star" />
								<Button
									onClick={handleFlip}
									isActiveAdditionalInfo={isActiveAdditionalInfo}
									handleIsActiveAdditionalInfo={handleIsActiveAdditionalInfo}
									type="info"
								/>
							</StyledCardEventInfoButtonWrapper>
						</StyledCardHeader>
						<StyledCardContentWrapper $isIncomplete={isIncomplete}>
							{isIncomplete && <EventIncomplete />}
							<StyledCardContentInner $isIncomplete={isIncomplete}>
								<Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
									<LocationInfo />
									<DateInfo />
								</Box>
								<Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
									<PriceInfo />
									<TicketInfo />
								</Box>
							</StyledCardContentInner>
						</StyledCardContentWrapper>
					</StyledCardWrapper>
				}
			/>
		</>
	);
};
