import { Button } from "@/components/ui/button"
import { GithubLogo, EnvelopeSimple, Briefcase } from "@phosphor-icons/react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background via-background to-secondary/30">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Oleksii Havryliuk
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
            Bewerber für eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          C# Developer mit Interesse an Backend-Entwicklung, Softwarearchitektur und Game Development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto gap-2"
          >
            <Briefcase weight="fill" />
            Projekte ansehen
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto gap-2"
          >
            <EnvelopeSimple weight="fill" />
            Kontakt aufnehmen
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open("https://github.com/kruty1918dev-ai", "_blank")}
            className="w-full sm:w-auto gap-2"
          >
            <GithubLogo weight="fill" />
            GitHub öffnen
          </Button>
        </div>
      </div>
    </section>
  )
}
