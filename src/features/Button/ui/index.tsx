import { useButton } from '../hooks/useButton';
import { ButtonType } from '../models/types';
import starSelectedHoverIcon from './img/star.selected.hover.icon.svg';
import startSelectedIcon from './img/star.selected.icon.svg';
import startUnselectedIcon from './img/start.unselect.icon.svg';
import { Button__Favorite, Button__Info } from './styled';

type Props = {
	type?: ButtonType;
	isFavorite?: boolean;
	onClick?: () => void;
	handleIsFavorite?: () => void;
	isActiveAdditionalInfo?: boolean;
	handleIsActiveAdditionalInfo?: () => void;
};
export const Button = ({
	isFavorite,
	handleIsFavorite,
	isActiveAdditionalInfo,
	handleIsActiveAdditionalInfo,
	onClick,
	type = 'info',
}: Props) => {
	const { label, handleMouseEnter, handleMouseLeave, hovered } = useButton({
		type,
		isFavorite,
		isActiveAdditionalInfo,
	});
	if (type === 'star') {
		return (
			<Button__Favorite
				data-testid="buttonStar"
				onClick={(e) => {
					e.stopPropagation();
					handleIsFavorite && handleIsFavorite();
				}}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				$isFavorite={isFavorite}
			>
				{label}
				{!isFavorite && <img src={startUnselectedIcon} alt="" />}
				{isFavorite && !hovered && <img src={startSelectedIcon} alt="" />}
				{isFavorite && hovered && <img src={starSelectedHoverIcon} alt="" />}
			</Button__Favorite>
		);
	} else {
		return (
			<Button__Info
				data-testid="buttonInfo"
				onClick={() => {
					handleIsActiveAdditionalInfo && handleIsActiveAdditionalInfo();
					onClick && onClick();
				}}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{label}
			</Button__Info>
		);
	}
};
