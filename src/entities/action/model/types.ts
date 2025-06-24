const EventActionKey = {
	DATE_START: 'dateStart',
	DATE_END: 'dateEnd',
	DATE_REG_OPEN: 'dateRegOpen',
	DATE_REG_CLOSE: 'dateRegClose',
	ONLINE_TEAM_CHECKIN_START: 'onlineTeamCheckinStart',
	ONLINE_TEAM_CHECKIN_END: 'onlineTeamCheckinEnd',
	ROSTER_DEADLINE: 'rosterDeadline',
	TICKETS_PURCHASE_DATE_START: 'ticketsPurchaseDateStart',
	TICKETS_PURCHASE_DATE_END: 'ticketsPurchaseDateEnd',
	DATE_OFFICIAL_REG_OPEN: 'dateOfficialRegOpen',
	DATE_OFFICIAL_REG_CLOSE: 'dateOfficialRegClose',
	DATE_STAFF_REG_OPEN: 'dateStaffRegOpen',
	DATE_STAFF_REG_CLOSE: 'dateStaffRegClose',
	DATE_EXHIBITORS_REG_OPEN: 'dateExhibitorsRegOpen',
	DATE_EXHIBITORS_REG_CLOSE: 'dateExhibitorsRegClose',
} as const;

export interface Action {
	eventId: number;
	key: typeof EventActionKey;
	eventName: string;
	eventShortName: string;
	date: string;
}

export interface ActionResponse {
	data: Action[];
	success: boolean;
}
