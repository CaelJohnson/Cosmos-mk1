import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 pt-24 pb-20 text-center">
      <p
        className="animate-fade-up mb-6 text-xs font-medium uppercase tracking-[0.35em] text-violet-300/80"
        style={{ animationDelay: "0.1s" }}
      >
        An interactive space museum
      </p>

      <h1
        className="animate-fade-up font-display max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl md:text-7xl"
        style={{ animationDelay: "0.2s" }}
      >
        Understand the universe
        <span className="mt-2 block bg-gradient-to-r from-zinc-100 via-violet-200 to-indigo-300 bg-clip-text text-transparent">
          without a PhD
        </span>
      </h1>

      <p
        className="animate-fade-up mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        style={{ animationDelay: "0.35s" }}
      >
        {site.description}
      </p>

      <div
        className="animate-fade-up mt-12 flex flex-col items-center gap-4 sm:flex-row"
        style={{ animationDelay: "0.5s" }}
      >
        <a
          href="#explore"
          className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-7 py-3.5 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Start exploring
          <span
            className="transition-transform group-hover:translate-y-0.5"
            aria-hidden
          >
            ↓
          </span>
        </a>
        <a
          href="#mission"
          className="rounded-full px-7 py-3.5 text-sm text-zinc-400 ring-1 ring-white/10 transition-colors hover:bg-white/5 hover:text-zinc-200"
        >
          Why we built this
        </a>
      </div>

      {/* Decorative orbit ring — dot rides the ring edge via CSS rotation */}
      <div
        className="animate-fade-up pointer-events-none absolute left-1/2 top-[38%] h-64 w-64 -translate-x-1/2 sm:h-80 sm:w-80"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
        <div className="animate-orbit-slow absolute inset-0">
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-300/80 shadow-[0_0_20px_rgba(196,181,253,0.8)]" />
        </div>
      </div>
    </section>
  );
}
