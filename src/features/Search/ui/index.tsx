import { Modal } from '@/shared/components/Modal';

import { useSearch } from '../hooks/useSearch';
import { SearchForm } from './SearchForm';
import searchIcon from './img/search.icon.svg';
import { Search__Button, Search__ModalWrapper, Search__Title, Search__Wrapper } from './styled';

type Props = {
	title: string;
};
export const Search = ({ title }: Props) => {
	const { isOpenModal, handleCloseModal, handleOpenModal } = useSearch();
	return (
		<Search__Wrapper data-testid="search">
			<Search__Title>{title}</Search__Title>
			<Search__Button onClick={handleOpenModal}>
				<img src={searchIcon} alt="" />
			</Search__Button>
			<Modal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}>
				<Search__ModalWrapper>
					<SearchForm />
				</Search__ModalWrapper>
			</Modal>
		</Search__Wrapper>
	);
};
