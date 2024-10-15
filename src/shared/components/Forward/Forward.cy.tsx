import { Providers } from '@/app/providers';

import { Forward } from './index';

describe('<Forward /> Component', () => {
	beforeEach(() => {
		cy.mount(
			<Providers>
				<Forward title="New Event" linkLabel="Add Now" linkUrl="/events/new" type="new" />
			</Providers>,
		);
	});

	it('should render', () => {
		cy.get('[data-testid=forward]').should('exist');
	});
});
