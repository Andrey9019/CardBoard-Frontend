import Hero from "../components/Main/Hero";
import Recommendations from "../components/Main/Recommendations";
import About from "../components/Main/About";
import Ping from "../components/Ping";

export default function Main() {
  return (
    <section>
      <Hero />
      <Recommendations />
      <About />

      <Ping />
    </section>
  );
}
