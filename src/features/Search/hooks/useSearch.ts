import { useCallback, useEffect, useRef, useState } from 'react';

export const useSearch = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const searchRef = useRef<HTMLDivElement>(null);
	const inputFieldRef = useRef<HTMLInputElement>(null);
	const [searchValue, setSearchValue] = useState('');

	const handleOpenModal = useCallback(() => {
		setIsOpenModal(true);
	}, []);

	useEffect(() => {
		if (isOpenModal) {
			inputFieldRef.current?.focus();
		}
	}, [isOpenModal]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
				setIsOpenModal(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	return { isOpenModal, handleOpenModal, searchRef, inputFieldRef, searchValue, setSearchValue };
};
