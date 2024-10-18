import { styled } from 'styled-components';

export const Button__Favorite = styled.div<{ $isFavorite?: boolean }>`
	color: ${({ $isFavorite }) => ($isFavorite ? '#FFA31A' : '#637381')};
	border: 1px solid ${({ $isFavorite }) => ($isFavorite ? '#FFA31A' : '#919eab')};
	font-family: 'Public Sans';
	font-size: 13px;
	font-weight: 700;
	line-height: 22px;
	cursor: pointer;
	border-radius: 100px;
	padding: 5px 10px;
	display: flex;
	align-items: center;
	gap: 5px;
	&:hover {
		background-color: ${({ $isFavorite }) => $isFavorite && '#FFA31A'};
		color: ${({ $isFavorite }) => $isFavorite && '#FFF'};
	}
`;
export const Button__Info = styled.div<{ $isFavorite?: boolean }>`
	color: ${({ $isFavorite }) => ($isFavorite ? '#FFA31A' : '#637381')};
	border: 1px solid ${({ $isFavorite }) => ($isFavorite ? '#FFA31A' : '#919eab')};
	font-family: 'Public Sans';
	font-size: 13px;
	font-weight: 700;
	line-height: 22px;
	cursor: pointer;
	border-radius: 100px;
	padding: 5px 10px;
	display: flex;
	align-items: center;
	gap: 5px;
`;
