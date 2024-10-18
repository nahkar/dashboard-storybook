import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Button } from './';

const meta = {
	title: 'features/Button',
	component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const FavoriteTemplate: React.FC = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleIsFavorite = () => {
		setIsFavorite((prev) => !prev);
	};

	return <Button type="star" isFavorite={isFavorite} handleIsFavorite={handleIsFavorite} />;
};

export const Favorite: Story = {
	render: () => <FavoriteTemplate />,
};

const InfoTemplate: React.FC = () => {
	const [isActiveAdditionalInfo, setIsActiveAdditionalInfo] = useState(false);

	const handleIsActiveAdditionalInfo = () => {
		setIsActiveAdditionalInfo((prev) => !prev);
	};

	return (
		<Button
			type="info"
			isActiveAdditionalInfo={isActiveAdditionalInfo}
			handleIsActiveAdditionalInfo={handleIsActiveAdditionalInfo}
		/>
	);
};

export const Info: Story = {
	render: () => <InfoTemplate />,
};
