import { useState } from 'react';

type Props = {
	initialActiveIndex?: number;
};
export const useTabs = ({ initialActiveIndex = 0 }: Props) => {
	const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
	const onTabClick = (index: number) => {
		setActiveIndex(index);
	};
	return { activeIndex, onTabClick };
};
