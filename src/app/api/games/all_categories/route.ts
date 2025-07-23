// import { NextResponse } from "next/server";
// import { prisma } from "../../../../../prisma/prisma-client";

// interface PrismaModel {
//   findMany<T extends { select: { id: boolean; name: boolean } }>(
//     args?: T,
//   ): Promise<Array<{ id: number; name: string }>>;
// }

// type CategoryConfigItem = {
//   name: string;
//   display_name: string;
//   model: PrismaModel;
// };

// // Конфігурація категорій
// const categoryConfig: CategoryConfigItem[] = [
//   { name: "genres", display_name: "Жанри", model: prisma.genre },
//   { name: "types", display_name: "Типи", model: prisma.type },
//   { name: "mechanics", display_name: "Механіки", model: prisma.mechanic },
//   { name: "difficulty", display_name: "Складність", model: prisma.difficulty },
//   {
//     name: "player_count",
//     display_name: "Кількість гравців",
//     model: prisma.playerCount,
//   },
//   { name: "age_group", display_name: "Вікова група", model: prisma.ageGroup },
//   { name: "duration", display_name: "Тривалість", model: prisma.duration },
// ] as const;

// export async function GET() {
//   try {
//     // Формуємо запити до всіх категорій
//     const categoryPromises = categoryConfig.map(({ model }) =>
//       model.findMany({ select: { id: true, name: true } }),
//     );

//     // Виконуємо всі запити паралельно
//     const categoryResults = await Promise.all(categoryPromises);

//     // Формуємо масив категорій
//     const categories = categoryConfig.map(({ name, display_name }, index) => ({
//       name,
//       display_name,
//       values: categoryResults[index],
//     }));

//     return NextResponse.json(categories);
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 },
//     );
//   }
// }
