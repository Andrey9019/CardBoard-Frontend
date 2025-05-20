"use client";

import { Suspense, useState } from "react";

import BreadcrumbWidgest from "@/components/widgets/BreadcrumbWidgest";
import CatalogControls from "./components/CatalogControls";
import GameList from "./components/GameList";

export default function Catalog() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <BreadcrumbWidgest text1="Каталог" />
      <CatalogControls
        setIsFilterOpen={setIsFilterOpen}
        isFilterOpen={isFilterOpen}
      />

      <div className={`${isFilterOpen ? "hidden" : "block"} w-full`}>
        <Suspense>
          <GameList />
        </Suspense>
      </div>
    </>
  );
}
