import { Providers } from '@/app/providers';

import { Calendar } from './index';

describe('<Calendar /> Widget', () => {
	beforeEach(() => {
		cy.mount(
			<Providers>
				<Calendar />
			</Providers>,
		);
	});

	it('should render', () => {
		cy.get('[data-testid=calendar]').should('exist');
	});
});
