import type { Meta, StoryObj } from '@storybook/react';

import { Activity } from '.';

const meta = {
	title: 'widgets/Activity',
	component: Activity,
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
} satisfies Meta<typeof Activity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
