/**
 * 2D flyby map layout — NOT real scale.
 *
 * Earth at center. Each asteroid gets a straight-line estimated path;
 * the gray dot is closest approach (NASA miss distance, compressed).
 * Approach angles are spread for readability — NeoWs has no exact bearing.
 */

export type Point2D = { x: number; y: number };

export const MAP_VIEW_SIZE = 640;
export const MAP_CENTER = MAP_VIEW_SIZE / 2;

/** Earth disc radius (px). */
export const EARTH_RADIUS_PX = 14;

/** Moon reference disc (px). */
export const MOON_RADIUS_PX = 5;

/** One lunar-distance reference ring (px) — not same scale as flyby compression. */
export const MOON_DISTANCE_PX = 52;

/** Compressed CPA range for this week's set (px from Earth center). */
export const PATH_INNER_PX = 62;
export const PATH_OUTER_PX = 248;

/** Trajectory tail lengths (px). */
export const TAIL_IN_PX = 90;
export const TAIL_OUT_PX = 55;

/** Asteroid dot radius range (px). */
export const DOT_MIN_PX = 4;
export const DOT_MAX_PX = 13;

export function compressLunarDistance(
  lunar: number,
  minLd: number,
  maxLd: number
): number {
  if (maxLd <= minLd) return (PATH_INNER_PX + PATH_OUTER_PX) / 2;

  const t = (lunar - minLd) / (maxLd - minLd);
  const eased = Math.sqrt(t);
  return PATH_INNER_PX + eased * (PATH_OUTER_PX - PATH_INNER_PX);
}

export function diameterToDotRadius(
  diameterM: number,
  minD: number,
  maxD: number
): number {
  if (maxD <= minD) return (DOT_MIN_PX + DOT_MAX_PX) / 2;

  const t = (diameterM - minD) / (maxD - minD);
  return DOT_MIN_PX + t * (DOT_MAX_PX - DOT_MIN_PX);
}

function hashId(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/** Spread approach directions around Earth. */
export function approachAngle(index: number, total: number, id: string): number {
  const base = (index / total) * Math.PI * 2 - Math.PI / 2;
  const jitter = ((hashId(id) % 40) - 20) * (Math.PI / 180);
  return base + jitter;
}

export function polarToPoint(angle: number, radius: number): Point2D {
  return {
    x: MAP_CENTER + Math.cos(angle) * radius,
    y: MAP_CENTER + Math.sin(angle) * radius,
  };
}

export type FlybyPath2D = {
  mapDistance: number;
  mapRadius: number;
  mapPosition: Point2D;
  mapTrajectory: { incoming: Point2D; cpa: Point2D; outgoing: Point2D };
};

export function buildFlybyPath2D(
  angle: number,
  cpaRadius: number,
  id: string
): FlybyPath2D["mapTrajectory"] {
  // Never place CPA inside Earth — closest approach stays outside the disc
  const r = Math.max(cpaRadius, EARTH_RADIUS_PX + DOT_MAX_PX + 8);

  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  const cpa: Point2D = {
    x: MAP_CENTER + cos * r,
    y: MAP_CENTER + sin * r,
  };

  // Path runs tangent to the miss circle — it skims past Earth, not through it
  const travelDir = hashId(id) % 2 === 0 ? 1 : -1;
  const tx = -sin * travelDir;
  const ty = cos * travelDir;

  return {
    incoming: {
      x: cpa.x - tx * TAIL_IN_PX,
      y: cpa.y - ty * TAIL_IN_PX,
    },
    cpa,
    outgoing: {
      x: cpa.x + tx * TAIL_OUT_PX,
      y: cpa.y + ty * TAIL_OUT_PX,
    },
  };
}

export function layoutAsteroidsForMap(
  items: { id: string; lunarDistance: number; diameterMeters: number }[]
): FlybyPath2D[] {
  const lunarValues = items.map((i) => i.lunarDistance);
  const minLd = Math.min(...lunarValues);
  const maxLd = Math.max(...lunarValues);

  const diameters = items.map((i) => i.diameterMeters);
  const minD = Math.min(...diameters);
  const maxD = Math.max(...diameters);

  return items.map((item, index) => {
    const mapDistance = compressLunarDistance(
      item.lunarDistance,
      minLd,
      maxLd
    );
    const angle = approachAngle(index, items.length, item.id);
    const mapTrajectory = buildFlybyPath2D(angle, mapDistance, item.id);

    return {
      mapDistance,
      mapRadius: diameterToDotRadius(item.diameterMeters, minD, maxD),
      mapPosition: mapTrajectory.cpa,
      mapTrajectory,
    };
  });
}

/** Moon reference position (fixed — orbiting shown as static for clarity). */
export function moonReferencePosition(): Point2D {
  return polarToPoint(0, MOON_DISTANCE_PX);
}
