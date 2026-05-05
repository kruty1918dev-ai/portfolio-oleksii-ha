import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowUpRight, GlobeHemisphereWest } from "@phosphor-icons/react"
import { ImageLightbox } from "@/components/ImageLightbox"
import funandball001 from "@/assets/images/funandball001.jpeg"
import funandball002 from "@/assets/images/funandball002.jpeg"
import funandball003 from "@/assets/images/funandball003.jpeg"
import funandball004 from "@/assets/images/funandball004.jpeg"
import funandball005 from "@/assets/images/funandball005.jpeg"
import funandball006 from "@/assets/images/funandball006.jpeg"

interface FunAndBallPageProps {
  onBack: () => void
}

export function FunAndBallPage({ onBack }: FunAndBallPageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0)

  const screenshots = [funandball001, funandball002, funandball003, funandball004, funandball005, funandball006]

  const openLightbox = (index: number) => {
    setLightboxInitialIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 gap-2"
        >
          <ArrowLeft weight="bold" />
          <span>Zurück zur Portfolio</span>
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Fun and Ball
            </h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Eigenes Game-Development-Projekt
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="font-mono">C#</Badge>
              <Badge variant="secondary" className="font-mono">Unity</Badge>
              <Badge variant="secondary" className="font-mono">ShaderLab</Badge>
              <Badge variant="secondary" className="font-mono">HLSL</Badge>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Projektbeschreibung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Ein eigenes Unity-Spielprojekt mit C#. Der Fokus liegt auf Gameplay-Logik, Spielmechaniken, 
                technischer Struktur und Problemlösung in einem größeren Projekt.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Das Projekt zeigt praktische Erfahrung in der Spieleentwicklung mit Unity und C#. Von der 
                Implementierung komplexer Spielmechaniken bis zur Optimierung der Performance demonstriert 
                dieses Projekt ein tiefes Verständnis für Game Development.
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-foreground/70 italic">
                  <strong>Hinweis:</strong> Das Spiel ist auf Ukrainisch, bietet jedoch eine deutsche Sprachauswahl auf der Website.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gameplay Video</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center px-4">
                    <p className="font-semibold mb-2">Gameplay-Video wird in Kürze hinzugefügt</p>
                    <p className="text-sm">
                      Hier wird ein vollständiges Gameplay-Video angezeigt
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Screenshots</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {screenshots.map((screenshot, index) => (
                  <div 
                    key={index} 
                    className="aspect-video overflow-hidden rounded-lg cursor-pointer group relative border border-border hover:border-accent transition-colors"
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={screenshot} 
                      alt={`Fun and Ball Screenshot ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technologien & Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span><strong>Unity Engine:</strong> Professionelle Spieleentwicklung mit C#</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span><strong>Custom Shaders:</strong> Visuelle Effekte mit ShaderLab und HLSL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span><strong>Gameplay-Mechaniken:</strong> Durchdachte Spielsysteme und Physik</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span><strong>Code-Architektur:</strong> Saubere, wartbare Projektstruktur</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4">
            <Button 
              className="w-full gap-2"
              size="lg"
              onClick={() => window.open("https://fun-and-ball.web.app/", "_blank")}
            >
              <GlobeHemisphereWest weight="bold" />
              <span>Fun and Ball spielen</span>
            </Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button 
                variant="outline"
                className="gap-2"
                onClick={() => window.open("https://fun-and-ball.web.app/", "_blank")}
              >
                <ArrowUpRight weight="bold" />
                <span>Dokumentation (Website)</span>
              </Button>
              <Button 
                variant="outline"
                className="gap-2"
                onClick={() => window.open("https://github.com/Kruty1918/Fun-and-Ball", "_blank")}
              >
                <ArrowUpRight weight="bold" />
                <span>GitHub Repository</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        images={screenshots}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxInitialIndex}
      />
    </div>
  )
}
