import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
}

const pageTransition = {
    type: "tween" as const,
    ease: "easeInOut" as const,
    duration: 0.3
}

function App() {
    const [currentPage, setCurrentPage] = useState<'portfolio' | 'cv' | 'contact' | 'moyva' | 'funandball'>('portfolio')

    return (
        <>
            <AnimatePresence mode="wait">
                {currentPage === 'cv' && (
                    <motion.div
                        key="cv"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={pageTransition}
                    >
                        <CVPage onBack={() => setCurrentPage('portfolio')} />
                    </motion.div>
                )}

                {currentPage === 'contact' && (
                    <motion.div
                        key="contact"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={pageTransition}
                    >
                        <ContactPage onBack={() => setCurrentPage('portfolio')} />
                    </motion.div>
                )}

                {currentPage === 'moyva' && (
                    <motion.div
                        key="moyva"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={pageTransition}
                    >
                        <MoyvaPage onBack={() => setCurrentPage('portfolio')} />
                    </motion.div>
                )}

                {currentPage === 'funandball' && (
                    <motion.div
                        key="funandball"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={pageTransition}
                    >
                        <FunAndBallPage onBack={() => setCurrentPage('portfolio')} />
                    </motion.div>
                )}

                {currentPage === 'portfolio' && (
                    <motion.div
                        key="portfolio"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={pageTransition}
                        className="min-h-screen"
                    >
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
                    </motion.div>
                )}
            </AnimatePresence>
            <Toaster />
        </>
    )
}

export default App