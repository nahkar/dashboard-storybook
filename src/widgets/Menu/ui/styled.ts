import { styled } from 'styled-components';

export const Menu__Wrapper = styled.div<{ $isOpen: boolean }>`
	width: ${({ $isOpen }) => ($isOpen ? '253px' : '100px')};
	height: 100vh;
	background: #194ed5;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	transition: all 0.2s;
`;
export const Menu__Header = styled.div`
	padding: 24px 30px 0 30px;
	margin: 0 0 36px;
`;
export const Menu__Button = styled.button<{ $isOpen: boolean }>`
	position: absolute;
	bottom: 95px;
	right: ${({ $isOpen }) => ($isOpen ? '-20px' : '-40px')};
	border: none;
	background: none;
	cursor: pointer;
`;
export const Menu__UserInfoWrapper = styled.div`
	padding: 0 20px 0 20px;
	margin: 0 0 32px;
	width: fit-content;
`;
export const Menu__UserInfoInner = styled.div<{ $isOpen: boolean }>`
	border-radius: 12px;
	background: rgba(255, 255, 255, 0.16);
	padding: ${({ $isOpen }) => ($isOpen ? '16px 20px' : '10px 10px')};
	display: flex;
	align-items: center;
	gap: 16px;
`;
export const Menu__UserInfoMonogram = styled.div`
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
export const Menu__UserInfoName = styled.h4<{ $isOpen: boolean }>`
	display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
	color: #fff;
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 600;
	line-height: 22px;
`;
export const Menu__UserMenuListWrapper = styled.div<{ $isOpen: boolean }>`
	padding: ${({ $isOpen }) => ($isOpen ? '0px 12px 0px 16px' : '0px 12px 0px 22px')};
`;
export const Menu__UserMenuListTitle = styled.h4`
	color: #fff;
	font-family: 'Public Sans';
	font-size: 12px;
	font-weight: 700;
	line-height: 18px;
	text-transform: uppercase;
	margin: 0 0 12px;
`;

export const Menu__UserMenuList = styled.ul`
	margin: 0 0 30px;
`;
export const Menu__UserMenuListItem = styled.li<{ $active?: boolean; $isOpen: boolean }>`
	margin-bottom: 30px;
	&:last-child {
		margin: 0;
	}
`;

export const Menu__UserMenuListInner = styled.div<{
	$active?: boolean;
	$isOpen: boolean;
	$isInnerList?: boolean;
}>`
	width: ${({ $isOpen, $active }) => ($isOpen ? 'fit-content' : $active ? '39px' : '100%')};
	padding: ${({ $active, $isOpen }) => ($active ? ($isOpen ? '0 0 0 10px' : '0') : '0 0 0 16px')};
	font-family: 'Public Sans';
	font-size: 14px;
	line-height: 22px;
	display: flex;
	align-items: center;
	margin-left: ${({ $active, $isOpen }) => $active && !$isOpen && '8px'};

	justify-content: ${({ $active }) => ($active ? 'space-around' : 'flex-start')};
	cursor: pointer;

	&:hover {
		span {
			text-decoration: underline;
		}
	}

	${({ $active }) =>
		$active &&
		`
      color: #194ed5;
      border-radius: 38px;
      background: #FFF;
      height: 32px;
  `}

	span {
		display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
		align-items: center;
		justify-content: space-between;
		width: ${({ $isInnerList }) => ($isInnerList ? '160px' : 'fit-content')};
		color: ${({ $active }) => ($active ? '#194ed5' : '#fff')};
		font-weight: ${({ $active }) => ($active ? 700 : 400)};
		margin: ${({ $active }) => ($active ? '0 15px 0 10px' : '0 0 0 16px')};
		${({ $active }) =>
			$active &&
			`
      text-decoration: none !important;
  `}
	}
`;
export const Menu__LogoutButton = styled.button<{ $isOpen: boolean }>`
	border-radius: 12px;
	background: rgba(255, 255, 255, 0.16);
	height: 41px;
	padding: 0px 10px;
	color: #fff;
	font-family: 'Public Sans';
	font-size: 13px;
	font-weight: 600;
	line-height: 22px;
	border: none;
	margin: ${({ $isOpen }) => ($isOpen ? '0 0 0 32px' : '100px auto')};
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:hover {
		background: rgba(255, 255, 255, 0.32);
		transition: all 0.3s ease-in-out;
	}
`;
export const Menu__NavWrapper = styled.div`
	padding: 27px 0 0 32px;
`;
export const Menu__NavList = styled.ul``;
export const Menu__NavItem = styled.li`
	color: #fff;
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	margin: 0 0 2px;
	height: 40px;
	display: flex;
	align-items: center;
	width: 100%;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
	&:last-child {
		margin: 0;
	}
`;
