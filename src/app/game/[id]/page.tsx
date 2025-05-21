"use client";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { Badge } from "@/components/ui/badge";

import { getGameById } from "@/shared/utils/index";
import { useEffect } from "react";
import { useParams } from "next/navigation";

import Game from "@/shared/types/game";
import Button from "@/components/ui/Button";
import PopularListGame from "@/components/Main/PopularListGame";
import NotFound from "@/app/not-found";
import Loading from "@/app/loading";

export default function GamePage() {
  const [game, setGame] = useState<Game | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;
  console.log("id", id);

  useEffect(() => {
    if (!id || Array.isArray(id)) {
      setNotFound(true);
      setIsLoading(false);
      return;
    }

    const getGame = async () => {
      try {
        const numericId = parseInt(id);
        const data = await getGameById(numericId);
        if (!data) {
          setNotFound(true);
        } else {
          setGame(data);
          console.log(data);
        }
      } catch (error) {
        setNotFound(true);
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getGame();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (notFound) {
    return <NotFound />;
  }

  return (
    <section className="px-9 pt-12 lg:px-8 lg:pt-16 xl:px-[120px]">
      <Breadcrumb className="mb-12 xl:mb-16">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-primary">
              <svg height="24" width="24">
                <use href="/sprite.svg#icon-home"></use>
              </svg>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <svg className="h-6 w-6">
            <use href="/sprite.svg#icon-arrow-right-purple"></use>
          </svg>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/catalog"
              className="text-primary font-semibold"
            >
              Каталог
            </BreadcrumbLink>
          </BreadcrumbItem>
          <svg className="h-6 w-6">
            <use href="/sprite.svg#icon-arrow-right-purple"></use>
          </svg>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary">
              <span className="font-semibold">{game?.title}</span>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <h2 className="mb-12 text-2xl font-bold lg:text-4xl xl:mb-16 xl:hidden">
          {game?.title}
        </h2>
        <div className="xl:grid xl:grid-cols-2">
          <div className="mb-12 xl:mb-16">tyt spisok foto</div>
          <div className="mb-12 flex flex-col gap-6 xl:mb-16">
            <h2 className="hidden text-4xl font-bold xl:flex">{game?.title}</h2>
            <Badge variant="default" className="lg:text-sm">
              В наявності
            </Badge>
            <p>{game?.description}</p>
            <div className="flex flex-wrap gap-4 lg:text-sm xl:text-lg">
              {game?.genre.map((genre) => (
                <Badge key={genre.id} variant="default">
                  {genre.name}
                </Badge>
              ))}
              {game?.player_count?.name && (
                <Badge variant="default">{game.player_count.name}</Badge>
              )}
            </div>
            <p className="text-2xl font-bold">
              {game?.price && (
                <span className="text-2xl font-bold">{game.price} грн</span>
              )}
            </p>
            <div className="flex justify-between gap-6 sm:justify-start">
              {/* змінити на лінк? */}
              <Button
                as="button"
                variant="primary"
                text="Купити зараз"
                className="lg:min-w-[346px] xl:min-w-[264px]"
              />
              {/* змінити на лінк? */}
              <Button
                as="button"
                variant="secondary"
                text="Додати в кошик"
                className="lg:min-w-[346px] xl:min-w-[264px]"
              />
            </div>
          </div>
        </div>

        <div className="grid-cols-2 lg:grid">
          <div className="mb-12 lg:mb-16">
            <p className="mb-6 text-2xl font-semibold">Опис</p>
            <p className="text-sm lg:text-base xl:text-lg">
              {game?.description}
            </p>
          </div>
          <div className="mb-12 lg:mb-16">
            <p className="mb-6 text-2xl font-semibold">Характеристики</p>
            <table className="w-full border-separate border-spacing-y-4 text-left text-sm lg:text-base">
              <tbody>
                {game?.publisher && (
                  <tr>
                    <td className="text-background">Видавець</td>
                    <td className="xl:text-lg">{game.publisher.name}</td>
                  </tr>
                )}
                {game?.duration && (
                  <tr>
                    <td className="text-background">Час партії</td>
                    <td className="xl:text-lg">{game.duration.name}</td>
                  </tr>
                )}
                {game?.player_count && (
                  <tr>
                    <td className="text-background">Гравців</td>
                    <td className="xl:text-lg">{game.player_count.name}</td>
                  </tr>
                )}
                {game?.age_group && (
                  <tr>
                    <td className="text-background">Вік</td>
                    <td className="xl:text-lg">{game.age_group.name}</td>
                  </tr>
                )}
                {game?.difficulty && (
                  <tr>
                    <td className="text-background">Складність гри</td>
                    <td className="xl:text-lg">{game.difficulty.name}</td>
                  </tr>
                )}
                {game?.genre && (
                  <tr>
                    <td className="text-background">Жанр гри</td>
                    <td className="xl:text-lg">
                      {game.genre.map((g) => g.name).join(", ")}
                    </td>
                  </tr>
                )}
                {game?.mechanic && (
                  <tr>
                    <td className="text-background">Механіка гри</td>
                    <td className="xl:text-lg">
                      {game.mechanic.map((m) => m.name).join(", ")}
                    </td>
                  </tr>
                )}
                {game?.release_year && (
                  <tr>
                    <td className="text-background">Рік випуску</td>
                    <td className="xl:text-lg">
                      {new Date(game.release_year).getFullYear()}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mb-12 lg:mb-16">
            <p className="mb-6 text-2xl font-semibold">Доставка</p>

            <p className="mb-4 text-sm lg:text-base xl:text-lg">
              Самовивіз з мазагину
            </p>
            <p className="text-sm lg:text-base xl:text-lg">Детальніше</p>
          </div>
          <div className="mb-12 lg:mb-16">
            <p className="mb-6 text-2xl font-semibold">Відгуки</p>
            <p className="mb-4 text-sm lg:text-base xl:text-lg">
              Поки що ніхто не залишив відгуків
            </p>
            <div className="flex justify-end">
              <Button
                as="button"
                variant="secondary"
                text="Залиште свій відгук"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12 lg:mb-16">
        <PopularListGame title="Вас також може зацікавити" />
      </div>
    </section>
  );
}
