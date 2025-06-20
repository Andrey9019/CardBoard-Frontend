import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const params = await context.params;
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    // Пошук продукту
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        genres: true,
        types: true,
        mechanics: true,
        difficulty: true,
        player_count: true,
        age_group: true,
        duration: true,
        publisher: true,
      },
    });

    // Якщо продукт не знайдено
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error(`Error fetching product:`, error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
