import { Card } from "@/components/ui/card"
import { Timer, Lightbulb, Code, TrendUp } from "@phosphor-icons/react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Code size={32} weight="fill" className="text-primary" />,
    title: "Praktische Erfahrung",
    description: "Ich habe bereits eigene Projekte mit C#, Unity und ASP.NET Core umgesetzt."
  },
  {
    icon: <Lightbulb size={32} weight="fill" className="text-primary" />,
    title: "Technisches Interesse",
    description: "Ich interessiere mich nicht nur für Software, sondern auch für PC-Hardware, Linux und Elektronik."
  },
  {
    icon: <TrendUp size={32} weight="fill" className="text-primary" />,
    title: "Lernbereitschaft",
    description: "Ich weiß, dass eine Ausbildung der Anfang ist, und möchte Schritt für Schritt professionell lernen."
  },
  {
    icon: <Timer size={32} weight="fill" className="text-primary" />,
    title: "Ausdauer",
    description: "Ich arbeite ruhig und konzentriert an technischen Problemen, bis ich eine Lösung finde."
  }
]

export function WhyMeSection() {
  return (
    <section id="why-me" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-foreground text-center">
          Warum ich für eine IT-Ausbildung geeignet bin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 md:p-8 h-full hover:shadow-md transition-shadow duration-200">
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
