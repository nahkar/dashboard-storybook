interface AvailableFeaturesDto {
	teams: boolean;
	divisions: boolean;
	checkIn: boolean;
	tickets: boolean;
	officials: boolean;
	staff: boolean;
	exhibitors: boolean;
	accounting: boolean;
	emailModule: boolean;
	history: boolean;
}

interface EventStatistics {
	grossProfit: number;
	numberOfExhibitors: number;
	officialsCount: number;
	staffCount: number;
	numberOfTeams: number;
	sentPayoutsAmount: number;
	ticketsSoldQuantity: number;
}

export interface EventAction {
	eventId: number;
	divisionId?: number;
	key: string;
	eventName: string;
	eventShortName: string | null;
	divisionName?: string;
	divisionShortName?: string | null;
	date: Date;
}

export interface EventMedia {
	fileType: string;
	mediaUrl: string;
}

export interface EventCard {
	eventId: number;
	eventOwnerId: number | null;
	name: string;
	longName: string;
	dateStart: string | null;
	dateEnd: string | null;
	isFavorite: boolean;

	availableFeatures: AvailableFeaturesDto;
	statistics: Partial<EventStatistics>;
	upcomingActions: EventAction[];
	media: EventMedia[];
}

/*
 * Response
 */
interface Meta {
	count: number;
	limit: number;
	hasMore: boolean;
}
export interface EventCardListResponse {
	data: EventCard[];
	success: boolean;
	meta: Meta;
}
