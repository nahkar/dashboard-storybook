import { styled } from 'styled-components';

export const StyledDropDownWrapper = styled.div<{ $minWidth?: number }>`
	min-width: ${({ $minWidth }) => ($minWidth ? `${$minWidth}px` : 'auto')};
`;
export const StyledDropDownLabel = styled.p`
	color: #212b36;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	margin: 0 0 5px;
`;

export const StyledDropDownButton = styled.div<{ $minWidth?: number }>`
	border-radius: 8px;
	border: 1px solid rgba(145, 158, 171, 0.24);
	background: #fff;
	color: #212b36;
	font-size: 16px;
	line-height: 24px;
	padding: 8px 8px 7px 14px;
	min-width: ${({ $minWidth }) => ($minWidth ? `${$minWidth}px` : 'auto')};
	max-width: ${({ $minWidth }) => ($minWidth ? `${$minWidth}px` : 'auto')};
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`;
export const StyledDropDownArrowBtn = styled.img<{ $isOpen?: boolean }>`
	transition: all 0.3s ease-in-out;
	transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
	&:hover {
		transition: all 0.3s ease-in-out;
	}
`;
export const StyledDropDownListWrapper = styled.div`
	position: relative;
`;
export const StyledDropDownList = styled.ul`
	position: absolute;
	border-radius: 12px;
	border: 1px solid rgba(145, 158, 171, 0.24);
	background: #fff;
	width: 100%;
	top: 5px;
	padding: 23px 11px 18px 11px;
	box-shadow: 0px 8px 16px 0px rgba(145, 158, 171, 0.16);
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
`;
export const StyledDropDownListItem = styled.li`
	cursor: pointer;
`;
