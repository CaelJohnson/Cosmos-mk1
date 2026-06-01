import { ExploreCards } from "@/components/home/ExploreCards";
import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { Starfield } from "@/components/home/Starfield";

export default function HomePage() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <Starfield />
      <div className="relative z-10">
        <Hero />
        <Mission />
        <ExploreCards />
      </div>
    </main>
  );
}
