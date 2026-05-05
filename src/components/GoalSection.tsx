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
          <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>
              Ich suche eine Ausbildung im Bereich Anwendungsentwicklung, idealerweise mit 
              Schwerpunkt C#, .NET oder Backend-Entwicklung. Besonders wichtig sind mir praktische 
              Arbeit an echten Projekten, ein gutes Lernumfeld und die Möglichkeit, langfristig im 
              Unternehmen zu bleiben.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-md">
              <p className="font-medium text-foreground mb-2">
                Meine Erwartungen an die Position:
              </p>
              <p>
                Ich bewerbe mich <strong>nicht</strong> sofort auf eine hohe Position. Ich interessiere mich 
                für einen schrittweisen Aufbau als qualifizierter Mitarbeiter und bin bereit, eine Ausbildung, 
                ein Praktikum oder eine Junior-Position anzunehmen. Ich habe Erfahrung in der Entwicklung 
                und würde mich subjektiv auf Mid-Level-Niveau einschätzen, aber mir fehlt umfangreiche 
                kommerzielle Erfahrung – deshalb möchte ich gemeinsam mit dem Team wachsen.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
