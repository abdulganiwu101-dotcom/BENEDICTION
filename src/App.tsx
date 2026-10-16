import { Navbar, Footer, BackToTop } from './components/layout';
import { HeroSection } from './sections/Hero';
import { AboutSection } from './sections/About';
import { SkillsSection } from './sections/Skills';
import { ProjectsSection } from './sections/Projects';
import { ExperienceSection } from './sections/Experience';
import { ContactSection } from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col relative">
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
