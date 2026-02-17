import { profile } from "@/data/profile";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PrinciplesSection() {
  return (
    <SectionWrapper id="principles">
      <ScrollReveal>
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          Principles
        </h2>
      </ScrollReveal>

      {/* Decision Framework */}
      <ScrollReveal delay={0.1}>
        <div className="mb-16">
          <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-[var(--color-secondary)]">
            意思決定フレームワーク
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {profile.decisionFramework.map((step, i) => (
              <span key={step} className="flex items-center gap-2 md:gap-3">
                <span className="rounded border border-[var(--color-foreground)] px-3 py-1.5 text-sm font-medium md:px-4 md:py-2">
                  {step}
                </span>
                {i < profile.decisionFramework.length - 1 && (
                  <span className="text-[var(--color-secondary)]">→</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Principle cards */}
      <div className="space-y-6">
        {profile.principles.map((principle, i) => (
          <ScrollReveal key={principle.title} delay={0.1 * i}>
            <div className="border-l-4 border-[var(--color-foreground)] py-2 pl-6">
              <h4 className="mb-1 font-bold">{principle.title}</h4>
              <p className="text-sm leading-relaxed text-[var(--color-secondary)]">
                {principle.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
