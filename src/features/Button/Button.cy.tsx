import { Providers } from '@/app/providers';

import { Button } from './index';

describe('<CountdownTimer /> Component', () => {
	beforeEach(() => {
		cy.mount(
			<Providers>
				<Button type="star" />
				<Button type="info" />
			</Providers>,
		);
	});

	it('should render button star', () => {
		cy.get('[data-testid=buttonStar]').should('exist');
	});
	it('should render button info', () => {
		cy.get('[data-testid=buttonInfo]').should('exist');
	});
});
