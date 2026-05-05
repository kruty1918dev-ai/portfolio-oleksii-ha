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
import moyva002 from "@/assets/images/moyva-scrins002.png"
import moyva003 from "@/assets/images/moyva-scrins003.png"
import moyva004 from "@/assets/images/moyva-scrins004.png"
import moyva005 from "@/assets/images/moyva-scrins005.png"
import moyva006 from "@/assets/images/moyva-scrins006.png"

interface Project {
  title: string
  description: string
  technologies: string[]
  status: string
  link?: string
  customAction?: () => void
  buttonText?: string
  buttonIcon?: React.ReactNode
  image?: string
  images?: string[]
}

const createProjects = (onViewMoyva: () => void, onViewFunAndBall: () => void): Project[] => [
  {
    title: "Order Management System",
    description: "Ein Backend-Lernprojekt mit C# zur Verwaltung von Bestellungen und Benutzerkonten. Ziel des Projekts ist es, praktische Erfahrung mit API-Struktur, Datenmodellen, Validierung und Backend-Architektur zu sammeln.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "SQLite", "Docker", "GitHub"],
    status: "In Entwicklung / Lernprojekt",
    link: "https://github.com/kruty1918dev-ai/order-management-system",
    buttonText: "Auf GitHub ansehen",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop"
  },
  {
    title: "Fun and Ball",
    description: "Ein eigenes Unity-Spielprojekt mit C#. Der Fokus liegt auf Gameplay-Logik, Spielmechaniken, technischer Struktur und Problemlösung in einem größeren Projekt.",
    technologies: ["C#", "Unity", "ShaderLab", "HLSL"],
    status: "Eigenes Game-Development-Projekt",
    customAction: onViewFunAndBall,
    buttonText: "Projekt ansehen",
    buttonIcon: <Eye weight="bold" />,
    images: [funandball001, funandball002, funandball003, funandball004, funandball005, funandball006]
  },
  {
    title: "Moyva",
    description: "Ein weiteres C#-Projekt mit Fokus auf Spiellogik, objektorientierte Programmierung und technische Systeme.",
    technologies: ["C#", "Unity", "ShaderLab", "HLSL"],
    status: "Eigenes Projekt",
    customAction: onViewMoyva,
    buttonText: "Projekt ansehen",
    buttonIcon: <Eye weight="bold" />,
    image: graphGenerator
  },
  {
    title: "Fun and Ball Website",
    description: "Eine einfache Projekt-Webseite zur Präsentation eines eigenen Spiels.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Web-Projekt",
    link: "https://kruty1918.github.io/Fun-and-Ball-web/",
    buttonText: "Website ansehen",
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
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
          Projekte
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-6 border border-accent/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-accent/20 rounded-full p-3">
              <Sparkle size={24} weight="fill" className="text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                KI-gestützte Entwicklung
              </h3>
              <p className="text-foreground/80 leading-relaxed text-sm">
                Alle meine Projekte wurden mit Unterstützung von künstlicher Intelligenz entwickelt. 
                Das bedeutet nicht, dass ich inkompetent bin – ganz im Gegenteil: Ich kann Aufgaben mehrfach schneller 
                als andere erledigen. Ich konzentriere mich auf das <strong>Ergebnis</strong>, während Kenntnisse und 
                Werkzeuge nur Mittel sind, um das gewünschte Ziel zu erreichen. Diese moderne Arbeitsweise ermöglicht 
                es mir, effizienter zu lernen, schneller zu iterieren und qualitativ hochwertige Lösungen zu liefern.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:shadow-md transition-shadow duration-200 overflow-hidden">
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
                    <span className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">Click to view</span>
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
                    <span className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">Click to view</span>
                  </div>
                </div>
              ) : null}
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground italic">
                  {project.status}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
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
