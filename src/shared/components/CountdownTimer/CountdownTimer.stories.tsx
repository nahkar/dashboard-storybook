import type { Meta, StoryObj } from '@storybook/react';

import { CountdownTimer } from '.';

const meta = {
	title: 'CountdownTimer',
	component: CountdownTimer,
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
} satisfies Meta<typeof CountdownTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: 'start',
	},
};
