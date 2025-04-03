import Button from "../../ui/Button";

export default function Hero() {
  return (
    <section className="mb-12 flex w-full items-center justify-center bg-[url('../../../public/images/Baner-M.png')] bg-cover bg-center px-9 py-36 text-secondary lg:mb-16 lg:bg-[url('../../../public/images/Baner-T.png')] lg:px-[154px] lg:py-40 xl:bg-[url('../../../public/images/Baner-D.png')] xl:px-[327px] xl:py-[186px]">
      <div className="flex flex-col items-center gap-9">
        <h1 className="text-center text-4xl font-bold lg:text-5xl xl:text-[64px]">
          Насолоджуйтесь найкращими іграми!
        </h1>
        <p className="max-w-[350px] text-center text-sm lg:text-base xl:text-lg">
          Відкрийте для себе нові стратегії та розваги для компанії будь-якої
          форми.
        </p>
        <Button text={"Перейти до каталогу"} type="primary" className="" />
      </div>
    </section>
  );
}
