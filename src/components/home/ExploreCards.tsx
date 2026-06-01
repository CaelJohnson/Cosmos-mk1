import Link from "next/link";
import { exploreFeatures } from "@/lib/site";

export function ExploreCards() {
  return (
    <section id="explore" className="relative px-6 pb-32 pt-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            Explore
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Three ways in
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-500">
            Version 1 focuses on our neighborhood — the solar system and what’s
            flying past Earth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/solar-system/map"
            className="group explore-card animate-fade-up relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05] md:col-span-2 lg:col-span-1"
            style={{
              animationDelay: "0.15s",
              ["--card-glow" as string]: "rgba(139, 92, 246, 0.3)",
            }}
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-transparent blur-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              New · Interactive
            </p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-zinc-50">
              3D Solar Map
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Drag, zoom, and click worlds in space — the cinematic way to explore.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-all group-hover:gap-3">
              Enter
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </Link>

          {exploreFeatures.map((feature, index) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group explore-card animate-fade-up relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05]"
              style={{
                animationDelay: `${0.27 + index * 0.12}s`,
                // CSS custom property for hover glow (see globals.css)
                ["--card-glow" as string]: feature.glow,
              }}
            >
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-gradient-to-br ${feature.accent} blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-70`}
              />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                {feature.subtitle}
              </p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-zinc-50">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-all group-hover:gap-3">
                Enter
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-zinc-600">
          Asteroid Tracker is live — NASA flybys for the next 7 days.
        </p>
      </div>
    </section>
  );
}
