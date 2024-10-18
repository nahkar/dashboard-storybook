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
	Card__ContentInner,
	Card__ContentWrapper,
	Card__EventInfo,
	Card__EventInfoButtonWrapper,
	Card__EventName,
	Card__Header,
	Card__HeaderBtn,
	Card__LogoNameWrapper,
	Card__Wrapper,
} from './styled';

type Props = {
	isIncomplete?: boolean;
};
export const Card = ({ isIncomplete }: Props) => {
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

	return (
		<>
			<FlipCard
				isFlipped={isFlipped}
				front={
					<Card__Wrapper data-testid="card">
						<Card__Header>
							<Card__EventInfo>
								<Card__LogoNameWrapper>
									<img src={eventLogo} alt="" />
									<Box>
										<Card__EventName>GTV 2023 Pacific</Card__EventName>
										<Card__EventName>Northwest Qualifier</Card__EventName>
									</Box>
								</Card__LogoNameWrapper>
								<Box>
									<Card__EventName>
										&nbsp;
										<Card__HeaderBtn>
											<img src={moreIcon} alt="" />
										</Card__HeaderBtn>
									</Card__EventName>
									<Card__EventName>
										&nbsp;
										<Card__HeaderBtn>
											<img src={linkIcon} alt="" />
										</Card__HeaderBtn>
									</Card__EventName>
								</Box>
							</Card__EventInfo>
							<Card__EventInfoButtonWrapper>
								<Button isFavorite={isFavorite} handleIsFavorite={handleIsFavorite} type="star" />
								<Button
									onClick={handleFlip}
									isActiveAdditionalInfo={isActiveAdditionalInfo}
									handleIsActiveAdditionalInfo={handleIsActiveAdditionalInfo}
									type="info"
								/>
							</Card__EventInfoButtonWrapper>
						</Card__Header>
						<Card__ContentWrapper $isIncomplete={isIncomplete}>
							{isIncomplete && <EventIncomplete />}
							<Card__ContentInner $isIncomplete={isIncomplete}>
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
							</Card__ContentInner>
						</Card__ContentWrapper>
					</Card__Wrapper>
				}
				back={
					<Card__Wrapper>
						<Card__Header>
							<Card__EventInfo>
								<Card__LogoNameWrapper>
									<img src={eventLogo} alt="" />
									<Box>
										<Card__EventName>GTV 2023 Pacific</Card__EventName>
										<Card__EventName>Northwest Qualifier</Card__EventName>
									</Box>
								</Card__LogoNameWrapper>
								<Box>
									<Card__EventName>
										&nbsp;
										<Card__HeaderBtn>
											<img src={moreIcon} alt="" />
										</Card__HeaderBtn>
									</Card__EventName>
									<Card__EventName>
										&nbsp;
										<Card__HeaderBtn>
											<img src={linkIcon} alt="" />
										</Card__HeaderBtn>
									</Card__EventName>
								</Box>
							</Card__EventInfo>
							<Card__EventInfoButtonWrapper>
								<Button isFavorite={isFavorite} handleIsFavorite={handleIsFavorite} type="star" />
								<Button
									onClick={handleFlip}
									isActiveAdditionalInfo={isActiveAdditionalInfo}
									handleIsActiveAdditionalInfo={handleIsActiveAdditionalInfo}
									type="info"
								/>
							</Card__EventInfoButtonWrapper>
						</Card__Header>
						<Card__ContentWrapper $isIncomplete={isIncomplete}>
							{isIncomplete && <EventIncomplete />}
							<Card__ContentInner $isIncomplete={isIncomplete}>
								<Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
									<LocationInfo />
									<DateInfo />
								</Box>
								<Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
									<PriceInfo />
									<TicketInfo />
								</Box>
							</Card__ContentInner>
						</Card__ContentWrapper>
					</Card__Wrapper>
				}
			/>
		</>
	);
};
