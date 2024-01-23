export interface Room {
	id: number;
	name: string;
	image: string;
	link?: string;
}

export interface User {
	id: string;
	email: string;
	admin: boolean;
}
