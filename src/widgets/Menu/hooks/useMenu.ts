import { isMenuOpen } from '@/shared/signals/menu';
import { useEffect, useState } from 'react';

export const useMenu = () => {
	const [menuOpen, setMenuOpen] = useState(isMenuOpen.value);

	const handleOpen = () => {
		isMenuOpen.value = !isMenuOpen.value;
	};

	useEffect(() => {
		const unsubscribe = isMenuOpen.subscribe((val) => {
			setMenuOpen(val);
		});
		return () => unsubscribe();
	}, []);

	return {
		isOpen: menuOpen,
		handleOpen,
	};
};
