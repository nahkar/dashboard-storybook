import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Modal } from './';

const meta = {
	title: 'components/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
	decorators: [
		(Component) => {
			return <Component />;
		},
	],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultTemplate: React.FC = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const handleOpenModal = () => setIsOpenModal(true);
	const handleCloseModal = () => setIsOpenModal(false);

	return (
		<div style={{ position: 'relative' }}>
			<button onClick={handleOpenModal}>Open modal</button>
			<Modal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}>
				<div
					style={{
						padding: '20px',
						background: 'white',
						width: '400px',
						borderRadius: '10px',
						left: '50%',
						top: '100px',
						transform: 'translate(-50%)',
						position: 'absolute',
					}}
				>
					<h3
						style={{
							marginBottom: '10px',
							fontSize: '20px',
							fontWeight: '700',
							textAlign: 'center',
						}}
					>
						Modal content
					</h3>
					<p style={{ textAlign: 'center' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora ipsam quos, error
						consequuntur nihil porro dolore corporis at quidem eos, a modi doloremque sint
						voluptatibus? Obcaecati odio vitae quia!
					</p>
				</div>
			</Modal>
		</div>
	);
};

export const Default: Story = {
	render: () => <DefaultTemplate />,
	args: {
		isOpenModal: false,
		handleCloseModal: () => {},
		children: <h1>Modal</h1>,
	},
};
