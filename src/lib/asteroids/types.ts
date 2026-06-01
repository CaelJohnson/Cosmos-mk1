export type DangerLevel = "calm" | "notable" | "tracked" | "close";

export type MapPoint2D = { x: number; y: number };

export interface AsteroidFlyby {
  id: string;
  name: string;
  displayName: string;
  jplUrl: string;
  diameterMeters: number;
  diameterMinMeters: number;
  diameterMaxMeters: number;
  sizeLabel: string;
  approachDate: string;
  approachDateLabel: string;
  missDistanceKm: number;
  lunarDistance: number;
  distanceLabel: string;
  velocityKph: number;
  velocityLabel: string;
  isPotentiallyHazardous: boolean;
  dangerLevel: DangerLevel;
  dangerLabel: string;
  dangerSummary: string;
  notableReason?: string;
  isNotable: boolean;
  /** Compressed closest-approach distance (layout units) */
  mapDistance: number;
  /** Dot radius on the 2D map (px) */
  mapRadius: number;
  /** Closest approach point */
  mapPosition: MapPoint2D;
  /** Estimated flyby path */
  mapTrajectory: {
    incoming: MapPoint2D;
    cpa: MapPoint2D;
    outgoing: MapPoint2D;
  };
}

export interface NeoFeedResult {
  asteroids: AsteroidFlyby[];
  notable: AsteroidFlyby[];
  fetchedAt: string;
  windowStart: string;
  windowEnd: string;
  source: "nasa-neows";
}

export interface NasaNeoFeed {
  element_count: number;
  near_earth_objects: Record<string, NasaNeoObject[]>;
}

export interface NasaNeoObject {
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: {
    close_approach_date: string;
    close_approach_date_full: string;
    relative_velocity: { kilometers_per_hour: string };
    miss_distance: { kilometers: string; lunar: string };
  }[];
}
