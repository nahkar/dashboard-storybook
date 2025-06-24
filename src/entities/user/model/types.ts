export interface EventUserPermission {
	eventOperationId: string;
	eventId: number;
}
export interface User {
	userId: number;
	firstName: string;
	lastName: string;
	gender: string | null;
	email: string | null;
	roleEventOwner: boolean;
	eventUserPermission: EventUserPermission[];
}

export interface UserResponse {
	data: User;
	success: boolean;
}
