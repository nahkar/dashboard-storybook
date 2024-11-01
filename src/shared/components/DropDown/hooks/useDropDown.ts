import { useState } from 'react';

import { DataDropDown } from '../models/types';

type Props = {
	selected: DataDropDown[];
};
export const useDropDown = ({ selected }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropDown = () => setIsOpen(!isOpen);
	const selectedIds = selected.map((i) => i.id);
	const selectedTitles = selected.map((i) => i.title);
	return { isOpen, toggleDropDown, selectedIds, selectedTitles };
};
