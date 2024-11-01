import { DataDropDown } from '@/shared/components/DropDown';
import { useCallback, useEffect, useRef, useState } from 'react';

import { dataYears } from '../models/data';

export const useSearch = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const searchRef = useRef<HTMLDivElement>(null);
	const inputFieldRef = useRef<HTMLInputElement>(null);
	const [searchValue, setSearchValue] = useState('');
	const [selectedYears, setSelectedYears] = useState<DataDropDown[]>([]);
	const [selectedEventTypes, setSelectedEventTypes] = useState<DataDropDown[]>([]);

	const handleSelectYear = (year: DataDropDown) => {
		setSelectedYears((prev) => {
			if (prev.some((item) => item.id === year.id)) {
				return prev;
			}
			return [...prev, year];
		});
	};

	const handleSelectEventType = (eventType: DataDropDown) => {
		setSelectedEventTypes((prev) => {
			if (!prev.length) {
				return [...prev, eventType];
			}
			return [...prev];
		});
	};

	const handleRemoveEventType = (eventType: DataDropDown) => {
		setSelectedEventTypes((prev) => {
			return prev.filter((item) => item.id !== eventType.id);
		});
	};

	const handleSelectAllYears = () => {
		setSelectedYears(dataYears);
	};
	const handleClearAllYears = () => {
		setSelectedYears([]);
	};

	const handleRemoveYear = (year: DataDropDown) => {
		setSelectedYears((prev) => {
			return prev.filter((item) => item.id !== year.id);
		});
	};

	const handleOpenModal = useCallback(() => {
		setIsOpenModal(true);
	}, []);

	const handleCloseModal = useCallback(() => {
		setIsOpenModal(false);
	}, []);

	const handleClearForm = () => {
		setSearchValue('');
		setSelectedYears([]);
		setSelectedEventTypes([]);
	};

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

	const isShowSearchResult =
		searchValue.length > 0 &&
		selectedYears.length > 0 &&
		selectedEventTypes.length > 0 &&
		!isOpenModal;

	return {
		isOpenModal,
		handleOpenModal,
		searchRef,
		inputFieldRef,
		searchValue,
		setSearchValue,
		selectedYears,
		selectedEventTypes,
		handleSelectYear,
		handleSelectEventType,
		handleSelectAllYears,
		handleClearAllYears,
		handleRemoveYear,
		handleRemoveEventType,
		isShowSearchResult,
		handleClearForm,
		handleCloseModal,
	};
};
