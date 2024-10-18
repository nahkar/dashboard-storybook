import type { Meta, StoryObj } from '@storybook/react';

import { Forward } from '.';

const meta = {
	title: 'components/Forward',
	component: Forward,
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
} satisfies Meta<typeof Forward>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'New Event',
		linkLabel: 'Add Now',
		linkUrl: '/events/new',
		type: 'new',
	},
};
