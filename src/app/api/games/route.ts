import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const query = url.searchParams.get("query") || "";
    const genres = url.searchParams
      .getAll("genres")
      .map(Number)
      .filter((id) => !isNaN(id));
    const types = url.searchParams
      .getAll("types")
      .map(Number)
      .filter((id) => !isNaN(id));
    const mechanics = url.searchParams
      .getAll("mechanics")
      .map(Number)
      .filter((id) => !isNaN(id));
    const difficulty = url.searchParams
      .getAll("difficulty")
      .map(Number)
      .filter((id) => !isNaN(id));
    const player_count = url.searchParams
      .getAll("player_count")
      .map(Number)
      .filter((id) => !isNaN(id));
    const age_group = url.searchParams
      .getAll("age_group")
      .map(Number)
      .filter((id) => !isNaN(id));
    const duration = url.searchParams
      .getAll("duration")
      .map(Number)
      .filter((id) => !isNaN(id));
    const publisher = url.searchParams
      .getAll("publisher")
      .map(Number)
      .filter((id) => !isNaN(id));

    const products = await prisma.product.findMany({
      where: {
        AND: [
          query ? { title: { contains: query, mode: "insensitive" } } : {},
          genres.length ? { genres: { some: { id: { in: genres } } } } : {},
          types.length ? { types: { some: { id: { in: types } } } } : {},
          mechanics.length
            ? { mechanics: { some: { id: { in: mechanics } } } }
            : {},
          difficulty.length ? { difficultyId: { in: difficulty } } : {},
          player_count.length ? { playerCountId: { in: player_count } } : {},
          age_group.length ? { ageGroupId: { in: age_group } } : {},
          duration.length ? { durationId: { in: duration } } : {},
          publisher.length ? { publisherId: { in: publisher } } : {},
        ],
      },
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

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
