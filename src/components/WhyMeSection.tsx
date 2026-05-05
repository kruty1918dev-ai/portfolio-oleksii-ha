import { Card } from "@/components/ui/card"
import { Timer, Lightbulb, Code, TrendUp } from "@phosphor-icons/react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Timer size={32} weight="fill" className="text-primary" />,
    title: "Ausdauer",
    description: "Ich arbeite ruhig und konzentriert an technischen Problemen, bis ich eine Lösung finde."
  },
  {
    icon: <Lightbulb size={32} weight="fill" className="text-primary" />,
    title: "Praktische Motivation",
    description: "Ich lerne am besten durch eigene Projekte und reale Aufgaben."
  },
  {
    icon: <Code size={32} weight="fill" className="text-primary" />,
    title: "C# Fokus",
    description: "C# ist meine stärkste Programmiersprache und der Bereich, in dem ich mich langfristig weiterentwickeln möchte."
  },
  {
    icon: <TrendUp size={32} weight="fill" className="text-primary" />,
    title: "Lernbereitschaft",
    description: "Ich möchte professionelle Softwareentwicklung in einem Unternehmen lernen und mich Schritt für Schritt verbessern."
  }
]

export function WhyMeSection() {
  return (
    <section id="why-me" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
          Warum ich?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-8 hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
