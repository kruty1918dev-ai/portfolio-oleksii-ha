import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { profile } from "@/lib/profile"

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <motion.section 
      id="about" 
      className="py-16 px-6 bg-background"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
          Über mich
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
          <p>
            Ich heiße {profile.name}, bin 18 Jahre alt und komme aus der Ukraine. Derzeit lebe ich in
            Wismar und suche eine duale IT-Ausbildung im Raum Hannover.
          </p>
          <p>
            Ich interessiere mich seit mehreren Jahren für IT, Programmierung und technische Systeme. Besonders
            spannend finde ich Aufgaben, bei denen man logisch denken, Fehler analysieren, Systeme verstehen und
            Lösungen Schritt für Schritt verbessern muss.
          </p>
          <p>
            In meiner Freizeit arbeite ich an eigenen Projekten mit C#, Unity und GitHub. Mein stärkstes
            aktuelles Projekt ist „Moyva“, ein größeres Unity/C#-Projekt mit Fokus auf Spielsysteme,
            prozedurale Generierung, Editor-Tools, Grid-Logik und technische Architektur.
          </p>
          <p>
            Neben Software interessiere ich mich auch für Linux/Ubuntu, PC-Hardware, Elektronik und Löten. Ich
            habe bereits PCs und Notebooks geöffnet, gereinigt, Wärmeleitpaste erneuert, technische Fehler
            gesucht und kleinere Elektronikprojekte mit Arduino umgesetzt.
          </p>
          <p>
            Ich weiß, dass eine Ausbildung der Anfang meines beruflichen Weges ist. Mein Ziel ist es, meine
            praktischen Erfahrungen in einem Unternehmen professionell weiterzuentwickeln, mein Deutsch weiter
            zu verbessern und langfristig im IT-Bereich zu arbeiten.
          </p>
          <p>
            Meine ukrainischen Schulunterlagen liegen bereits in deutscher Übersetzung vor. Die Bewertung in
            Niedersachsen wird vorbereitet.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
