import { styled } from 'styled-components';

export const SearchForm__Wrapper = styled.div``;
export const SearchForm__Row = styled.div<{ $mb?: number }>`
	${({ $mb }) => $mb && `margin-bottom: ${$mb}px;`}
`;
export const SearchForm__InputWrapper = styled.div`
	width: 100%;
	border-radius: 10px;
	border: 1px solid rgba(145, 158, 171, 0.24);
	background: #fff;
	height: 40px;
	padding: 8px 14px 8px 14px;
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
`;
export const SearchForm__InputField = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	outline: none;
	&::placeholder {
		color: #919eab;
		font-family: 'Public Sans';
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
	}
`;
export const StyledSearchFormClearButton = styled.img`
	cursor: pointer;
	opacity: 1;
	transition: all 0.3s ease-in-out;
	&:hover {
		opacity: 0.7;
		transition: all 0.3s ease-in-out;
	}
`;
export const StyledSearchFormDropDownWrapper = styled.div`
	display: flex;
	align-items: end;
	justify-content: space-between;
`;
