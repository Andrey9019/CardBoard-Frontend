"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface CheckoutSummaryProp {
  switchToConfirm: () => void;
  isFormСonfirm: boolean;
  total: number;
}

export default function CheckoutSummary({
  switchToConfirm,
  isFormСonfirm,
  total,
}: CheckoutSummaryProp) {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const applyPromoCode = () => {
    // якщо код "DISCOUNT10", знижка 10%
    if (promoCode === "DISCOUNT10") {
      setDiscount(10); // Приклад: 10% знижки
    } else {
      setDiscount(0);
    }
  };

  const finalTotal = discount > 0 ? total * (1 - discount / 100) : total;

  return (
    <div className="animate-fade-in-left-03 flex flex-col gap-4 sm:px-6 lg:px-0">
      <div className="flex justify-between">
        <p>Всього:</p>
        <span>{total} грн</span>
      </div>
      <p>Промокод</p>
      <div className="border-primary flex items-center rounded-sm border-1 bg-white px-4 py-3">
        <input
          type="text"
          value={promoCode}
          onChange={handlePromoCodeChange}
          className="flex-1 bg-transparent text-gray-500 outline-none"
          placeholder="Ввести код"
        />

        <button
          type="button"
          className="cursor-pointer font-bold text-gray-400"
          onClick={applyPromoCode}
        >
          Використати
        </button>
      </div>
      <div className="flex justify-between">
        <p>Знижка:</p>
        <span>{discount > 0 ? `${discount}%` : "знижка"}</span>
      </div>

      <div className="flex justify-between border-t-[1px] border-gray-400 pt-4 font-semibold">
        <p>До сплати: </p>
        <span> {Math.round(finalTotal)} грн</span>
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
