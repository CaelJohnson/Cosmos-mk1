import { layoutAsteroidsForMap } from "./map-layout";
import { distanceLabel, sizeLabel, velocityLabel } from "./comparisons";
import {
  assessDanger,
  isFamousName,
  notableReason,
} from "./danger";
import type {
  AsteroidFlyby,
  NasaNeoFeed,
  NasaNeoObject,
  NeoFeedResult,
} from "./types";

const MAX_DISPLAY = 15;

function cleanName(name: string): string {
  return name.replace(/[()]/g, "").trim();
}

function formatApproachDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function flattenFeed(feed: NasaNeoFeed): NasaNeoObject[] {
  const byId = new Map<string, NasaNeoObject>();
  for (const dayObjects of Object.values(feed.near_earth_objects)) {
    for (const neo of dayObjects) {
      if (!byId.has(neo.id)) byId.set(neo.id, neo);
    }
  }
  return [...byId.values()];
}

function closestApproachInWindow(
  neo: NasaNeoObject,
  windowStart: string,
  windowEnd: string
) {
  const start = new Date(windowStart).getTime();
  const end = new Date(windowEnd).getTime();

  let best = neo.close_approach_data[0];
  let bestKm = Infinity;

  for (const approach of neo.close_approach_data) {
    const t = new Date(approach.close_approach_date).getTime();
    if (t < start || t > end) continue;
    const km = parseFloat(approach.miss_distance.kilometers);
    if (km < bestKm) {
      bestKm = km;
      best = approach;
    }
  }

  if (!best) return null;
  return best;
}

export function transformNeoFeed(
  feed: NasaNeoFeed,
  windowStart: string,
  windowEnd: string,
  fetchedAt: string
): NeoFeedResult {
  const objects = flattenFeed(feed);
  const candidates: Omit<
    AsteroidFlyby,
    | "mapDistance"
    | "mapRadius"
    | "mapPosition"
    | "mapTrajectory"
    | "notableReason"
    | "isNotable"
  >[] = [];

  for (const neo of objects) {
    const approach = closestApproachInWindow(neo, windowStart, windowEnd);
    if (!approach) continue;

    const missKm = parseFloat(approach.miss_distance.kilometers);
    const lunar = parseFloat(approach.miss_distance.lunar);
    const velocityKph = parseFloat(
      approach.relative_velocity.kilometers_per_hour
    );
    const diamMin = neo.estimated_diameter.meters.estimated_diameter_min;
    const diamMax = neo.estimated_diameter.meters.estimated_diameter_max;
    const diameterM = diamMax;
    const isPha = neo.is_potentially_hazardous_asteroid;
    const danger = assessDanger(lunar, diameterM, isPha);

    candidates.push({
      id: neo.id,
      name: neo.name,
      displayName: cleanName(neo.name),
      jplUrl: neo.nasa_jpl_url,
      diameterMeters: diameterM,
      diameterMinMeters: diamMin,
      diameterMaxMeters: diamMax,
      sizeLabel: sizeLabel(diameterM),
      approachDate: approach.close_approach_date,
      approachDateLabel: formatApproachDate(approach.close_approach_date),
      missDistanceKm: missKm,
      lunarDistance: lunar,
      distanceLabel: distanceLabel(lunar, missKm),
      velocityKph,
      velocityLabel: velocityLabel(velocityKph),
      isPotentiallyHazardous: isPha,
      dangerLevel: danger.level,
      dangerLabel: danger.label,
      dangerSummary: danger.summary,
    });
  }

  // Sort: closest first, then largest
  candidates.sort((a, b) => {
    if (a.missDistanceKm !== b.missDistanceKm) {
      return a.missDistanceKm - b.missDistanceKm;
    }
    return b.diameterMeters - a.diameterMeters;
  });

  const largestDiameter = Math.max(...candidates.map((c) => c.diameterMeters), 0);
  const top = candidates.slice(0, MAX_DISPLAY);

  const layouts = layoutAsteroidsForMap(
    top.map((item) => ({
      id: item.id,
      lunarDistance: item.lunarDistance,
      diameterMeters: item.diameterMeters,
    }))
  );

  const asteroids: AsteroidFlyby[] = top.map((item, index) => {
    const { mapDistance, mapRadius, mapPosition, mapTrajectory } =
      layouts[index];
    const reason = notableReason(
      item.name,
      item.lunarDistance,
      item.diameterMeters,
      item.isPotentiallyHazardous,
      item.diameterMeters === largestDiameter && largestDiameter > 80
    );

    return {
      ...item,
      mapDistance,
      mapRadius,
      mapPosition,
      mapTrajectory,
      notableReason: reason,
      isNotable: Boolean(reason) || isFamousName(item.name),
    };
  });

  const notable = [...asteroids]
    .filter((a) => a.isNotable)
    .sort((a, b) => a.missDistanceKm - b.missDistanceKm);

  return {
    asteroids,
    notable,
    fetchedAt,
    windowStart,
    windowEnd,
    source: "nasa-neows",
  };
}
