import { Providers } from '@/app/providers';

import { FlipCard } from './index';

describe('<FlipCard /> Component', () => {
	beforeEach(() => {
		cy.mount(
			<Providers>
				<FlipCard front={<div>front</div>} back={<div>back</div>} isFlipped />
			</Providers>,
		);
	});

	it('should render', () => {
		cy.get('[data-testid=flipCard]').should('exist');
	});
});
