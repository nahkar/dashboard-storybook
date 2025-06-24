import {
	StyledCardBackInfoItem,
	StyledCardBackInfoItemLabel,
	StyledCardBackInfoItemValue,
	StyledCardBackInfoList,
	StyledCardBackInfoWrapper,
} from './styled';

export const DateInfo = () => {
	return (
		<StyledCardBackInfoWrapper $type="secondary">
			<StyledCardBackInfoList>
				<StyledCardBackInfoItem>
					<StyledCardBackInfoItemLabel>Start Date: </StyledCardBackInfoItemLabel>
					<StyledCardBackInfoItemValue>06/03/2024 12:00 AM</StyledCardBackInfoItemValue>
				</StyledCardBackInfoItem>
				<StyledCardBackInfoItem>
					<StyledCardBackInfoItemLabel>End Date: </StyledCardBackInfoItemLabel>{' '}
					<StyledCardBackInfoItemValue>06/05/2024 11:59 PM</StyledCardBackInfoItemValue>
				</StyledCardBackInfoItem>
				<StyledCardBackInfoItem $isDivider></StyledCardBackInfoItem>
				<StyledCardBackInfoItem>
					<StyledCardBackInfoItemLabel>Registration Start Date: </StyledCardBackInfoItemLabel>{' '}
					<StyledCardBackInfoItemValue>03/22/2023 12:00 AM</StyledCardBackInfoItemValue>
				</StyledCardBackInfoItem>
				<StyledCardBackInfoItem>
					<StyledCardBackInfoItemLabel>Registration Close Date: </StyledCardBackInfoItemLabel>{' '}
					<StyledCardBackInfoItemValue>03/24/2023 11:59 PM</StyledCardBackInfoItemValue>
				</StyledCardBackInfoItem>
			</StyledCardBackInfoList>
		</StyledCardBackInfoWrapper>
	);
};
