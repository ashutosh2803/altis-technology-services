import { ServiceLandingContent } from "../components/sections/ServiceLandingContent";
import { PageHero } from "../components/sections/PageHero";
import {
  DATA_ANALYTICS_INTRO,
  DATA_ANALYTICS_PRINCIPLES,
} from "../data/servicePages";
import type { PageEntry } from "../types/page";

export function DataAnalyticsPage() {
  return (
    <div className="site-data-analytics">
      <PageHero
        label="Data & Analytics"
        title="Before AI, You Need Organized Knowledge. We build both."
        subtitle={DATA_ANALYTICS_INTRO}
      />
      <ServiceLandingContent principles={DATA_ANALYTICS_PRINCIPLES} />
    </div>
  );
}

export const pageEntry: PageEntry = {
  path: "/data-analytics",
  meta: {
    title: "Data & Analytics | Altis Technology Services",
    description:
      "Build governed, AI-ready data foundations and turn them into intelligent analytics and decision-making at scale.",
    keywords: ["data", "analytics", "AI-ready data", "governance"],
    type: "page",
  },
  Component: DataAnalyticsPage,
};
