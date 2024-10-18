import { styled } from 'styled-components';

export const Card__Wrapper = styled.div`
	max-width: 739px;
	width: 100%;
	padding: 15px 15px 11px 15px;
	border-radius: 12px;
	background: #fff;
	box-shadow: 0px 8px 16px 0px rgba(145, 158, 171, 0.16);
`;
export const Card__Header = styled.header`
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Card__EventInfo = styled.div`
	display: flex;
	align-items: center;
`;
export const Card__EventInfoButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
`;
export const Card__LogoNameWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 7px;
`;
export const Card__EventName = styled.h4`
	color: var(--Others-Text-Light-Primary, #212b36);
	font-family: 'Public Sans';
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	display: flex;
	align-items: center;
`;
export const Card__HeaderBtn = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	width: 18px;
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Card__ContentWrapper = styled.div<{ $isIncomplete?: boolean }>`
	border-radius: ${({ $isIncomplete }) => $isIncomplete && '6px'};
	border: ${({ $isIncomplete }) => $isIncomplete && '1px solid rgba(145, 158, 171, 0.24)'};
	background: rgba(255, 255, 255, 0.48);
	position: relative;
`;
export const Card__ContentInner = styled.div<{ $isIncomplete?: boolean }>`
	display: flex;
	gap: 15px;
	width: 100%;
	filter: ${({ $isIncomplete }) => $isIncomplete && 'blur(6px)'};
`;
// * Timer
export const Card__TimerWrapper = styled.div`
	border-radius: 6px;
	border: 1px solid rgba(25, 78, 213, 0.12);
	padding: 10px;
	display: flex;
	align-items: end;
	justify-content: space-between;
`;
export const Card__TimerLabel = styled.p`
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
`;
// * Upcoming Actions and Statistics
export const Card__InfoWrapper = styled.div`
	border-radius: 6px;
	padding: 10px;
	background: rgba(25, 78, 213, 0.08);
`;
export const Card__InfoHeader = styled.header`
	margin: 0 0 10px;
`;
export const Card__InfoTitle = styled.h4`
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 700;
	line-height: 22px;
`;
export const Card__InfoMain = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
export const Card__InfoRow = styled.div`
	display: flex;
	gap: 10px;
`;
export const Card__InfoActionBox = styled.div`
	border-radius: 12px;
	background: #fff;
	padding: 8px;
	width: 100%;
`;
export const Card__InfoActionLabel = styled.p`
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 10px;
	font-style: normal;
	font-weight: 700;
	line-height: 16px;
`;
export const Card__InfoActionDate = styled.p`
	color: #194ed5;
	font-family: 'Public Sans';
	font-size: 14px;
	line-height: 22px;
	font-weight: 700;
`;
export const Card__InfoActionDateDay = styled.span`
	color: #194ed5;
	font-family: 'Public Sans';
	font-size: 14px;
	font-style: normal;
	line-height: 22px;
	font-weight: 400;
`;
// * Available
export const Card__AvailableWrapper = styled.div`
	padding: 0 10px;
`;
export const Card__AvailableHeader = styled.header`
	margin: 0 0 5px;
`;
export const Card__AvailableTitle = styled.h4`
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 700;
	line-height: 22px;
`;
export const Card__AvailableCheckBoxList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
`;
export const Card__AvailableCheckBoxItem = styled.li<{ $isActive: boolean }>`
	color: ${({ $isActive }) => ($isActive ? '#194ed5' : '#637381')};
	font-family: 'Public Sans';
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	padding: 2px 10px;
	border-radius: 20px;
	border: 1px solid ${({ $isActive }) => ($isActive ? '#194ed5' : '#637381')};
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		transition: all 0.3s ease;
		border-color: #194ed5;
		color: #194ed5;
	}
`;
export const Card__EventIncompleteWrapper = styled.div`
	position: absolute;
	text-align: center;
	width: 100%;
	z-index: 2;
	top: 50%;
	transform: translateY(-50%);
`;
export const Card__EventIncompleteTitle = styled.h4`
	color: #000;
	font-family: 'Public Sans';
	font-size: 20px;
	font-weight: 700;
	line-height: 22px;
`;
export const Card__EventIncompleteDescription = styled.p`
	color: #919eab;
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	margin-bottom: 10px;
`;
// * LocationInfo
export const Card__LocationInfoWrapper = styled.div`
	border-radius: 6px;
	border: 1px solid rgba(25, 78, 213, 0.12);
	padding: 10px;
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 14px;
	line-height: 22px;
	display: flex;
	gap: 3px;
	align-items: start;
`;
export const Card__LocationInfoTitle = styled.h4`
	font-weight: 700;
	margin-bottom: 3px;
`;
export const Card__LocationInfoDescription = styled.p`
	margin-bottom: 3px;
	&:last-child {
		margin-bottom: 0;
	}
`;
// * DateInfo
export const Card__BackInfoWrapper = styled.div<{ $type?: 'primary' | 'secondary' }>`
	border-radius: 6px;
	background: ${({ $type }) =>
		$type === 'secondary' ? 'rgba(25, 78, 213, 0.08)' : 'rgba(145, 158, 171, 0.16)'};
	padding: 10px 15px;
`;
export const Card__BackInfoList = styled.ul``;
export const Card__BackInfoItem = styled.li<{ $isDivider?: boolean }>`
	${({ $isDivider }) => $isDivider && 'background: rgba(145, 158, 171, 0.24); height: 1px;'}
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 14px;
	line-height: 22px;
	margin-bottom: 3px;
	&:last-child {
		margin-bottom: 0;
	}
`;
export const Card__BackInfoItemLabel = styled.b`
	font-weight: 700;
`;
export const Card__BackInfoItemValue = styled.span`
	font-weight: 400;
`;
