"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/solar-system", label: "Field Guide" },
  { href: "/solar-system/map", label: "3D Map" },
] as const;

export function SolarSystemSubnav() {
  const pathname = usePathname();

  return (
    <nav
      className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1"
      aria-label="Solar system views"
    >
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              isActive
                ? "bg-white/10 font-medium text-zinc-100"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
