export type BodyKind = "star" | "planet" | "dwarf-planet" | "moon" | "region";

export type PlanetClass =
  | "terrestrial"
  | "gas-giant"
  | "ice-giant"
  | "dwarf-planet";

export interface SolarBody {
  id: string;
  name: string;
  kind: BodyKind;
  /** Rocky vs giant — only for planets & dwarf planets */
  planetClass?: PlanetClass;
  /** Moons orbit this body id */
  parentId?: string;
  tagline: string;
  description: string;
  gravity: string;
  temperature: string;
  atmosphere: string;
  survival: string;
  funFacts: string[];
  /** Tailwind gradient for the orb */
  gradient: string;
  /** Visual size in the diagram (not to scale) */
  visual: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export type SectionId =
  | "sun"
  | "terrestrial"
  | "asteroid-belt"
  | "giants"
  | "dwarf-planets"
  | "kuiper";

export interface SolarSection {
  id: SectionId;
  label: string;
  subtitle?: string;
  bodyIds: string[];
}
