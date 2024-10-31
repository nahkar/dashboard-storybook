import { Providers } from '@/app/providers';

import { Menu } from './index';

describe('<Activity /> Widget', () => {
	beforeEach(() => {
		cy.mount(
			<Providers>
				<Menu />
			</Providers>,
		);
	});

	it('should render', () => {
		cy.get('[data-testid=menu]').should('exist');
	});
});
