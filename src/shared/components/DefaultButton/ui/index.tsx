import { DefaultButton__Wrapper } from './styled';

type Props = {
	title: string;
	isDisabled?: boolean;
	onClick?: () => void;
};
export const DefaultButton = ({ title, onClick, isDisabled }: Props) => {
	return (
		<DefaultButton__Wrapper onClick={onClick} data-testid="defaultButton" $isDisabled={isDisabled}>
			{title}
		</DefaultButton__Wrapper>
	);
};
