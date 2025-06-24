import { styled } from 'styled-components';

export const Calendar__Wrapper = styled.div`
	min-width: 300px;
	max-width: 505px;
	border-radius: 12px;
	background: #fff;
	overflow: hidden;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.16);
`;
export const Calendar__ListWrapper = styled.div``;
export const Calendar__ListHeader = styled.header<{ $isFirst?: boolean }>`
	background: ${({ $isFirst }) => ($isFirst ? '#009300' : '#194ED5')};
	padding: ${({ $isFirst }) => ($isFirst ? '10px 14px 8px 14px' : '8px 14px')};
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: 'Public Sans';
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 22px;
`;
export const Calendar__HeaderDay = styled.span`
	color: #fff;
`;
export const Calendar__HeaderDate = styled.span`
	color: #fff;
`;
export const Calendar__DataList = styled.ul``;
export const Calendar__DataItem = styled.li`
	display: flex;
	align-items: center;
	padding: 8px 14px;
`;
export const Calendar__DataTimeWrapper = styled.div`
	width: 110px;
`;
export const Calendar__DataTime = styled.span`
	text-transform: lowercase;
`;
export const Calendar__DataDescriptionWrapper = styled.div`
	width: calc(100% - 110px);
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
`;
export const Calendar__EventName = styled.b`
	font-weight: 700;
`;
export const Calendar__EventAction = styled.b``;
export const Calendar__Footer = styled.footer`
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid rgba(145, 158, 171, 0.24);
`;
export const Calendar__ViewAll = styled.button`
	color: #194ed5;
	font-family: 'Public Sans';
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	border: none;
	background: none;
	cursor: pointer;
`;
