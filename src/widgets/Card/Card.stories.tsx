import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';

const meta = {
	title: 'widgets/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
	decorators: [
		(Component) => {
			return (
				<div style={{ width: '800px', height: '350px' }}>
					<Component />
				</div>
			);
		},
	],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
