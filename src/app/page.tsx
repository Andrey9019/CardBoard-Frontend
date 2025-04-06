import Hero from "@/app/components/Main/Hero";
import Recommendations from "@/app/components/Main/Recommendations";
import About from "@/app/components/Main/About";

export default function Home() {
  return (
    <main className="relative -top-6">
      <Hero />
      <Recommendations />
      <About />
    </main>
  );
}
