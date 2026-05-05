import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  level: number
  description: string
}

const skills: Skill[] = [
  { name: "C#", level: 70, description: "Gute Grundkenntnisse / eigene Projekte" },
  { name: "Unity", level: 65, description: "Praktische Erfahrung durch eigene Spieleprojekte" },
  { name: "Git & GitHub", level: 60, description: "Grundkenntnisse" },
  { name: "Linux", level: 55, description: "Grundkenntnisse" },
  { name: "HTML, CSS, JavaScript", level: 50, description: "Grundkenntnisse" },
  { name: "Backend-Entwicklung", level: 40, description: "Aktuell im Aufbau" },
  { name: "ASP.NET Core", level: 35, description: "Aktuell im Aufbau" },
  { name: "SQL / Datenbanken", level: 30, description: "Aktuell im Aufbau" },
  { name: "Docker", level: 20, description: "Erste Berührung / Lernphase" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
          Technische Kenntnisse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-6 hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <Badge variant="secondary" className="font-mono text-xs">
                    {skill.level}%
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
