export interface CartFormFields {
	name: string;
	email: string;
	phone: string;
	payment: "cash" | "card";
	delivery: "pickup" | "courier" | "branch";
	address?: string;
}
