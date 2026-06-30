import { Card } from "@/components/ui/card"
import { Circuitry, DesktopTower, Network, TerminalWindow } from "@phosphor-icons/react"

const hardwareItems = [
  {
    icon: <DesktopTower size={30} weight="fill" className="text-primary" />,
    title: "PC-Hardware",
    description: "Komponenten verstehen, Geräte öffnen, reinigen, Wärmeleitpaste erneuern und Fehler suchen"
  },
  {
    icon: <TerminalWindow size={30} weight="fill" className="text-primary" />,
    title: "Linux / Ubuntu",
    description: "Installation, Terminal, Treiberprobleme, Systemkonfiguration und Fehlersuche mit Dokumentation"
  },
  {
    icon: <Circuitry size={30} weight="fill" className="text-primary" />,
    title: "Elektronik / Löten",
    description: "Praktische Erfahrung mit Kabeln, Arduino, kleineren Elektronikarbeiten und Lötarbeiten"
  },
  {
    icon: <Network size={30} weight="fill" className="text-primary" />,
    title: "Netzwerke",
    description: "Interesse an Routern, LAN, WLAN und IT-Infrastruktur"
  },
  {
    icon: <Circuitry size={30} weight="fill" className="text-primary" />,
    title: "Arduino",
    description: "Lernprojekt mit Display, Tastensteuerung, Lautstärkeregelung und Ladefunktion"
  }
]

export function HardwareSection() {
  return (
    <section id="hardware" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
          Hardware & Technik
        </h2>
        <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto text-center mb-10">
          Neben der Softwareentwicklung interessiere ich mich auch für Hardware und technische Systeme.
          Ich beschäftige mich mit PCs, Komponenten, Linux/Ubuntu, Fehlersuche und einfachen Elektronikarbeiten.
          Außerdem habe ich praktische Erfahrung mit Arduino, Löten und kleinen technischen Lernprojekten.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {hardwareItems.map((item) => (
            <Card key={item.title} className="p-6 h-full hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                {item.icon}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
