import { styled } from 'styled-components';

import { CountdownType } from '../models/types';

export const getCountdownBackground = (type: CountdownType) => {
	switch (type) {
		case 'start':
			return '#009300';
		case 'close':
			return '#194ED5';
		case 'ended':
			return '#919EAB';
	}
};

export const CountdownTimer__Wrapper = styled.div``;
export const CountdownTimer__List = styled.ul`
	display: flex;
	gap: 4px;
	align-items: center;
`;
export const CountdownTimer__Item = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 36px;

	&:last-child {
		div {
			&:after {
				display: none;
			}
		}
	}
`;
export const CountdownTimer__Time = styled.div<{ $type: CountdownType }>`
	border-radius: 8px;
	width: 26px;
	height: 31px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => getCountdownBackground(props.$type)};
	color: #fff;
	font-family: 'Public Sans';
	font-size: 12px;
	font-weight: 700;
	line-height: 18px;
	position: relative;

	&:after {
		content: ':';
		color: ${(props) => getCountdownBackground(props.$type)};
		font-size: 35px;
		font-weight: 400;
		position: absolute;
		right: -55%;
		top: 40%;
		transform: translate(-50%, -50%);
	}
`;
export const CountdownTimer__Label = styled.div<{ $type: CountdownType }>`
	color: ${(props) => (props.$type === 'ended' ? '#919EAB' : '#194ed5')};
	font-family: 'Public Sans';
	font-size: 10px;
	font-weight: 400;
	line-height: 16px;
`;
