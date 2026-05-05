import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DownloadSimple, Copy, ArrowLeft, FilePdf } from "@phosphor-icons/react"
import { toast } from "sonner"
import { cvData } from "@/lib/cvData"
import profilePhoto from "@/assets/images/Ich.png"
import { useEffect, useRef, useState } from "react"
import QRCode from "qrcode"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface CVPageProps {
  onBack: () => void
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
    if (!cvContentRef.current) return

    setIsGeneratingPDF(true)
    toast.info('PDF wird generiert...')

    try {
      const element = cvContentRef.current
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const canvasWidth = canvas.width
      const canvasHeight = canvas.height
      
      const widthRatio = pdfWidth / (canvasWidth * 0.264583)
      const heightRatio = pdfHeight / (canvasHeight * 0.264583)
      const ratio = Math.min(widthRatio, heightRatio)
      
      const imgWidth = canvasWidth * 0.264583 * ratio
      const imgHeight = canvasHeight * 0.264583 * ratio
      const imgX = (pdfWidth - imgWidth) / 2
      const imgY = 5

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth, imgHeight)

      pdf.setFontSize(8)
      pdf.setTextColor(100, 100, 100)
      const footerY = pdfHeight - 10
      pdf.text('© 2026 Oleksii Havryliuk', pdfWidth / 2, footerY, { align: 'center' })
      pdf.setFontSize(7)
      pdf.text(`Portfolio: ${portfolioUrl}`, pdfWidth / 2, footerY + 3, { align: 'center' })
      pdf.text('Erstellt: ' + new Date().toLocaleDateString('de-DE'), pdfWidth / 2, footerY + 6, { align: 'center' })

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
              Oleksii Havryliuk — Bewerber für Fachinformatiker Anwendungsentwicklung
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

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur">
            <div ref={cvContentRef} className="space-y-8 bg-white p-8">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Lebenslauf</h2>
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div><span className="font-semibold">Name:</span> Oleksii Havryliuk</div>
                      <div><span className="font-semibold">Telefon:</span> +38 093 464 1796</div>
                      <div><span className="font-semibold">Adresse:</span> Kapitänspromenade 6, 23966 Wismar</div>
                      <div><span className="font-semibold">E-Mail:</span> vkmr582@gmail.com</div>
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
                  <p><span className="font-semibold">Wohnort:</span> 23966 Wismar, Deutschland</p>
                  <p><span className="font-semibold">Staatsangehörigkeit:</span> Ukrainisch</p>
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
                  </div>
                  <div>
                    <p className="font-semibold">09/2014 - 05/2024</p>
                    <p className="text-foreground/90">Sharivska Mittelschule</p>
                    <p className="text-muted-foreground">Schulabschluss: Mittlerer Schulabschluss (Mai 2024)</p>
                    <p className="text-muted-foreground">Abschlusszeugnis in deutscher Übersetzung vorhanden</p>
                  </div>
                  <div>
                    <p className="font-semibold">seit 11/2025</p>
                    <p className="text-foreground/90">Integrationskurs Deutsch, Wismar</p>
                    <p className="text-muted-foreground">Vorbereitung auf die B1-Prüfung</p>
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
