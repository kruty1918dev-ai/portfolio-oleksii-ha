import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  description: string
  badge: string
}

const skills: Skill[] = [
  { name: "C#", badge: "Grundkenntnisse", description: "Gute Grundkenntnisse durch eigene Projekte, Systemdesign und Unity-Programmierung" },
  { name: "Unity", badge: "Praxis", description: "Praktische Erfahrung mit Spielsystemen, UI, Editor Tools, ScriptableObjects und prozeduraler Generierung" },
  { name: "Git & GitHub", badge: "Grundkenntnisse", description: "Grundkenntnisse und Nutzung in eigenen Projekten: Commit, Push, Pull, Merge und Konfliktlösung" },
  { name: "Linux / Ubuntu", badge: "Praxis", description: "Praktische Grundkenntnisse, Terminal-Nutzung, Systemeinrichtung und Fehlersuche mit Dokumentation" },
  { name: "SQL / Datenbanken", badge: "Aufbau", description: "Erste Grundlagen, aktuell im Aufbau" },
  { name: "ASP.NET Core", badge: "Aufbau", description: "Erste Berührung, aktuell im Aufbau" },
  { name: "PC-Hardware", badge: "Praxis", description: "Praktische Erfahrung mit Öffnen, Reinigen, Wärmeleitpaste, Komponenten und Fehlersuche" },
  { name: "Elektronik / Löten", badge: "Praxis", description: "Praktische Erfahrung mit Arduino, Kabeln, kleinen Elektronikarbeiten und Löten" },
  { name: "Arduino", badge: "Lernprojekt", description: "Lernprojekt mit Display, Tastensteuerung, Lautstärkeregelung und Ladefunktion" },
  { name: "Netzwerke", badge: "Interesse", description: "Interesse an Routern, LAN, WLAN und IT-Infrastruktur" },
]

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <motion.section 
      id="skills" 
      className="py-16 px-6 bg-background"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-foreground text-center">
          Technische Kenntnisse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            >
              <Card className="p-6 hover:shadow-md transition-shadow duration-200 h-full min-h-36">
                <div className="space-y-3 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs whitespace-nowrap">
                      {skill.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{skill.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
