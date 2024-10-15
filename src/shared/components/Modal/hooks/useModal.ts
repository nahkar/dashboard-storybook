import { useState } from 'react';

export const useModal = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	// * Temporary disable
	// const handleOpenModal = () => setIsOpenModal(true);
	const handleOpenModal = () => null;
	const handleCloseModal = () => setIsOpenModal(false);

	return { isOpenModal, handleOpenModal, handleCloseModal };
};
