import { Activity__ShowMore } from './styled';

type Props = {
	title?: string;
	onClick?: () => void;
};
export const ShowMore = ({ onClick, title = 'Show more' }: Props) => {
	return <Activity__ShowMore onClick={onClick}>{title}</Activity__ShowMore>;
};
