import { Providers } from '@/app/providers';

import { DefaultButton } from './index';

describe('<CountdownTimer /> Component', () => {
	beforeEach(() => {
		cy.mount(
			<Providers>
				<DefaultButton title="Event Settings" />
			</Providers>,
		);
	});

	it('should render', () => {
		cy.get('[data-testid=defaultButton]').should('exist');
	});
});
