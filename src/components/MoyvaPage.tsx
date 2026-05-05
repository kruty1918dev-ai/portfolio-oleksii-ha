import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BookOpen } from "@phosphor-icons/react"
import { ImageLightbox } from "@/components/ImageLightbox"
import moyva001 from "@/assets/images/moyva-scrins001.png"
import moyva002 from "@/assets/images/moyva-scrins002.png"
import moyva003 from "@/assets/images/moyva-scrins003.png"
import moyva004 from "@/assets/images/moyva-scrins004.png"
import moyva005 from "@/assets/images/moyva-scrins005.png"
import moyva006 from "@/assets/images/moyva-scrins006.png"
import graphGenerator from "@/assets/images/graph-generator.png"
import moyvaTool001 from "@/assets/images/moyva-scrins_001.png"
import moyvaTool002 from "@/assets/images/moyva-scrins_002.png"
import moyvaTool003 from "@/assets/images/moyva-scrins_003.png"
import moyvaTool004 from "@/assets/images/moyva-scrins_004.png"
import moyvaTool005 from "@/assets/images/moyva-scrins_005.png"
import moyvaTool006 from "@/assets/images/moyva-scrins_006.png"
import moyvaTool007 from "@/assets/images/moyva-scrins_007.png"
import moyvaTool008 from "@/assets/images/moyva-scrins_008.png"
import moyvaTool009 from "@/assets/images/moyva-scrins_009.png"
import moyvaTool010 from "@/assets/images/moyva-scrins_010.png"

interface MoyvaPageProps {
  onBack: () => void
}

export function MoyvaPage({ onBack }: MoyvaPageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0)
  const [currentCategory, setCurrentCategory] = useState<'gameplay' | 'tools' | 'generation'>('gameplay')

  const gameplayScreenshots = [moyva001, moyva002, moyva003, moyva005, moyva006]
  const toolScreenshots = [moyva004, moyvaTool001, moyvaTool002, moyvaTool003, moyvaTool004, moyvaTool005, moyvaTool006, moyvaTool007, moyvaTool008, moyvaTool009, moyvaTool010, graphGenerator]
  const generationScreenshots: string[] = []

  const allScreenshots = [...gameplayScreenshots, ...toolScreenshots, ...generationScreenshots]

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
              2D Top-Down Turn-Based Strategy Game Prototype
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
                Moyva ist ein Prototyp eines 2D Top-Down-Rundenstrategiespiels, den ich in einem kleinen Zwei-Personen-Team 
                größtenteils selbst entwickelt habe. Das Ziel des Spiels ist der Aufbau eines eigenen Königreichs, 
                die Verwaltung von Wirtschaft und Einheiten sowie die Zerstörung des gegnerischen Königreichs.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Aus technischer Sicht ist das Projekt für mich besonders interessant, weil es mehrere komplexe Systeme kombiniert. 
                Ein besonderer Schwerpunkt lag auf der Weltgenerierung: Dafür habe ich ein eigenes graphbasiertes 
                Generierungssystem mit nodebasiertem Editor entwickelt.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Das Projekt ist plattformübergreifend für PC, Android und iOS ausgelegt und unterstützt Einzelspieler, 
                Bot-Gegner, Mehrspieler, LAN sowie einen Sandbox-Modus. Moyva befindet sich aktuell im Prototyp-Stadium 
                und dient als praktisches Beispiel für meine Arbeit mit C#, Unity, technischer Systementwicklung und Gameplay-Architektur.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Meine Rolle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Obwohl das Projekt in einem Zwei-Personen-Team erstellt wurde, habe ich die meiste technische Arbeit umgesetzt:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Zentrale Spiellogik</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Mehrspielersystem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Hauptmenü</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Gebäudeplatzierungssystem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Gameplay-UI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Tile-Registry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Bewegungsvalidierung für Einheiten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Shaders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Weltgenerierungs-Tools</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Screenshots</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-2 border-b border-border overflow-x-auto">
                <button
                  onClick={() => setCurrentCategory('gameplay')}
                  className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                    currentCategory === 'gameplay'
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Gameplay
                </button>
                <button
                  onClick={() => setCurrentCategory('tools')}
                  className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                    currentCategory === 'tools'
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Tools & Editor
                </button>
              </div>

              {currentCategory === 'gameplay' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gameplayScreenshots.map((screenshot, index) => (
                    <div 
                      key={index} 
                      className="aspect-video overflow-hidden rounded-lg cursor-pointer group relative border border-border hover:border-accent transition-colors"
                      onClick={() => openLightbox(index)}
                    >
                      <img 
                        src={screenshot} 
                        alt={`Moyva Gameplay ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                    </div>
                  ))}
                </div>
              )}

              {currentCategory === 'tools' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {toolScreenshots.map((screenshot, index) => (
                    <div 
                      key={index} 
                      className="aspect-video overflow-hidden rounded-lg cursor-pointer group relative border border-border hover:border-accent transition-colors"
                      onClick={() => openLightbox(gameplayScreenshots.length + index)}
                    >
                      <img 
                        src={screenshot} 
                        alt={`Moyva Tool ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technologien</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">C#</h4>
                  <p className="text-sm text-muted-foreground">Kern-Programmiersprache</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Unity</h4>
                  <p className="text-sm text-muted-foreground">Game Engine und Framework</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">ShaderLab</h4>
                  <p className="text-sm text-muted-foreground">Unity Shader-Programmierung</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">HLSL</h4>
                  <p className="text-sm text-muted-foreground">High-Level Shader Language</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                Prototyp in Entwicklung
              </p>
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
        images={allScreenshots}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxInitialIndex}
      />
    </div>
  )
}
