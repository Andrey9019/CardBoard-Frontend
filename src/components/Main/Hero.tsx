import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-background text-secondary relative -top-6 mb-12 flex w-full items-center justify-center bg-[url('/images/hero-baner/Baner-M.webp')] bg-cover bg-center px-9 py-36 lg:mb-16 lg:bg-[url('/images/hero-baner/Baner-T.webp')] lg:px-[154px] lg:py-40 xl:bg-[url('/images/hero-baner/Baner-D.webp')] xl:px-[327px] xl:py-[186px]">
      <div className="flex flex-col items-center gap-9">
        <h1 className="animate-fade-in-down-07 translate-y-[-20px] text-center text-4xl font-bold opacity-0 lg:text-5xl xl:text-[64px]">
          Насолоджуйтесь найкращими іграми!
        </h1>
        <p className="animate-fade-in-down-07 max-w-[350px] translate-y-[-20px] text-center text-sm opacity-0 lg:text-base xl:text-lg">
          Відкрийте для себе нові стратегії та розваги для компанії будь-якої
          форми.
        </p>
        <Link href="/catalog">
          <Button
            text={"Перейти до каталогу"}
            type="primary"
            className="animate-fade-in-down-12 translate-y-[-20px] opacity-0"
          />
        </Link>
      </div>
    </section>
  );
}
