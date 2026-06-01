import type { Metadata } from "next";
import Link from "next/link";
import { SolarSystemSubnav } from "@/components/solar-system/SolarSystemSubnav";
import { SolarSystemMapLoader } from "@/components/solar-system/map/SolarSystemMapLoader";

export const metadata: Metadata = {
  title: "3D Solar Map",
  description:
    "Drag, zoom, and click worlds in an interactive 3D map of the solar system.",
};

export default function SolarSystemMapPage() {
  return (
    <main className="relative flex-1">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
        <Link
          href="/"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          ← Home
        </Link>

        <header className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400/80">
              3D Solar Map
            </p>
            <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
              Fly through the neighborhood
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Drag to look around, scroll to zoom, and click any planet, moon,
              dwarf planet, or belt for the same field guide you get in the
              classic view.
            </p>
          </div>
          <SolarSystemSubnav />
        </header>

        <div className="mt-10">
          <SolarSystemMapLoader />
        </div>
      </div>
    </main>
  );
}
