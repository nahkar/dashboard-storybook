import { Providers } from '@/app/providers';

import { CountdownTimer } from './index';

describe('<CountdownTimer /> Component', () => {
	beforeEach(() => {
		cy.mount(
			<Providers>
				<CountdownTimer type="start" />
			</Providers>,
		);
	});

	it('should render', () => {
		cy.get('[data-testid=countdown]').should('exist');
	});
});
