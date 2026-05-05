import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DownloadSimple, Copy, ArrowLeft } from "@phosphor-icons/react"
import { toast } from "sonner"
import { cvData } from "@/lib/cvData"

interface CVPageProps {
  onBack: () => void
}

export function CVPage({ onBack }: CVPageProps) {
  const handleDownloadCV = () => {
    try {
      const blob = new Blob([cvData.fullText], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = url
      link.download = 'Oleksii_Havryliuk_Lebenslauf.txt'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      URL.revokeObjectURL(url)
      toast.success('Lebenslauf wird heruntergeladen')
    } catch (error) {
      toast.error('Fehler beim Herunterladen des Lebenslaufs')
    }
  }

  const handleCopyCV = () => {
    try {
      navigator.clipboard.writeText(cvData.fullText)
      toast.success('Lebenslauf in die Zwischenablage kopiert')
    } catch (error) {
      toast.error('Fehler beim Kopieren')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/30 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="gap-2"
          >
            <ArrowLeft />
            Zurück zur Portfolio
          </Button>
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Lebenslauf
            </h1>
            <p className="text-lg text-muted-foreground">
              Oleksii Havryliuk — Bewerber für Fachinformatiker Anwendungsentwicklung
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="gap-2"
            >
              <DownloadSimple weight="fill" />
              Als Textdatei herunterladen
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleCopyCV}
              className="gap-2"
            >
              <Copy weight="fill" />
              Text kopieren
            </Button>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Lebenslauf</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div><span className="font-semibold">Name:</span> Oleksii Havryliuk</div>
                  <div><span className="font-semibold">Telefon:</span> +380 93 464 1796</div>
                  <div><span className="font-semibold">Adresse:</span> Kapitänspromenade 6, 23966 Wismar</div>
                  <div><span className="font-semibold">E-Mail:</span> kruty1918.dev@gmail.com</div>
                  <div className="md:col-span-2"><span className="font-semibold">GitHub:</span> github.com/kruty1918dev-ai</div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Persönliche Daten</h3>
                <div className="text-sm space-y-1 text-foreground/90">
                  <p><span className="font-semibold">Name:</span> Oleksii Havryliuk</p>
                  <p><span className="font-semibold">Geburtsdatum:</span> 16.05.2008</p>
                  <p><span className="font-semibold">Wohnort:</span> 23966 Wismar</p>
                  <p><span className="font-semibold">Staatsangehörigkeit:</span> Ukrainisch</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Schulbildung</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold">seit 11/2025</p>
                    <p className="text-foreground/90">Integrationskurs Deutsch, Wismar</p>
                    <p className="text-muted-foreground">Vorbereitung auf die B1-Prüfung</p>
                    <p className="text-muted-foreground">voraussichtliches Kursende: 07/2026</p>
                  </div>
                  <div>
                    <p className="font-semibold">bis 2025</p>
                    <p className="text-foreground/90">Schulabschluss nach 11 Klassen</p>
                    <p className="text-muted-foreground">Chmelnyzkyj NWS Nr. 6, Ukraine</p>
                    <p className="text-muted-foreground">Abschlusszeugnis in deutscher Übersetzung vorhanden</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Praktische Erfahrungen / Projekte</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold">Eigene Projekte im Bereich C# und Softwareentwicklung</p>
                    <ul className="list-disc list-inside space-y-1 text-foreground/90 ml-4">
                      <li>Arbeit an eigenen Projekten mit C#</li>
                      <li>Interesse an Backend-Entwicklung und Softwarearchitektur</li>
                      <li>Beschäftigung mit GitHub, Linux und modernen Entwicklungstools</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Game-Development-Projekte mit Unity</p>
                    <ul className="list-disc list-inside space-y-1 text-foreground/90 ml-4">
                      <li>Entwicklung eigener Spieleprojekte mit C# und Unity</li>
                      <li>Arbeit an Gameplay-Logik und technischen Systemen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Backend-Lernprojekt</p>
                    <ul className="list-disc list-inside space-y-1 text-foreground/90 ml-4">
                      <li>Beschäftigung mit C#, APIs und Grundlagen moderner Backend-Entwicklung</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Kenntnisse</h3>
                <div className="text-sm space-y-2">
                  <div>
                    <p className="font-semibold">Programmierkenntnisse:</p>
                    <p className="text-foreground/90">C# (gute Grundkenntnisse), HTML/CSS/JavaScript (Grundkenntnisse)</p>
                  </div>
                  <div>
                    <p className="font-semibold">IT-Kenntnisse:</p>
                    <p className="text-foreground/90">GitHub, Linux, Visual Studio, Visual Studio Code, Unity</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Sprachkenntnisse</h3>
                <div className="text-sm space-y-1 text-foreground/90">
                  <p><span className="font-semibold">Ukrainisch:</span> Muttersprache</p>
                  <p><span className="font-semibold">Deutsch:</span> gute Grundkenntnisse, B1-Prüfung geplant</p>
                  <p><span className="font-semibold">Englisch:</span> Grundkenntnisse</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Persönliche Stärken</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90 ml-4">
                  <li>lernbereit</li>
                  <li>zuverlässig</li>
                  <li>freundlich</li>
                  <li>ruhig</li>
                  <li>ausdauernd</li>
                  <li>technisches Interesse</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Interessen</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90 ml-4">
                  <li>Softwareentwicklung</li>
                  <li>Backend-Entwicklung</li>
                  <li>Game Development</li>
                  <li>eigene IT-Projekte</li>
                </ul>
              </div>

              <Separator />

              <div className="text-sm text-muted-foreground text-center pt-4">
                <p>Wismar, den 05.05.2026</p>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="gap-2"
            >
              <DownloadSimple weight="fill" />
              Als Textdatei herunterladen
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleCopyCV}
              className="gap-2"
            >
              <Copy weight="fill" />
              Text kopieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
