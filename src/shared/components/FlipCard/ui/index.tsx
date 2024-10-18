import { FlipCard__Back, FlipCard__Front, FlipCard__Inner, FlipCard__Wrapper } from './styled';

type Props = {
	front: React.ReactNode;
	back: React.ReactNode;
	isFlipped: boolean;
};
export const FlipCard = ({ front, back, isFlipped }: Props) => {
	return (
		<FlipCard__Wrapper data-testid="flipCard">
			<FlipCard__Inner $isFlipped={isFlipped}>
				<FlipCard__Front>{front}</FlipCard__Front>
				<FlipCard__Back>{back}</FlipCard__Back>
			</FlipCard__Inner>
		</FlipCard__Wrapper>
	);
};
