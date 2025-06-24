import {
	StyledCardInfoActionBox,
	StyledCardInfoActionDate,
	StyledCardInfoActionLabel,
	StyledCardInfoHeader,
	StyledCardInfoMain,
	StyledCardInfoRow,
	StyledCardInfoTitle,
	StyledCardInfoWrapper,
} from './styled';

export const Statistics = () => {
	return (
		<StyledCardInfoWrapper>
			<StyledCardInfoHeader>
				<StyledCardInfoTitle>Statistics</StyledCardInfoTitle>
			</StyledCardInfoHeader>
			<StyledCardInfoMain>
				<StyledCardInfoRow>
					<StyledCardInfoActionBox>
						<StyledCardInfoActionLabel>Teams Entered</StyledCardInfoActionLabel>
						<StyledCardInfoActionDate>385</StyledCardInfoActionDate>
					</StyledCardInfoActionBox>
					<StyledCardInfoActionBox>
						<StyledCardInfoActionLabel>Total Profit</StyledCardInfoActionLabel>
						<StyledCardInfoActionDate>$0</StyledCardInfoActionDate>
					</StyledCardInfoActionBox>
				</StyledCardInfoRow>
				<StyledCardInfoRow>
					<StyledCardInfoActionBox>
						<StyledCardInfoActionLabel>Officials/Staff</StyledCardInfoActionLabel>
						<StyledCardInfoActionDate>83/13</StyledCardInfoActionDate>
					</StyledCardInfoActionBox>
					<StyledCardInfoActionBox>
						<StyledCardInfoActionLabel>Exhibitors</StyledCardInfoActionLabel>
						<StyledCardInfoActionDate>18</StyledCardInfoActionDate>
					</StyledCardInfoActionBox>
					<StyledCardInfoActionBox>
						<StyledCardInfoActionLabel>Payouts</StyledCardInfoActionLabel>
						<StyledCardInfoActionDate>$0</StyledCardInfoActionDate>
					</StyledCardInfoActionBox>
				</StyledCardInfoRow>
			</StyledCardInfoMain>
		</StyledCardInfoWrapper>
	);
};
