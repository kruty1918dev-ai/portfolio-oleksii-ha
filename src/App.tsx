import { useState } from "react"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { GoalSection } from "@/components/GoalSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { TimelineSection } from "@/components/TimelineSection"
import { WhyMeSection } from "@/components/WhyMeSection"
import { ContactSection, Footer } from "@/components/ContactSection"
import { CVPage } from "@/components/CVPage"
import { Toaster } from "@/components/ui/sonner"

function App() {
    const [currentPage, setCurrentPage] = useState<'portfolio' | 'cv'>('portfolio')

    if (currentPage === 'cv') {
        return (
            <>
                <CVPage onBack={() => setCurrentPage('portfolio')} />
                <Toaster />
            </>
        )
    }

    return (
        <div className="min-h-screen">
            <HeroSection onViewCV={() => setCurrentPage('cv')} />
            <AboutSection />
            <GoalSection />
            <SkillsSection />
            <ProjectsSection />
            <TimelineSection />
            <WhyMeSection />
            <ContactSection onViewCV={() => setCurrentPage('cv')} />
            <Footer />
            <Toaster />
        </div>
    )
}

export default App