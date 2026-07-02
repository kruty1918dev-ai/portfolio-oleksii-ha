import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DownloadSimple, Copy, ArrowLeft, FilePdf } from "@phosphor-icons/react"
import { toast } from "sonner"
import { cvData } from "@/lib/cvData"
import profilePhoto from "@/assets/images/Ich.png"
import { useEffect, useRef, useState } from "react"
import QRCode from "qrcode"
import jsPDF from "jspdf"

interface CVPageProps {
  onBack: () => void
}

const loadSquareImageDataUrl = (src: string, size = 900): Promise<string> => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.crossOrigin = "anonymous"
    image.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = size
      canvas.height = size

      const context = canvas.getContext("2d")
      if (!context) {
        reject(new Error("Image canvas context could not be created"))
        return
      }

      const sourceSize = Math.min(image.naturalWidth, image.naturalHeight)
      const sourceX = (image.naturalWidth - sourceSize) / 2
      const sourceY = (image.naturalHeight - sourceSize) / 2

      context.fillStyle = "#ffffff"
      context.fillRect(0, 0, size, size)
      context.drawImage(image, sourceX, sourceY, sourceSize, sourceSize, 0, 0, size, size)

      resolve(canvas.toDataURL("image/jpeg", 0.95))
    }
    image.onerror = () => reject(new Error("Profile image could not be loaded"))
    image.src = src
  })
}

