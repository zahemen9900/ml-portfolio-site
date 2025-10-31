import { HomeHero } from "@/components/site/home-hero";
import { ImpactHighlights } from "@/components/site/impact-highlights";
import { TechBanner } from "@/components/site/tech-banner";

export default function Home() {
  return (
    <div className="space-y-14 sm:space-y-16">
      <HomeHero />
      <TechBanner />
      <ImpactHighlights />
    </div>
  );
}
