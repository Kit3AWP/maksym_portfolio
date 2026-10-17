import { HeroSection } from './modules/HeroSection';
import { AboutSection } from './modules/AboutSection';
import { ProjectsSection } from './modules/ProjectsSection';
import { SkillsSection } from './modules/SkillsSection';
import { ContactsSection } from './modules/ContactsSection';
import { Header } from './shared/components/Header';
import { Footer } from './shared/components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
};
