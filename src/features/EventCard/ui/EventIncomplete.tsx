import { DefaultButton } from '@/shared/components/DefaultButton';

import {
	StyledCardEventIncompleteDescription,
	StyledCardEventIncompleteTitle,
	StyledCardEventIncompleteWrapper,
} from './styled';

export const EventIncomplete = () => {
	return (
		<StyledCardEventIncompleteWrapper>
			<StyledCardEventIncompleteTitle>Event Incomplete</StyledCardEventIncompleteTitle>
			<StyledCardEventIncompleteDescription>
				Seems like some information is missing. Update Event <br /> Settings to be able to view
				information here.
			</StyledCardEventIncompleteDescription>
			<DefaultButton title="Event Settings" />
		</StyledCardEventIncompleteWrapper>
	);
};
