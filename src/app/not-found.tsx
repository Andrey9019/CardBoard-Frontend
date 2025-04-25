"use client";

import Button from "@/components/ui/Button";
import cubeSvg from "@/assets/logos/cube.svg";
import Image from "next/image";

export default function NotFound() {
  const handleMain = () => {
    window.location.href = "/";
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-[url('/images/not-found-page/404-m.png')] bg-cover bg-center text-center text-white lg:bg-[url('/images/not-found-page/404-t.png')] xl:bg-[url('/images/not-found-page/404-d.png')]">
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
        text="Повернутись на головну"
        type="primary"
        className="mt-9 text-sm lg:text-lg xl:text-2xl"
        onClick={handleMain}
      />
    </div>
  );
}
