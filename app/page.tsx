import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { StatsSection } from "@/components/stats-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { SketchfabSection } from "@/components/sketchfab-section"
import { ExperienceSection } from "@/components/experience-section"
import { TechnicalPlusSection } from "@/components/technical-plus-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <StatsSection />
      <SkillsSection />
      <AboutSection />
      <PortfolioSection />
      <SketchfabSection />
      <ExperienceSection />
      <TechnicalPlusSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
