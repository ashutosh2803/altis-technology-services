import { ServiceLandingContent } from "../components/sections/ServiceLandingContent";
import { PageHero } from "../components/sections/PageHero";
import { CONSULTING_INTRO, CONSULTING_PRINCIPLES } from "../data/servicePages";
import type { PageEntry } from "../types/page";

export function ConsultingPage() {
  return (
    <div className="site-consulting">
      <PageHero
        label="Consulting"
        title="Domain Specialists, Not Generalists"
        subtitle={CONSULTING_INTRO}
      />
      <ServiceLandingContent principles={CONSULTING_PRINCIPLES} />
    </div>
  );
}

export const pageEntry: PageEntry = {
  path: "/consulting",
  meta: {
    title: "Consulting | Altis Technology Services",
    description:
      "Industry-specialist consulting with agile delivery, global reach, reusable foundations, and quality built into every engagement.",
    keywords: ["consulting", "industry specialists", "delivery", "quality"],
    type: "page",
  },
  Component: ConsultingPage,
};
