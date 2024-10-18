import { DefaultButton__Wrapper } from './styled';

type Props = {
	title: string;
	onClick?: () => void;
};
export const DefaultButton = ({ title, onClick }: Props) => {
	return (
		<DefaultButton__Wrapper onClick={onClick} data-testid="defaultButton">
			{title}
		</DefaultButton__Wrapper>
	);
};
