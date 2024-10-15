import type { Meta, StoryObj } from '@storybook/react';

import { Search } from '.';

const meta = {
	title: 'Search',
	component: Search,
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
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Your Events',
	},
};
