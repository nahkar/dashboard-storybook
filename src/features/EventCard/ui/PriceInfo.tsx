import {
	StyledCardBackInfoItem,
	StyledCardBackInfoItemLabel,
	StyledCardBackInfoItemValue,
	StyledCardBackInfoList,
	StyledCardBackInfoWrapper,
} from './styled';

export const PriceInfo = () => {
	return (
		<StyledCardBackInfoWrapper $type="secondary">
			<StyledCardBackInfoList>
				<StyledCardBackInfoItem>
					<StyledCardBackInfoItemLabel>Registration Fee: </StyledCardBackInfoItemLabel>
					<StyledCardBackInfoItemValue>$600—$900</StyledCardBackInfoItemValue>
				</StyledCardBackInfoItem>
				<StyledCardBackInfoItem>
					<StyledCardBackInfoItemLabel>Divisions: </StyledCardBackInfoItemLabel>{' '}
					<StyledCardBackInfoItemValue>17</StyledCardBackInfoItemValue>
				</StyledCardBackInfoItem>
				<StyledCardBackInfoItem $isDivider></StyledCardBackInfoItem>
				<StyledCardBackInfoItem>
					<StyledCardBackInfoItemLabel>SW Teams Fee: </StyledCardBackInfoItemLabel>{' '}
					<StyledCardBackInfoItemValue>$8.50</StyledCardBackInfoItemValue>
				</StyledCardBackInfoItem>
			</StyledCardBackInfoList>
		</StyledCardBackInfoWrapper>
	);
};
