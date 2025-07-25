"use client";

import Button from "@/components/ui/Button";
import cubeSvg from "/public/icon/logos/cube.svg";
import Image from "next/image";

export default function NotFound() {
  const handleMain = () => {
    window.location.href = "/";
  };
  return (
    // -mt-8 -mb-8;
    <div className="not-found-page relative flex h-full w-full flex-col items-center justify-center text-center text-white">
      <p className="text-2xl font-bold lg:text-4xl xl:text-[40px]">Oops...</p>
      <div className="flex items-center leading-none">
        <span className="text-[200px] font-bold lg:text-[280px] xl:text-[300px]">
          4
        </span>
        <Image
          src={cubeSvg}
          alt="cube"
          className="h-[150px] w-[150px] lg:h-[200px] lg:w-[200px]"
        />
        <span className="text-[200px] font-bold lg:text-[280px]">4</span>
      </div>
      <p className="text-2xl font-semibold lg:text-4xl xl:text-[40px]">
        Спробуйте свою вдачу ще раз
      </p>
      <Button
        variant="primary"
        text="Повернутись на головну"
        onClick={handleMain}
        className="mt-9 text-sm lg:text-lg xl:text-2xl"
      />
    </div>
  );
}
