import { Card } from "@/components/ui/card"
import { MapPin, Translate } from "@phosphor-icons/react"

export function DeutschSection() {
  return (
    <section id="deutsch" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <Translate size={32} weight="fill" className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
            Deutsch & Umzugsbereitschaft
          </h2>
        </div>
        <Card className="p-6 md:p-8">
          <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>
              Ich besuche aktuell einen B1-Deutschkurs. Die B1-Prüfung ist am 18.07. geplant. Mein Ziel ist
              B2 bis zum Ausbildungsbeginn.
            </p>
            <p className="flex items-start gap-3">
              <MapPin size={24} weight="fill" className="text-primary mt-1 flex-shrink-0" />
              <span>Für einen passenden Ausbildungsplatz im IT-Bereich bin ich bereit, nach Hannover oder in den Raum Hannover umzuziehen.</span>
            </p>
            <p className="text-base text-muted-foreground">
              Bei einer Zusage würde ich die notwendigen Schritte mit dem Jobcenter und der Ausländerbehörde klären.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
