import PopularListGame from "./PopularListGame";

export default function Recommendations() {
  return (
    <section className="mb-12 flex flex-col gap-9 px-9 lg:mb-16 lg:px-8 xl:gap-12 xl:px-[120px]">
      <p className="text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
        Рекомендації
      </p>
      <div>
        <p className="mb-7 text-xl font-semibold lg:mb-5 lg:text-2xl xl:text-3xl">
          Популярне
        </p>
        <PopularListGame />
      </div>
      <div>
        <p className="mb-7 text-xl font-semibold lg:mb-5 lg:text-2xl xl:text-3xl">
          Новинки
        </p>
        <PopularListGame />
      </div>

      <div>
        <p className="mb-7 text-xl font-semibold lg:mb-5 lg:text-2xl xl:text-3xl">
          Акція
        </p>
        <PopularListGame />
      </div>
    </section>
  );
}
