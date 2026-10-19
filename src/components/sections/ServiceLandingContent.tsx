import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { IconBox } from "../ui/IconBox";

export interface ServicePrinciple {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceLandingContentProps {
  principles: ServicePrinciple[];
}

export function ServiceLandingContent({
  principles,
}: ServiceLandingContentProps) {
  if (!principles.length) return null;

  return (
    <section className="border-y border-[var(--line-soft)] bg-[var(--surface-1)] py-[var(--section-default)]">
      <div className="ac-container">
        <div className="ac-reveal grid gap-px overflow-hidden rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="group relative bg-[var(--surface-2)] p-8 transition-colors duration-[var(--dur-2)] hover:bg-[color-mix(in_srgb,var(--accent)_4%,var(--surface-2))] md:p-10"
              style={{ "--i": index } as CSSProperties}
            >
              <div className="flex items-start justify-between gap-4">
                <IconBox icon={principle.icon} />
                <span className="label-mono text-[var(--ink-3)] transition-colors group-hover:text-[var(--accent-hi)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-6 text-[length:var(--fs-h3)] font-semibold text-[var(--ink-1)]">
                {principle.title}
              </h2>
              <p className="mt-3 text-[length:var(--fs-sm)] leading-[var(--lh-body)] text-[var(--ink-2)]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
