import clearIcon from '../img/clear.icon.svg';
import searchIcon from '../img/search.icon.svg';
import {
	SearchForm__InputField,
	SearchForm__InputWrapper,
	SearchForm__Row,
	SearchForm__Wrapper,
	StyledSearchFormClearButton,
} from './styled';

type Props = {
	inputFieldRef: React.RefObject<HTMLInputElement>;
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};
export const SearchForm = ({ inputFieldRef, searchValue, setSearchValue }: Props) => {
	return (
		<SearchForm__Wrapper>
			<SearchForm__Row>
				<SearchForm__InputWrapper>
					<img src={searchIcon} alt="" />
					<SearchForm__InputField
						ref={inputFieldRef}
						type="text"
						placeholder="Enter Event Name"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					{searchValue && (
						<StyledSearchFormClearButton
							src={clearIcon}
							alt=""
							onClick={() => setSearchValue('')}
						/>
					)}
				</SearchForm__InputWrapper>
			</SearchForm__Row>
		</SearchForm__Wrapper>
	);
};
