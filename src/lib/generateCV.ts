import { profile } from "@/lib/profile"

export function generateCVData() {
  const cvContent = `
LEBENSLAUF
═══════════════════════════════════════════════════════════════

PERSÖNLICHE DATEN
───────────────────────────────────────────────────────────────
Name:           ${profile.name}
Alter:          18 Jahre
Wohnort:        ${profile.locationDe} — ${profile.relocationDe}
Telefon:        ${profile.phoneDisplay}
E-Mail:         ${profile.email}
GitHub:         ${profile.githubUrl}
Portfolio:      ${profile.portfolioUrl}
Aufenthalt:     Aufenthaltserlaubnis nach § 24 AufenthG


BERUFSZIEL
───────────────────────────────────────────────────────────────
Duale IT-Ausbildung im Raum Hannover.
Besonders interessieren mich Systemintegration, Anwendungsentwicklung,
digitale Vernetzung, IT-Systemelektronik und technische Problemlösung.


ÜBER MICH
───────────────────────────────────────────────────────────────
Ich heiße ${profile.name}, bin 18 Jahre alt und lebe derzeit in
Wismar. Ich beschäftige mich mit eigenen Projekten in C#, Unity,
prozeduraler Generierung und GitHub. Zusätzlich interessiere ich mich
für Linux/Ubuntu, PC-Hardware, Netzwerke, Arduino, Elektronik und Löten.


TECHNISCHE FÄHIGKEITEN
───────────────────────────────────────────────────────────────
• Programmiersprachen: C#, HTML, CSS, JavaScript
• Frameworks & Tools: ASP.NET Core Grundlagen, Unity, Git/GitHub, Docker
• Datenbanken: SQL / Datenbank-Grundlagen
• Systeme: Linux/Ubuntu, Windows, PC-Hardware
• Technik: Fehleranalyse, Netzwerke, Arduino, Elektronik / Löten


PROJEKTE
───────────────────────────────────────────────────────────────

Moyva
───────────────────────────────────────────────────────────────
Unity/C#-Projekt mit rundenbasierter Strategie, prozeduraler
Weltgenerierung, Grid-/Tile-Logik, Unity-Editor-Tools, Debugging
und Refactoring.
Öffentliche technische Projektübersicht:
${profile.moyvaShowcaseUrl}

Arduino MP3 Player
───────────────────────────────────────────────────────────────
Hardware- und Elektronik-Lernprojekt mit Display, Tastensteuerung,
Lautstärkeregelung, Ladefunktion und Fehlersuche.

Weitere Projekte
───────────────────────────────────────────────────────────────
Fun and Ball, 2D Tile Generator, 2D Hexagon Generator,
Order Management System und Unity MonoSingleton System.


ZEITLICHER WERDEGANG
───────────────────────────────────────────────────────────────
2024             Schulabschluss nach 11 Schuljahren in der Ukraine
2025 - 2026      B1-Deutschkurs in Deutschland, Prüfung am 18.07. geplant
Heute            Eigene Projekte mit C#, Unity, Git/GitHub und Technik
Nächster Schritt IT-Ausbildung im Raum Hannover


WARUM ICH?
───────────────────────────────────────────────────────────────
✓ Praktische technische Projekte mit C#, Unity und Hardware
✓ Interesse an Software, Systemen, Netzwerken und Elektronik
✓ Lernbereitschaft und ruhige Fehlersuche
✓ Motivation für eine langfristige Entwicklung im IT-Bereich


KONTAKT
───────────────────────────────────────────────────────────────
Telefon:        ${profile.phoneDisplay}
E-Mail:         ${profile.email}
GitHub:         ${profile.githubUrl}
Portfolio:      ${profile.portfolioUrl}
Standort:       ${profile.locationDe} — ${profile.relocationDe}


═══════════════════════════════════════════════════════════════
Erstellt: ${new Date().toLocaleDateString("de-DE")}
`

  return cvContent.trim()
}

export function downloadCV() {
  const cvContent = generateCVData()
  const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = "Oleksiy_Havryliuk_Lebenslauf.txt"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  URL.revokeObjectURL(url)
}
