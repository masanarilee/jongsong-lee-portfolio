import { profile } from "@/data/profile";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StarRating from "@/components/ui/StarRating";

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <ScrollReveal>
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          Skills
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {profile.skills.map((skill, i) => (
          <ScrollReveal key={skill.name} delay={0.05 * i}>
            <div className="rounded-lg border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)]">
              <p className="mb-2 text-sm font-bold">{skill.name}</p>
              <StarRating rating={skill.rating} />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
