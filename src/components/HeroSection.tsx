import { Button } from "@/components/ui/button"
import { GithubLogo, EnvelopeSimple, Briefcase, FileText } from "@phosphor-icons/react"
import profilePhoto from "@/assets/images/Ich.png"
import { profile } from "@/lib/profile"

interface HeroSectionProps {
  onViewCV: () => void
}

export function HeroSection({ onViewCV }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-[82vh] flex items-center justify-center px-6 py-12 md:py-16 bg-gradient-to-b from-background via-background to-secondary/30">
      <div className="max-w-4xl w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
            <img 
              src={profilePhoto} 
              alt={`Porträt von ${profile.name}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
            {profile.applicantTitle}
          </p>
        </div>
        
        <div className="space-y-4 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          <p className="text-lg md:text-xl font-medium text-foreground/90">
            C# • Unity • Git/GitHub • Linux/Ubuntu • PC-Hardware • technische Problemlösung
          </p>
          <div className="space-y-3 text-base md:text-lg">
            <p>
              Ich suche eine duale IT-Ausbildung im Raum Hannover, besonders in den Bereichen Systemintegration,
              Anwendungsentwicklung, digitale Vernetzung oder IT-Systemelektronik.
            </p>
            <p>
              In eigenen Projekten beschäftige ich mich mit C#, Unity, prozeduraler Generierung, GitHub,
              Linux/Ubuntu, ASP.NET Core-Grundlagen und technischer Fehlersuche. Zusätzlich interessiere ich
              mich für PC-Hardware, Elektronik, Löten, Netzwerke und SQL-/Datenbank-Grundlagen.
            </p>
            <p>
              Aktuell besuche ich einen B1-Deutschkurs. Die B1-Prüfung ist am 18.07. geplant. Mein Ziel ist B2
              bis zum Ausbildungsbeginn. Für einen passenden Ausbildungsplatz bin ich bereit, nach Hannover umzuziehen.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center items-center pt-2">
          <Button 
            size="lg" 
            onClick={onViewCV}
            className="w-full sm:w-auto gap-2"
          >
            <FileText weight="fill" />
            Lebenslauf ansehen
          </Button>
          <Button 
            size="lg" 
            variant="outline"
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
            onClick={() => window.open(profile.githubUrl, "_blank")}
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
