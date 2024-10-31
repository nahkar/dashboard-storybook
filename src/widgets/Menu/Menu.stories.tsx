import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '.';

const meta = {
	title: 'widgets/Menu',
	component: Menu,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
	decorators: [
		(Component) => {
			document.body.style.backgroundColor = '#F4F6F8';
			document.body.style.height = '100vh';
			document.body.style.margin = '0';
			return (
				<div style={{ width: '600px', height: '100vh', background: '#F4F6F8' }}>
					<Component />
				</div>
			);
		},
	],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
