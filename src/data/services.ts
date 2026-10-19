import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  FileBarChart,
  RefreshCw,
  Settings,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

export interface ServiceLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  number: string;
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  links: ServiceLink[];
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    number: "01",
    title: "AI Innovation and SecOps",
    href: "/cyber-security",
    description:
      "Move AI initiatives forward with security operations, monitoring, and response that help protect your people, data, and systems.",
    icon: ShieldCheck,
    links: [
      { label: "Security Assessments", href: "/cyber-security-audits" },
      {
        label: "Security Operations Centre",
        href: "/security-operations-centre-soc",
      },
      { label: "Managed Firewall", href: "/managed-firewall" },
      { label: "Detection & Response", href: "/managed-detection-response" },
      { label: "Email Phishing Security", href: "/email-phishing-security" },
      { label: "Dark Web Monitoring", href: "/dark-web-monitoring" },
    ],
  },
  {
    number: "02",
    title: "Disaster Recovery",
    href: "/disaster-recovery-and-business-continuity",
    description:
      "On-site and cloud backups with tested restores, so a bad day doesn't become a lost week.",
    icon: RefreshCw,
    links: [
      {
        label: "Disaster Recovery Systems",
        href: "/disaster-recovery-and-business-continuity",
      },
    ],
  },
  {
    number: "03",
    title: "Cloud Services",
    href: "/cloud",
    description:
      "Move beyond lift-and-shift to secure, scalable, cost-optimized cloud operations, modernization, and AI-ready infrastructure.",
    icon: Cloud,
    links: [{ label: "Explore Cloud", href: "/cloud" }],
  },
  {
    number: "04",
    title: "Managed Services",
    href: "/it-managed-services",
    description:
      "We run your IT — help desk, observability, and patching — so your team can get on with their work.",
    icon: Settings,
    links: [
      {
        label: "Fully Managed IT Services",
        href: "/fully-managed-it-services",
      },
      { label: "Co-Managed IT Services", href: "/co-managed-it-services" },
      { label: "IT Service Desk Support", href: "/it-service-desk-support" },
      { label: "Observability AI", href: "/observability-ai" },
    ],
  },
  {
    number: "05",
    title: "Data & Analytics",
    href: "/data-analytics",
    description:
      "Build governed, AI-ready data foundations and turn them into intelligent analytics and decision-making at scale.",
    icon: FileBarChart,
    links: [{ label: "Explore Data & Analytics", href: "/data-analytics" }],
  },
  {
    number: "06",
    title: "Consulting",
    href: "/consulting",
    description:
      "Industry specialists, agile delivery, reusable foundations, and quality built into every engagement.",
    icon: Briefcase,
    links: [
      {
        label: "Explore Consulting",
        href: "/consulting",
      },
    ],
  },
];
