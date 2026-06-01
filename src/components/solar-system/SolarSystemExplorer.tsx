"use client";

import { useCallback, useState } from "react";
import { getBody, solarSections } from "@/lib/solar-system/bodies";
import { BodyOrb } from "./BodyOrb";
import { BodyPanel } from "./BodyPanel";

export function SolarSystemExplorer() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  const handleClose = useCallback(() => setSelectedId(null), []);

  return (
    <>
      <div className="relative">
        {/* Horizontal museum strip */}
        <div className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="inline-flex min-w-full flex-col gap-16 px-2 py-4">
            {solarSections.map((section) => (
              <section key={section.id} aria-labelledby={`section-${section.id}`}>
                <div className="mb-8 max-w-xl">
                  <h2
                    id={`section-${section.id}`}
                    className="font-display text-xl font-semibold text-zinc-100 sm:text-2xl"
                  >
                    {section.label}
                  </h2>
                  {section.subtitle && (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                      {section.subtitle}
                    </p>
                  )}
                </div>

                <div
                  className={`flex flex-wrap items-end justify-center gap-6 sm:gap-8 ${
                    section.id === "giants"
                      ? "max-w-4xl"
                      : section.id === "kuiper"
                        ? "justify-start"
                        : ""
                  }`}
                >
                  {section.bodyIds.map((id) => {
                    const body = getBody(id);
                    if (!body) return null;
                    return (
                      <BodyOrb
                        key={id}
                        body={body}
                        isSelected={selectedId === id}
                        onSelect={handleSelect}
                      />
                    );
                  })}
                </div>

                {section.id === "giants" && (
                  <p className="mt-6 text-center text-xs text-zinc-600 sm:text-left">
                    Jupiter & Saturn are{" "}
                    <span className="text-zinc-400">gas giants</span> — mostly
                    hydrogen and helium. Uranus & Neptune are{" "}
                    <span className="text-zinc-400">ice giants</span> — colder,
                    methane-rich, still no solid surface to stand on.
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Journey line (decorative, not to scale) */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-1/2 -z-10 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
          aria-hidden
        />
      </div>

      <p className="mt-12 text-center text-sm text-zinc-600">
        Diagram is simplified for clarity — distances and sizes are not to scale.
      </p>

      <BodyPanel bodyId={selectedId} onClose={handleClose} />
    </>
  );
}
