import {
	Card__InfoActionBox,
	Card__InfoActionDate,
	Card__InfoActionDateDay,
	Card__InfoActionLabel,
	Card__InfoHeader,
	Card__InfoMain,
	Card__InfoRow,
	Card__InfoTitle,
	Card__InfoWrapper,
} from './styled';

export const UpcomingActions = () => {
	return (
		<Card__InfoWrapper>
			<Card__InfoHeader>
				<Card__InfoTitle>Upcoming Actions (2)</Card__InfoTitle>
			</Card__InfoHeader>
			<Card__InfoMain>
				<Card__InfoRow>
					<Card__InfoActionBox>
						<Card__InfoActionLabel>Team Registration</Card__InfoActionLabel>
						<Card__InfoActionDate>Today</Card__InfoActionDate>
					</Card__InfoActionBox>
					<Card__InfoActionBox>
						<Card__InfoActionLabel>Official Registration</Card__InfoActionLabel>
						<Card__InfoActionDate>
							<Card__InfoActionDateDay>Sun</Card__InfoActionDateDay>, Sep 24
						</Card__InfoActionDate>
					</Card__InfoActionBox>
				</Card__InfoRow>
			</Card__InfoMain>
		</Card__InfoWrapper>
	);
};
