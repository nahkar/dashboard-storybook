import { styled } from 'styled-components';

export const StyledDashboardHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 0 20px;
`;
export const StyledDashboardCardList = styled.ul``;
export const StyledDashboardCardItem = styled.li`
	position: relative;
	height: 331px;
	margin: 0 0 15px;
	&:last-child {
		margin: 0;
	}
`;
