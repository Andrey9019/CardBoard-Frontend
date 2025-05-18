// "use client";

// import { Link } from "lucide-react";
// import Image from "next/image";
// import { FaRegHeart } from "react-icons/fa";
// import noImg from "../../../public/images/not-found-page/no-image.png";
// import Button from "../ui/Button";

// import Game from "@/shared/types/game";
// interface GameCardProps {
//   game: Game;
// }

// export default function GameCard({ game }: GameCardProps) {
//   return (
//     <Link
//       href={`/game/${game.id}`}
//       className="flex h-full flex-col justify-between p-4"
//     >
//       <div className="flex justify-end">
//         <button className="max-w-max">
//           <FaRegHeart className="text-primary h-[18px] w-[18px]" />
//         </button>
//       </div>

//       <Image className="my-4 flex justify-center" src={noImg} alt="Фото гри" />

//       <p className="mb-2 line-clamp-2 leading-snug font-bold lg:text-lg">
//         {game.title}
//       </p>
//       <p className="mb-2 text-lg font-bold lg:text-xl">{game.price}</p>

//       <div className="mt-auto flex w-full flex-col justify-end">
//         <Button
//           as="button"
//           variant="primary"
//           text="Купити"
//           className="min-w-full !py-1.5 text-sm uppercase lg:!py-3 lg:text-base"
//         />
//       </div>
//     </Link>
//   );
// }
