import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { FlipCard } from './';

const meta = {
	title: 'components/FlipCard',
	component: FlipCard,
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
} satisfies Meta<typeof FlipCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultTemplate: React.FC = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleFlip = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div style={{ width: '200px', height: '200px' }}>
			<FlipCard
				front={
					<div
						style={{
							background: '#911',
							minWidth: 'fit-content',
							width: '200px',
							height: '200px',
							color: 'white',
						}}
						onClick={handleFlip}
					></div>
				}
				back={
					<div
						style={{
							background: '#ccc',
							minWidth: 'fit-content',
							width: '200px',
							height: '200px',
							color: 'white',
						}}
						onClick={handleFlip}
					></div>
				}
				isFlipped={isFlipped}
			/>
		</div>
	);
};

export const Default: Story = {
	render: () => <DefaultTemplate />,
	args: {
		front: <div></div>,
		back: <div></div>,
		isFlipped: false,
	},
};
