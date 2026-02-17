import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <ScrollReveal>
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
          Contact
        </h2>
        <p className="text-center text-[var(--color-secondary)]">
          お気軽にご連絡ください。
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
