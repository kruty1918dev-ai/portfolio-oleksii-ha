import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "@phosphor-icons/react"

interface Project {
  title: string
  description: string
  technologies: string[]
  status: string
  link: string
}

const projects: Project[] = [
  {
    title: "Order Management System",
    description: "Ein Backend-Lernprojekt mit C# zur Verwaltung von Bestellungen und Benutzerkonten. Ziel des Projekts ist es, praktische Erfahrung mit API-Struktur, Datenmodellen, Validierung und Backend-Architektur zu sammeln.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "SQLite", "Docker", "GitHub"],
    status: "In Entwicklung / Lernprojekt",
    link: "https://github.com/kruty1918dev-ai/order-management-system"
  },
  {
    title: "Fun and Ball",
    description: "Ein eigenes Unity-Spielprojekt mit C#. Der Fokus liegt auf Gameplay-Logik, Spielmechaniken, technischer Struktur und Problemlösung in einem größeren Projekt.",
    technologies: ["C#", "Unity", "ShaderLab", "HLSL"],
    status: "Eigenes Game-Development-Projekt",
    link: "https://github.com/Kruty1918/Fun-and-Ball"
  },
  {
    title: "Moyva",
    description: "Ein weiteres C#-Projekt mit Fokus auf Spiellogik, objektorientierte Programmierung und technische Systeme.",
    technologies: ["C#", "Unity", "ShaderLab", "HLSL"],
    status: "Eigenes Projekt",
    link: "https://github.com/kruty1918dev-ai/moyva"
  },
  {
    title: "Fun and Ball Website",
    description: "Eine einfache Projekt-Webseite zur Präsentation eines eigenen Spiels.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Web-Projekt",
    link: "https://github.com/Kruty1918/Fun-and-Ball-web"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
          Projekte
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:shadow-md transition-shadow duration-200">
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
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <span>Auf GitHub ansehen</span>
                  <ArrowUpRight weight="bold" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
