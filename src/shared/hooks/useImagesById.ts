"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getImagesById } from "@/shared/utils";
import { ImagesById } from "../types/typeImagesById";

export function useImagesByID() {
  const [images, setImages] = useState<ImagesById | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!id || Array.isArray(id)) {
      setNotFound(true);
      setIsLoading(false);
      return;
    }

    const getImages = async () => {
      try {
        const numericId = parseInt(id);
        const data = await getImagesById(numericId);
        if (!data) {
          setNotFound(true);
        } else {
          setImages(data);
          console.log(data);
        }
      } catch (error) {
        setNotFound(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [id]);
  return { images, notFound, isLoading };
}
