"use client";

import dynamic from "next/dynamic";

const SolarSystemMap = dynamic(
  () =>
    import("./SolarSystemMap").then((mod) => mod.SolarSystemMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[min(78vh,720px)] items-center justify-center rounded-2xl border border-white/10 bg-[#050508]">
        <p className="text-sm text-zinc-500">Loading 3D map…</p>
      </div>
    ),
  }
);

export function SolarSystemMapLoader() {
  return <SolarSystemMap />;
}
