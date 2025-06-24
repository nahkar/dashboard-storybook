import {
	StyledCardInfoActionBox,
	StyledCardInfoActionDate,
	StyledCardInfoActionDateDay,
	StyledCardInfoActionLabel,
	StyledCardInfoHeader,
	StyledCardInfoMain,
	StyledCardInfoRow,
	StyledCardInfoTitle,
	StyledCardInfoWrapper,
} from './styled';

export const UpcomingActions = () => {
	return (
		<StyledCardInfoWrapper>
			<StyledCardInfoHeader>
				<StyledCardInfoTitle>Upcoming Actions (2)</StyledCardInfoTitle>
			</StyledCardInfoHeader>
			<StyledCardInfoMain>
				<StyledCardInfoRow>
					<StyledCardInfoActionBox>
						<StyledCardInfoActionLabel>Team Registration</StyledCardInfoActionLabel>
						<StyledCardInfoActionDate>Today</StyledCardInfoActionDate>
					</StyledCardInfoActionBox>
					<StyledCardInfoActionBox>
						<StyledCardInfoActionLabel>Official Registration</StyledCardInfoActionLabel>
						<StyledCardInfoActionDate>
							<StyledCardInfoActionDateDay>Sun</StyledCardInfoActionDateDay>, Sep 24
						</StyledCardInfoActionDate>
					</StyledCardInfoActionBox>
				</StyledCardInfoRow>
			</StyledCardInfoMain>
		</StyledCardInfoWrapper>
	);
};
