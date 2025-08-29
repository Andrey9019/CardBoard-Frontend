// "use client";

import Loading from "@/app/loading";
import { useGameByID } from "../hooks/useGamebyID";

import GameHeader from "./GameHeader";
import GameDetails from "./GameDetails";
import RecommendationsList from "@/app/(main)/components/RecommendationsList";

export default function GameBody() {
  const { product, isLoading } = useGameByID();

  if (isLoading) {
    return <Loading />;
  }
  if (!product) {
    return;
  }

  return (
    <section className="px-9 pt-12 lg:px-8 lg:pt-16 xl:px-[120px]">
      <div>
        <h2 className="mb-12 text-2xl font-bold lg:text-4xl xl:mb-16 xl:hidden">
          {product.title}
        </h2>

        <GameHeader game={product} />

        <GameDetails game={product} />
      </div>
      <div className="mb-12 lg:mb-16">
        <RecommendationsList title="Вас також може зацікавити" />
      </div>
    </section>
  );
}
