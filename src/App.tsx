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
import { ContactPage } from "@/components/ContactPage"
import { MoyvaPage } from "@/components/MoyvaPage"
import { FunAndBallPage } from "@/components/FunAndBallPage"
import { Toaster } from "@/components/ui/sonner"

function App() {
    const [currentPage, setCurrentPage] = useState<'portfolio' | 'cv' | 'contact' | 'moyva' | 'funandball'>('portfolio')

    if (currentPage === 'cv') {
        return (
            <>
                <CVPage onBack={() => setCurrentPage('portfolio')} />
                <Toaster />
            </>
        )
    }

    if (currentPage === 'contact') {
        return (
            <>
                <ContactPage onBack={() => setCurrentPage('portfolio')} />
                <Toaster />
            </>
        )
    }

    if (currentPage === 'moyva') {
        return (
            <>
                <MoyvaPage onBack={() => setCurrentPage('portfolio')} />
                <Toaster />
            </>
        )
    }

    if (currentPage === 'funandball') {
        return (
            <>
                <FunAndBallPage onBack={() => setCurrentPage('portfolio')} />
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
            <ProjectsSection 
                onViewMoyva={() => setCurrentPage('moyva')}
                onViewFunAndBall={() => setCurrentPage('funandball')}
            />
            <TimelineSection />
            <WhyMeSection />
            <ContactSection 
                onViewCV={() => setCurrentPage('cv')} 
                onViewContactPage={() => setCurrentPage('contact')}
            />
            <Footer />
            <Toaster />
        </div>
    )
}

export default App