"use client";

import { useCallback, useState } from "react";
import type { NeoFeedResult } from "@/lib/asteroids/types";
import { AsteroidCard } from "@/components/asteroids/AsteroidCard";
import { AsteroidInfoPanel } from "@/components/asteroids/AsteroidInfoPanel";
import { NotableBanner } from "@/components/asteroids/NotableBanner";
import { AsteroidMap2D } from "@/components/asteroids/AsteroidMap2D";

type AsteroidTrackerProps = {
  data: NeoFeedResult;
};

function formatUpdatedAt(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function AsteroidTracker({ data }: AsteroidTrackerProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected =
    data.asteroids.find((a) => a.id === selectedId) ?? null;

  const handleSelect = useCallback((id: string) => {
    if (!id) {
      setSelectedId(null);
      return;
    }
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  const handleClose = useCallback(() => setSelectedId(null), []);

  return (
    <>
      <NotableBanner items={data.notable} />

      <p className="mt-6 text-sm text-zinc-500">
        Showing the{" "}
        <span className="text-zinc-400">{data.asteroids.length} closest</span>{" "}
        near-Earth flybys through{" "}
        <span className="text-zinc-400">
          {new Date(`${data.windowEnd}T12:00:00Z`).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            timeZone: "UTC",
          })}
        </span>
        . Data last fetched {formatUpdatedAt(data.fetchedAt)} — refreshes
        automatically once per day when you load this page.
      </p>

      <div className="mt-10">
        <AsteroidMap2D
          data={data}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-zinc-50">
          This week&apos;s closest passes
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Tap a card for details — same info as clicking a dot on the map.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.asteroids.map((asteroid) => (
            <AsteroidCard
              key={asteroid.id}
              asteroid={asteroid}
              isSelected={selectedId === asteroid.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </section>

      <AsteroidInfoPanel asteroid={selected} onClose={handleClose} />
    </>
  );
}
