/**
 * 3D map layout — simplified for exploration, NOT real scale or orbits.
 * Distances are compressed so you can actually see and reach each world.
 */

export type MapObjectConfig = {
  id: string;
  /** World position [x, y, z] */
  position: [number, number, number];
  radius: number;
  color: string;
  emissive?: string;
  emissiveIntensity?: number;
  /** Moon: orbits parent at this radius */
  orbit?: { parentId: string; radius: number; speed: number; phase?: number };
  /** Ring decoration only — not clickable as mesh (belt uses region id) */
  decorative?: boolean;
};

/** Clickable worlds on the 3D map */
export const mapObjects: MapObjectConfig[] = [
  {
    id: "sun",
    position: [0, 0, 0],
    radius: 2.8,
    color: "#fbbf24",
    emissive: "#f59e0b",
    emissiveIntensity: 1.2,
  },
  { id: "mercury", position: [7, 0.2, 1], radius: 0.35, color: "#a1a1aa" },
  { id: "venus", position: [11, -0.3, -1], radius: 0.55, color: "#fde68a" },
  { id: "earth", position: [15, 0, 0], radius: 0.6, color: "#38bdf8" },
  {
    id: "moon",
    position: [0, 0, 0],
    radius: 0.18,
    color: "#d4d4d8",
    orbit: { parentId: "earth", radius: 1.2, speed: 0.8, phase: 0 },
  },
  { id: "mars", position: [20, 0.4, 1.5], radius: 0.45, color: "#dc2626" },
  { id: "ceres", position: [25, 0, -2], radius: 0.28, color: "#a8a29e" },
  { id: "jupiter", position: [32, 0, 0], radius: 1.6, color: "#d97706" },
  { id: "saturn", position: [42, 0.2, -1], radius: 1.35, color: "#fcd34d" },
  { id: "uranus", position: [52, -0.2, 1], radius: 0.9, color: "#67e8f9" },
  { id: "neptune", position: [60, 0, -0.5], radius: 0.85, color: "#3b82f6" },
  { id: "pluto", position: [70, 0.3, 2], radius: 0.32, color: "#d6d3d1" },
  { id: "eris", position: [74, -0.2, -1], radius: 0.3, color: "#e7e5e4" },
  { id: "haumea", position: [77, 0.1, 1], radius: 0.26, color: "#f5f5f4" },
  { id: "makemake", position: [80, 0, -2], radius: 0.26, color: "#78716c" },
];

export const mapRegions = {
  asteroidBelt: { inner: 22, outer: 28, y: 0 },
  kuiperBelt: { inner: 66, outer: 84, y: 0 },
} as const;

/** Default camera target — the Sun. */
export const mapDefaultTarget: [number, number, number] = [0, 0, 0];

/** Default pull-back distance when the map first loads. */
export const mapDefaultDistance = 52;

export type MapFocusRequest = {
  point: [number, number, number];
  /** Desired camera distance from the focus point */
  distance: number;
  /** Bumps on each click so the same world can re-trigger the fly-in */
  token: number;
};

export function getMapObject(id: string): MapObjectConfig | undefined {
  return mapObjects.find((o) => o.id === id);
}

/** Returns a static [x, y, z] for camera focus (moons use a point on their orbit). */
export function getMapWorldPosition(id: string): [number, number, number] | null {
  const obj = mapObjects.find((o) => o.id === id);
  if (!obj) return null;

  if (obj.orbit) {
    const parent = mapObjects.find((o) => o.id === obj.orbit!.parentId);
    if (!parent) return null;
    const phase = obj.orbit.phase ?? 0;
    return [
      parent.position[0] + Math.cos(phase) * obj.orbit.radius,
      parent.position[1],
      parent.position[2] + Math.sin(phase) * obj.orbit.radius,
    ];
  }

  // Regions: focus on the middle of the belt ring
  if (id === "asteroid-belt") {
    const { inner, outer } = mapRegions.asteroidBelt;
    return [(inner + outer) / 2, 0, 0];
  }
  if (id === "kuiper-belt") {
    const { inner, outer } = mapRegions.kuiperBelt;
    return [(inner + outer) / 2, 0, 0];
  }

  return obj.position;
}

/** How close the camera flies when you click a world. */
export function getFocusZoomDistance(id: string): number {
  if (id === "asteroid-belt") return 14;
  if (id === "kuiper-belt") return 22;

  const obj = getMapObject(id);
  if (!obj) return 10;

  if (obj.id === "sun") return 18;

  // Scale zoom to object size — bigger planets get a wider berth
  return Math.min(Math.max(obj.radius * 9, 4), 16);
}
