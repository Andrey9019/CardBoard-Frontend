export default function Recommendations() {
  return (
    <section className="flex flex-col gap-9 px-9">
      <h2 className="text-center text-3xl font-bold">Рекомендації</h2>
      <div>
        <p className="mb-7 text-xl font-semibold">Популярне</p>
        <ul>
          <li>гра 1</li>
        </ul>
      </div>
      <div>
        <p className="mb-7 text-xl font-semibold">Новинки</p>
        <ul>
          <li>гра 2</li>
        </ul>
      </div>

      <div>
        <p className="mb-7 text-xl font-semibold">Акція</p>
        <ul>
          <li>гра 3</li>
        </ul>
      </div>
    </section>
  );
}
