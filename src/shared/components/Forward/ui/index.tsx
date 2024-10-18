import linkIcon from '@assets/link.icon.svg';

import { ForwardType } from '../models/types';
import calendarIcon from './img/calendar.icon.svg';
import calendarSuccessIcon from './img/calendarSuccess.icon.svg';
import {
	Forward__IconWrapper,
	Forward__Title,
	Forward__TitleWrapper,
	Forward__Wrapper,
} from './styled';

type Props = {
	title: string;
	linkLabel: string;
	linkUrl: string;
	type: ForwardType;
};
export const Forward = ({ title, linkLabel, linkUrl, type }: Props) => {
	return (
		<Forward__Wrapper data-testid="forward">
			<Forward__TitleWrapper>
				<Forward__IconWrapper>
					<img src={type == 'new' ? calendarSuccessIcon : calendarIcon} alt="" />
				</Forward__IconWrapper>
				<Forward__Title>{title}</Forward__Title>
			</Forward__TitleWrapper>
			<a href={linkUrl} target="_blank">
				{linkLabel}
				<img src={linkIcon} alt="" />
			</a>
		</Forward__Wrapper>
	);
};
