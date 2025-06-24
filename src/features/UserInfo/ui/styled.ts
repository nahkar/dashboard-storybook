import { styled } from 'styled-components';

export const StyledUserInfoWrapper = styled.div`
	padding: 0 20px 0 20px;
	margin: 0 0 32px;
	width: fit-content;
`;
export const StyledUserInfoInner = styled.div<{ $isOpen: boolean }>`
	border-radius: 12px;
	background: rgba(255, 255, 255, 0.16);
	padding: ${({ $isOpen }) => ($isOpen ? '16px 20px' : '10px 10px')};
	display: flex;
	align-items: center;
	gap: 16px;
`;
export const StyledUserInfoMonogram = styled.div`
	border-radius: 100px;
	background: #c4cdd5;
	width: 40px;
	height: 40px;
	color: #637381;
	text-align: center;
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 600;
	line-height: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const StyledUserInfoName = styled.h4<{ $isOpen: boolean }>`
	display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
	color: #fff;
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 600;
	line-height: 22px;
`;
