import {
	Card__InfoActionBox,
	Card__InfoActionDate,
	Card__InfoActionLabel,
	Card__InfoHeader,
	Card__InfoMain,
	Card__InfoRow,
	Card__InfoTitle,
	Card__InfoWrapper,
} from './styled';

export const Statistics = () => {
	return (
		<Card__InfoWrapper>
			<Card__InfoHeader>
				<Card__InfoTitle>Statistics</Card__InfoTitle>
			</Card__InfoHeader>
			<Card__InfoMain>
				<Card__InfoRow>
					<Card__InfoActionBox>
						<Card__InfoActionLabel>Teams Entered</Card__InfoActionLabel>
						<Card__InfoActionDate>385</Card__InfoActionDate>
					</Card__InfoActionBox>
					<Card__InfoActionBox>
						<Card__InfoActionLabel>Total Profit</Card__InfoActionLabel>
						<Card__InfoActionDate>$0</Card__InfoActionDate>
					</Card__InfoActionBox>
				</Card__InfoRow>
				<Card__InfoRow>
					<Card__InfoActionBox>
						<Card__InfoActionLabel>Officials/Staff</Card__InfoActionLabel>
						<Card__InfoActionDate>83/13</Card__InfoActionDate>
					</Card__InfoActionBox>
					<Card__InfoActionBox>
						<Card__InfoActionLabel>Exhibitors</Card__InfoActionLabel>
						<Card__InfoActionDate>18</Card__InfoActionDate>
					</Card__InfoActionBox>
					<Card__InfoActionBox>
						<Card__InfoActionLabel>Payouts</Card__InfoActionLabel>
						<Card__InfoActionDate>$0</Card__InfoActionDate>
					</Card__InfoActionBox>
				</Card__InfoRow>
			</Card__InfoMain>
		</Card__InfoWrapper>
	);
};
