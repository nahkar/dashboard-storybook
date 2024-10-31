import { useSearch } from '../hooks/useSearch';
import { SearchForm } from './SearchForm';
import searchIcon from './img/search.icon.svg';
import { Search__Button, Search__ModalWrapper, Search__Title, Search__Wrapper } from './styled';

type Props = {
	title: string;
	count?: number;
};
export const Search = ({ title, count = 100 }: Props) => {
	const { isOpenModal, handleOpenModal, searchRef, inputFieldRef, searchValue, setSearchValue } =
		useSearch();
	return (
		<Search__Wrapper data-testid="search">
			<Search__Title>
				{title} <span>({count})</span>
			</Search__Title>
			<Search__Button onClick={handleOpenModal}>
				<img src={searchIcon} alt="" />
			</Search__Button>
			{isOpenModal && (
				<Search__ModalWrapper ref={searchRef}>
					<SearchForm
						inputFieldRef={inputFieldRef}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
				</Search__ModalWrapper>
			)}
		</Search__Wrapper>
	);
};
