import { Providers } from '@/app/providers';

import { Search } from './index';

describe('<Search /> Features', () => {
	beforeEach(() => {
		cy.mount(
			<Providers>
				<Search title="Your Events" />
			</Providers>,
		);
	});

	it('should render', () => {
		cy.get('[data-testid=search]').should('exist');
	});
});
