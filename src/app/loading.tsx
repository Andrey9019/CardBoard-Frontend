"use client";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="loader mx-auto flex items-center justify-center text-center">
        <svg
          className="animate-spin"
          width="64"
          height="64"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" rx="4" fill="#ECDEF6" />
          <path
            d="M5.17712 7.04361L12.1882 6.87227M5.17712 7.04361L8.46125 12.5607M5.17712 7.04361L8.46125 3M5.17712 7.04361L3 5.39875M5.17712 7.04361L3 11.0187M12.1882 6.87227L8.46125 12.5607M12.1882 6.87227L8.46125 3M12.1882 6.87227L13 5.63863M12.1882 6.87227L13 11.4642M8.46125 12.5607L3 11.0187M8.46125 12.5607L7.57565 14M8.46125 12.5607L13 11.4642M8.46125 3L13 5.63863M8.46125 3L3 5.39875M13 5.63863V11.4642M3 5.39875V11.0187M3 11.0187L7.57565 14M7.57565 14L13 11.4642"
            stroke=" #6A2ECB"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <p className="text-primary text-center text-2xl font-semibold uppercase">
        Card&Board
      </p>
    </div>
  );
}
