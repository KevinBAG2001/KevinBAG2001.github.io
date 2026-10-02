import { AboutSection } from '../components/sections/AboutSection'
import { ContactSection } from '../components/sections/ContactSection'
import { EducationSection } from '../components/sections/EducationSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { HeroSection } from '../components/sections/HeroSection'
import { HowBuildSection } from '../components/sections/HowBuildSection'
import { ImpactSection } from '../components/sections/ImpactSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { StackSection } from '../components/sections/StackSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <HowBuildSection />
      <ProjectsSection />
      <ImpactSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  )
}
