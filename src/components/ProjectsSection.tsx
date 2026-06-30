import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Sparkle, Eye } from "@phosphor-icons/react"
import { ImageLightbox } from "@/components/ImageLightbox"
import graphGenerator from "@/assets/images/graph-generator.png"
import funandball001 from "@/assets/images/funandball001.jpeg"
import funandball002 from "@/assets/images/funandball002.jpeg"
import funandball003 from "@/assets/images/funandball003.jpeg"
import funandball004 from "@/assets/images/funandball004.jpeg"
import funandball005 from "@/assets/images/funandball005.jpeg"
import funandball006 from "@/assets/images/funandball006.jpeg"
import moyva001 from "@/assets/images/moyva-scrins001.png"

interface Project {
  title: string
  category: string
  description: string
  learnings?: string[]
  technologies: string[]
  status: string
  featured?: boolean
  link?: string
  customAction?: () => void
  buttonText?: string
  buttonIcon?: React.ReactNode
  image?: string
  images?: string[]
}

const createProjects = (onViewMoyva: () => void, onViewFunAndBall: () => void): Project[] => [
  {
    title: "Moyva — Unity/C# Strategy Game Project",
    category: "Größeres eigenes Projekt / Unity / C#",
    description: "Ein größeres Unity/C#-Projekt mit Fokus auf Spielsysteme, prozedurale Generierung, Editor-Tools, objektorientierte Programmierung und technische Architektur. In diesem Projekt arbeite ich an komplexeren Systemen, Generatoren, Datenstrukturen und technischen Lösungen für ein strategisches Spiel.",
    learnings: [
      "Systemarchitektur in C#",
      "objektorientierte Programmierung",
      "Unity Editor Tools",
      "prozedurale Generierung",
      "Debugging und technische Problemlösung",
      "Arbeit mit Git/GitHub"
    ],
    technologies: ["C#", "Unity", "Editor Tools", "Procedural Generation", "Systemarchitektur", "GitHub"],
    status: "Eigenes Projekt",
    featured: true,
    customAction: onViewMoyva,
    buttonText: "Projekt ansehen",
    buttonIcon: <Eye weight="bold" />,
    image: graphGenerator
  },
  {
    title: "Arduino MP3 Player",
    category: "Hardware- und Elektronik-Lernprojekt",
    description: "Ein stationärer MP3-Player auf Arduino-Basis mit Display, Lautstärkeregelung, Ladefunktion und Tasten zur Steuerung. Ziel des Projekts war es, praktische Erfahrung mit Elektronik, Verdrahtung, Komponenten, Bedienlogik und Fehlersuche zu sammeln.",
    technologies: ["Arduino", "Elektronik", "Löten", "Display", "Tastensteuerung", "Fehlersuche"],
    status: "Hardware-Lernprojekt",
    buttonText: "Dokumentation bald verfügbar",
    // TODO_REPLACE_IMAGE: durch echtes Arduino-/Elektronik-Projektfoto ersetzen.
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&h=400&fit=crop"
  },
  {
    title: "Fun and Ball",
    category: "Eigenes Game-Development-Projekt",
    description: "Ein eigenes Unity-Spielprojekt mit C#. Der Fokus liegt auf Gameplay-Logik, Spielmechaniken, Levelstruktur und technischer Problemlösung innerhalb eines größeren Projekts.",
    technologies: ["C#", "Unity", "Gameplay", "Levelstruktur", "Technische Problemlösung"],
    status: "Eigenes Game-Development-Projekt",
    customAction: onViewFunAndBall,
    buttonText: "Projekt ansehen",
    buttonIcon: <Eye weight="bold" />,
    images: [funandball001, funandball002, funandball003, funandball004, funandball005, funandball006]
  },
  {
    title: "2D Tile Generator",
    category: "Unity Technical Project / World Generation",
    description: "Ein Unity-Prototyp zur prozeduralen 2D-Weltgenerierung. Der Fokus liegt auf Chunk-Struktur, Noise Maps, Tile-Platzierung und technischer Organisation größerer generierter Karten.",
    technologies: ["C#", "Unity", "Job System", "Chunk System", "Noise Map", "World Generation"],
    status: "Unity Technical Project / World Generation",
    link: "https://github.com/Kruty1918/2D-Tile-Generator",
    buttonText: "Auf GitHub ansehen",
    image: moyva001
  },
  {
    title: "2D Hexagon Generator",
    category: "Unity Prototype / Procedural Generation",
    description: "Ein Unity-Prototyp zur prozeduralen Generierung von 2D-Hex-Feldern. Das Projekt demonstriert grundlegende Logik für Grid-Systeme, Nachbarschaftsprüfung und Interaktion mit Hex-Feldern.",
    technologies: ["C#", "Unity", "Procedural Generation", "Hex Grid", "2D"],
    status: "Unity Prototype / Procedural Generation",
    link: "https://github.com/Kruty1918/2D_Hexagon_Generator_Video_Tutorial",
    buttonText: "Auf GitHub ansehen",
    // TODO_REPLACE_IMAGE: durch echtes Grid-/Generator-Screenshot ersetzen.
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop"
  },
  {
    title: "Order Management System",
    category: "Backend-Lernprojekt",
    description: "Ein Backend-Lernprojekt zur Verwaltung von Bestellungen und Benutzern. Dabei habe ich erste Erfahrungen mit C#, ASP.NET Core, Entity Framework Core, SQLite und Docker gesammelt. Ziel des Projekts war es, Grundlagen von API-Struktur, Datenmodellen, Validierung und Backend-Architektur kennenzulernen.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "SQLite", "Docker", "Backend"],
    status: "In Entwicklung / Lernprojekt",
    link: "https://github.com/kruty1918dev-ai/order-management-system",
    buttonText: "Auf GitHub ansehen",
    // TODO_REPLACE_IMAGE: durch echtes Backend-/API-Screenshot ersetzen.
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop"
  },
  {
    title: "Unity MonoSingleton System",
    category: "Unity Utility / Architecture Tool",
    description: "Ein kleines Unity-Utility zur zentralisierten Verwaltung von Singleton-Objekten. Ziel war es, wiederverwendbare Struktur, sauberen Zugriff und bessere Lesbarkeit im Code zu üben.",
    technologies: ["C#", "Unity", "Singleton Pattern", "Package Development"],
    status: "Unity Utility / Architecture Tool",
    link: "https://github.com/Kruty1918/Unity-MonoSingleton-System",
    buttonText: "Auf GitHub ansehen",
    // TODO_REPLACE_IMAGE: durch echtes Unity-Architecture-/Code-Screenshot ersetzen.
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop"
  },
  {
    title: "Fun and Ball Website",
    category: "Web-Projekt",
    description: "Eine einfache Projekt-Webseite zur Präsentation eines eigenen Spiels. Ziel war es, grundlegende Erfahrung mit HTML, CSS und JavaScript sowie Projektpräsentation zu sammeln.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Web-Projekt",
    link: "https://fun-and-ball.web.app/",
    buttonText: "Website ansehen",
    // TODO_REPLACE_IMAGE: durch echtes Website-Screenshot ersetzen.
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop"
  }
]

