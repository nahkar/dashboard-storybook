import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import cartIcon from './img/cart.icon.svg';
import chevronDownIcon from './img/chevron.down.icon.svg';
import cupIcon from './img/cup.icon.svg';
import dashboardActiveIcon from './img/dashboard.active.icon.svg';
import dashboardIcon from './img/dashboard.icon.svg';
import hashtagIcon from './img/hashtag.icon.svg';
import houseIcon from './img/house.icon.svg';
import peopleIcon from './img/people.icon.svg';
import shopIcon from './img/shop.icon.svg';
import smsIcon from './img/sms.icon.svg';
import ticketIcon from './img/ticket.icon.svg';
import {
	Menu__UserMenuList,
	Menu__UserMenuListInner,
	Menu__UserMenuListItem,
	Menu__UserMenuListTitle,
	Menu__UserMenuListWrapper,
} from './styled';

type Props = {
	isOpen: boolean;
};
export const MenuList = ({ isOpen }: Props) => {
	const [isPaymentOpen, setIsPaymentOpen] = useState(true);
	const [isEmailToolOpen, setIsEmailToolOpen] = useState(true);
	const handlePaymentOpen = () => {
		setIsPaymentOpen(!isPaymentOpen);
	};
	const handleEmailToolOpen = () => {
		setIsEmailToolOpen(!isEmailToolOpen);
	};

	useEffect(() => {
		if (!isOpen) {
			setIsPaymentOpen(true);
			setIsEmailToolOpen(true);
		}
	}, [isOpen]);

	return (
		<Menu__UserMenuListWrapper $isOpen={isOpen}>
			{isOpen && <Menu__UserMenuListTitle>General</Menu__UserMenuListTitle>}
			<Menu__UserMenuList>
				<Menu__UserMenuListItem $isOpen={isOpen}>
					<Menu__UserMenuListInner $active $isOpen={isOpen}>
						<img src={dashboardActiveIcon} alt="" />
						<span>My Events</span>
					</Menu__UserMenuListInner>
				</Menu__UserMenuListItem>
				<Menu__UserMenuListItem $isOpen={isOpen}>
					<Menu__UserMenuListInner $isOpen={isOpen}>
						<img src={ticketIcon} alt="" />
						<span>My Tickets</span>
					</Menu__UserMenuListInner>
				</Menu__UserMenuListItem>
				<Menu__UserMenuListItem $isOpen={isOpen}>
					<Menu__UserMenuListInner $isOpen={isOpen}>
						<img src={cupIcon} alt="" />
						<span>My Club</span>
					</Menu__UserMenuListInner>
				</Menu__UserMenuListItem>
				<Menu__UserMenuListItem $isOpen={isOpen} onClick={handlePaymentOpen}>
					<Menu__UserMenuListInner $isOpen={isOpen} $isInnerList>
						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<img src={cartIcon} alt="" />
							<span>
								Payment Tools
								{isOpen && (
									<img
										src={chevronDownIcon}
										alt=""
										style={{ transform: ` rotate(${isPaymentOpen ? '180deg' : '0deg'}) ` }}
									/>
								)}
							</span>
						</Box>
					</Menu__UserMenuListInner>
					{/* Inner */}
					{isPaymentOpen && (
						<Menu__UserMenuList style={{ marginTop: '30px' }}>
							<Menu__UserMenuListItem $isOpen={isOpen}>
								<Menu__UserMenuListInner $isOpen={isOpen}>
									<img src={shopIcon} alt="" />
									<span>Exhibitors</span>
								</Menu__UserMenuListInner>
							</Menu__UserMenuListItem>
							<Menu__UserMenuListItem $isOpen={isOpen}>
								<Menu__UserMenuListInner $isOpen={isOpen}>
									<img src={peopleIcon} alt="" />
									<span>Staff/Officials</span>
								</Menu__UserMenuListInner>
							</Menu__UserMenuListItem>
							<Menu__UserMenuListItem $isOpen={isOpen}>
								<Menu__UserMenuListInner $isOpen={isOpen}>
									<img src={houseIcon} alt="" />
									<span>Housing</span>
								</Menu__UserMenuListInner>
							</Menu__UserMenuListItem>
							<Menu__UserMenuListItem $isOpen={isOpen}>
								<Menu__UserMenuListInner $isOpen={isOpen}>
									<img src={hashtagIcon} alt="" />
									<span>Sales</span>
								</Menu__UserMenuListInner>
							</Menu__UserMenuListItem>
						</Menu__UserMenuList>
					)}
					{/* Inner */}
				</Menu__UserMenuListItem>
			</Menu__UserMenuList>
			{/* New List */}
			{isOpen && <Menu__UserMenuListTitle>System</Menu__UserMenuListTitle>}
			<Menu__UserMenuList>
				<Menu__UserMenuListItem $isOpen={isOpen} onClick={handleEmailToolOpen}>
					<Menu__UserMenuListInner $isOpen={isOpen} $isInnerList>
						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<img src={smsIcon} alt="" />
							<span>
								Email Tools
								{isOpen && (
									<img
										src={chevronDownIcon}
										alt=""
										style={{ transform: ` rotate(${isPaymentOpen ? '180deg' : '0deg'}) ` }}
									/>
								)}
							</span>
						</Box>
					</Menu__UserMenuListInner>
					{/* Inner */}
					{isEmailToolOpen && (
						<Menu__UserMenuList style={{ marginTop: '30px' }}>
							<Menu__UserMenuListItem $isOpen={isOpen}>
								<Menu__UserMenuListInner $isOpen={isOpen}>
									<img src={dashboardIcon} alt="" />
									<span>Old System View</span>
								</Menu__UserMenuListInner>
							</Menu__UserMenuListItem>
						</Menu__UserMenuList>
					)}
					{/* Inner */}
				</Menu__UserMenuListItem>
			</Menu__UserMenuList>
		</Menu__UserMenuListWrapper>
	);
};
