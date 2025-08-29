"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

import noImg from "../../../../public/images/not-found-page/no-image.png";
import SkeletonCard from "@/components/layout/Skeleton";
import { useAllGame } from "@/shared/hooks/useAllGame";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { useMemo } from "react";

interface ListGameProp {
  title: string;
}

export default function RecommendationsList({ title }: ListGameProp) {
  const { products, isLoading, error, handleRetry } = useAllGame();

  const shuffledGames = useMemo(
    () => [...products].sort(() => Math.random() - 0.5),
    [products],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1, // 1 картка до 640px
    breakpoints: {
      "(min-width: 540px)": { slidesToScroll: 2 }, // 2 картки від 640px
      "(min-width: 768px)": { slidesToScroll: 3 }, // 3 картки від 768px
      "(min-width: 1024px)": { slidesToScroll: 4 }, // 4 картки від 1024px
    },
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="mb-7 flex items-center justify-between lg:mb-4 xl:mb-12">
        <p className="text-xl font-semibold lg:text-2xl xl:text-3xl">{title}</p>

        <div className="mt-[1.8rem] hidden [grid-template-columns:auto_1fr] items-center justify-center gap-4 lg:grid">
          <div className="flex items-center gap-[0.6rem]">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <div className="[margin-right:calc((2.6rem-1.4rem)/2*-1)] flex flex-wrap items-center justify-end gap-3">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary scale-125 shadow-md"
                      : "hover:bg-primary/50 border-primary border"
                  }`}
                />
              ))}
            </div>
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>

      {/* якщо помилка то... */}
      {error && (
        <div className="mx-auto flex min-h-[365px] max-w-[628px] flex-col items-center justify-center gap-9 py-9 lg:min-h-[429px] xl:min-h-[477px]">
          <p className="text-primary text-center font-semibold">
            Oops... <br /> З запитом сталася помилка. Спробуйте ще раз
          </p>
          <Button
            variant="primary"
            onClick={handleRetry}
            text="Спробувати ще раз"
          />
        </div>
      )}

      {/* якщо нічого не знайдено */}
      {!isLoading && !error && !products.length && (
        <div className="mx-auto flex min-h-[365px] max-w-[628px] flex-col items-center justify-center gap-9 py-9 lg:min-h-[429px] xl:min-h-[477px]">
          <p className="text-primary text-center font-semibold">
            Oops... <br /> Ми не знайшли нічого за вашим запитом. Але не
            засмучуйтесь — у нас точно є гра, яка вам сподобається. Пограйте з
            фільтрами!
          </p>
          <Button
            variant="primary"
            onClick={() => window.location.reload()}
            text=" Скинути фільтри"
          />
        </div>
      )}
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {shuffledGames.map((game) => (
                <ul
                  key={game.id}
                  className="min-w-0 flex-[0_0_100%] items-center justify-items-center sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] lg:flex-[0_0_25%]"
                >
                  <li className="flex h-full min-h-[365px] w-full max-w-[196px] flex-col justify-between rounded-lg bg-white lg:min-h-[429px] lg:max-w-[228px] xl:min-h-[477px] xl:max-w-[270px]">
                    <Link
                      href={`/game/${game.id}`}
                      className="flex h-full flex-col justify-between p-4"
                    >
                      <div className="flex justify-end">
                        {/* <button className="max-w-max">
                          <svg width="18" height="18">
                            <use href="/icon/sprite.svg#icon-heart"></use>
                          </svg>
                        </button> */}
                      </div>
                      <div className="flex items-center">
                        <Image
                          className="my-4 flex items-center justify-center object-contain"
                          src={game.thumbnail || noImg}
                          alt={game.title || "Фото гри"}
                          width={242}
                          height={242}
                        />
                      </div>

                      <p className="mb-2 line-clamp-2 leading-snug font-bold lg:text-lg">
                        {game.title}
                      </p>
                      <p className="mb-2 text-lg font-bold lg:text-xl">
                        {game.price} ₴
                      </p>
                      <div className="mt-auto">
                        <Button
                          variant="primary"
                          text="Купити"
                          className="min-w-full !py-1.5 text-sm uppercase lg:!py-3 lg:text-base"
                        />
                      </div>
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center lg:hidden">
            <div className="flex items-center justify-center gap-[0.6rem]">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <div className="flex flex-wrap items-center justify-end gap-2">
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "bg-primary scale-125 shadow-md"
                        : "hover:bg-primary/50 border-primary border"
                    }`}
                  />
                ))}
              </div>
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
