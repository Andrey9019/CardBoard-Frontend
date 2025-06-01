"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Мінімум 2 символи").max(99),
  email: z.string().email("Невірний формат email"),
  phone: z.string().min(6, "Некоректний номер телефону"),
  payment: z.enum(["cash", "card"]),
  delivery: z.enum(["courier", "branch", "store"]),
  address: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof schema>;

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      payment: "cash",
      delivery: "courier",
    },
  });

  const selectedDelivery = watch("delivery");

  const onSubmit = (data: CheckoutFormData) => {
    console.log("Submitted data:", data);

    reset();
  };

  return (
    <div className="animate-fade-in-left-03 flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="item-shadow sm:gird flex w-full grid-cols-2 flex-col gap-6 rounded-2xl bg-white p-6 text-black lg:flex lg:max-w-[472px]"
      >
        <h2 className="text-2xl font-bold">Контакти</h2>
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-2 lg:flex lg:gap-0">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold">ПІБ</label>
            <input
              {...register("name")}
              placeholder="Ведіть своє імʼя та прізвище"
              className="focus:border-primary rounded-lg border px-4 py-2 text-sm transition outline-none"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold">Email</label>
            <input
              {...register("email")}
              className="focus:border-primary rounded-lg border px-4 py-2 text-sm transition outline-none"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold">Номер телефону</label>
            <input
              {...register("phone")}
              className="focus:border-primary rounded-lg border px-4 py-2 text-sm transition outline-none"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold">Оплата</p>
            <label>
              <input type="radio" value="cash" {...register("payment")} />
              Готівка при отриманні
            </label>
            <label className="text-gray-400">
              <input
                type="radio"
                value="card"
                disabled
                {...register("payment")}
              />
              Оплата картою (в розробці)
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Доставка</p>
            <label>
              <input type="radio" value="courier" {...register("delivery")} />
              Курєром
            </label>
            <label>
              <input type="radio" value="branch" {...register("delivery")} />
              Відділення НП
            </label>
            <label>
              <input
                type="radio"
                value="store"
                {...register("delivery")}
                disabled
              />
              <span className="text-gray-400">Самовивіз з магазину</span>
            </label>
            {selectedDelivery && (
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold">Адреса доставки</label>
                <input
                  {...register("address")}
                  className="focus:border-primary rounded-lg border px-4 py-2 text-sm transition outline-none"
                />
              </div>
            )}
          </div>
        </div>
        <Button
          as="button"
          variant="primary"
          text="Оформити замовлення"
          className="min-w-full"
          type="submit"
          disabled={Object.keys(errors).length > 0}
        />
      </form>
    </div>
  );
}






