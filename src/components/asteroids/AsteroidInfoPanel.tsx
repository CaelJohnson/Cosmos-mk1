"use client";

import type { AsteroidFlyby } from "@/lib/asteroids/types";

const dangerStyles: Record<
  AsteroidFlyby["dangerLevel"],
  { ring: string; text: string }
> = {
  calm: { ring: "border-zinc-600/40", text: "text-zinc-400" },
  notable: { ring: "border-amber-500/40", text: "text-amber-300" },
  tracked: { ring: "border-orange-500/40", text: "text-orange-300" },
  close: { ring: "border-rose-500/40", text: "text-rose-300" },
};

type AsteroidInfoPanelProps = {
  asteroid: AsteroidFlyby | null;
  onClose: () => void;
};

export function AsteroidInfoPanel({ asteroid, onClose }: AsteroidInfoPanelProps) {
  const isOpen = Boolean(asteroid);

  return (
    <>
      <button
        type="button"
        aria-label="Close panel"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-white/10 bg-[#0a0a0f]/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out sm:max-w-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Flyby details
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-1.5 text-sm text-zinc-400 ring-1 ring-white/10 transition-colors hover:bg-white/5 hover:text-zinc-100"
          >
            Close
          </button>
        </div>

        {asteroid && (
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <p
              className={`text-xs font-medium uppercase tracking-[0.2em] ${dangerStyles[asteroid.dangerLevel].text}`}
            >
              {asteroid.dangerLabel}
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-zinc-50">
              {asteroid.displayName}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {asteroid.dangerSummary}
            </p>

            <dl className="mt-8 space-y-5">
              <InfoRow label="When" value={asteroid.approachDateLabel} />
              <InfoRow label="Size" value={asteroid.sizeLabel} />
              <InfoRow
                label="Diameter (est.)"
                value={`${Math.round(asteroid.diameterMinMeters)}–${Math.round(asteroid.diameterMaxMeters)} meters`}
              />
              <InfoRow label="Distance" value={asteroid.distanceLabel} />
              <InfoRow label="Speed" value={asteroid.velocityLabel} />
              {asteroid.isPotentiallyHazardous && (
                <InfoRow
                  label="NASA classification"
                  value="Potentially hazardous asteroid (PHA) — monitored, not an impact forecast."
                />
              )}
            </dl>

            <a
              href={asteroid.jplUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm text-violet-300 transition-colors hover:text-violet-200"
            >
              View on NASA JPL →
            </a>
          </div>
        )}
      </aside>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/5 pt-5 first:border-0 first:pt-0">
      <dt className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-zinc-300">{value}</dd>
    </div>
  );
}
