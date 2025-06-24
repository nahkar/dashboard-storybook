import { availableEventsData } from '../models/data';
import { AvailableEvent } from '../models/types';
import {
	StyledCardAvailableCheckBoxItem,
	StyledCardAvailableCheckBoxList,
	StyledCardAvailableHeader,
	StyledCardAvailableTitle,
	StyledCardAvailableWrapper,
} from './styled';

type Props = {
	availableEvents?: AvailableEvent[];
	activeAvailable: number[];
	handleActiveAvailable: (_e: React.MouseEvent<HTMLLIElement>, _id: number) => void;
};

export const Available = ({
	activeAvailable,
	handleActiveAvailable,
	availableEvents = availableEventsData,
}: Props) => {
	return (
		<StyledCardAvailableWrapper>
			<StyledCardAvailableHeader>
				<StyledCardAvailableTitle>Available for this event:</StyledCardAvailableTitle>
			</StyledCardAvailableHeader>
			<StyledCardAvailableCheckBoxList>
				{availableEvents?.map((event) => (
					<StyledCardAvailableCheckBoxItem
						key={event.id}
						$isActive={activeAvailable.includes(event.id)}
						onClick={(e) => handleActiveAvailable(e, event.id)}
					>
						{event.name}
					</StyledCardAvailableCheckBoxItem>
				))}
			</StyledCardAvailableCheckBoxList>
		</StyledCardAvailableWrapper>
	);
};
