import { Card } from "@/components/ui/card"
import { MapPin } from "@phosphor-icons/react"

export function HannoverSection() {
  return (
    <section id="hannover" className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <MapPin size={32} weight="fill" className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
            Warum Hannover?
          </h2>
        </div>
        <Card className="p-6 md:p-8">
          <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>
              Ich möchte meine Ausbildung im Raum Hannover beginnen, weil ich dort langfristig leben,
              lernen und arbeiten möchte. Hannover bietet für mich gute Möglichkeiten im IT-Bereich,
              eine größere Auswahl an Ausbildungsbetrieben und bessere Perspektiven für meinen weiteren
              beruflichen Weg.
            </p>
            <p>
              Für einen passenden Ausbildungsplatz bin ich bereit, die notwendigen Schritte mit dem
              Jobcenter und der Ausländerbehörde zu klären.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
