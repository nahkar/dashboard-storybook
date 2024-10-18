import {
	Card__BackInfoItem,
	Card__BackInfoItemLabel,
	Card__BackInfoItemValue,
	Card__BackInfoList,
	Card__BackInfoWrapper,
} from './styled';

export const TicketInfo = () => {
	return (
		<Card__BackInfoWrapper>
			<Card__BackInfoList>
				<Card__BackInfoItem>
					<Card__BackInfoItemLabel>Ticket Names: </Card__BackInfoItemLabel>
					<Card__BackInfoItemValue>Fri, Sat, Sun, Full</Card__BackInfoItemValue>
				</Card__BackInfoItem>
				<Card__BackInfoItem>
					<Card__BackInfoItemLabel>Ticket Prices: </Card__BackInfoItemLabel>{' '}
					<Card__BackInfoItemValue>$16—$35</Card__BackInfoItemValue>
				</Card__BackInfoItem>
				<Card__BackInfoItem $isDivider></Card__BackInfoItem>
				<Card__BackInfoItem>
					<Card__BackInfoItemLabel>SW Tickets Fee: </Card__BackInfoItemLabel>{' '}
					<Card__BackInfoItemValue>$1.10</Card__BackInfoItemValue>
				</Card__BackInfoItem>
			</Card__BackInfoList>
		</Card__BackInfoWrapper>
	);
};
