"use client";

import type { SolarBody } from "@/lib/solar-system/types";
import { getPlanetClassLabel } from "@/lib/solar-system/bodies";

const sizeClasses: Record<SolarBody["visual"], string> = {
  xs: "h-10 w-10 sm:h-11 sm:w-11",
  sm: "h-12 w-12 sm:h-14 sm:w-14",
  md: "h-14 w-14 sm:h-16 sm:w-16",
  lg: "h-16 w-16 sm:h-20 sm:w-20",
  xl: "h-20 w-20 sm:h-24 sm:w-24",
  "2xl": "h-24 w-24 sm:h-32 sm:w-32",
};

type BodyOrbProps = {
  body: SolarBody;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export function BodyOrb({ body, isSelected, onSelect }: BodyOrbProps) {
  const isRegion = body.kind === "region";
  const isMoon = body.kind === "moon";
  const classLabel = getPlanetClassLabel(body.planetClass);

  if (isRegion) {
    return (
      <button
        type="button"
        onClick={() => onSelect(body.id)}
        className={`group flex flex-col items-center gap-2 rounded-2xl border px-4 py-3 text-left transition-all sm:min-w-[200px] ${
          isSelected
            ? "border-violet-400/50 bg-violet-500/10"
            : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
        }`}
        aria-pressed={isSelected}
        aria-label={`Learn about ${body.name}`}
      >
        <div
          className={`h-2 w-full rounded-full bg-gradient-to-r ${body.gradient} opacity-80`}
        />
        <div>
          <p className="text-sm font-medium text-zinc-100">{body.name}</p>
          <p className="mt-0.5 text-xs text-zinc-500">{body.tagline}</p>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(body.id)}
      className={`group flex flex-col items-center gap-2 rounded-2xl p-2 transition-all ${
        isMoon ? "scale-90 opacity-90" : ""
      }`}
      aria-pressed={isSelected}
      aria-label={`Learn about ${body.name}`}
    >
      <div
        className={`relative rounded-full bg-gradient-to-br ${body.gradient} shadow-lg transition-transform ${sizeClasses[body.visual]} ${
          isSelected
            ? "ring-2 ring-violet-400 ring-offset-2 ring-offset-[#050508] scale-110"
            : "group-hover:scale-105"
        }`}
      >
        {body.id === "saturn" && (
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            <div className="h-[140%] w-[180%] rounded-full border border-amber-100/30" />
          </div>
        )}
      </div>
      <div className="max-w-[88px] text-center">
        <p className="text-xs font-medium text-zinc-200 sm:text-sm">{body.name}</p>
        {classLabel && (
          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
            {classLabel}
          </p>
        )}
        {isMoon && (
          <p className="mt-0.5 text-[10px] text-zinc-600">Moon</p>
        )}
      </div>
    </button>
  );
}
