import RecommendationsList from "@/app/(main)/components/RecommendationsList";
import Link from "next/link";

export default function OrderConfirm() {
  return (
    <>
      <section className="my-12 flex flex-col items-center gap-12 px-9 lg:my-32 lg:gap-16 lg:px-8 xl:px-[120px]">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center shadow-xl">
          <span> ✅</span>
          <h2 className="mb-4 text-3xl font-bold">Дякуємо за замовлення!</h2>
          <p className="mb-8 text-gray-600">
            Ваше замовлення <span className="font-semibold">#1 </span> прийнято,
            <br /> вам на пошту надіслано лист з деталями.
            <br /> Згодом менеджер з вами зв&apos;яжеться!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/catalog"
              className="bg-primary rounded-lg px-6 py-3 text-white transition hover:bg-violet-600"
            >
              Продовжити покупки
            </Link>
            <Link
              href="/"
              className="border-primary text-primary rounded-lg border-2 px-6 py-3 transition hover:border-violet-600 hover:text-violet-600"
            >
              Повернутись на головну
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-12 flex flex-col gap-9 px-9 lg:mb-16 lg:px-8 xl:gap-12 xl:px-[120px]">
        <div>
          <RecommendationsList title="Вас також може зацікавити" />
        </div>
      </section>
    </>
  );
}
