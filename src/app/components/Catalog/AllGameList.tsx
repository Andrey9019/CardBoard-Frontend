"use client";

import { useEffect, useState } from "react";

import noImg from "../../../../public/images/no-image.png";

import { getAllGames } from "@/utils/api/getAllGame";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Game from "@/app/types/interface";

export default function AllGameList() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const data = await getAllGames();
        setGames(data);
      } catch (error) {
        console.log("error getGame", error);
      }
    };
    getGames();
  }, []);
  return (
    <ul className="flex flex-wrap justify-center gap-x-4 gap-y-9">
      {games.map((game) => (
        <li
          key={game.id}
          className="item-shadow max-w-[196px] rounded-lg bg-white p-4"
        >
          <Link href={`/game/${game.id}`}>
            <button className="items-end">❤️</button>
            <Image src={noImg} alt="Фото гри" />
            <p>{game.title}</p>
            <p>{game.price}</p>
            <Button type="primary" text="Купити" className="min-w-full" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
