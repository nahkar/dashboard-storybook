import closeIcon from './img/close.icon.svg';
import clearIcon from './img/close.red.icon.svg';
import { StyledPillWrapper } from './styled';

type Props = {
	title: string;
	isSelected?: boolean;
	isClear?: boolean;
	handleRemove?: () => void;
	onClick?: () => void;
};
export const Pill = ({ title, isSelected, handleRemove, onClick, isClear }: Props) => {
	return (
		<StyledPillWrapper $isSelected={isSelected} onClick={onClick} $isClear={isClear}>
			{title}
			{handleRemove && isSelected && !isClear && (
				<img
					src={closeIcon}
					alt=""
					onClick={(e) => {
						e.stopPropagation();
						handleRemove();
					}}
				/>
			)}
			{isClear && <img src={clearIcon} alt="" />}
		</StyledPillWrapper>
	);
};
