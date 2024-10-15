export type CalendarDataType = {
	time: string;
	eventName: string;
	action: string;
};
export type CalendarType = {
	day: string;
	date: string;
	data: CalendarDataType[];
};
