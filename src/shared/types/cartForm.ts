export interface CartFormFields {
  name: string;
  email: string;
  phone: string;
  delivery: "pickup" | "courier";
  address?: string;
  payment: "cash" | "card";
}
