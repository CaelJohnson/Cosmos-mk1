import { NextResponse } from "next/server";
import { fetchNeoFeed } from "@/lib/asteroids/fetch-neo";

export const revalidate = 86400;

export async function GET() {
  try {
    const data = await fetchNeoFeed();
    return NextResponse.json(data);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch asteroid data";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
