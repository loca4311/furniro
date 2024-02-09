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

export interface Product {
	name?: string;
	image?: string;
	price?: number;
	description?: string;
	sizes?: string[];
	sku?: string;
	categories?: string[];
	tags?: string[];
	colors?: string[];
	content?: string;
	error_name?: string;
	error_image?: string;
	error_price?: string;
	error_description?: string;
	error_sku?: string;
	success?: boolean;
}
