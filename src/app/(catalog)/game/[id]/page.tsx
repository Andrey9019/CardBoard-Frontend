"use client";

import GameBody from "./components/GameBody";
import { useGameByID } from "./hooks/useGamebyID";
import BreadcrumbWidgest from "@/components/widgets/BreadcrumbWidgest";

import NotFound from "@/app/not-found";

export default function GamePage() {
  const { product, notFound } = useGameByID();

  if (notFound) {
    return <NotFound />;
  }

  return (
    <>
      <BreadcrumbWidgest
        text1="Каталог"
        text2={product?.title}
        link="/catalog"
      />

      <GameBody />
    </>
  );
}
