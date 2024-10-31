import { useMenu } from '../hooks/useMenu';
import { MenuList } from './MenuList';
import { Nav } from './Nav';
import { UserInfo } from './UserInfo';
import menuCloseButton from './img/button.close.svg';
import logoutButton from './img/button.logout.svg';
import menuOpenButton from './img/button.open.svg';
import logo from './img/logo.svg';
import { Menu__Button, Menu__Header, Menu__LogoutButton, Menu__Wrapper } from './styled';

export const Menu = () => {
	const { isOpen, handleOpen } = useMenu();

	return (
		<Menu__Wrapper $isOpen={isOpen.value} data-testid="menu">
			<Menu__Header>
				<img src={logo} alt="logo" />
			</Menu__Header>
			<UserInfo isOpen={isOpen.value} />
			<MenuList isOpen={isOpen.value} />
			<Menu__LogoutButton $isOpen={isOpen.value}>
				<img src={logoutButton} alt="" />
				{isOpen.value ? 'Logout' : ''}
			</Menu__LogoutButton>
			{isOpen.value && <Nav />}
			<Menu__Button onClick={handleOpen} $isOpen={isOpen.value}>
				<img src={!isOpen.value ? menuCloseButton : menuOpenButton} alt="menu button" />
			</Menu__Button>
		</Menu__Wrapper>
	);
};
