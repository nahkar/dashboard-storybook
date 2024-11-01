import { useSearch } from '../hooks/useSearch';
import { dataEventTypes, dataYears } from '../models/data';
import { SearchForm } from './SearchForm';
import { SearchResult } from './SearchResult';
import searchIcon from './img/search.icon.svg';
import { Search__Button, Search__ModalWrapper, Search__Title, Search__Wrapper } from './styled';

type Props = {
	title: string;
	count?: number;
};
export const Search = ({ title, count = 100 }: Props) => {
	const {
		isOpenModal,
		handleOpenModal,
		handleCloseModal,
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
	} = useSearch();
	return (
		<Search__Wrapper data-testid="search">
			<Search__Title>
				{title} <span>({count})</span>
			</Search__Title>
			{!isShowSearchResult && (
				<Search__Button onClick={handleOpenModal}>
					<img src={searchIcon} alt="" />
				</Search__Button>
			)}
			{isShowSearchResult && (
				<SearchResult
					searchValue={searchValue}
					selectedYears={selectedYears}
					selectedEventTypes={selectedEventTypes}
					handleOpenModal={handleOpenModal}
					handleClearForm={handleClearForm}
				/>
			)}
			{isOpenModal && (
				<Search__ModalWrapper ref={searchRef}>
					<SearchForm
						handleSubmit={handleCloseModal}
						handleRemoveYear={handleRemoveYear}
						handleRemoveEventType={handleRemoveEventType}
						handleClearAllYears={handleClearAllYears}
						handleSelectAllYears={handleSelectAllYears}
						handleSelectYear={handleSelectYear}
						handleSelectEventType={handleSelectEventType}
						selectedYears={selectedYears}
						selectedEventTypes={selectedEventTypes}
						dataYears={dataYears}
						dataEventTypes={dataEventTypes}
						inputFieldRef={inputFieldRef}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
				</Search__ModalWrapper>
			)}
		</Search__Wrapper>
	);
};
