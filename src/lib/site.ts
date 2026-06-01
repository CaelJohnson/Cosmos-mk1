export const site = {
  name: "Cosmos",
  tagline: "Space, made human.",
  description:
    "Real astronomy data turned into clear, cinematic experiences for curious people — not scientists.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solar-system", label: "Field Guide" },
  { href: "/solar-system/map", label: "3D Map" },
  { href: "/asteroids", label: "Asteroids" },
] as const;

export const exploreFeatures = [
  {
    href: "/solar-system",
    title: "Solar System",
    subtitle: "Meet the worlds next door",
    description:
      "Tap planets and moons. Compare gravity, temperature, and whether you could actually survive there.",
    accent: "from-indigo-500/20 via-violet-500/10 to-transparent",
    glow: "rgba(99, 102, 241, 0.35)",
  },
  {
    href: "/asteroids",
    title: "Asteroid Tracker",
    subtitle: "What’s passing near Earth",
    description:
      "Live near-Earth asteroid flybys — size, distance, and risk explained in plain language.",
    accent: "from-amber-500/15 via-orange-500/10 to-transparent",
    glow: "rgba(251, 191, 36, 0.25)",
  },
] as const;
