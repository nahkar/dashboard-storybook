import { Menu__NavItem, Menu__NavList, Menu__NavWrapper } from './styled';

export const Nav = () => {
	return (
		<Menu__NavWrapper>
			<Menu__NavList>
				<Menu__NavItem>FAQ</Menu__NavItem>
				<Menu__NavItem>Support</Menu__NavItem>
				<Menu__NavItem>Privacy Policy</Menu__NavItem>
				<Menu__NavItem> Terms of Service</Menu__NavItem>
			</Menu__NavList>
		</Menu__NavWrapper>
	);
};
