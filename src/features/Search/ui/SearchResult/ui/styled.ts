import { styled } from 'styled-components';

export const StyledSearchResultWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
export const StyledSearchResultClearButton = styled.button`
	border-radius: 8px;
	border: 1px solid rgba(145, 158, 171, 0.32);
	background: #fff;
	box-shadow: 0px 1px 2px 0px rgba(145, 158, 171, 0.16);
	min-width: 40px;
	max-width: 40px;
	min-height: 40px;
	max-height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
export const StyledSearchResultContent = styled.div`
	max-width: 470px;
`;
export const StyledSearchResultContentLabel = styled.span`
	color: #919eab;
	font-size: 16px;
	line-height: 24px;
	width: fit-content;
`;
export const StyledSearchResultContentParam = styled.b`
	font-weight: 700;
	color: #919eab;
	font-size: 16px;
	line-height: 24px;
`;
