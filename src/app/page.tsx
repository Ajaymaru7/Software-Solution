import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TechnologyPartners } from "@/components/TechnologyPartners";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TechnologyPartners />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
