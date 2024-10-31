import styled from 'styled-components';

export const Activity__Wrapper = styled.div`
	min-width: 300px;
	max-width: 505px;
	border-radius: 12px;
	background: #fff;

	box-shadow: 0px 8px 16px 0px rgba(145, 158, 171, 0.16);
`;
export const Activity__Header = styled.header`
	padding: 16px 20px;
	height: 72px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid rgba(145, 158, 171, 0.24);
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
`;
export const Activity__Footer = styled.footer`
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Activity__List = styled.ul`
	min-height: 450px;
`;
export const Activity__Item = styled.li`
	padding: 12px 20px;
	height: 90px;
	border-bottom: 1px solid rgba(145, 158, 171, 0.24);
	display: flex;
	flex-direction: row;
	align-items: center;
	&:first-child {
		background: rgba(25, 78, 213, 0.08);
	}
`;
export const Activity__ItemWrapper = styled.div``;
export const Activity__ItemName = styled.h4`
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	margin-bottom: 4px;
	b {
		font-weight: 700;
	}
`;
export const Activity__ItemTime = styled.p`
	color: #919eab;
	font-family: 'Public Sans';
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;
	display: flex;
	align-items: center;
	gap: 4px;
`;
export const Activity__ShowMore = styled.button`
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
