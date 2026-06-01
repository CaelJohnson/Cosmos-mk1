import type { Metadata } from "next";
import Link from "next/link";
import { SolarSystemExplorer } from "@/components/solar-system/SolarSystemExplorer";
import { SolarSystemSubnav } from "@/components/solar-system/SolarSystemSubnav";

export const metadata: Metadata = {
  title: "Solar System",
  description:
    "Explore planets, moons, dwarf planets, and the asteroid & Kuiper belts — explained for curious humans.",
};

export default function SolarSystemPage() {
  return (
    <main className="relative flex-1">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-28">
        <Link
          href="/"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          ← Home
        </Link>

        <header className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400/80">
              Field Guide
            </p>
            <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
              Our cosmic neighborhood
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Tap a world to open its field guide — gravity, weather, air, and
              whether you could actually visit. Rocky planets, gas giants, dwarf
              planets, the asteroid belt, and the Kuiper Belt at the edge.
            </p>
          </div>
          <SolarSystemSubnav />
        </header>

        <div className="mt-14">
          <SolarSystemExplorer />
        </div>
      </div>
    </main>
  );
}
