import { styled } from 'styled-components';

export const DefaultButton__Wrapper = styled.button`
	border-radius: 6px;
	background: #194ed5;
	box-shadow: 0px 8px 16px 0px rgba(25, 78, 213, 0.24);
	padding: 10px 20px;
	color: #fff;
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 700;
	line-height: 22px;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:hover {
		opacity: 0.8;
		transition: all 0.3s ease-in-out;
	}
`;
