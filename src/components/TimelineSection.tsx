import { GraduationCap } from "@phosphor-icons/react"

interface TimelineItem {
  title: string
  description: string
}

const timeline: TimelineItem[] = [
  {
    title: "Schulabschluss nach 11 Klassen in der Ukraine",
    description: "Abschlusszeugnis liegt in deutscher Übersetzung vor"
  },
  {
    title: "Integrationskurs Deutsch in Deutschland",
    description: "B1-Prüfung geplant"
  },
  {
    title: "Selbstständiges Lernen von C#, Unity und Backend-Entwicklung",
    description: "Durch eigene Projekte und praktische Umsetzung"
  },
  {
    title: "Ziel: Ausbildung zum Fachinformatiker für Anwendungsentwicklung ab 2026/2027",
    description: "Fokus auf professionelle Softwareentwicklung im Unternehmen"
  }
]

export function TimelineSection() {
  return (
    <section id="education" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <GraduationCap size={32} weight="fill" className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Ausbildung & Lernen
          </h2>
        </div>
        <div className="relative space-y-8">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border"></div>
          {timeline.map((item, index) => (
            <div key={index} className="relative flex gap-6 md:gap-8">
              <div className="flex-shrink-0 w-8 md:w-12 flex justify-center">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background relative z-10"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
