import { profile } from "@/data/profile";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MvvSection() {
  return (
    <SectionWrapper id="mvv">
      <ScrollReveal>
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          Mission / Vision / Values
        </h2>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Mission */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-lg border border-[var(--color-border)] p-8">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
              Mission
            </h3>
            <p className="mb-3 text-lg font-bold leading-relaxed">
              {profile.mission.statement}
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-secondary)]">
              {profile.mission.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Vision */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-lg border border-[var(--color-border)] p-8">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
              Vision
            </h3>
            <p className="mb-3 text-lg font-bold leading-relaxed">
              {profile.vision.statement}
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-secondary)]">
              {profile.vision.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Values */}
        <ScrollReveal delay={0.3}>
          <div className="rounded-lg border border-[var(--color-border)] p-8">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
              Values
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.values.map((value) => (
                <span
                  key={value.title}
                  className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium"
                  title={value.description}
                >
                  {value.title}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Values detail */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {profile.values.map((value, i) => (
          <ScrollReveal key={value.title} delay={0.1 * i}>
            <div className="border-l-2 border-[var(--color-foreground)] pl-4">
              <h4 className="mb-1 font-bold">{value.title}</h4>
              <p className="text-sm leading-relaxed text-[var(--color-secondary)]">
                {value.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
