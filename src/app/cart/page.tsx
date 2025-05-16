"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/stores/cartStore";
import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Button from "@/components/ui/Button";

import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import noImg from "../../../public/images/not-found-page/no-image.png";

export default function Cart() {
  const [isFormСonfirm, setIsFormСonfirm] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.total);
  const countTotal = useCartStore((state) => state.countTotal);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const addProduct = useCartStore((state) => state.addProduct);
  const deleteProduct = useCartStore((state) => state.deleteProduct);
  //   const changeAmount = useCartStore((state) => state.changeAmount);

  const switchToConfirm = () => {
    setIsFormСonfirm(true);
  };

  useEffect(() => {
    countTotal();
  }, [cart]);

  return (
    <section className="mb-12 px-9 pt-12 lg:px-8 lg:pt-16 lg:pb-16 xl:px-[120px]">
      <Breadcrumb className="mb-12">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-primary" href="/">
              <IoHomeOutline />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <IoIosArrowForward className="text-primary" />
          <BreadcrumbItem>
            <BreadcrumbLink
              className={`text-primary ${isFormСonfirm ? "font-medium" : "font-semibold"}`}
              href="/cart"
            >
              Кошик
            </BreadcrumbLink>
          </BreadcrumbItem>
          {isFormСonfirm ? (
            <>
              <IoIosArrowForward className="text-primary" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-semibold">
                  Підтвердження замовлення
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : (
            <></>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col items-center gap-12 lg:gap-16">
        {isFormСonfirm ? (
          <p className="text-3xl font-bold">Оформлення замовлення</p>
        ) : (
          <p className="text-3xl font-bold">Кошик</p>
        )}

        <div className="container">
          {cart.length != 0 ? (
            <div className="justify-between gap-4 lg:flex">
              <ul className="flex flex-col items-center gap-5 px-6 lg:gap-4 lg:px-0">
                {cart.map((game) => (
                  <li
                    key={game.id}
                    className="item-shadow lg: flex w-[358px] rounded-lg bg-white px-4 py-3 lg:w-[472px] xl:w-[684px]"
                  >
                    <Image
                      className="mr-4 h-[120px] lg:h-[164px] lg:w-[164px] xl:h-[175px] xl:w-[175px]"
                      width={120}
                      src={noImg}
                      alt="Фото гри"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-4">
                        <Link
                          href={`/game/${game.id}`}
                          className="line-clamp-2 cursor-pointer overflow-hidden text-base font-bold text-ellipsis sm:text-lg lg:text-lg"
                        >
                          {game.title}
                        </Link>
                        <button
                          onClick={() => deleteProduct(game.id)}
                          className="text-primary text-xl"
                        >
                          <CiTrash />
                        </button>
                      </div>

                      <div className="flex w-max items-center gap-3 rounded border p-1">
                        <button
                          onClick={() => removeProduct(game)}
                          className=""
                        >
                          -
                        </button>
                        <span className="text-center font-semibold">
                          {game.amount}
                        </span>
                        <button onClick={() => addProduct(game)} className="">
                          +
                        </button>
                      </div>

                      <span>{game.price} грн</span>

                      <div className="flex justify-between">
                        <p className="">Всього:</p>
                        <span className="font-semibold">
                          {game.price * game.amount} грн
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mx-2 flex flex-1 flex-col gap-4 pt-7 lg:mx-6 lg:border-t-[1px] lg:border-gray-400">
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
                  <p>До сплати:</p>
                  <span>{total}</span>
                </div>
                {isFormСonfirm ? (
                  <div className="flex justify-center">
                    <form className="item-shadow flex w-full max-w-[358px] flex-col gap-6 rounded-2xl bg-white p-6 text-black lg:max-w-[472px]">
                      <h2 className="text-lg font-bold">Контакти</h2>

                      <div className="flex flex-col gap-2">
                        <label
                          // htmlFor="name"
                          className="text-xs font-semibold"
                        >
                          ПІБ
                        </label>
                        <input
                          // id="name"
                          // type="text"
                          // value={name}
                          // onChange={(e) => setName(e.target.value)}
                          placeholder="Ведіть своє імʼя та прізвище"
                          className="focus:border-primary rounded-lg border px-4 py-2 text-sm transition outline-none"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold"
                        >
                          Email
                        </label>
                        <input
                          // id="email"
                          // type="email"
                          // value={email}
                          // onChange={(e) => setEmail(e.target.value)}
                          placeholder="Ведіть свій Email address"
                          className="focus:border-primary rounded-lg border px-4 py-2 text-sm transition outline-none"
                        />
                      </div>

                      <div>
                        <h3 className="mb-6 text-lg font-bold">Доставка</h3>
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="radio"
                            // name="delivery"
                            // value="pickup"
                            // checked={delivery === "pickup"}
                            // onChange={() => setDelivery("pickup")}
                            className="accent-primary"
                          />
                          Самовивіз з магазину
                        </label>
                      </div>

                      <div>
                        <h3 className="mb-6 text-base font-bold">Оплата</h3>
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="radio"
                            // name="payment"
                            // value="cod"
                            // checked={payment === "cod"}
                            // onChange={() => setPayment("cod")}
                            className="accent-primary"
                          />
                          Післяплата при отриманні
                        </label>
                      </div>

                      <Button
                        as="button"
                        variant="primary"
                        text="Оформити замовлення"
                        className="min-w-full"
                      />
                    </form>
                  </div>
                ) : (
                  <Button
                    as="button"
                    variant="primary"
                    text="Перейти до оформлення"
                    className="min-w-full"
                    onClick={switchToConfirm}
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-9">
              <p className="text-primary text-center font-semibold">
                Кошик пустий, як поле перед першим ходом!
                <br /> Зроби перший хід — обери свою гру!
              </p>
              <Button
                as="link"
                href="/catalog"
                text={"Перейти до каталогу"}
                variant="primary"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
