import { useUserQuery } from '@/entities/user/model/useUserQuery';

import {
	StyledUserInfoInner,
	StyledUserInfoMonogram,
	StyledUserInfoName,
	StyledUserInfoWrapper,
} from './styled';

type Props = {
	isOpen: boolean;
};
export const UserInfo = ({ isOpen }: Props) => {
	const { data } = useUserQuery();

	const firstName = data?.firstName;
	const lastName = data?.lastName;
	const monogram = firstName?.[0] && lastName?.[0] ? firstName?.[0] + lastName?.[0] : '';

	return (
		<StyledUserInfoWrapper>
			<StyledUserInfoInner $isOpen={isOpen}>
				<StyledUserInfoMonogram>{monogram}</StyledUserInfoMonogram>
				<StyledUserInfoName $isOpen={isOpen}>
					{firstName} {lastName}
				</StyledUserInfoName>
			</StyledUserInfoInner>
		</StyledUserInfoWrapper>
	);
};
