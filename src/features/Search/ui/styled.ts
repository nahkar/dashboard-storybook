import { styled } from 'styled-components';

export const Search__Wrapper = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	gap: 10px;
	position: relative;
`;
export const Search__Title = styled.h4`
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 30px;
	span {
		font-weight: 400;
	}
`;
export const Search__Button = styled.button`
	border-radius: 10px;
	border: 1px solid rgba(145, 158, 171, 0.24);
	box-shadow: 0px 8px 16px 0px rgba(145, 158, 171, 0.16);
	background: #fff;
	width: 52px;
	height: 40px;
	cursor: pointer;
`;
export const Search__ModalWrapper = styled.div`
	border-radius: 12px;
	background: #fff;
	box-shadow: 0px 8px 16px 0px rgba(145, 158, 171, 0.16);
	padding: 20px;
	width: 615px;
	left: 100%;
	position: absolute;
	z-index: 1;
	top: -20px;
	transform: translateX(-55px);
`;
