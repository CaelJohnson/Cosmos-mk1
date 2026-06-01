import type { AsteroidFlyby } from "@/lib/asteroids/types";

const dangerBadge: Record<AsteroidFlyby["dangerLevel"], string> = {
  calm: "bg-zinc-800/80 text-zinc-300",
  notable: "bg-amber-900/40 text-amber-200",
  tracked: "bg-orange-900/40 text-orange-200",
  close: "bg-rose-900/40 text-rose-200",
};

type AsteroidCardProps = {
  asteroid: AsteroidFlyby;
  onSelect: (id: string) => void;
  isSelected: boolean;
};

export function AsteroidCard({
  asteroid,
  onSelect,
  isSelected,
}: AsteroidCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(asteroid.id)}
      className={`w-full rounded-2xl border p-5 text-left transition-all ${
        isSelected
          ? "border-violet-400/50 bg-violet-500/10"
          : "border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.05]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-zinc-50">
          {asteroid.displayName}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide ${dangerBadge[asteroid.dangerLevel]}`}
        >
          {asteroid.dangerLabel.split("—")[0].trim()}
        </span>
      </div>

      <p className="mt-3 text-sm text-zinc-400">{asteroid.sizeLabel}</p>
      <p className="mt-1 text-sm text-zinc-500">{asteroid.distanceLabel}</p>

      <p className="mt-4 text-xs text-zinc-600">
        Closest approach · {asteroid.approachDateLabel}
      </p>
    </button>
  );
}
