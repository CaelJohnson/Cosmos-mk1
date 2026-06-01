
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asteroid Tracker",
  description: "Asteroid Tracker is currently under construction.",
};

export default function AsteroidsPage() {
  return (
    <main className="relative flex-1">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-400/80">
          Asteroid Tracker
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-zinc-50">
          Under Construction
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          We're rebuilding the Asteroid Tracker from the ground up to make it
          faster, cleaner, and easier to understand.
        </p>

        <p className="mt-4 text-zinc-500">
          Check back soon for live asteroid flyby data and visualizations.
        </p>

        <Link
          href="/"
          className="mt-10 rounded-xl border border-zinc-700 px-6 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

/***********************
 OLD ASTEROID TRACKER
 Saving for later
************************



import type { Metadata } from "next";
import Link from "next/link";
import { AsteroidTracker } from "@/components/asteroids/AsteroidTracker";
import { fetchNeoFeed } from "@/lib/asteroids/fetch-neo";

export const metadata: Metadata = {
  title: "Asteroid Tracker",
  description:
    "Near-Earth asteroid flybys for the next 7 days — NASA data, plain language, 3D map.",
};

export const revalidate = 86400;

export default async function AsteroidsPage() {
  let data;
  let error: string | null = null;

  try {
    data = await fetchNeoFeed();
  } catch (e) {
    error = e instanceof Error ? e.message : "Could not load asteroid data.";
  }

  return (
    <main className="relative flex-1">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6">
        <Link
          href="/"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          ← Home
        </Link>

        <header className="mt-6 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-400/80">
            Asteroid Tracker
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            What&apos;s passing near Earth
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Real NASA flyby data for the next 7 days — sizes and distances
            translated into language that actually means something.
          </p>
        </header>

        {error ? (
          <div className="mt-12 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-6 py-8">
            <p className="font-medium text-rose-200">
              Couldn&apos;t reach NASA right now
            </p>
            <p className="mt-2 text-sm text-zinc-400">{error}</p>
            <p className="mt-4 text-sm text-zinc-500">
              If this keeps happening, add a free{" "}
              <code className="text-zinc-400">NASA_API_KEY</code> to{" "}
              <code className="text-zinc-400">.env.local</code> — get one at{" "}
              <a
                href="https://api.nasa.gov"
                className="text-violet-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                api.nasa.gov
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="mt-12">
            <AsteroidTracker data={data!} />
          </div>
        )}
      </div>
    </main>
  );
} 
...all the old code...

************************/