export function CVPage({ onBack }: CVPageProps) {
  const qrCanvasRef = useRef<HTMLCanvasElement>(null)
  const cvContentRef = useRef<HTMLDivElement>(null)
  const portfolioUrl = "https://portfolio-oleksii-ha--kruty1918dev-ai.github.app/"
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  useEffect(() => {
    if (qrCanvasRef.current) {
      QRCode.toCanvas(qrCanvasRef.current, portfolioUrl, {
        width: 160,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      }).catch((err) => {
        console.error('QR Code generation error:', err)
      })
    }
  }, [])

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

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true)
    toast.info('PDF wird generiert...')

    try {
      const [profileImageDataUrl, qrDataUrl] = await Promise.all([
        loadSquareImageDataUrl(profilePhoto),
        QRCode.toDataURL(portfolioUrl, {
          width: 900,
          margin: 1,
          color: {
            dark: "#111827",
            light: "#ffffff"
          }
        })
      ])
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const margin = 12
      const rightColumnX = 122
      const leftColumnWidth = 86
      const rightColumnWidth = pageWidth - rightColumnX - margin
      const headerTextWidth = 96
      const headerMediaX = 124
      const panelFill = "#f9fafb"
      const line = "#e5e7eb"
      const text = "#1f2937"
      const muted = "#6b7280"
      let leftY = 18
      let rightY = 18

      const setText = (size: number, color = text, style: "normal" | "bold" = "normal") => {
        pdf.setFont("helvetica", style)
        pdf.setFontSize(size)
        pdf.setTextColor(color)
      }

      const section = (title: string, x: number, y: number, width: number) => {
        pdf.setDrawColor(line)
        pdf.setLineWidth(0.3)
        pdf.line(x, y, x + width, y)
        setText(11.2, text, "bold")
        pdf.text(title, x, y + 7)
        return y + 11
      }

      const wrap = (value: string, width: number) => pdf.splitTextToSize(value, width) as string[]

      const safeText = (
        value: string,
        x: number,
        y: number,
        width: number,
        size = 8,
        color = text,
        style: "normal" | "bold" = "normal",
        lineHeight = 3.8
      ) => {
        setText(size, color, style)
        const lines = wrap(value, width)
        pdf.text(lines, x, y)
        return y + Math.max(lineHeight, lines.length * lineHeight)
      }

      const kv = (label: string, value: string, x: number, y: number, width: number, size = 8.2) => {
        setText(size, text, "bold")
        pdf.text(`${label}:`, x, y)
        const labelWidth = pdf.getTextWidth(`${label}: `)
        setText(size, text)
        const lines = wrap(value, width - labelWidth)
        pdf.text(lines, x + labelWidth, y)
        return y + Math.max(4.5, lines.length * 4)
      }

      const bullet = (value: string, x: number, y: number, width: number, size = 8) => {
        const lines = wrap(value, width - 5)
        setText(size, text)
        pdf.text("•", x, y)
        pdf.text(lines, x + 5, y)
        return y + Math.max(4, lines.length * 3.8)
      }

      const smallText = (value: string, x: number, y: number, width: number, size = 8.1, color = text) => {
        return safeText(value, x, y, width, size, color)
      }

      pdf.setFillColor("#ffffff")
      pdf.rect(0, 0, pageWidth, pageHeight, "F")
      pdf.setFillColor(panelFill)
      pdf.rect(0, 0, pageWidth, 58, "F")
      pdf.setDrawColor(line)
      pdf.line(margin, 58, pageWidth - margin, 58)

      setText(22, text, "bold")
      pdf.text("Lebenslauf", margin, leftY)
      leftY += 8
      leftY = safeText(
        "Oleksii Havryliuk - Bewerber für eine IT-Ausbildung im Raum Hannover",
        margin,
        leftY,
        headerTextWidth,
        9.2,
        muted,
        "normal",
        4.2
      )
      leftY += 3

      const headerInfoWidth = headerTextWidth
      leftY = kv("Telefon", "+38 093 464 1796", margin, leftY, headerInfoWidth, 8.5)
      leftY = kv("Adresse", "Kapitänspromenade 6, 23966 Wismar", margin, leftY, headerInfoWidth, 8.5)
      leftY = kv("E-Mail", "kruty1918.dev@gmail.com", margin, leftY, headerInfoWidth, 8.5)
      leftY = kv("GitHub", "github.com/kruty1918dev-ai", margin, leftY, headerInfoWidth, 8.5)

      pdf.setDrawColor("#d1d5db")
      pdf.setLineWidth(0.5)
      pdf.roundedRect(headerMediaX, 18, 29, 29, 2, 2, "S")
      pdf.addImage(qrDataUrl, "PNG", headerMediaX + 2, 20, 25, 25)
      pdf.roundedRect(headerMediaX + 38, 18, 29, 29, 2, 2, "S")
      pdf.addImage(profileImageDataUrl, "JPEG", headerMediaX + 39, 19, 27, 27)
      setText(6.8, muted)
      pdf.text("Online-Portfolio", headerMediaX + 14.5, 53, { align: "center" })
      pdf.text("Profilfoto", headerMediaX + 52.5, 53, { align: "center" })

      leftY = 64
      rightY = 64

      leftY = section("Persönliche Daten", margin, leftY, leftColumnWidth)
      leftY = kv("Geburtsdatum/-ort", "16.05.2008, Khmelnytskyi (Ukraine)", margin, leftY, leftColumnWidth)
      leftY = kv("Wohnort", "Wismar, Deutschland - umzugsbereit in den Raum Hannover", margin, leftY, leftColumnWidth)
      leftY = kv("Staatsangehörigkeit", "Ukrainisch", margin, leftY, leftColumnWidth)
      leftY = kv("Aufenthalt", "Aufenthaltserlaubnis nach § 24 AufenthG", margin, leftY, leftColumnWidth)

      leftY = section("Kurzprofil", margin, leftY + 4, leftColumnWidth)
      leftY = smallText("18-jähriger Bewerber aus der Ukraine mit praktischer Erfahrung in C#, Unity, Git/GitHub, Linux/Ubuntu, PC-Hardware und Arduino. Ich lerne am besten durch eigene Projekte und technische Fehlersuche.", margin, leftY, leftColumnWidth, 7.8)

      leftY = section("Schulbildung & Deutsch", margin, leftY + 4, leftColumnWidth)
      setText(8.4, text, "bold")
      pdf.text("09/2014 - 05/2024", margin, leftY)
      leftY += 4
      leftY = smallText("Sharivska Mittelschule, Schulabschluss nach 11 Schuljahren. Unterlagen liegen in deutscher Übersetzung vor; Bewertung in Niedersachsen wird vorbereitet.", margin, leftY, leftColumnWidth, 8)
      setText(8.4, text, "bold")
      pdf.text("09/2024 - 07/2025", margin, leftY + 1)
      leftY += 5
      leftY = smallText("Zierow Berufsschule - Deutschförderung / sprachliche Vorbereitung, nicht benotet", margin, leftY, leftColumnWidth, 8)
      setText(8.4, text, "bold")
      pdf.text("Deutsch", margin, leftY + 1)
      leftY += 5
      leftY = smallText("Aktuell B1-Deutschkurs, B1-Prüfung am 18.07. geplant, Ziel B2 bis Ausbildungsbeginn.", margin, leftY, leftColumnWidth, 8)

      leftY = section("Kenntnisse", margin, leftY + 4, leftColumnWidth)
      leftY = bullet("C# und Unity: gute Grundkenntnisse durch eigene Projekte", margin, leftY, leftColumnWidth)
      leftY = bullet("Git/GitHub: Commit, Push, Pull, Merge, Konfliktlösung", margin, leftY, leftColumnWidth)
      leftY = bullet("Linux/Ubuntu: Terminal, Einrichtung, Fehlersuche", margin, leftY, leftColumnWidth)
      leftY = bullet("SQL/Datenbanken und ASP.NET Core: erste Grundlagen", margin, leftY, leftColumnWidth)
      leftY = bullet("PC-Hardware, Arduino, Elektronik, Löten, Netzwerke", margin, leftY, leftColumnWidth)

      leftY = section("Sprachen & Stärken", margin, leftY + 4, leftColumnWidth)
      leftY = kv("Ukrainisch", "Muttersprache", margin, leftY, leftColumnWidth, 8)
      leftY = kv("Deutsch", "B1-Kurs, Ziel B2", margin, leftY, leftColumnWidth, 8)
      leftY = kv("Englisch", "Grundkenntnisse", margin, leftY, leftColumnWidth, 8)
      leftY = smallText("Lernbereit, zuverlässig, ruhig, ausdauernd, technisch interessiert.", margin, leftY + 1, leftColumnWidth, 8)

      rightY = section("Ausbildungsziel", rightColumnX, rightY, rightColumnWidth)
      rightY = smallText("Ich suche eine duale IT-Ausbildung im Raum Hannover ab 2026 oder 2027. Besonders interessieren mich Systemintegration, Anwendungsentwicklung, digitale Vernetzung und IT-Systemelektronik.", rightColumnX, rightY, rightColumnWidth, 8.2)
      rightY = bullet("Fachinformatiker für Systemintegration", rightColumnX, rightY + 1, rightColumnWidth)
      rightY = bullet("Fachinformatiker für Anwendungsentwicklung", rightColumnX, rightY, rightColumnWidth)
      rightY = bullet("Fachinformatiker für Digitale Vernetzung", rightColumnX, rightY, rightColumnWidth)
      rightY = bullet("IT-Systemelektroniker", rightColumnX, rightY, rightColumnWidth)

      rightY = section("Praktische Projekte", rightColumnX, rightY + 4, rightColumnWidth)
      setText(8.4, text, "bold")
      pdf.text("Moyva - Unity/C# Strategy Game Project", rightColumnX, rightY)
      rightY += 4
      rightY = smallText("Größeres Unity/C#-Projekt mit Spielsystemen, prozeduraler Generierung, Editor-Tools, objektorientierter Programmierung und technischer Architektur.", rightColumnX, rightY, rightColumnWidth, 8)
      setText(8.4, text, "bold")
      pdf.text("Arduino MP3 Player", rightColumnX, rightY + 1)
      rightY += 5
      rightY = smallText("Hardware- und Elektronik-Lernprojekt mit Display, Tastensteuerung, Lautstärkeregelung, Ladefunktion und Fehlersuche.", rightColumnX, rightY, rightColumnWidth, 8)
      setText(8.4, text, "bold")
      pdf.text("Weitere Projekte", rightColumnX, rightY + 1)
      rightY += 5
      rightY = bullet("Fun and Ball: Unity-Spielprojekt mit Gameplay-Logik", rightColumnX, rightY, rightColumnWidth)
      rightY = bullet("2D Tile/Hex Generator: prozedurale Generierung", rightColumnX, rightY, rightColumnWidth)
      rightY = bullet("Order Management System: ASP.NET Core, EF Core, SQLite, Docker", rightColumnX, rightY, rightColumnWidth)
      rightY = bullet("Unity MonoSingleton System: Utility/Architecture Tool", rightColumnX, rightY, rightColumnWidth)

      rightY = section("Hardware & Technik", rightColumnX, rightY + 4, rightColumnWidth)
      rightY = bullet("PCs und Notebooks öffnen, reinigen, Wärmeleitpaste erneuern", rightColumnX, rightY, rightColumnWidth)
      rightY = bullet("Komponenten verstehen und technische Fehler suchen", rightColumnX, rightY, rightColumnWidth)
      rightY = bullet("Linux/Ubuntu, Router, LAN, WLAN und IT-Infrastruktur", rightColumnX, rightY, rightColumnWidth)
      rightY = bullet("Arduino, Kabel, kleine Elektronikarbeiten und Löten", rightColumnX, rightY, rightColumnWidth)

      rightY = section("Arbeitsweise", rightColumnX, rightY + 4, rightColumnWidth)
      rightY = smallText("Ich nutze Dokumentation, Tutorials, Debugging, GitHub und KI-Tools als Unterstützung. Wichtig ist mir, den Code zu verstehen, Probleme selbst zu analysieren und Lösungen erklären zu können.", rightColumnX, rightY, rightColumnWidth, 8)

      const panelTop = Math.max(leftY, rightY) + 6
      const panelHeight = 36
      pdf.setFillColor(panelFill)
      pdf.roundedRect(margin, panelTop, pageWidth - margin * 2, panelHeight, 2, 2, "F")
      pdf.setDrawColor(line)
      pdf.roundedRect(margin, panelTop, pageWidth - margin * 2, panelHeight, 2, 2, "S")

      const panelColumnWidth = (pageWidth - margin * 2 - 8) / 2
      let panelLeftY = panelTop + 8
      let panelRightY = panelTop + 8
      setText(10.5, text, "bold")
      pdf.text("Warum ich gut zu einer IT-Ausbildung passe", margin + 4, panelLeftY)
      panelLeftY += 5
      panelLeftY = bullet("Analytisches Denken und ruhige Fehlersuche", margin + 4, panelLeftY, panelColumnWidth - 4, 7.5)
      panelLeftY = bullet("Eigene Projekte statt nur Theorie", margin + 4, panelLeftY, panelColumnWidth - 4, 7.5)
      panelLeftY = bullet("Breites Interesse an Software, Systemen und Hardware", margin + 4, panelLeftY, panelColumnWidth - 4, 7.5)

      const panelRightX = margin + 4 + panelColumnWidth + 8
      setText(10.5, text, "bold")
      pdf.text("Hannover & nächster Schritt", panelRightX, panelRightY)
      panelRightY += 5
<<<<<<< Updated upstream
      panelRightY = smallText("Ich möchte im Raum Hannover langfristig lernen, arbeiten und mich im IT-Bereich professionell entwickeln. Für einen passenden Ausbildungsplatz bin ich umzugsbereit.", panelRightX, panelRightY, panelColumnWidth - 4, 7.5)
      panelRightY = kv("Verfügbarkeit", "Ausbildung ab 2026 oder 2027", panelRightX, panelRightY + 1, panelColumnWidth - 4, 7.5)
=======
      panelRightY = smallText("Ich möchte im Raum Hannover langfristig lernen und arbeiten. Für einen passenden Ausbildungsplatz bin ich umzugsbereit.", panelRightX, panelRightY, panelColumnWidth - 4, 7.3)
      panelRightY = smallText("Nächster Schritt: IT-Ausbildung im Raum Hannover", panelRightX, panelRightY + 1, panelColumnWidth - 4, 7.3)
>>>>>>> Stashed changes

      const footerLineY = Math.max(281, Math.max(panelLeftY, panelRightY) + 3)
      pdf.setDrawColor(line)
      pdf.line(margin, footerLineY, pageWidth - margin, footerLineY)
      setText(7.2, muted)
<<<<<<< Updated upstream
      pdf.text("Wismar, den 29.06.2026", margin, 286)
      pdf.text(`Portfolio: ${portfolioUrl}`, pageWidth - margin, 285, { align: "right" })
      pdf.text("GitHub: github.com/kruty1918dev-ai", pageWidth - margin, 289, { align: "right" })
=======
      pdf.text("Wismar, den 02.07.2026", margin, footerLineY + 5)
      pdf.text(`Portfolio: ${portfolioUrl}`, pageWidth - margin, footerLineY + 4, { align: "right" })
      pdf.text("GitHub: github.com/kruty1918dev-ai", pageWidth - margin, footerLineY + 8, { align: "right" })
>>>>>>> Stashed changes

      pdf.save('Oleksii_Havryliuk_Lebenslauf.pdf')

      toast.success('PDF erfolgreich heruntergeladen')
    } catch (error) {
      console.error('PDF generation error:', error)
      toast.error('Fehler beim Erstellen des PDFs')
    } finally {
      setIsGeneratingPDF(false)
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
              Oleksii Havryliuk — Bewerber für eine IT-Ausbildung im Raum Hannover
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleDownloadPDF}
              className="gap-2"
              disabled={isGeneratingPDF}
            >
              <FilePdf weight="fill" />
              {isGeneratingPDF ? 'PDF wird erstellt...' : 'Als PDF herunterladen'}
            </Button>
            <Button
              size="lg"
              variant="outline"
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

          <Card className="p-4 md:p-10 bg-card/50 backdrop-blur overflow-x-auto">
            <div
              ref={cvContentRef}
              data-pdf-content="lebenslauf"
              className="space-y-8 bg-white p-8 md:p-10 w-full md:w-[794px] md:max-w-none mx-auto shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Lebenslauf</h2>
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div><span className="font-semibold">Name:</span> Oleksii Havryliuk</div>
                      <div><span className="font-semibold">Telefon:</span> +38 093 464 1796</div>
                      <div><span className="font-semibold">Adresse:</span> Kapitänspromenade 6, 23966 Wismar</div>
                      <div><span className="font-semibold">E-Mail:</span> kruty1918.dev@gmail.com</div>
                      <div><span className="font-semibold">GitHub:</span> github.com/kruty1918dev-ai</div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 items-center flex-shrink-0">
                    <div className="flex-shrink-0">
                      <img 
                        src={profilePhoto} 
                        alt="Oleksii Havryliuk" 
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg border-4 border-primary/20 shadow-lg"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-white p-2 rounded-lg shadow-md border-2 border-primary/10">
                        <canvas ref={qrCanvasRef} />
                      </div>
                      <p className="text-xs text-muted-foreground text-center max-w-[160px]">
                        Online-Portfolio
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Persönliche Daten</h3>
                <div className="text-sm space-y-1 text-foreground/90">
                  <p><span className="font-semibold">Name:</span> Oleksii Havryliuk</p>
                  <p><span className="font-semibold">Geburtsdatum/-ort:</span> 16.05.2008, Khmelnytskyi (Ukraine)</p>
                  <p><span className="font-semibold">Wohnort:</span> 23966 Wismar, Deutschland — umzugsbereit in den Raum Hannover</p>
                  <p><span className="font-semibold">Staatsangehörigkeit:</span> Ukrainisch</p>
                  <p><span className="font-semibold">Aufenthalt:</span> Aufenthaltserlaubnis nach § 24 AufenthG</p>
                  <p><span className="font-semibold">Eltern:</span> Natalia Havryliuk (Mutter)</p>
                  <p><span className="font-semibold">Geschwister:</span> Taras, Tetiana, Karina, Nika</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Schulbildung</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold">09/2024 – 07/2025</p>
                    <p className="text-foreground/90">Zierow Berufsschule</p>
                    <p className="text-muted-foreground">Deutschförderung / sprachliche Vorbereitung, nicht benotet</p>
                  </div>
                  <div>
                    <p className="font-semibold">09/2014 - 05/2024</p>
                    <p className="text-foreground/90">Sharivska Mittelschule</p>
                    <p className="text-muted-foreground">Schulabschluss: Mittlerer Schulabschluss (Mai 2024)</p>
                    <p className="text-muted-foreground">Die Schulunterlagen liegen in deutscher Übersetzung vor. Die Bewertung in Niedersachsen wird vorbereitet.</p>
                  </div>
                  <div>
                    <p className="font-semibold">seit 11/2025</p>
                    <p className="text-foreground/90">Integrationskurs Deutsch, Wismar</p>
                    <p className="text-muted-foreground">B1-Prüfung am 18.07. geplant, Ziel: B2 bis zum Ausbildungsbeginn</p>
                    <p className="text-muted-foreground">voraussichtliches Kursende: 07/2026</p>
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
                      <li>Interesse an Systemintegration, Anwendungsentwicklung, digitaler Vernetzung und technischer Problemlösung</li>
                      <li>Beschäftigung mit GitHub, Linux/Ubuntu und modernen Entwicklungstools</li>
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
                      <li>Beschäftigung mit C#, ASP.NET Core, APIs, SQL und Grundlagen moderner Backend-Entwicklung</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Hardware und technische Systeme</p>
                    <ul className="list-disc list-inside space-y-1 text-foreground/90 ml-4">
                      <li>Praktische Erfahrung mit PC-Hardware, Linux/Ubuntu, Netzwerken, Arduino, Elektronik und Löten</li>
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
                    <p className="text-foreground/90">GitHub, Linux/Ubuntu, Visual Studio, Visual Studio Code, Unity, PC-Hardware, Arduino, Netzwerke</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Sprachkenntnisse</h3>
                <div className="text-sm space-y-1 text-foreground/90">
                  <p><span className="font-semibold">Ukrainisch:</span> Muttersprache</p>
                  <p><span className="font-semibold">Deutsch:</span> aktuell B1-Deutschkurs, B1-Prüfung am 18.07. geplant, Ziel B2 bis Ausbildungsbeginn</p>
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
                  <li>Linux/Ubuntu, PC-Hardware und Elektronik</li>
                  <li>eigene IT-Projekte</li>
                </ul>
              </div>

              <Separator />

              <div className="text-sm text-muted-foreground text-center pt-4">
                <p>Wismar, den 29.06.2026</p>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              onClick={handleDownloadPDF}
              className="gap-2"
              disabled={isGeneratingPDF}
            >
              <FilePdf weight="fill" />
              {isGeneratingPDF ? 'PDF wird erstellt...' : 'Als PDF herunterladen'}
            </Button>
            <Button
              size="lg"
              variant="outline"
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
