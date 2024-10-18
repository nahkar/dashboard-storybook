import { useCallback, useState } from 'react';

export const useCard = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isActiveAdditionalInfo, setIsActiveAdditionalInfo] = useState(false);
	const [activeAvailable, setActiveAvailable] = useState<number[]>([]);
	const handleActiveAvailable = useCallback(
		(e: React.MouseEvent<HTMLLIElement>, id: number) => {
			e.stopPropagation();
			if (activeAvailable.includes(id)) {
				setActiveAvailable(activeAvailable.filter((item) => item !== id));
			} else {
				setActiveAvailable([...activeAvailable, id]);
			}
		},
		[activeAvailable],
	);
	const handleIsFavorite = useCallback(() => {
		setIsFavorite(!isFavorite);
	}, [isFavorite]);
	const handleIsActiveAdditionalInfo = useCallback(() => {
		setIsActiveAdditionalInfo(!isActiveAdditionalInfo);
	}, [isActiveAdditionalInfo]);

	const [isFlipped, setIsFlipped] = useState(false);

	const handleFlip = useCallback(() => {
		setIsFlipped(!isFlipped);
	}, [isFlipped]);

	return {
		activeAvailable,
		handleActiveAvailable,
		isFavorite,
		handleIsFavorite,
		isActiveAdditionalInfo,
		handleIsActiveAdditionalInfo,
		isFlipped,
		handleFlip,
	};
};
