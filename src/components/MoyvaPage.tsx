import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowUpRight, BookOpen } from "@phosphor-icons/react"
import { ImageLightbox } from "@/components/ImageLightbox"
import moyva001 from "@/assets/images/moyva-scrins001.png"
import moyva002 from "@/assets/images/moyva-scrins002.png"
import moyva003 from "@/assets/images/moyva-scrins003.png"
import moyva004 from "@/assets/images/moyva-scrins004.png"
import moyva005 from "@/assets/images/moyva-scrins005.png"
import moyva006 from "@/assets/images/moyva-scrins006.png"
import graphGenerator from "@/assets/images/graph-generator.png"

interface MoyvaPageProps {
  onBack: () => void
}

export function MoyvaPage({ onBack }: MoyvaPageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0)

  const screenshots = [moyva001, moyva002, moyva003, moyva004, moyva005, moyva006, graphGenerator]

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
              Moyva
            </h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Eigenes Projekt
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
                Ein weiteres C#-Projekt mit Fokus auf Spiellogik, objektorientierte Programmierung und technische Systeme. 
                Moyva ist ein innovatives Unity-Spiel, das komplexe Mechaniken und durchdachte Architektur vereint.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Das Projekt demonstriert fortgeschrittene Kenntnisse in der Spieleentwicklung, von der Implementierung 
                von Gameplay-Systemen bis hin zur Optimierung der Performance. Die Verwendung von Custom Shaders zeigt 
                technische Tiefe und visuelles Design-Verständnis.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Video Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <p className="text-center px-4">
                    Video-Demo wird in Kürze hinzugefügt
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Hier wird ein Gameplay-Video oder eine Projekt-Demo angezeigt
              </p>
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
                      alt={`Moyva Screenshot ${index + 1}`}
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
                  <span><strong>Unity Engine:</strong> Moderne Spieleentwicklung mit C#</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span><strong>Custom Shaders:</strong> ShaderLab und HLSL für visuelle Effekte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span><strong>OOP-Prinzipien:</strong> Saubere, wartbare Code-Architektur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span><strong>Gameplay-Systeme:</strong> Komplexe Spielmechaniken und Logik</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button 
              className="flex-1 gap-2"
              onClick={() => window.open("https://github.com/kruty1918dev-ai/moyva", "_blank")}
            >
              <BookOpen weight="bold" />
              <span>Dokumentation (GitHub Repository)</span>
            </Button>
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
