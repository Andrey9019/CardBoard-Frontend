import Hero from "@/components/Main/Hero";
import Recommendations from "@/components/Main/Recommendations";
import About from "@/components/Main/About";
import QuestionsAndAnswers from "../components/Main/Q&A";

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
