import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen } from "@phosphor-icons/react"
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
  const [currentCategory, setCurrentCategory] = useState<'gameplay' | 'generation'>('gameplay')

  const gameplayScreenshots = [moyva001, moyva002, moyva003, moyva004, moyva005, moyva006]
  const generationScreenshots = [graphGenerator]

  const allScreenshots = [...gameplayScreenshots, ...generationScreenshots]

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
              <CardTitle>Project Overview / Projektbeschreibung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">English</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Moyva is a 2D top-down turn-based strategy game prototype built with C#. 
                  The player builds a kingdom, manages economy and units, places buildings, and tries to destroy the enemy kingdom.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The project supports single-player mode, bot opponents, multiplayer, LAN play, sandbox mode, save system, 
                  and cross-platform support for PC, Android, and iOS.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  A key technical focus of the project is its custom world generation pipeline. 
                  The game uses a self-designed graph-based generation system together with a node-based editor for visual generation setup.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Deutsch</h3>
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
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>My Role / Meine Rolle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Although the project was created in a two-person team, I implemented most of the actual technical work, including:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Core gameplay logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Multiplayer system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Main menu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Building placement system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Gameplay UI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Tile registry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Unit movement validators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>Shaders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▪</span>
                  <span>World generation tools</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Screenshots</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-2 border-b border-border">
                <button
                  onClick={() => setCurrentCategory('gameplay')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    currentCategory === 'gameplay'
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Gameplay
                </button>
                <button
                  onClick={() => setCurrentCategory('generation')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    currentCategory === 'generation'
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  World Generation Tools
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

              {currentCategory === 'generation' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {generationScreenshots.map((screenshot, index) => (
                    <div 
                      key={index} 
                      className="aspect-video overflow-hidden rounded-lg cursor-pointer group relative border border-border hover:border-accent transition-colors"
                      onClick={() => openLightbox(gameplayScreenshots.length + index)}
                    >
                      <img 
                        src={screenshot} 
                        alt={`World Generation Tool ${index + 1}`}
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
              <CardTitle>Technologies / Technologien</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">C#</h4>
                  <p className="text-sm text-muted-foreground">Core programming language</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Unity</h4>
                  <p className="text-sm text-muted-foreground">Game engine and framework</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">ShaderLab</h4>
                  <p className="text-sm text-muted-foreground">Unity shader programming</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">HLSL</h4>
                  <p className="text-sm text-muted-foreground">High-level shader language</p>
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
                Prototype in development / Prototyp in Entwicklung
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
