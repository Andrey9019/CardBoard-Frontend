import Link from "next/link";
import Image from "next/image";
import Game from "@/shared/types/game";
import { useEffect, useRef, useState } from "react";
import { formatPrice } from "@/shared/utils/index";

import noImg from "../../../../public/images/not-found-page/no-image.png";
import { useAllGame } from "@/shared/hooks/useAllGame";

interface SearchDropdownProps {
  setIsSearchOpen: (value: boolean) => void;
  isSearchOpen: boolean;
}

export default function SearchDropdown({
  setIsSearchOpen,
  isSearchOpen,
}: SearchDropdownProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);

  const { games } = useAllGame();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Game[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, [setIsSearchOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = games.filter((game) =>
        game.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
      );
      setResults(filtered.slice(0, 4));
    } else if (query.length > 0) {
      setResults([]);
    }
  };

  return (
    <div
      ref={itemRef}
      className={`bg-primary animate-fade-in-down-03 group absolute left-0 z-10 mt-4 w-full rounded-b-3xl px-9 py-4 transition-all duration-300 ${
        isSearchOpen
          ? "max-h-[800px] opacity-100"
          : "max-h-0 overflow-hidden opacity-0"
      }`}
    >
      <div className="relative mx-auto w-full max-w-prose">
        <form className="group-focus-within:bg-secondary group-focus-within:border-primary flex items-center rounded-xl border px-4 py-3 transition-colors group-focus-within:border">
          <div className="flex flex-1 items-center">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              className="h-10 flex-1 border-none bg-transparent outline-none group-focus-within:text-black"
              placeholder="Search..."
            />

            <button type="button">
              <svg className="h-8 w-8 cursor-pointer group-focus-within:text-black">
                <use href="/sprite.svg#icon-search"></use>
              </svg>
            </button>
          </div>
        </form>

        {results.length > 0 && (
          <div className="bg-secondary item-shadow animate-fade-in-down-03 absolute flex w-full max-w-prose flex-col rounded-xl border px-2 py-3 text-black transition-all duration-300 lg:px-3">
            <ul className="">
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={`/game/${result.id}`}
                  onClick={() => {
                    setTimeout(() => {
                      setIsSearchOpen(false);
                    }, 100);
                  }}
                >
                  <li className="lg:border-b-primary mb-3 flex w-full p-1 lg:border-b">
                    <Image
                      src={noImg}
                      alt="Фото гри"
                      width={68}
                      className="mr-5"
                    />
                    <div className="flex flex-col justify-between">
                      <p>{result.title}</p>
                      <p>
                        {formatPrice(result.price)}
                        <span> грн.</span>
                      </p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
            <Link href={"/"} className="p-2 text-center font-bold">
              Всі результати
            </Link>
          </div>
        )}
        {query.length > 0 && results.length === 0 && (
          <div className="bg-secondary item-shadow animate-fade-in-down-03 absolute flex w-full max-w-prose flex-col rounded-xl border px-3 py-6 text-black transition-all duration-300">
            <p className="text-center">
              На жаль, за вашим запитом нічого не знайдено.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
