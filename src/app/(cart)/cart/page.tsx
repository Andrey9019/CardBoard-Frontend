"use client";

import { useState } from "react";

import BreadcrumbWidgest from "@/components/widgets/BreadcrumbWidgest";
import CartBody from "./components/CartBody";
import OrderConfirm from "./components/OrderConfirm";

export default function Cart() {
	const [isFormСonfirm, setIsFormСonfirm] = useState(false);
	const [isOrderComplete, setIsOrderComplete] = useState(false);

	return (
		<>
			{isOrderComplete ? (
				<OrderConfirm />
			) : (
				<>
					<BreadcrumbWidgest
						text1="Кошик"
						link="/cart"
						{...(isFormСonfirm && { text2: "Підтвердження замовлення" })}
					/>

					<CartBody
						isFormСonfirm={isFormСonfirm}
						setIsFormСonfirm={setIsFormСonfirm}
						setIsOrderComplete={setIsOrderComplete}
					/>
				</>
			)}
		</>
	);
}
