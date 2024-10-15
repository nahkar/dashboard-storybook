import { useCallback, useState } from 'react';

export const useSearch = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const handleCloseModal = useCallback(() => {
		setIsOpenModal(false);
	}, []);
	const handleOpenModal = useCallback(() => {
		setIsOpenModal(true);
	}, []);
	return { isOpenModal, handleCloseModal, handleOpenModal };
};
