import type { Meta, StoryObj } from '@storybook/react';

import { DefaultButton } from '.';

const meta = {
	title: 'components/DefaultButton',
	component: DefaultButton,
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
} satisfies Meta<typeof DefaultButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Event Settings',
	},
};
