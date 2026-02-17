import { profile } from "@/data/profile";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PhilosophySection() {
  return (
    <SectionWrapper id="credo">
      <ScrollReveal>
        <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
          Credo
        </h2>
        <p className="mb-16 text-center text-sm text-[var(--color-secondary)]">
          座右の銘:「世に生を得るは事を成すにあり」
        </p>
      </ScrollReveal>

      <div className="space-y-12">
        {profile.credos.map((credo, i) => (
          <ScrollReveal key={credo.title} delay={0.1 * i}>
            <div className="flex gap-6 md:gap-10">
              <span className="shrink-0 text-5xl font-light text-[var(--color-border)] md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-2 text-lg font-bold md:text-xl">
                  {credo.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-secondary)] md:text-base">
                  {credo.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
