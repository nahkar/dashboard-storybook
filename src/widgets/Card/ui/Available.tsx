import { availableEventsData } from '../models/data';
import { AvailableEvent } from '../models/types';
import {
	Card__AvailableCheckBoxItem,
	Card__AvailableCheckBoxList,
	Card__AvailableHeader,
	Card__AvailableTitle,
	Card__AvailableWrapper,
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
		<Card__AvailableWrapper>
			<Card__AvailableHeader>
				<Card__AvailableTitle>Available for this event:</Card__AvailableTitle>
			</Card__AvailableHeader>
			<Card__AvailableCheckBoxList>
				{availableEvents?.map((event) => (
					<Card__AvailableCheckBoxItem
						key={event.id}
						$isActive={activeAvailable.includes(event.id)}
						onClick={(e) => handleActiveAvailable(e, event.id)}
					>
						{event.name}
					</Card__AvailableCheckBoxItem>
				))}
			</Card__AvailableCheckBoxList>
		</Card__AvailableWrapper>
	);
};
