import Hero from "./components/Hero";
import About from "./components/About";
import QuestionsAndAnswers from "./components/Q&A";
import Recommendations from "./components/Recommendations";

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
