import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Calendar } from '.';

const queryClient = new QueryClient();

const meta = {
	title: 'widgets/Calendar',
	component: Calendar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
	decorators: [
		(Component) => {
			// add provider
			return (
				<QueryClientProvider client={queryClient}>
					<Component />
				</QueryClientProvider>
			);
		},
	],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
