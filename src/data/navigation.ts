import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Briefcase,
  Cloud,
  CloudCog,
  Database,
  Eye,
  FileBarChart,
  FileSearch,
  Headphones,
  Home,
  Layers,
  MailWarning,
  RefreshCw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Users,
} from "lucide-react";

export interface NavChild {
  label: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  intro?: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    intro: "Learn about Altis and the people behind our work",
    children: [
      {
        label: "About Us",
        description: "Learn about Altis Technology Services.",
        icon: Home,
        href: "/about",
      },
      {
        label: "Our Team",
        description: "Meet the people who make our work possible.",
        icon: Users,
        href: "/about",
      },
      {
        label: "Careers",
        description: "Explore opportunities to work with Altis.",
        icon: Briefcase,
        href: "/about",
      },
    ],
  },
  {
    label: "AI Innovation and SecOps",
    href: "/cyber-security",
    intro: "Practical AI innovation supported by security operations",
    children: [
      {
        label: "Security Assessments",
        description:
          "Identify gaps in your security posture before attackers do.",
        icon: FileSearch,
        href: "/cyber-security",
      },
      {
        label: "Security Operations Centre",
        description:
          "24/7 monitoring and response to keep threats off your network.",
        icon: Activity,
        href: "/cyber-security",
      },
      {
        label: "Managed Firewall",
        description:
          "Managed perimeter protection with real-time threat blocking.",
        icon: Shield,
        href: "/cyber-security",
      },
      {
        label: "Detection & Response",
        description:
          "Rapid identification and containment when something looks wrong.",
        icon: ShieldAlert,
        href: "/cyber-security",
      },
      {
        label: "Managed Antivirus",
        description:
          "Endpoint protection kept current and managed across your devices.",
        icon: ShieldCheck,
        href: "/cyber-security",
      },
      {
        label: "Email Phishing Security",
        description:
          "Stop phishing and malicious email before it reaches your inbox.",
        icon: MailWarning,
        href: "/cyber-security",
      },
      {
        label: "Security Awareness Training",
        description: "Turn your staff into a strong first line of defence.",
        icon: Users,
        href: "/cyber-security",
      },
      {
        label: "Dark Web Monitoring",
        description:
          "Alerts when your credentials or data appear on the dark web.",
        icon: Eye,
        href: "/cyber-security",
      },
    ],
  },
  {
    label: "Consulting",
    href: "/consulting",
    intro:
      "Domain specialists, agile delivery, and quality built into the work",
    children: [
      {
        label: "Domain Specialists",
        description:
          "Industry-aware consultants who understand your context and constraints.",
        icon: Briefcase,
        href: "/consulting",
      },
      {
        label: "Agile Delivery",
        description: "Responsive teams that adapt as your priorities change.",
        icon: Activity,
        href: "/consulting",
      },
      {
        label: "Reusable Foundations",
        description:
          "Accelerators and frameworks informed by real delivery experience.",
        icon: Layers,
        href: "/consulting",
      },
      {
        label: "Quality and Governance",
        description: "Structured reviews and assurance throughout delivery.",
        icon: ShieldCheck,
        href: "/consulting",
      },
    ],
  },
  {
    label: "Cloud",
    href: "/cloud",
    intro:
      "Move beyond migration to a secure, scalable, AI-ready cloud operating model",
    children: [
      {
        label: "Assessment & Strategy",
        description:
          "Assess your environment and plan a cloud operating model that fits your business.",
        icon: CloudCog,
        href: "/cloud",
      },
      {
        label: "Migration & Modernization",
        description:
          "Move workloads and modernize beyond lift-and-shift migration.",
        icon: Cloud,
        href: "/cloud",
      },
      {
        label: "AI Landing Zones",
        description:
          "Build secure cloud foundations ready for today's AI workloads.",
        icon: Database,
        href: "/cloud",
      },
      {
        label: "Managed Cloud Operations",
        description:
          "Operate cloud infrastructure that stays secure, scalable, and cost-optimized.",
        icon: Activity,
        href: "/cloud",
      },
    ],
  },
  {
    label: "Managed Services",
    href: "/it-managed-services",
    intro:
      "Managed Services that empower your organization to thrive in the digital age",
    children: [
      {
        label: "Fully Managed IT Services",
        description:
          "We run your whole IT operation, from help desk to security to upgrades.",
        icon: Layers,
        href: "/it-managed-services",
      },
      {
        label: "Co-Managed IT Services",
        description:
          "We work alongside your internal IT team and fill the gaps where needed.",
        icon: Users,
        href: "/it-managed-services",
      },
      {
        label: "Disaster Recovery Systems",
        description:
          "On-site and cloud backups with tested restores, so a bad day stays a short one.",
        icon: RefreshCw,
        href: "/it-managed-services",
      },
      {
        label: "IT Service Desk Support",
        description:
          "A friendly help desk your employees can reach whenever something breaks.",
        icon: Headphones,
        href: "/it-managed-services",
      },
      {
        label: "Observability AI",
        description:
          "AI-powered observability so you can see how systems behave and catch issues before they grow.",
        icon: Activity,
        href: "/it-managed-services",
      },
    ],
  },
  {
    label: "Data & Analytics",
    href: "/data-analytics",
    intro:
      "Build governed, AI-ready data foundations for intelligent analytics and decisions",
    children: [
      {
        label: "AI-Ready Data Foundations",
        description:
          "Move from raw, scattered data to governed data infrastructure.",
        icon: Database,
        href: "/data-analytics",
      },
      {
        label: "Analytics & Decision-Making",
        description:
          "Build intelligent analytics and support decisions at scale.",
        icon: FileBarChart,
        href: "/data-analytics",
      },
    ],
  },
];

export const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/contact" },
];

export const FOOTER_SERVICE_LINKS = [
  { label: "AI Innovation and SecOps", href: "/cyber-security" },
  { label: "Consulting", href: "/consulting" },
  { label: "Cloud", href: "/cloud" },
  { label: "Managed Services", href: "/it-managed-services" },
  { label: "Data & Analytics", href: "/data-analytics" },
];
