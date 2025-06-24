import {
	StyledCardBackInfoItem,
	StyledCardBackInfoItemLabel,
	StyledCardBackInfoItemValue,
	StyledCardBackInfoList,
	StyledCardBackInfoWrapper,
} from './styled';

export const TicketInfo = () => {
	return (
		<StyledCardBackInfoWrapper $type="secondary">
			<StyledCardBackInfoList>
				<StyledCardBackInfoItem>
					<StyledCardBackInfoItemLabel>Ticket Names: </StyledCardBackInfoItemLabel>
					<StyledCardBackInfoItemValue>Fri, Sat, Sun, Full</StyledCardBackInfoItemValue>
				</StyledCardBackInfoItem>
				<StyledCardBackInfoItem>
					<StyledCardBackInfoItemLabel>Ticket Prices: </StyledCardBackInfoItemLabel>{' '}
					<StyledCardBackInfoItemValue>$16—$35</StyledCardBackInfoItemValue>
				</StyledCardBackInfoItem>
				<StyledCardBackInfoItem $isDivider></StyledCardBackInfoItem>
				<StyledCardBackInfoItem>
					<StyledCardBackInfoItemLabel>SW Tickets Fee: </StyledCardBackInfoItemLabel>{' '}
					<StyledCardBackInfoItemValue>$1.10</StyledCardBackInfoItemValue>
				</StyledCardBackInfoItem>
			</StyledCardBackInfoList>
		</StyledCardBackInfoWrapper>
	);
};
