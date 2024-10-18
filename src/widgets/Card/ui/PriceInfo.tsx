import {
	Card__BackInfoItem,
	Card__BackInfoItemLabel,
	Card__BackInfoItemValue,
	Card__BackInfoList,
	Card__BackInfoWrapper,
} from './styled';

export const PriceInfo = () => {
	return (
		<Card__BackInfoWrapper>
			<Card__BackInfoList>
				<Card__BackInfoItem>
					<Card__BackInfoItemLabel>Registration Fee: </Card__BackInfoItemLabel>
					<Card__BackInfoItemValue>$600—$900</Card__BackInfoItemValue>
				</Card__BackInfoItem>
				<Card__BackInfoItem>
					<Card__BackInfoItemLabel>Divisions: </Card__BackInfoItemLabel>{' '}
					<Card__BackInfoItemValue>17</Card__BackInfoItemValue>
				</Card__BackInfoItem>
				<Card__BackInfoItem $isDivider></Card__BackInfoItem>
				<Card__BackInfoItem>
					<Card__BackInfoItemLabel>SW Teams Fee: </Card__BackInfoItemLabel>{' '}
					<Card__BackInfoItemValue>$8.50</Card__BackInfoItemValue>
				</Card__BackInfoItem>
			</Card__BackInfoList>
		</Card__BackInfoWrapper>
	);
};
