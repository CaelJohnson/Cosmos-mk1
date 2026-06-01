import { transformNeoFeed } from "./transform";
import type { NeoFeedResult, NasaNeoFeed } from "./types";

export const NEO_REVALIDATE_SECONDS = 86_400; // once per day — matches NASA cadence

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function getNeoWindow(): { start: string; end: string } {
  const start = new Date();
  const end = new Date();
  end.setUTCDate(end.getUTCDate() + 6);
  return { start: formatDate(start), end: formatDate(end) };
}

export async function fetchNeoFeed(): Promise<NeoFeedResult> {
  const apiKey = process.env.NASA_API_KEY ?? "DEMO_KEY";
  const { start, end } = getNeoWindow();

  const url = new URL("https://api.nasa.gov/neo/rest/v1/feed");
  url.searchParams.set("start_date", start);
  url.searchParams.set("end_date", end);
  url.searchParams.set("api_key", apiKey);

  const res = await fetch(url.toString(), {
    next: { revalidate: NEO_REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(
      `NASA NeoWs returned ${res.status}. Try again later or add a NASA_API_KEY.`
    );
  }

  const feed = (await res.json()) as NasaNeoFeed;
  const fetchedAt = new Date().toISOString();

  return transformNeoFeed(feed, start, end, fetchedAt);
}
