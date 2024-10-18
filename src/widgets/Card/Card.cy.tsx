import { Providers } from '@/app/providers';

import { Card } from './index';

describe('<Card /> Widget', () => {
	beforeEach(() => {
		cy.mount(
			<Providers>
				<Card />
			</Providers>,
		);
	});

	it('should render', () => {
		cy.get('[data-testid=card]').should('exist');
	});
});
