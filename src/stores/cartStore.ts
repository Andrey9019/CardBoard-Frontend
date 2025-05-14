// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

// export const useCartStore = create(
//   persist(
//     (set, get) => ({
//       cart: [],
//       total: 0,

//       countTotal: () => {
//         const { cart } = get();
//         let total = 0;
//         cart.map((e) => (total = total + e.price * e.amount));
//         total = Math.round(total);
//         set({
//           total: total,
//         });
//       },

//       addProduct: (data) => {
//         const { cart } = get();
//         const isItemInCart = cart.find((e) => e.id == data.id);
//         const newCart = isItemInCart
//           ? cart.map((e) =>
//               e.id == data.id ? { ...e, amount: e.amount + 1 } : e,
//             )
//           : [...cart, { ...data, amount: 1 }];
//         set({
//           cart: newCart,
//         });
//       },
//       removeProduct: (data) => {
//         const { cart } = get();
//         const isItemAmount = cart.find((e) => e.id == data.id).amount > 1;
//         const newCart = isItemAmount
//           ? cart.map((e) =>
//               e.id == data.id ? { ...e, amount: e.amount - 1 } : e,
//             )
//           : [...cart.filter((e) => e.id !== data.id)];
//         set({ cart: newCart });
//       },
//       deleteProduct: (id) => {
//         const { cart } = get();
//         const newCart = [...cart.filter((e) => e.id !== id)];
//         set({
//           cart: newCart,
//         });
//       },
//       changeAmount: (id, amount) => {
//         const { cart } = get();
//         const newCart = cart.map((e) =>
//           e.id == id ? { ...e, amount: amount } : e,
//         );
//         set({
//           cart: newCart,
//         });
//       },
//     }),

//     {
//       name: "cart_storage",
//       storage: createJSONStorage(() => localStorage),
//     },
//   ),
// );
