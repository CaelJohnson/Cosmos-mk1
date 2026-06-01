"use client";

import type { NeoFeedResult } from "@/lib/asteroids/types";
import {
  EARTH_RADIUS_PX,
  MAP_CENTER,
  MAP_VIEW_SIZE,
  MOON_DISTANCE_PX,
  MOON_RADIUS_PX,
  moonReferencePosition,
} from "@/lib/asteroids/map-layout";

type AsteroidMap2DProps = {
  data: NeoFeedResult;
  selectedId: string | null;
  onSelect: (id: string) => void;
};

const ASTEROID_FILL = "#a1a1aa";
const ASTEROID_STROKE = "#71717a";
const SELECTED_STROKE = "#c4b5fd";

export function AsteroidMap2D({
  data,
  selectedId,
  onSelect,
}: AsteroidMap2DProps) {
  const moon = moonReferencePosition();
  const selected = data.asteroids.find((a) => a.id === selectedId);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050508]">
      <svg
        viewBox={`0 0 ${MAP_VIEW_SIZE} ${MAP_VIEW_SIZE}`}
        className="mx-auto block h-auto w-full max-w-2xl touch-none"
        role="img"
        aria-label="Earth-centered map of asteroid flyby trajectories"
      >
        {/* Moon-distance reference ring */}
        <circle
          cx={MAP_CENTER}
          cy={MAP_CENTER}
          r={MOON_DISTANCE_PX}
          fill="none"
          stroke="#52525b"
          strokeWidth={1}
          strokeDasharray="4 6"
          opacity={0.5}
        />

        {/* Trajectories — tangent flybys; lines never pass through Earth */}
        {data.asteroids.map((asteroid) => {
          const { incoming, cpa, outgoing } = asteroid.mapTrajectory;
          const isSelected = selectedId === asteroid.id;

          return (
            <g key={`path-${asteroid.id}`}>
              <line
                x1={incoming.x}
                y1={incoming.y}
                x2={outgoing.x}
                y2={outgoing.y}
                stroke={isSelected ? "#a78bfa" : "#52525b"}
                strokeWidth={isSelected ? 2 : 1.25}
                opacity={isSelected ? 0.85 : 0.5}
              />
              {/* Direction marker — approach end */}
              <circle
                cx={incoming.x}
                cy={incoming.y}
                r={2.5}
                fill="none"
                stroke={isSelected ? "#a78bfa" : "#52525b"}
                strokeWidth={1}
                opacity={0.7}
              />
            </g>
          );
        })}

        {/* Earth */}
        <circle
          cx={MAP_CENTER}
          cy={MAP_CENTER}
          r={EARTH_RADIUS_PX}
          fill="#2563eb"
          stroke="#1d4ed8"
          strokeWidth={1.5}
        />
        <text
          x={MAP_CENTER}
          y={MAP_CENTER + EARTH_RADIUS_PX + 16}
          textAnchor="middle"
          fill="#71717a"
          fontSize={11}
        >
          Earth
        </text>

        {/* Moon reference */}
        <circle
          cx={moon.x}
          cy={moon.y}
          r={MOON_RADIUS_PX}
          fill="#fafafa"
          stroke="#d4d4d8"
          strokeWidth={1}
        />
        <text
          x={moon.x}
          y={moon.y + MOON_RADIUS_PX + 14}
          textAnchor="middle"
          fill="#71717a"
          fontSize={10}
        >
          Moon
        </text>

        {/* Asteroids at closest approach */}
        {data.asteroids.map((asteroid, index) => {
          const isSelected = selectedId === asteroid.id;
          const { cpa } = asteroid.mapTrajectory;

          return (
            <g key={asteroid.id}>
              <circle
                cx={cpa.x}
                cy={cpa.y}
                r={asteroid.mapRadius + 6}
                fill="transparent"
                className="cursor-pointer"
                onClick={() => onSelect(asteroid.id)}
              />
              <circle
                cx={cpa.x}
                cy={cpa.y}
                r={asteroid.mapRadius}
                fill={ASTEROID_FILL}
                stroke={isSelected ? SELECTED_STROKE : ASTEROID_STROKE}
                strokeWidth={isSelected ? 2.5 : 1}
                className="cursor-pointer transition-opacity hover:opacity-100"
                opacity={isSelected ? 1 : 0.92}
                onClick={() => onSelect(asteroid.id)}
              />
              {(isSelected || index < 3) && (
                <text
                  x={cpa.x}
                  y={cpa.y - asteroid.mapRadius - 8}
                  textAnchor="middle"
                  fill={isSelected ? "#e4e4e7" : "#71717a"}
                  fontSize={isSelected ? 11 : 9}
                  className="pointer-events-none select-none"
                >
                  {isSelected
                    ? asteroid.displayName
                    : `#${index + 1}`}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between sm:p-5">
        <div className="max-w-xs rounded-xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur-md">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            How to read this
          </p>
          <ul className="mt-2 space-y-1 text-xs leading-relaxed text-zinc-400">
            <li>
              <span className="text-zinc-300">Line</span> — path skims past
              Earth (miss, not impact)
            </li>
            <li>
              <span className="text-zinc-400">Gray dot</span> — nearest point
              on that path
            </li>
            <li>
              <span className="text-zinc-500">Dashed ring</span> — Moon distance
              (reference)
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 backdrop-blur-md sm:max-w-[220px]">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-300/90">
            Not to scale
          </p>
          <p className="mt-1 text-xs leading-relaxed text-zinc-400">
            Layout is simplified so paths stay readable. Real distances are on
            the cards below.
          </p>
        </div>
      </div>

      {selected && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <div className="mx-auto max-w-sm rounded-xl border border-violet-500/30 bg-black/75 px-4 py-3 text-center backdrop-blur-md">
            <p className="font-display text-base font-semibold text-zinc-50">
              {selected.displayName}
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              {selected.approachDateLabel} · {selected.distanceLabel}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
