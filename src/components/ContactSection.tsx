import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GithubLogo, EnvelopeSimple, FilePdf, FileText, MapPin } from "@phosphor-icons/react"

interface ContactSectionProps {
  onViewCV: () => void
  onViewContactPage?: () => void
}

export function ContactSection({ onViewCV, onViewContactPage }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground text-center">
          Kontakt
        </h2>
        <div className="text-center space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Ich freue mich über Rückmeldungen, Ausbildungsangebote, Praktikumsmöglichkeiten,
            Einstiegsqualifizierung oder Hinweise zu IT-Ausbildungen im Raum Hannover.
          </p>
          
          <Separator className="my-8" />
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-foreground">
              <EnvelopeSimple size={24} weight="fill" className="text-primary" />
              <a 
                href="mailto:kruty1918.dev@gmail.com"
                className="text-lg hover:text-primary transition-colors"
              >
                kruty1918.dev@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-foreground">
              <MapPin size={24} weight="fill" className="text-primary" />
              <span className="text-lg">Wismar, Deutschland — umzugsbereit in den Raum Hannover</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-foreground">
              <GithubLogo size={24} weight="fill" className="text-primary" />
              <div className="flex gap-2 text-lg">
                <a 
                  href="https://github.com/kruty1918dev-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  kruty1918dev-ai
                </a>
                <span>/</span>
                <a 
                  href="https://github.com/Kruty1918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Kruty1918
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={onViewContactPage || (() => window.location.href = "mailto:kruty1918.dev@gmail.com")}
              className="gap-2"
            >
              <EnvelopeSimple weight="fill" />
              Nachricht senden
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={onViewCV}
              className="gap-2"
            >
              <FileText weight="fill" />
              Lebenslauf ansehen
            </Button>
            <Button 
              size="lg"
              variant="outline"
              disabled
              title="PDF-Portfolio bald verfügbar"
              className="gap-2 opacity-70"
            >
              <FilePdf weight="fill" />
              PDF-Portfolio ansehen
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open("https://github.com/kruty1918dev-ai", "_blank")}
              className="gap-2"
            >
              <GithubLogo weight="fill" />
              GitHub öffnen
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          © 2026 Oleksii Havryliuk — Bewerber für eine IT-Ausbildung | C# • Unity • Linux • Hardware
        </p>
        <p className="text-xs text-muted-foreground/70 italic">
          Diese Website wurde von Oleksii Havryliuk erstellt.
        </p>
      </div>
    </footer>
  )
}
