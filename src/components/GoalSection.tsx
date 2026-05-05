import { Card } from "@/components/ui/card"
import { Rocket } from "@phosphor-icons/react"

export function GoalSection() {
  return (
    <section id="goal" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Rocket size={32} weight="fill" className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Mein Ausbildungsziel
          </h2>
        </div>
        <Card className="p-8">
          <p className="text-lg leading-relaxed text-foreground/80">
            Ich suche eine Ausbildung im Bereich Anwendungsentwicklung, idealerweise mit 
            Schwerpunkt C#, .NET oder Backend-Entwicklung. Besonders wichtig sind mir praktische 
            Arbeit an echten Projekten, ein gutes Lernumfeld und die Möglichkeit, langfristig im 
            Unternehmen zu bleiben.
          </p>
        </Card>
      </div>
    </section>
  )
}
