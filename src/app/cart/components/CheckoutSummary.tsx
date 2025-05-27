"use client";

import { useCartStore } from "@/stores/cartStore";

export default function CheckoutSummary() {
  const total = useCartStore((state) => state.total);

  return (
    <div className="flex flex-col gap-4 lg:mx-0">
      <div className="flex justify-between">
        <p>Всього:</p>
        <span>{total}</span>
      </div>
      <p>Промокод</p>
      <div className="border-primary flex items-center rounded-sm border-1 bg-white px-4 py-3">
        <input
          type="text"
          // value={query}
          // onChange={handleInputChange}
          className="flex-1 bg-transparent text-gray-500 outline-none"
          placeholder="Ввести код"
        />

        <button
          type="button"
          className="cursor-pointer font-bold text-gray-400"
        >
          Використати
        </button>
      </div>
      <div className="flex justify-between">
        <p>Знижка:</p>
        <span>знижка?</span>
      </div>

      <div className="flex justify-between border-t-[1px] border-gray-400 pt-4 font-semibold">
        <p>До сплати: </p>
        <span> {total} грн</span>
      </div>
    </div>
  );
}
