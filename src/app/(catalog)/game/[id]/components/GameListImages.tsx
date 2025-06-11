"use client";

import { useImagesByID } from "@/shared/hooks/useImagesById";
import { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import noImg from "../../../../../../public/images/not-found-page/no-image.png";

import Image from "next/image";

export default function GameListImagesProps() {
  const options: EmblaOptionsType = {};
  const { images } = useImagesByID();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  console.log("Environment URL:", process.env.NEXT_PUBLIC_DB_API_BASE_URL);
  console.log("Image path on prod:", images?.[0]?.path);

  return (
    <div className="ml:max-w-[580px] mx-auto mb-12 max-w-[768px] [--slide-size:100%] xl:mb-0">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="ml:max-w-[580px] ml-[calc(var(--slide-spacing)_*-1)] flex [touch-action:pan-y_pinch-zoom] gap-4">
          {images?.map((image, index) => (
            <Image
              className="ml:max-w-[588px] shrink-0 grow-0 basis-[var(--slide-size)] [transform:translate3d(0,0,0)] rounded-lg border-1 border-black pl-[var(--slide-spacing)]"
              key={index}
              src={image.path || noImg}
              alt={`Game image ${index + 1}`}
              width={300}
              height={300}
              priority={index === 0}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 overflow-hidden" ref={emblaThumbsRef}>
        <div className="ml-[calc(var(--thumbs-slide-spacing)_*_ -1)] flex flex-row">
          {images?.map((image, index) => (
            <Image
              onClick={() => onThumbClick(index)}
              key={index}
              src={image.path || noImg}
              alt={`Thumbnail image ${index + 1}`}
              width={96}
              height={96}
              priority={index === 0}
              className={"mr-3 max-w-24 flex-[0_0_22%] rounded-lg border-1 border-black pl-[var(--thumbs-slide-spacing)]".concat(
                index === selectedIndex ? "text-[var(--text-body)]" : "",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
