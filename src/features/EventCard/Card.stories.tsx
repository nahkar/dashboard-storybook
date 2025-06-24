import type { Meta, StoryObj } from '@storybook/react';

import { EventCard } from '.';

const meta = {
	title: 'widgets/Card',
	component: EventCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		event: {
			eventId: 25435,
			name: 'WFBoys Clinic',
			isFavorite: false,
			eventOwnerId: 3,
			longName: '2025 New England Winterfest Boys Clinic w/Springfield College',
			dateStart: 'Fri Jan 10 2025 20:30:00 GMT+0200 (Eastern European Standard Time)',
			dateEnd: 'Sat Feb 01 2025 23:00:00 GMT+0200 (Eastern European Standard Time)',
			availableFeatures: {
				accounting: true,
				teams: false,
				divisions: true,
				checkIn: false,
				tickets: true,
				officials: false,
				staff: false,
				exhibitors: false,
				emailModule: true,
				history: true,
			},
			media: [],
			upcomingActions: [],
			statistics: {
				grossProfit: 0,
				sentPayoutsAmount: 0,
				ticketsSoldQuantity: 0,
			},
		},
	},
	decorators: [
		(Component) => {
			return (
				<div style={{ width: '800px', height: '350px' }}>
					<Component />
				</div>
			);
		},
	],
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		event: {
			eventId: 25435,
			name: 'WFBoys Clinic',
			isFavorite: false,
			eventOwnerId: 3,
			longName: '2025 New England Winterfest Boys Clinic w/Springfield College',
			dateStart: 'Fri Jan 10 2025 20:30:00 GMT+0200 (Eastern European Standard Time)',
			dateEnd: 'Sat Feb 01 2025 23:00:00 GMT+0200 (Eastern European Standard Time)',
			availableFeatures: {
				accounting: true,
				teams: false,
				divisions: true,
				checkIn: false,
				tickets: true,
				officials: false,
				staff: false,
				exhibitors: false,
				emailModule: true,
				history: true,
			},
			media: [],
			upcomingActions: [],
			statistics: {
				grossProfit: 0,
				sentPayoutsAmount: 0,
				ticketsSoldQuantity: 0,
			},
		},
	},
};
