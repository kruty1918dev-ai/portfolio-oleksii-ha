import { Badge } from "@/components/ui/badge"
import { BookOpen } from "@phosphor-icons/react"

const learningTopics = [
  "Deutsch B1/B2",
  "C# und Softwarearchitektur",
  "Unity Editor Tools",
  "Git/GitHub im Projektalltag",
  "Linux/Ubuntu-Grundlagen",
  "SQL und Datenbanken",
  "Grundlagen von Netzwerken und IT-Infrastruktur"
]

export function CurrentLearningSection() {
  return (
    <section id="current-learning" className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <BookOpen size={32} weight="fill" className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Aktuell lerne ich
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {learningTopics.map((topic) => (
            <Badge key={topic} variant="secondary" className="px-4 py-2 text-sm">
              {topic}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
