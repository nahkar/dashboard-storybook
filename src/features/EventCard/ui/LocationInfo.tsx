import { Box } from '@mui/material';

import locationIcon from './img/location.icon.svg';
import {
	StyledCardLocationInfoDescription,
	StyledCardLocationInfoTitle,
	StyledCardLocationInfoWrapper,
} from './styled';

export const LocationInfo = () => {
	return (
		<StyledCardLocationInfoWrapper>
			<img src={locationIcon} alt="location icon" />
			<Box>
				<StyledCardLocationInfoTitle>Spokane Convention Center</StyledCardLocationInfoTitle>
				<StyledCardLocationInfoDescription>
					334 W. Spokane Falls Blvd.
				</StyledCardLocationInfoDescription>
				<StyledCardLocationInfoDescription>Spokane, WA 99201</StyledCardLocationInfoDescription>
			</Box>
		</StyledCardLocationInfoWrapper>
	);
};
