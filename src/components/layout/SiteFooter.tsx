import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-zinc-600 sm:flex-row sm:text-left">
        <p>
          <span className="text-zinc-400">{site.name}</span> — built for curious
          humans. Data from NASA &amp; public space agencies.
        </p>
        <p className="text-xs">Folder name may change; the mission won’t.</p>
      </div>
    </footer>
  );
}
