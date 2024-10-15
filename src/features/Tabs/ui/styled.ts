import { styled } from 'styled-components';

export const Tabs__Wrapper = styled.div`
	border-radius: 100px;
	background: #fff;
	box-shadow: 0px 1px 2px 0px rgba(145, 158, 171, 0.16);
	padding: 10px 15px;
	width: fit-content;
`;
export const Tabs__List = styled.ul`
	display: flex;
	align-items: center;
	gap: 20px;
`;
export const Tabs__Item = styled.li<{ $isActive: boolean }>`
	color: ${({ $isActive }) => ($isActive ? '#194ED5' : '#637381')};
	font-family: 'Public Sans';
	font-size: 12px;
	font-weight: 700;
	line-height: 18px;
	text-transform: uppercase;
	position: relative;

	&:hover {
		color: #194ed5;
		cursor: ${({ $isActive }) => ($isActive ? 'default' : 'pointer')};
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 50%;
		right: -12px;
		width: 4px;
		height: 4px;
		border-radius: 1px;
		transform: translate(0, 50%);
		background: ${({ $isActive }) => ($isActive ? '#194ED5' : '#637381')};
	}

	&:last-child {
		&::after {
			display: none;
		}
	}
`;
