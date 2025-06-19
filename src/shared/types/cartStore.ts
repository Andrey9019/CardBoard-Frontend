import { Game } from "./game";

export interface CartStore {
  cart: Game[];
  total: number;
  // amount: number;
  countTotal: () => void;
  addProduct: (data: Game) => void;
  removeProduct: (data: Game) => void;
  deleteProduct: (id: number) => void;
  changeAmount: (id: number, amount: number) => void;
  clearCart: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}
