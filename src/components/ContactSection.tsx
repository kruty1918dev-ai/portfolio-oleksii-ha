import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GithubLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground text-center">
          Kontakt
        </h2>
        <div className="text-center space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Ich freue mich über Ausbildungsangebote, Praktikumsmöglichkeiten oder Rückmeldungen 
            zu meinen Projekten.
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
              <span className="text-lg">Wismar, Deutschland</span>
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
          
          <div className="pt-8">
            <Button 
              size="lg"
              onClick={() => window.location.href = "mailto:kruty1918.dev@gmail.com"}
              className="gap-2"
            >
              <EnvelopeSimple weight="fill" />
              E-Mail schreiben
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
      <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
        <p>
          © 2026 Oleksii Havryliuk — C# Developer | Ausbildungssuchender Fachinformatiker für Anwendungsentwicklung
        </p>
      </div>
    </footer>
  )
}
