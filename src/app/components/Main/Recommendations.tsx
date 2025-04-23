import PopularListGame from "./PopularListGame";

export default function Recommendations() {
  return (
    <section className="mb-12 flex flex-col gap-9 px-9 lg:mb-16 lg:px-8 xl:gap-12 xl:px-[120px]">
      <p className="text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
        Рекомендації
      </p>

      <div>
        <PopularListGame title="Популярне" />
      </div>
      <div>
        <PopularListGame title="Новинки" />
      </div>
      <div>
        <PopularListGame title="Акція" />
      </div>
    </section>
  );
}
