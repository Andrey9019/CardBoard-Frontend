import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { CartStore } from '@/shared/types/cartStore';

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        total: 0,
        isLoading: true,

        // підрахунок загальної суми total
        countTotal: () => {
          const { cart } = get();
          return Math.round(
            cart.reduce(
              (acc, item) => acc + item.price * (item.amount || 0),
              0,
            ),
          );
        },

        // додає товар
        addProduct: (data) => {
          const { cart } = get();
          const isItemInCart = cart.find((item) => item.id === data.id);
          const newItem = isItemInCart
            ? cart.map((item) =>
                item.id === data.id
                  ? { ...item, amount: (item.amount || 0) + 1 }
                  : item,
              )
            : [...cart, { ...data, amount: 1 }];
          set({
            cart: newItem,
          });
          get().countTotal();
          console.log('add new imet', newItem);
        },

        //  змінює кількість
        removeProduct: (data) => {
          const { cart } = get();
          const isItemInCart = cart.find((item) => item.id === data.id);
          if (!isItemInCart) return;
          const newItem =
            (isItemInCart.amount ?? 0) > 1
              ? cart.map((item) =>
                  item.id === data.id
                    ? { ...item, amount: (item.amount || 0) - 1 }
                    : item,
                )
              : cart.filter((item) => item.id !== data.id);
          set({ cart: newItem });
        },

        // повністю видаляє
        deleteProduct: (id) => {
          const { cart } = get();
          const newCart = [...cart.filter((item) => item.id !== id)];
          set({
            cart: newCart,
          });
        },

        // ставить свою кількість
        changeAmount: (id, amount) => {
          const { cart } = get();
          const newCart = cart.map((item) =>
            item.id === id ? { ...item, amount } : item,
          );
          set({ cart: newCart });
        },

        // очищяє кошик
        clearCart: () => {
          set({ cart: [] });
        },
        // завантаження кошика
        setIsLoading: (loading) => set({ isLoading: loading }),
      }),

      {
        name: 'cart_storage',
        onRehydrateStorage: () => (state) => {
          state?.setIsLoading(false);
          state?.countTotal();
        },
        // storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
