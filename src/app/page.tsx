import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MvvSection from "@/components/sections/MvvSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MvvSection />
        <SkillsSection />
        <PhilosophySection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
