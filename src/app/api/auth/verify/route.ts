import { NextResponse, type NextRequest } from "next/server";

const API_BASE_URL =
  // process.env.AUTH_SERVICE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "http://localhost:3001";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const verifyResponse = await fetch(`${API_BASE_URL}/api/auth/verify`, {
      method: "GET",
      headers: {
        Cookie: `auth-token=${token}`,
      },
      cache: "no-store",
    });

    const payload = await verifyResponse.json();

    return NextResponse.json(payload, { status: verifyResponse.status });
  } catch (error) {
    console.error("Verify proxy failed:", error);
    return NextResponse.json(
      { error: "Unable to verify session" },
      { status: 500 },
    );
  }
}

