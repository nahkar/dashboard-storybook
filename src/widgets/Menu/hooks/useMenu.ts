import { isMenuOpen } from '@/shared/signals/menu';

export const useMenu = () => {
	const handleOpen = () => {
		isMenuOpen.value = !isMenuOpen.value;
	};

	return {
		isOpen: isMenuOpen,
		handleOpen,
	};
};
