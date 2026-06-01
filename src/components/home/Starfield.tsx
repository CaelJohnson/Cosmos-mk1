/**
 * Layered CSS starfield + soft nebula glows.
 * Pure CSS keeps the hero lightweight (no canvas, no extra libraries).
 */
export function Starfield() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#050508]" />

      {/* Nebula washes */}
      <div className="nebula nebula-a absolute -left-1/4 top-1/4 h-[70vh] w-[70vh] rounded-full opacity-60" />
      <div className="nebula nebula-b absolute -right-1/4 top-0 h-[55vh] w-[55vh] rounded-full opacity-50" />
      <div className="nebula nebula-c absolute bottom-0 left-1/3 h-[45vh] w-[45vh] rounded-full opacity-40" />

      {/* Star layers (different densities & drift speeds) */}
      <div className="stars stars-sm absolute inset-0" />
      <div className="stars stars-md absolute inset-0" />
      <div className="stars stars-lg absolute inset-0" />

      {/* Horizon glow — subtle “planet limb” feel */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent" />

      {/* Vignette for cinematic focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050508_72%)]" />
    </div>
  );
}
