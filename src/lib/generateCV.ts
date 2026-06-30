export function generateCVData() {
  const cvContent = `
LEBENSLAUF
═══════════════════════════════════════════════════════════════

PERSÖNLICHE DATEN
───────────────────────────────────────────────────────────────
Name:           Oleksii Havryliuk
Alter:          18 Jahre
Wohnort:        Wismar, Deutschland — umzugsbereit in den Raum Hannover
E-Mail:         kruty1918.dev@gmail.com
GitHub:         github.com/kruty1918dev-ai
Aufenthalt:     Aufenthaltserlaubnis nach § 24 AufenthG


BERUFSZIEL
───────────────────────────────────────────────────────────────
Duale IT-Ausbildung im Raum Hannover ab 2026 oder 2027.
Besonders interessieren mich Systemintegration, Anwendungsentwicklung,
digitale Vernetzung, IT-Systemelektronik und technische Problemlösung.


ÜBER MICH
───────────────────────────────────────────────────────────────
Ich heiße Oleksii Havryliuk, bin 18 Jahre alt und lebe derzeit in
Wismar. Ich beschäftige mich mit eigenen Projekten in C#, Unity,
prozeduraler Generierung und GitHub. Zusätzlich interessiere ich mich
für Linux/Ubuntu, PC-Hardware, Netzwerke, Arduino, Elektronik und Löten.


TECHNISCHE FÄHIGKEITEN
───────────────────────────────────────────────────────────────
• Programmiersprachen: C#, HTML, CSS, JavaScript
• Frameworks & Tools: ASP.NET Core, Unity, Git/GitHub, Docker
• Datenbanken: SQL / Datenbanken
• Systeme: Linux/Ubuntu, Windows, PC-Hardware
• Technik: Fehleranalyse, Netzwerke, Arduino, Elektronik / Löten


PROJEKTE
───────────────────────────────────────────────────────────────

Moyva — Unity/C# Strategy Game Project
──────────────────────────────────────
Größeres Unity/C#-Projekt mit Fokus auf Spielsysteme, prozedurale
Generierung, Editor-Tools, objektorientierte Programmierung und
technische Architektur.

Arduino MP3 Player
──────────────────
Hardware- und Elektronik-Lernprojekt mit Display, Tastensteuerung,
Lautstärkeregelung, Ladefunktion und Fehlersuche.

Weitere Projekte
────────────────
Fun and Ball, 2D Tile Generator, 2D Hexagon Generator,
Order Management System, Unity MonoSingleton System und
Fun and Ball Website.


ZEITLICHER WERDEGANG
───────────────────────────────────────────────────────────────
2024             Schulabschluss nach 11 Schuljahren in der Ukraine
2025 - 2026      B1-Deutschkurs in Deutschland, Prüfung am 18.07. geplant
Heute            Eigene Projekte mit C#, Unity, Git/GitHub und Technik
2026/2027        Ziel: duale IT-Ausbildung im Raum Hannover


WARUM ICH?
───────────────────────────────────────────────────────────────
✓ Praktische Erfahrung: Eigene Projekte mit C#, Unity und
  Unity, Git/GitHub, Hardware und Arduino umgesetzt
  
✓ Technisches Interesse: Software, PC-Hardware, Linux/Ubuntu,
  Netzwerke und Elektronik
  
✓ Lernbereitschaft: Ausbildung als Startpunkt für professionelles
  Lernen im Unternehmen
  
✓ Ausdauer: Ruhiges und konzentriertes Arbeiten an technischen
  Problemen


KONTAKT
───────────────────────────────────────────────────────────────
E-Mail:         kruty1918.dev@gmail.com
GitHub:         github.com/kruty1918dev-ai
Portfolio:      github.com/Kruty1918
Standort:       Wismar, Deutschland — umzugsbereit in den Raum Hannover


═══════════════════════════════════════════════════════════════
Erstellt: ${new Date().toLocaleDateString('de-DE')}
`

  return cvContent.trim()
}

export function downloadCV() {
  const cvContent = generateCVData()
  const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = 'Oleksii_Havryliuk_Lebenslauf.txt'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  URL.revokeObjectURL(url)
}
