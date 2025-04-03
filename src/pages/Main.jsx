import Hero from "../components/Main/Hero";
import Recommendations from "../components/Main/Recommendations";
import Ping from "../components/Ping";

export default function Main() {
  return (
    <section>
      <Hero />
      <Recommendations />

      <Ping />
    </section>
  );
}
