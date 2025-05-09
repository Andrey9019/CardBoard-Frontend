"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex min-h-[365px] max-w-[196px] flex-col space-y-3 rounded-lg lg:min-h-[429px] lg:max-w-[228px] xl:min-h-[477px] xl:max-w-[270px]">
      <Skeleton className="h-[312px] max-w-[196px] rounded-lg lg:h-[377px] lg:max-w-[228px] xl:h-[425px] xl:max-w-[270px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 max-w-[156px] lg:max-w-[198px] xl:max-w-[240px]" />
        <Skeleton className="h-4 max-w-[196px] lg:max-w-[228px] xl:max-w-[270px]" />
      </div>
    </div>
  );
}
