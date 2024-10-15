import { styled } from 'styled-components';

export const Forward__Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 12px;
	background: #fff;
	padding: 10px 20px;
	width: 360px;
	box-shadow: 0px 8px 16px 0px rgba(145, 158, 171, 0.16);
	a {
		max-width: 50%;
		color: #194ed5;
		font-family: 'Public Sans';
		font-size: 14px;
		font-weight: 400;
		line-height: 22px;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 5px;
		&:hover {
			text-decoration: underline;
		}
	}
`;
export const Forward__IconWrapper = styled.div`
	border-radius: 100px;
	background: rgba(25, 78, 213, 0.08);
	min-width: 40px;
	max-width: 40px;
	min-height: 40px;
	max-height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 16px;
		height: 16px;
	}
`;
export const Forward__TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	max-width: 50%;
`;
export const Forward__Title = styled.span`
	color: #212b36;
	font-family: 'Public Sans';
	font-size: 18px;
	font-weight: 700;
	line-height: 28px;
`;
