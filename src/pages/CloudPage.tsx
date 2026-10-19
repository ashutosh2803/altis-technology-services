import { ServiceLandingContent } from "../components/sections/ServiceLandingContent";
import { PageHero } from "../components/sections/PageHero";
import { CLOUD_INTRO, CLOUD_PRINCIPLES } from "../data/servicePages";
import type { PageEntry } from "../types/page";

export function CloudPage() {
  return (
    <div className="site-cloud">
      <PageHero
        label="Cloud"
        title="The Cloud Is Not a Destination. It Is an Operating Model."
        subtitle={CLOUD_INTRO}
      />
      <ServiceLandingContent principles={CLOUD_PRINCIPLES} />
    </div>
  );
}

export const pageEntry: PageEntry = {
  path: "/cloud",
  meta: {
    title: "Cloud | Altis Technology Services",
    description:
      "Move beyond lift-and-shift migration to secure, scalable, cost-optimized cloud operations and AI-ready infrastructure.",
    keywords: ["cloud", "cloud-native", "migration", "modernization", "AI"],
    type: "page",
  },
  Component: CloudPage,
};
