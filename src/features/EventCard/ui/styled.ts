import { styled } from 'styled-components';

export const StyledCardWrapper = styled.div`
	max-width: 739px;
	width: 100%;
	padding: 15px 15px 11px 15px;
	border-radius: 12px;
	background: #fff;
	box-shadow: 0px 8px 16px 0px rgba(145, 158, 171, 0.16);
`;
export const StyledCardHeader = styled.header`
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const StyledCardEventInfo = styled.div`
	display: flex;
	align-items: center;
`;
export const StyledCardEventInfoButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
`;
export const StyledCardLogoNameWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 7px;
`;
export const StyledCardEventName = styled.h4`
	color: var(--Others-Text-Light-Primary, #212b36);
	font-family: 'Public Sans';
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	display: flex;
	align-items: center;
`;
export const StyledCardHeaderBtn = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	width: 18px;
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const StyledCardContentWrapper = styled.div<{ $isIncomplete?: boolean }>`
	border-radius: ${({ $isIncomplete }) => $isIncomplete && '6px'};
	border: ${({ $isIncomplete }) => $isIncomplete && '1px solid rgba(145, 158, 171, 0.24)'};
	background: rgba(255, 255, 255, 0.48);
	position: relative;
`;
export const StyledCardContentInner = styled.div<{ $isIncomplete?: boolean }>`
	display: flex;
	gap: 15px;
	width: 100%;
	filter: ${({ $isIncomplete }) => $isIncomplete && 'blur(6px)'};
`;
// * Timer
export const StyledCardTimerWrapper = styled.div`
	border-radius: 6px;
	border: 1px solid rgba(25, 78, 213, 0.12);
	padding: 10px;
	display: flex;
	align-items: end;
	justify-content: space-between;
`;
export const StyledCardTimerLabel = styled.p`
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
`;
// * Upcoming Actions and Statistics
export const StyledCardInfoWrapper = styled.div`
	border-radius: 6px;
	padding: 10px;
	background: rgba(25, 78, 213, 0.08);
`;
export const StyledCardInfoHeader = styled.header`
	margin: 0 0 10px;
`;
export const StyledCardInfoTitle = styled.h4`
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 700;
	line-height: 22px;
`;
export const StyledCardInfoMain = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
export const StyledCardInfoRow = styled.div`
	display: flex;
	gap: 10px;
`;
export const StyledCardInfoActionBox = styled.div`
	border-radius: 12px;
	background: #fff;
	padding: 8px;
	width: 100%;
`;
export const StyledCardInfoActionLabel = styled.p`
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 10px;
	font-style: normal;
	font-weight: 700;
	line-height: 16px;
`;
export const StyledCardInfoActionDate = styled.p`
	color: #194ed5;
	font-family: 'Public Sans';
	font-size: 14px;
	line-height: 22px;
	font-weight: 700;
`;
export const StyledCardInfoActionDateDay = styled.span`
	color: #194ed5;
	font-family: 'Public Sans';
	font-size: 14px;
	font-style: normal;
	line-height: 22px;
	font-weight: 400;
`;
// * Available
export const StyledCardAvailableWrapper = styled.div`
	padding: 0 10px;
`;
export const StyledCardAvailableHeader = styled.header`
	margin: 0 0 5px;
`;
export const StyledCardAvailableTitle = styled.h4`
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 700;
	line-height: 22px;
`;
export const StyledCardAvailableCheckBoxList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
`;
export const StyledCardAvailableCheckBoxItem = styled.li<{ $isActive: boolean }>`
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
export const StyledCardEventIncompleteWrapper = styled.div`
	position: absolute;
	text-align: center;
	width: 100%;
	z-index: 2;
	top: 50%;
	transform: translateY(-50%);
`;
export const StyledCardEventIncompleteTitle = styled.h4`
	color: #000;
	font-family: 'Public Sans';
	font-size: 20px;
	font-weight: 700;
	line-height: 22px;
`;
export const StyledCardEventIncompleteDescription = styled.p`
	color: #919eab;
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	margin-bottom: 10px;
`;
// * LocationInfo
export const StyledCardLocationInfoWrapper = styled.div`
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
export const StyledCardLocationInfoTitle = styled.h4`
	font-weight: 700;
	margin-bottom: 3px;
`;
export const StyledCardLocationInfoDescription = styled.p`
	margin-bottom: 3px;
	&:last-child {
		margin-bottom: 0;
	}
`;
// * DateInfo
export const StyledCardBackInfoWrapper = styled.div<{ $type?: 'primary' | 'secondary' }>`
	border-radius: 6px;
	background: ${({ $type }) =>
		$type === 'secondary' ? 'rgba(25, 78, 213, 0.08)' : 'rgba(145, 158, 171, 0.16)'};
	padding: 10px 15px;
`;
export const StyledCardBackInfoList = styled.ul``;
export const StyledCardBackInfoItem = styled.li<{ $isDivider?: boolean }>`
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
export const StyledCardBackInfoItemLabel = styled.b`
	font-weight: 700;
`;
export const StyledCardBackInfoItemValue = styled.span`
	font-weight: 400;
`;
