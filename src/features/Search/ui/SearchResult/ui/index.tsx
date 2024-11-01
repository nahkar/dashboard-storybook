import { StyledEllipsisSection } from '@/app/styles/global';
import { DataDropDown } from '@/shared/components/DropDown';

import { SearchForm__InputWrapper } from '../../SearchForm/styled';
import searchIcon from '../../img/search.icon.svg';
import clearBtnIcon from './img/clear.btn.icon.svg';
import {
	StyledSearchResultClearButton,
	StyledSearchResultContent,
	StyledSearchResultContentLabel,
	StyledSearchResultContentParam,
	StyledSearchResultWrapper,
} from './styled';

type Props = {
	searchValue: string;
	selectedYears: DataDropDown[];
	selectedEventTypes: DataDropDown[];
	handleOpenModal: () => void;
	handleClearForm: () => void;
};
export const SearchResult = ({
	searchValue,
	selectedYears,
	selectedEventTypes,
	handleOpenModal,
	handleClearForm,
}: Props) => {
	return (
		<StyledSearchResultWrapper>
			<SearchForm__InputWrapper onClick={handleOpenModal}>
				<img src={searchIcon} alt="" />
				<StyledSearchResultContent>
					<StyledEllipsisSection>
						<StyledSearchResultContentLabel>Showing Results for</StyledSearchResultContentLabel>{' '}
						<StyledSearchResultContentParam>“{searchValue}”, </StyledSearchResultContentParam>
						<StyledSearchResultContentParam>
							{selectedYears.map((item) => item.title).join(', ')} {', '}
						</StyledSearchResultContentParam>
						<StyledSearchResultContentParam>
							{selectedEventTypes.map((item) => item.title).join(', ')}
						</StyledSearchResultContentParam>
					</StyledEllipsisSection>
				</StyledSearchResultContent>
			</SearchForm__InputWrapper>
			<StyledSearchResultClearButton onClick={handleClearForm}>
				<img src={clearBtnIcon} alt="" />
			</StyledSearchResultClearButton>
		</StyledSearchResultWrapper>
	);
};
