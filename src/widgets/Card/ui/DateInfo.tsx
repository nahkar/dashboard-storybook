import {
	Card__BackInfoItem,
	Card__BackInfoItemLabel,
	Card__BackInfoItemValue,
	Card__BackInfoList,
	Card__BackInfoWrapper,
} from './styled';

export const DateInfo = () => {
	return (
		<Card__BackInfoWrapper $type="secondary">
			<Card__BackInfoList>
				<Card__BackInfoItem>
					<Card__BackInfoItemLabel>Start Date: </Card__BackInfoItemLabel>
					<Card__BackInfoItemValue>06/03/2024 12:00 AM</Card__BackInfoItemValue>
				</Card__BackInfoItem>
				<Card__BackInfoItem>
					<Card__BackInfoItemLabel>End Date: </Card__BackInfoItemLabel>{' '}
					<Card__BackInfoItemValue>06/05/2024 11:59 PM</Card__BackInfoItemValue>
				</Card__BackInfoItem>
				<Card__BackInfoItem $isDivider></Card__BackInfoItem>
				<Card__BackInfoItem>
					<Card__BackInfoItemLabel>Registration Start Date: </Card__BackInfoItemLabel>{' '}
					<Card__BackInfoItemValue>03/22/2023 12:00 AM</Card__BackInfoItemValue>
				</Card__BackInfoItem>
				<Card__BackInfoItem>
					<Card__BackInfoItemLabel>Registration Close Date: </Card__BackInfoItemLabel>{' '}
					<Card__BackInfoItemValue>03/24/2023 11:59 PM</Card__BackInfoItemValue>
				</Card__BackInfoItem>
			</Card__BackInfoList>
		</Card__BackInfoWrapper>
	);
};
