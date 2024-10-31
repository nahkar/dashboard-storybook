import {
	Menu__UserInfoInner,
	Menu__UserInfoMonogram,
	Menu__UserInfoName,
	Menu__UserInfoWrapper,
} from './styled';

type Props = {
	isOpen: boolean;
};
export const UserInfo = ({ isOpen }: Props) => {
	return (
		<Menu__UserInfoWrapper>
			<Menu__UserInfoInner $isOpen={isOpen}>
				<Menu__UserInfoMonogram>MS</Menu__UserInfoMonogram>
				<Menu__UserInfoName $isOpen={isOpen}>Marc Swindle</Menu__UserInfoName>
			</Menu__UserInfoInner>
		</Menu__UserInfoWrapper>
	);
};
