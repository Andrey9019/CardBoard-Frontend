import Hero from "@/app/(main)/components/Hero";
import Recommendations from "./(main)/components/Recommendations";
import About from "./(main)/components/About";
import QuestionsAndAnswers from "./(main)/components/Q&A";

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
