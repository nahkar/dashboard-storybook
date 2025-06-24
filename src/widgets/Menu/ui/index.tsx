import { UserInfo } from '@/features/UserInfo';

import { useMenu } from '../hooks/useMenu';
import { MenuList } from './MenuList';
import { Nav } from './Nav';
import menuCloseButton from './img/button.close.svg';
import logoutButton from './img/button.logout.svg';
import menuOpenButton from './img/button.open.svg';
import logo from './img/logo.svg';
import { Menu__Button, Menu__Header, Menu__LogoutButton, Menu__Wrapper } from './styled';

export const Menu = () => {
	const { isOpen, handleOpen } = useMenu();

	return (
		<Menu__Wrapper $isOpen={isOpen} data-testid="menu">
			<Menu__Header>
				<img src={logo} alt="logo" />
			</Menu__Header>
			<UserInfo isOpen={isOpen} />
			<MenuList isOpen={isOpen} />
			<Menu__LogoutButton $isOpen={isOpen}>
				<img src={logoutButton} alt="" />
				{isOpen ? 'Logout' : ''}
			</Menu__LogoutButton>
			{isOpen && <Nav />}
			<Menu__Button onClick={handleOpen} $isOpen={isOpen}>
				<img src={!isOpen ? menuCloseButton : menuOpenButton} alt="menu button" />
			</Menu__Button>
		</Menu__Wrapper>
	);
};
