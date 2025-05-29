import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations";
import About from "./components/About";
import QuestionsAndAnswers from "./components/Q&A";

export default function Home() {
  return (
    <>
      <Hero />
      <Recommendations />
      <About />
      <QuestionsAndAnswers />
    </>
  );
}
