import type { ServicePrinciple } from "../components/sections/ServiceLandingContent";
import {
  CheckCircle2,
  Compass,
  Globe2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

export const CONSULTING_PRINCIPLES: ServicePrinciple[] = [
  {
    title: "The Agility to Move with You",
    description:
      "We are structured to make decisions quickly and adapt when priorities shift. Without the overhead of large organizational layers, our teams stay close to the work — responsive, focused, and accountable throughout.",
    icon: Compass,
  },
  {
    title: "Global Reach, Consistent Standards",
    description:
      "With teams across five countries, we combine onsite presence where relationships and context matter with offshore depth where scale and speed are needed. One delivery standard, wherever the work happens.",
    icon: Globe2,
  },
  {
    title: "Built on Reusable Foundations",
    description:
      "Our accelerators, frameworks, and reusable components are the product of every engagement we have delivered. Each new client benefits from that accumulated experience — faster time to value, lower risk, and the confidence of a starting point that has already been tested in the field.",
    icon: Layers3,
  },
  {
    title: "Quality as a Practice, Not a Checkpoint",
    description:
      "Quality is not something we review at the end. We build structured review points, delivery governance, and independent quality assurance into how we work — so standards are maintained consistently, issues surface early, and what goes into production is something we stand behind.",
    icon: CheckCircle2,
  },
];

export const CONSULTING_INTRO =
  "Every engagement is resourced with people who already understand your industry. Healthcare, finance, procurement, retail — we bring specialists who know the context, the constraints, and the complexity of your domain before the project begins.";

export const DATA_ANALYTICS_INTRO =
  "Altis's Data practice is built around one principle: data is the foundation that makes AI possible. We help enterprises move from raw, scattered data to governed, AI-ready infrastructure — and from that foundation to intelligent analytics and decision-making at scale.";

export const CLOUD_INTRO =
  "Altis's Cloud practice helps enterprises move beyond lift-and-shift migration to true cloud-native operating models. From assessment and strategy to migration, modernization, AI landing zone build, and managed operations — we ensure your cloud infrastructure is secure, scalable, cost-optimized, and ready for the AI workloads of today and tomorrow.";

export const DATA_ANALYTICS_PRINCIPLES: ServicePrinciple[] = [
  {
    title: "Governed, AI-Ready Data",
    description:
      "Move from raw, scattered data to governed foundations that make AI possible.",
    icon: ShieldCheck,
  },
  {
    title: "Analytics and Decision-Making",
    description:
      "Turn trusted data into intelligent analytics and decision-making at scale.",
    icon: CheckCircle2,
  },
];

export const CLOUD_PRINCIPLES: ServicePrinciple[] = [
  {
    title: "Cloud-Native Operating Models",
    description:
      "Go beyond lift-and-shift with cloud assessment, strategy, migration, and modernization.",
    icon: Layers3,
  },
  {
    title: "Secure, Scalable, Cost-Optimized Cloud",
    description:
      "Build and operate cloud infrastructure ready for the AI workloads of today and tomorrow.",
    icon: ShieldCheck,
  },
];
