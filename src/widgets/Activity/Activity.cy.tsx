import { Providers } from '@/app/providers';

import { Activity } from './index';

describe('<Activity /> Widget', () => {
	beforeEach(() => {
		cy.mount(
			<Providers>
				<Activity />
			</Providers>,
		);
	});

	it('should render', () => {
		cy.get('[data-testid=activity]').should('exist');
	});
});
