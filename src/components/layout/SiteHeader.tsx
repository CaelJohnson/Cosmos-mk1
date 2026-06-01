import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050508]/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-baseline gap-2 transition-opacity hover:opacity-80"
        >
          <span className="font-display text-lg font-semibold tracking-tight text-zinc-50">
            {site.name}
          </span>
          <span className="hidden text-xs text-zinc-500 sm:inline">
            {site.tagline}
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
