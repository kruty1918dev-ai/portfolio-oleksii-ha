import { Card } from "@/components/ui/card"
import { Brain, Circuitry, GraduationCap, Lightbulb, Rocket } from "@phosphor-icons/react"

const offers = [
  {
    icon: <Brain size={30} weight="fill" className="text-primary" />,
    title: "Technisches Denken",
    description: "Ich interessiere mich dafür, wie Systeme aufgebaut sind, wie Fehler entstehen und wie man stabile Lösungen entwickelt."
  },
  {
    icon: <Rocket size={30} weight="fill" className="text-primary" />,
    title: "Eigene Projekterfahrung",
    description: "Ich habe eigene Projekte mit C#, Unity und GitHub umgesetzt und lerne am besten durch praktische Aufgaben."
  },
  {
    icon: <Circuitry size={30} weight="fill" className="text-primary" />,
    title: "Breites technisches Interesse",
    description: "Neben Software interessiere ich mich auch für Linux, PC-Hardware, Elektronik, Löten und Netzwerke."
  },
  {
    icon: <Lightbulb size={30} weight="fill" className="text-primary" />,
    title: "Schnelle Lernfähigkeit",
    description: "Ich kann mich selbstständig in neue Themen einarbeiten und versuche, Probleme ruhig und strukturiert zu lösen."
  },
  {
    icon: <GraduationCap size={30} weight="fill" className="text-primary" />,
    title: "Motivation für Ausbildung",
    description: "Ich möchte nicht nur privat lernen, sondern in einem Unternehmen professionell ausgebildet werden und langfristig im IT-Bereich arbeiten."
  }
]

export function OfferSection() {
  return (
    <section id="offer" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-foreground text-center">
          Was ich einem Ausbildungsbetrieb bieten kann
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {offers.map((offer) => (
            <Card key={offer.title} className="p-6 h-full hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                {offer.icon}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{offer.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
