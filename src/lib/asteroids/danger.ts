import type { DangerLevel } from "./types";

const FAMOUS_NAMES = [
  /apophis/i,
  /bennu/i,
  /ryugu/i,
  /itokawa/i,
  /didymos/i,
  /halley/i,
  /encke/i,
  /chiron/i,
];

export function isFamousName(name: string): boolean {
  return FAMOUS_NAMES.some((re) => re.test(name));
}

export function assessDanger(
  lunarDistance: number,
  diameterM: number,
  isPha: boolean
): { level: DangerLevel; label: string; summary: string } {
  // Calm tone, honest facts — never alarmist
  if (lunarDistance < 0.5 && isPha) {
    return {
      level: "close",
      label: "Unusually close — NASA is tracking it",
      summary:
        "This is a closer pass than most, and NASA classifies it as potentially hazardous. It still misses Earth by a wide margin in space terms.",
    };
  }

  if (lunarDistance < 1) {
    return {
      level: "close",
      label: "Closer than the Moon",
      summary:
        "It passes nearer than our Moon’s orbit — noteworthy, but not a impact threat. These flybys happen a few times a year.",
    };
  }

  if (isPha && lunarDistance < 5) {
    return {
      level: "tracked",
      label: "Potentially hazardous — safe miss",
      summary:
        "NASA keeps a closer eye on this category. “Hazardous” means size and orbit warrant monitoring — not that it’s heading for us.",
    };
  }

  if (isPha) {
    return {
      level: "tracked",
      label: "On NASA’s watch list",
      summary:
        "Classified as potentially hazardous based on size and orbit. This pass is still far away in everyday terms.",
    };
  }

  if (lunarDistance < 3 || diameterM > 200) {
    return {
      level: "notable",
      label: "Worth knowing about",
      summary:
        "Either relatively close or fairly large for a near-Earth object — interesting, but routine in the grand scheme.",
    };
  }

  return {
    level: "calm",
    label: "Routine flyby",
    summary:
      "A normal near-Earth pass. Objects this size zip by often without any effect on Earth.",
  };
}

export function notableReason(
  name: string,
  lunarDistance: number,
  diameterM: number,
  isPha: boolean,
  isLargestThisWeek: boolean
): string | undefined {
  if (isFamousName(name)) {
    return "A well-known object — worth a look when it visits our neighborhood.";
  }
  if (lunarDistance < 0.5) {
    return "An exceptionally close approach this week.";
  }
  if (lunarDistance < 1) {
    return "Passes closer than the Moon — rare enough to mention.";
  }
  if (isLargestThisWeek && diameterM > 100) {
    return "One of the largest objects flying past Earth this week.";
  }
  if (isPha && lunarDistance < 5) {
    return "Potentially hazardous and relatively nearby — NASA tracks passes like this closely.";
  }
  return undefined;
}
