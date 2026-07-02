import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ArrowLeft, PaperPlaneTilt, EnvelopeSimple, User, ChatText, Phone, GithubLogo } from "@phosphor-icons/react"
import { toast } from "sonner"
import { profile } from "@/lib/profile"

interface ContactPageProps {
  onBack: () => void
}

export function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Bitte füllen Sie alle erforderlichen Felder aus")
      return
    }

    setIsSubmitting(true)

    const mailtoLink = `${profile.emailHref}?subject=${encodeURIComponent(
      formData.subject || `Nachricht von ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\n\n${formData.message}`
    )}`

    window.location.href = mailtoLink

    setTimeout(() => {
      toast.success("Ihr E-Mail-Programm wurde geöffnet")
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 gap-2"
        >
          <ArrowLeft />
          Zurück zum Portfolio
        </Button>

        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Kontakt aufnehmen
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ich freue mich über Rückmeldungen, Ausbildungsangebote, Praktikumsmöglichkeiten,
            Einstiegsqualifizierung oder Hinweise zu IT-Ausbildungen im Raum Hannover.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <EnvelopeSimple size={24} weight="fill" className="text-primary" />
              </div>
              <CardTitle className="text-lg">E-Mail</CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href={profile.emailHref}
                className="text-sm break-all text-muted-foreground hover:text-primary transition-colors"
              >
                {profile.email}
              </a>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone size={24} weight="fill" className="text-primary" />
              </div>
              <CardTitle className="text-lg">Telefon</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={profile.phoneHref}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {profile.phoneDisplay}
              </a>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <User size={24} weight="fill" className="text-accent" />
              </div>
              <CardTitle className="text-lg">Standort</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {profile.locationDe} — {profile.relocationDe}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GithubLogo size={24} weight="fill" className="text-primary" />
              </div>
              <CardTitle className="text-lg">GitHub</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {profile.githubHandle}
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 border-dashed">
          <CardHeader>
            <div className="flex items-center gap-2 text-primary">
              <ChatText size={20} weight="fill" />
              <CardTitle className="text-lg">Hinweis zur Kontaktaufnahme</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Für Bewerbungen ist mein Telefon öffentlich sichtbar. Am zuverlässigsten antworte ich per E-Mail;
              Rückmeldungen zu Ausbildungsplätzen, Praktika und technischen Gesprächen beantworte ich zeitnah.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Nachricht senden</CardTitle>
            <CardDescription>
              Füllen Sie das Formular aus und ich werde mich so schnell wie möglich bei Ihnen melden.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    E-Mail <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ihre.email@beispiel.de"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Betreff</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Worum geht es?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Nachricht <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Schreiben Sie hier Ihre Nachricht..."
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gap-2"
              >
                <PaperPlaneTilt weight="fill" />
                {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Durch Klicken auf "Nachricht senden" wird Ihr Standard-E-Mail-Programm geöffnet
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
