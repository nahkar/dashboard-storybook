import { Box } from '@mui/material';

import locationIcon from './img/location.icon.svg';
import {
	Card__LocationInfoDescription,
	Card__LocationInfoTitle,
	Card__LocationInfoWrapper,
} from './styled';

export const LocationInfo = () => {
	return (
		<Card__LocationInfoWrapper>
			<img src={locationIcon} alt="location icon" />
			<Box>
				<Card__LocationInfoTitle>Spokane Convention Center</Card__LocationInfoTitle>
				<Card__LocationInfoDescription>334 W. Spokane Falls Blvd.</Card__LocationInfoDescription>
				<Card__LocationInfoDescription>Spokane, WA 99201</Card__LocationInfoDescription>
			</Box>
		</Card__LocationInfoWrapper>
	);
};
