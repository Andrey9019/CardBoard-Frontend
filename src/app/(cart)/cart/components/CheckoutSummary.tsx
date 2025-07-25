"use client";

import Button from "@/components/ui/Button";
import { useCartStore } from "@/stores/cartStore";

interface CheckoutSummaryProp {
  switchToConfirm: () => void;
  isFormСonfirm: boolean;
}

export default function CheckoutSummary({
  switchToConfirm,
  isFormСonfirm,
}: CheckoutSummaryProp) {
  const { total } = useCartStore();

  return (
    <div className="animate-fade-in-left-03 flex flex-col gap-4 sm:px-6 lg:px-0">
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

      {!isFormСonfirm && (
        <Button
          variant="primary"
          text="Перейти до оформлення"
          className="min-w-full"
          onClick={switchToConfirm}
        />
      )}
    </div>
  );
}
