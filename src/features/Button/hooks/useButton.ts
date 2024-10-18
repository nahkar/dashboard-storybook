import { useState } from 'react';

import { ButtonType } from '../models/types';

type Props = {
	type: ButtonType;
	isFavorite?: boolean;
	isActiveAdditionalInfo?: boolean;
};
export const useButton = ({ type, isFavorite, isActiveAdditionalInfo }: Props) => {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => setHovered(true);
	const handleMouseLeave = () => {
		setHovered(false);
	};

	const getLabel = (type: ButtonType, isFavorite?: boolean, isActiveAdditionalInfo?: boolean) => {
		switch (type) {
			case 'info':
				return isActiveAdditionalInfo ? 'Main Info' : 'Additional Info';
			case 'star':
				if (isFavorite && hovered) {
					return 'Unstar Event';
				}
				return isFavorite ? 'Starred' : 'Star Event';
		}
	};

	return {
		label: getLabel(type, isFavorite, isActiveAdditionalInfo),
		handleMouseEnter,
		handleMouseLeave,
		hovered,
	};
};
