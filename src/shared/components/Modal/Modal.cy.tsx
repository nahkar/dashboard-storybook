import { Providers } from '@/app/providers';

import { Modal } from './index';

describe('<FlipCard /> Component', () => {
	beforeEach(() => {
		const handleCloseModal = cy.stub();
		cy.mount(
			<Providers>
				<Modal isOpenModal handleCloseModal={handleCloseModal}>
					<div>Modal</div>
				</Modal>
			</Providers>,
		);
	});

	it('should render', () => {
		cy.get('[data-testid=modal]').should('exist');
	});
});
