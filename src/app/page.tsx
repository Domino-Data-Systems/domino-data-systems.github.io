import { Footer } from "@/components/Footer";
import { FounderSection } from "@/components/FounderSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OfferingsGrid } from "@/components/OfferingsGrid";
import { ResearchSection } from "@/components/ResearchSection";
import {
  getOfferings,
  getResearch,
  getSiteConfig,
} from "@/lib/content";

export default function HomePage() {
  const site = getSiteConfig();
  const offerings = getOfferings();
  const research = getResearch();

  return (
    <>
      <Header site={site} />
      <main>
        <Hero site={site} />
        <OfferingsGrid offerings={offerings} />
        <ResearchSection papers={research} />
        <FounderSection site={site} />
      </main>
      <Footer site={site} />
    </>
  );
}
