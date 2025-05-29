import { useRouter } from "next/navigation";
import { useState } from "react";

import SkeletonCard from "@/components/layout/Skeleton";
import Button from "@/components/ui/Button";
import GameListCard from "./GameListCard";
import { useAllGame } from "@/shared/hooks/useAllGame";

export default function GameList() {
  const [, setSelectedFilters] = useState<{
    [key: string]: number[];
  }>({});

  const { games, isLoading, error } = useAllGame();

  const router = useRouter();

  const handlleResetFilters = () => {
    setSelectedFilters({});
    router.push("/catalog");
  };

  const handleRetry = () => {
    router.refresh();
  };

  if (isLoading) return <SkeletonCard />;
  if (error) {
    return (
      <div className="mx-auto flex max-w-[628px] flex-col items-center gap-9 py-9">
        <p className="text-primary text-center font-semibold">
          Oops... <br /> З запитом сталася помилка. Спробуйте ще раз
        </p>

        <Button
          as="button"
          variant="primary"
          onClick={handleRetry}
          text="Спробувати ще раз"
        />
      </div>
    );
  }
  if (!games.length)
    return (
      <div className="mx-auto flex max-w-[628px] flex-col items-center gap-9 py-9">
        <p className="text-primary text-center font-semibold">
          Oops... <br /> Ми не знайшли нічого за вашим запитом. Але не
          засмучуйтесь — у нас точно є гра, яка вам сподобається. Пограйте з
          фільтрами!
        </p>

        <Button
          as="button"
          variant="primary"
          onClick={handlleResetFilters}
          text=" Скинути фільтри"
        />
      </div>
    );

  return (
    <>
      <ul className="animate-fade-in-left-03 grid grid-cols-[repeat(auto-fit,minmax(196px,1fr))] justify-items-center gap-x-6 gap-y-9 lg:grid-cols-[repeat(auto-fit,minmax(228px,1fr))] lg:gap-x-10 xl:grid-cols-[repeat(auto-fit,minmax(270px,1fr))]">
        {games.map((game) => (
          <GameListCard key={game.id} game={game} />
        ))}
      </ul>
    </>
  );
}
