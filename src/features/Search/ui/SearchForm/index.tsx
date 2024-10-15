import searchIcon from '../img/search.icon.svg';
import {
	SearchForm__InputField,
	SearchForm__InputWrapper,
	SearchForm__Row,
	SearchForm__Wrapper,
} from './styled';

export const SearchForm = () => {
	return (
		<SearchForm__Wrapper>
			<SearchForm__Row>
				<SearchForm__InputWrapper>
					<img src={searchIcon} alt="" />
					<SearchForm__InputField type="text" placeholder="Enter Event Name" />
				</SearchForm__InputWrapper>
			</SearchForm__Row>
		</SearchForm__Wrapper>
	);
};
