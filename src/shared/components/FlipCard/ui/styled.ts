import { styled } from 'styled-components';

export const FlipCard__Wrapper = styled.div`
	background-color: transparent;
	perspective: 1000px;
`;
export const FlipCard__Inner = styled.div<{ $isFlipped?: boolean }>`
	position: relative;
	width: 100%;
	height: 100%;
	transition: transform 0.6s;
	transform-style: preserve-3d;
	transform: ${({ $isFlipped }) => ($isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;
export const FlipCard__Front = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
`;
export const FlipCard__Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	transform: rotateY(180deg);
`;
