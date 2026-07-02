import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GithubLogo, EnvelopeSimple, FileText, MapPin, Phone } from "@phosphor-icons/react"
import { profile } from "@/lib/profile"

interface ContactSectionProps {
  onViewCV: () => void
}

export function ContactSection({ onViewCV }: ContactSectionProps) {
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
                href={profile.emailHref}
                className="text-lg break-all hover:text-primary transition-colors"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-foreground">
              <Phone size={24} weight="fill" className="text-primary" />
              <a
                href={profile.phoneHref}
                className="text-lg hover:text-primary transition-colors"
              >
                {profile.phoneDisplay}
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-foreground">
              <MapPin size={24} weight="fill" className="text-primary" />
              <span className="text-lg">{profile.locationDe} — {profile.relocationDe}</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 text-foreground">
              <GithubLogo size={24} weight="fill" className="text-primary" />
              <div className="flex flex-wrap justify-center gap-2 text-lg">
                <a 
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {profile.githubHandle}
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = profile.emailHref}
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
              onClick={() => window.open(profile.githubUrl, "_blank")}
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
          © 2026 {profile.name} — Bewerber für eine IT-Ausbildung | C# • Unity • Linux • Hardware
        </p>
        <p className="text-xs text-muted-foreground/70 italic">
          Diese Website wurde von {profile.name} erstellt.
        </p>
      </div>
    </footer>
  )
}
