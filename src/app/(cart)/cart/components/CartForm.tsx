"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";

import { CartFormFields } from "@/shared/types/cartForm";
import { Checkbox } from "@/components/ui/ckeckbox";
import { useCartStore } from "@/stores/cartStore";

interface FormProp {
  setIsOrderComplete: (value: boolean) => void;
}

const schema = z.object({
  name: z.string().min(2, "Замало символів").max(99, "Забагато символів"),
  email: z.string().email("Невірний формат email"),
  phone: z.string().regex(/^\+38\d{10}$/, "Некоректний номер (+38XXXXXXXXXX)"),
  payment: z.enum(["cash", "card"]),
  delivery: z.enum(["pickup", "courier", "branch"]),
  address: z.string().optional(),
});

export default function CheckoutForm({ setIsOrderComplete }: FormProp) {
  const { clearCart } = useCartStore();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<CartFormFields>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const selectedDelivery = watch("delivery");

  const onSubmit = (data: CartFormFields) => {
    console.log("Submitted:", data);
    reset();
    setIsOrderComplete(true);
    clearCart();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="item-shadow animate-fade-in-left-03 w-full max-w-[472px] rounded-2xl bg-white p-6 text-black"
      >
        <h2 className="mb-4 text-2xl font-bold">Контакти</h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-semibold">ПІБ</label>
            <input
              {...register("name")}
              placeholder="Введіть своє імʼя та прізвище"
              className="focus:border-primary w-full rounded-lg border px-4 py-2 text-sm transition outline-none"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold">Email</label>
            <input
              {...register("email")}
              placeholder="Введіть свою електронну пошту"
              className="focus:border-primary w-full rounded-lg border px-4 py-2 text-sm transition outline-none"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold">Телефон</label>
            <input
              {...register("phone")}
              defaultValue="+38"
              className="focus:border-primary w-full rounded-lg border px-4 py-2 text-sm transition outline-none"
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">Оплата</p>
            <div className="flex items-center gap-2">
              <Checkbox
                id="payment-cash"
                checked={watch("payment") === "cash"}
                onCheckedChange={() => setValue("payment", "cash")}
                className="h-5 w-5"
              />
              <label htmlFor="payment-cash" className="text-sm">
                Готівка при отриманні
              </label>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Checkbox
                id="payment-card"
                checked={watch("payment") === "card"}
                disabled
                onCheckedChange={() => {}}
                className="h-5 w-5"
              />
              <label htmlFor="payment-card" className="text-sm">
                Картка (в розробці)
              </label>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold">Доставка</p>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="delivery-branch"
                  checked={watch("delivery") === "branch"}
                  onCheckedChange={() => setValue("delivery", "branch")}
                  className="h-5 w-5"
                />
                <label htmlFor="delivery-branch" className="text-sm">
                  Нова Пошта
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="delivery-courier"
                  checked={watch("delivery") === "courier"}
                  onCheckedChange={() => setValue("delivery", "courier")}
                  className="h-5 w-5"
                />
                <label htmlFor="delivery-courier" className="text-sm">
                  Курʼєр
                </label>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Checkbox
                  id="delivery-pickup"
                  checked={watch("delivery") === "pickup"}
                  disabled
                  onCheckedChange={() => {}}
                  className="h-5 w-5"
                />
                <label htmlFor="delivery-pickup" className="text-sm">
                  Самовивіз (в розробці)
                </label>
              </div>
            </div>
            {selectedDelivery && (
              <div className="mt-2">
                <label className="text-xs font-semibold">Адреса доставки</label>
                <input
                  {...register("address")}
                  placeholder="Введіть бажану адресу"
                  className="focus:border-primary w-full rounded-lg border px-4 py-2 text-sm transition outline-none"
                />
              </div>
            )}
          </div>
          <Button
            as="button"
            variant="primary"
            text="Оформити замовлення"
            type="submit"
            className="mt-4 min-w-full"
            disabled={!isValid}
            // onClick={() => clearCart()}
          />
        </div>
      </form>
    </div>
  );
}
