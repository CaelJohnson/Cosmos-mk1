import type { AsteroidFlyby } from "@/lib/asteroids/types";

type NotableBannerProps = {
  items: AsteroidFlyby[];
};

export function NotableBanner({ items }: NotableBannerProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4">
        <p className="text-sm text-zinc-400">
          No headline flybys this week — mostly routine passes. Famous objects
          like Halley&apos;s Comet only appear when their orbit brings them
          nearby; this view always shows the next 7 days from NASA.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] px-5 py-4"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-400/90">
            Worth noting
          </p>
          <p className="mt-2 font-medium text-zinc-100">
            {item.displayName}{" "}
            <span className="font-normal text-zinc-400">
              · {item.approachDateLabel}
            </span>
          </p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            {item.notableReason}
          </p>
        </div>
      ))}
    </div>
  );
}
