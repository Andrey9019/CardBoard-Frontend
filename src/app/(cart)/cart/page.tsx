"use client";

import { useState } from "react";

import BreadcrumbWidgest from "@/components/widgets/BreadcrumbWidgest";
import CartBody from "./components/CartBody";

export default function Cart() {
  const [isFormСonfirm, setIsFormСonfirm] = useState(false);

  return (
    <>
      <BreadcrumbWidgest
        text1="Кошик"
        link="/cart"
        {...(isFormСonfirm && { text2: "Підтвердження замовлення" })}
      />

      <CartBody
        isFormСonfirm={isFormСonfirm}
        setIsFormСonfirm={setIsFormСonfirm}
      />
    </>
  );
}
