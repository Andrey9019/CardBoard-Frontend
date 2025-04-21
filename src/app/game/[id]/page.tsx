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

import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";

import { getGameById } from "@/utils/api/getGameById";
import { useEffect } from "react";
import { useParams } from "next/navigation";

import Game from "../../types/interface";
import Button from "@/components/ui/Button";
import PopularListGame from "@/app/components/Main/PopularListGame";

export default function GamePage() {
  const [game, setGame] = useState<Game | null>(null);

  const params = useParams();
  const id = params.id;
  console.log("id", id);

  useEffect(() => {
    if (!id || Array.isArray(id)) return;

    const getGame = async () => {
      try {
        const numericId = parseInt(id);
        const data = await getGameById(numericId);
        console.log(data);
        setGame(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGame();
  }, [id]);

  return (
    <section className="px-9 pt-12">
      <Breadcrumb className="mb-12">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-primary">
              <Link href="/">
                <IoHomeOutline />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <IoIosArrowForward className="text-primary" />
          <BreadcrumbItem>
            <BreadcrumbLink className="text-primary">
              <Link href="/catalog" className="font-semibold">
                Каталог
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <IoIosArrowForward className="text-primary" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary">
              <span className="font-semibold">{game?.title}</span>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <h2 className="mb-12 text-2xl font-bold"> {game?.title} </h2>
        <div className="mb-12">tyt spisok foto</div>
        <div className="mb-12 flex flex-col gap-6">
          <Badge variant="default">В наявності</Badge>
          <p>{game?.description}</p>
          <div className="flex flex-wrap gap-4">
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
              <p className="text-2xl font-bold">{game.price} грн</p>
            )}
          </p>
          <div className="flex justify-between gap-6 sm:justify-start">
            <Button type="primary" text="Купити зараз" />
            <Button type="secondary" text="Додати в кошик" />
          </div>
        </div>
        <div className="mb-12">
          <p className="mb-6 text-2xl font-semibold">Опис</p>
          <p className="text-sm">{game?.description}</p>
        </div>
        <div>
          <p className="mb-6 text-2xl font-semibold">Характеристики</p>
          <table className="mb-12 w-full border-separate border-spacing-y-4 text-left">
            <tbody>
              {game?.publisher && (
                <tr>
                  <td className="text-background">Видавець</td>
                  <td>{game.publisher.name}</td>
                </tr>
              )}
              {game?.duration && (
                <tr>
                  <td className="text-background">Час партії</td>
                  <td>{game.duration.name}</td>
                </tr>
              )}
              {game?.player_count && (
                <tr>
                  <td className="text-background">Гравців</td>
                  <td>{game.player_count.name}</td>
                </tr>
              )}
              {game?.age_group && (
                <tr>
                  <td className="text-background">Вік</td>
                  <td>{game.age_group.name}</td>
                </tr>
              )}
              {game?.difficulty && (
                <tr>
                  <td className="text-background">Складність гри</td>
                  <td>{game.difficulty.name}</td>
                </tr>
              )}
              {game?.genre && (
                <tr>
                  <td className="text-background">Жанр гри</td>
                  <td>{game.genre.map((g) => g.name).join(", ")}</td>
                </tr>
              )}
              {game?.mechanic && (
                <tr>
                  <td className="text-background">Механіка гри</td>
                  <td>{game.mechanic.map((m) => m.name).join(", ")}</td>
                </tr>
              )}
              {game?.release_year && (
                <tr>
                  <td className="text-background">Рік випуску</td>
                  <td>{new Date(game.release_year).getFullYear()}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mb-12">
          <p className="mb-6 text-2xl font-semibold">Доставка</p>

          <p className="mb-4">Самовивіз з мазагину</p>
          <p className="">Делальніше</p>
        </div>
        <div className="mb-12">
          <p className="mb-6 text-2xl font-semibold">Відгуки</p>
          <p className="mb-4">Поки що ніхто не залишив відгуків</p>
          <div className="flex justify-end">
            <Button type="secondary" text="Залиште свій відгук" />
          </div>
        </div>
      </div>
      <div className="mb-12">
        <PopularListGame title={" Вас також може зацікавити"} />
      </div>
    </section>
  );
}