interface ProjectsSectionProps {
  onViewMoyva: () => void
  onViewFunAndBall: () => void
}

export function ProjectsSection({ onViewMoyva, onViewFunAndBall }: ProjectsSectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0)

  const projects = createProjects(onViewMoyva, onViewFunAndBall)

  const openLightbox = (images: string[], initialIndex: number = 0) => {
    setLightboxImages(images)
    setLightboxInitialIndex(initialIndex)
    setLightboxOpen(true)
  }

  return (
    <section id="projects" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
          Projekte
        </h2>
        
        <div className="max-w-3xl mx-auto mb-10 bg-secondary/60 rounded-lg p-6 border border-border">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-accent/20 rounded-full p-3">
              <Sparkle size={24} weight="fill" className="text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                Arbeitsweise
              </h3>
              <p className="text-foreground/80 leading-relaxed text-sm">
                Bei meinen Projekten nutze ich verschiedene Lernquellen wie Dokumentation, Tutorials, Debugging,
                GitHub und auch KI-Tools als Unterstützung. Wichtig ist für mich, den Code zu verstehen, Probleme
                selbst zu analysieren und die Lösungen erklären zu können.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {projects.map((project) => (
            <Card key={project.title} className={`flex flex-col h-full hover:shadow-md transition-shadow duration-200 overflow-hidden ${project.featured ? "ring-2 ring-primary/20" : ""}`}>
              {project.images && project.images.length > 0 ? (
                <div className="w-full h-48 overflow-hidden bg-muted cursor-pointer relative" onClick={() => openLightbox(project.images!)}>
                  <div className="grid grid-cols-3 grid-rows-2 h-full gap-0.5">
                    {project.images.map((img, index) => (
                      <div key={index} className="relative overflow-hidden group">
                        <img 
                          src={img} 
                          alt={`${project.title} ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
                    <span className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">Klicken zum Vergrößern</span>
                  </div>
                </div>
              ) : project.image ? (
                <div 
                  className="w-full h-48 overflow-hidden bg-muted cursor-pointer group relative" 
                  onClick={() => openLightbox([project.image!])}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">Klicken zum Vergrößern</span>
                  </div>
                </div>
              ) : null}
              <CardHeader className="min-h-28">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Stärkstes aktuelles Projekt
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm text-muted-foreground italic">
                  {project.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.learnings && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Was ich dabei lerne:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.learnings.map((learning) => (
                        <li key={learning}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  disabled={!project.customAction && !project.link}
                  onClick={() => {
                    if (project.customAction) {
                      project.customAction()
                    } else if (project.link) {
                      window.open(project.link, "_blank")
                    }
                  }}
                >
                  <span>{project.buttonText || "Ansehen"}</span>
                  {project.buttonIcon || <ArrowUpRight weight="bold" />}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <ImageLightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxInitialIndex}
      />
    </section>
  )
}
