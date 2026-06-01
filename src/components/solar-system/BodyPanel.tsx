"use client";

import { getBody, getPlanetClassLabel } from "@/lib/solar-system/bodies";
import type { SolarBody } from "@/lib/solar-system/types";

type BodyPanelProps = {
  bodyId: string | null;
  onClose: () => void;
};

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-white/5 pt-5 first:border-0 first:pt-0">
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{children}</p>
    </div>
  );
}

function panelContent(body: SolarBody) {
  const classLabel = getPlanetClassLabel(body.planetClass);

  return (
    <>
      <div
        className={`mx-auto h-20 w-20 rounded-full bg-gradient-to-br ${body.gradient} shadow-xl`}
      />

      <div className="mt-6 text-center">
        {classLabel && (
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400/90">
            {classLabel}
          </p>
        )}
        {body.kind === "moon" && (
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Moon
          </p>
        )}
        {body.kind === "region" && (
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-400/90">
            Region
          </p>
        )}
        {body.kind === "star" && (
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-300/90">
            Star
          </p>
        )}
        <h2 className="font-display mt-2 text-3xl font-semibold text-zinc-50">
          {body.name}
        </h2>
        <p className="mt-1 text-sm text-zinc-400">{body.tagline}</p>
      </div>

      <p className="mt-6 text-center text-base leading-relaxed text-zinc-300">
        {body.description}
      </p>

      <div className="mt-8 space-y-5">
        <InfoBlock title="Gravity">{body.gravity}</InfoBlock>
        <InfoBlock title="Temperature">{body.temperature}</InfoBlock>
        <InfoBlock title="Atmosphere">{body.atmosphere}</InfoBlock>
        <InfoBlock title="Could humans survive here?">
          <span
            className={
              body.survival.startsWith("Yes")
                ? "text-emerald-400"
                : body.survival.startsWith("Only")
                  ? "text-amber-300"
                  : "text-rose-300"
            }
          >
            {body.survival}
          </span>
        </InfoBlock>
      </div>

      <div className="mt-8">
        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Did you know?
        </h3>
        <ul className="mt-3 space-y-3">
          {body.funFacts.map((fact) => (
            <li
              key={fact}
              className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-zinc-300"
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function BodyPanel({ bodyId, onClose }: BodyPanelProps) {
  const body = bodyId ? getBody(bodyId) : null;
  const isOpen = Boolean(body);

  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close panel"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-labelledby={body ? "body-panel-title" : undefined}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-white/10 bg-[#0a0a0f]/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out sm:max-w-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Field guide
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-1.5 text-sm text-zinc-400 ring-1 ring-white/10 transition-colors hover:bg-white/5 hover:text-zinc-100"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          {body ? (
            <div id="body-panel-title">{panelContent(body)}</div>
          ) : (
            <p className="text-center text-zinc-500">
              Tap any world to explore it.
            </p>
          )}
        </div>
      </aside>
    </>
  );
}
