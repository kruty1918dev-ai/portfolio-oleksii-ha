import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { GoalSection } from "@/components/GoalSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { TimelineSection } from "@/components/TimelineSection"
import { WhyMeSection } from "@/components/WhyMeSection"
import { ContactSection, Footer } from "@/components/ContactSection"
import { Toaster } from "@/components/ui/sonner"

function App() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <GoalSection />
            <SkillsSection />
            <ProjectsSection />
            <TimelineSection />
            <WhyMeSection />
            <ContactSection />
            <Footer />
            <Toaster />
        </div>
    )
}

export default App