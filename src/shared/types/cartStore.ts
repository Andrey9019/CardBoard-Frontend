import CartItem from "./game";

export default interface CardStore {
  cart: CartItem[];
  total: number;
  countTotal: () => void;
  addProduct: (data: CartItem) => void;
  removeProduct: (data: CartItem) => void;
  deleteProduct: (id: number) => void;
  changeAmount: (id: number, amount: number) => void;
}
