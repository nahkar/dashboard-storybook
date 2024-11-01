import { styled } from 'styled-components';

export const StyledPillWrapper = styled.div<{ $isSelected?: boolean; $isClear?: boolean }>`
	border-radius: 50px;
	border: 1px solid #919eab;
	width: fit-content;
	padding: 2px 6px;
	color: #919eab;
	font-size: 14px;
	line-height: 22px;
	background: #fff;
	transition: all 0.3s ease-in-out;
	display: flex;
	align-items: center;
	gap: 2px;
	&:hover {
		border: 1px solid #194ed5;
		background: #194ed5;
		color: #fff;
		transition: all 0.3s ease-in-out;
	}
	${({ $isSelected }) => $isSelected && `background: #194ed5; color: #fff;`}
	${({ $isClear }) =>
		$isClear &&
		`border-color: #FF4842; color: #FF4842; &:hover { border-color: #FF4842; color: #FF4842; background: #fff; }`}
`;
