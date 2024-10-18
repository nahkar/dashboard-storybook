import { DefaultButton } from '@/shared/components/DefaultButton';

import {
	Card__EventIncompleteDescription,
	Card__EventIncompleteTitle,
	Card__EventIncompleteWrapper,
} from './styled';

export const EventIncomplete = () => {
	return (
		<Card__EventIncompleteWrapper>
			<Card__EventIncompleteTitle>Event Incomplete</Card__EventIncompleteTitle>
			<Card__EventIncompleteDescription>
				Seems like some information is missing. Update Event <br /> Settings to be able to view
				information here.
			</Card__EventIncompleteDescription>
			<DefaultButton title="Event Settings" />
		</Card__EventIncompleteWrapper>
	);
};
