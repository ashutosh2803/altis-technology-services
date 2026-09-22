import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  Cloud,
  CloudCog,
  Cpu,
  Eye,
  FileSearch,
  Globe,
  Headphones,
  Layers,
  MailWarning,
  Monitor,
  RefreshCw,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

export interface NavChild {
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  intro?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Cyber Security",
    href: "/cyber-security",
    intro: "Protection for your data, your systems, and your people",
    children: [
      {
        label: "Cyber Security Audits",
        description:
          "Identify gaps in your security posture before attackers do.",
        icon: FileSearch,
      },
      {
        label: "Security Operations Centre",
        description:
          "24/7 monitoring and response to keep threats off your network.",
        icon: Activity,
      },
      {
        label: "Managed Firewall",
        description:
          "Managed perimeter protection with real-time threat blocking.",
        icon: Shield,
      },
      {
        label: "Detection & Response",
        description:
          "Rapid identification and containment when something looks wrong.",
        icon: ShieldAlert,
      },
      {
        label: "Managed Antivirus",
        description:
          "Endpoint protection kept current and managed across your devices.",
        icon: ShieldCheck,
      },
      {
        label: "Email Phishing Security",
        description:
          "Stop phishing and malicious email before it reaches your inbox.",
        icon: MailWarning,
      },
      {
        label: "Security Awareness Training",
        description: "Turn your staff into a strong first line of defence.",
        icon: Users,
      },
      {
        label: "Dark Web Monitoring",
        description:
          "Alerts when your credentials or data appear on the dark web.",
        icon: Eye,
      },
    ],
  },
  { label: "AI Security", href: "/shadow-ai-ai-governance-services" },
  {
    label: "Cloud",
    href: "/cloud-infrastructure-services",
    intro: "Build, Secure and Protect Your Business Cloud Infrastructure",
    children: [
      {
        label: "Cloud Consulting",
        description:
          "Expert guidance to plan, design, and secure your cloud strategy.",
        icon: CloudCog,
      },
      {
        label: "Cloud Migration Services",
        description:
          "Move workloads to the cloud with minimal disruption to your team.",
        icon: Cloud,
      },
      {
        label: "Microsoft 365 Services",
        description:
          "Setup, management, and security for your Microsoft 365 environment.",
        icon: Monitor,
      },
      {
        label: "Google Workspace Services",
        description: "Deployment and day-to-day support for Google Workspace.",
        icon: Globe,
      },
      {
        label: "Infrastructure as a Service",
        description:
          "Scalable cloud infrastructure without the overhead of owning hardware.",
        icon: Server,
      },
      {
        label: "Colocation",
        description:
          "Secure, reliable rack space for your servers in our data centre.",
        icon: Building2,
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
      },
      {
        label: "Co-Managed IT Services",
        description:
          "We work alongside your internal IT team and fill the gaps where needed.",
        icon: Users,
      },
      {
        label: "Disaster Recovery Systems",
        description:
          "On-site and cloud backups with tested restores, so a bad day stays a short one.",
        icon: RefreshCw,
      },
      {
        label: "IT Service Desk Support",
        description:
          "A friendly help desk your employees can reach whenever something breaks.",
        icon: Headphones,
      },
      {
        label: "Observability AI",
        description:
          "AI-powered observability so you can see how systems behave and catch issues before they grow.",
        icon: Activity,
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects-procurement",
    intro:
      "Altis Technology Services is your one stop shop for projects, services & hardware/software",
    children: [
      {
        label: "Hardware Procurement",
        description:
          "Sourcing, quoting, and delivery of the right hardware for your business.",
        icon: Cpu,
      },
      {
        label: "Consulting & Planning",
        description:
          "Structured planning so your IT projects start on solid ground.",
        icon: FileSearch,
      },
      {
        label: "IT Implementation Projects",
        description:
          "Rollouts and deployments handled start to finish by our team.",
        icon: Wrench,
      },
    ],
  },
];

export const FOOTER_COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/contact" },
];

export const FOOTER_SERVICE_LINKS = [
  { label: "Cyber Security", href: "/cyber-security" },
  { label: "AI Security", href: "/shadow-ai-ai-governance-services" },
  { label: "Cloud", href: "/cloud-infrastructure-services" },
  { label: "Managed Services", href: "/it-managed-services" },
  { label: "Projects", href: "/projects-procurement" },
];
