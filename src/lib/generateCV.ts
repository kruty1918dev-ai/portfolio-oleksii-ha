export function generateCVData() {
  const cvContent = `
LEBENSLAUF
═══════════════════════════════════════════════════════════════

PERSÖNLICHE DATEN
───────────────────────────────────────────────────────────────
Name:           Oleksii Havryliuk
Alter:          18 Jahre
Wohnort:        Wismar, Deutschland
E-Mail:         kruty1918.dev@gmail.com
GitHub:         github.com/kruty1918dev-ai


BERUFSZIEL
───────────────────────────────────────────────────────────────
Ausbildung zum Fachinformatiker für Anwendungsentwicklung ab
2026/2027. Interesse an professioneller Softwareentwicklung,
Backend-Entwicklung und modernen Webtechnologien.


ÜBER MICH
───────────────────────────────────────────────────────────────
C# Developer mit starkem Interesse an Backend-Entwicklung,
Softwarearchitektur und Game Development. Programmieren habe ich
mir durch eigene Projekte selbst beigebracht. Ich arbeite mit C#,
GitHub, Linux und Unity und beschäftige mich aktuell intensiv mit
ASP.NET Core, REST APIs und moderner Backend-Entwicklung.


TECHNISCHE FÄHIGKEITEN
───────────────────────────────────────────────────────────────
• Programmiersprachen: C#, Python, JavaScript
• Frameworks & Tools: ASP.NET Core, Unity, Git/GitHub
• Backend: REST APIs, Datenbankdesign, Server-Entwicklung
• Systeme: Linux, Windows
• Arbeitsweise: Selbstständiges Lernen, Projektbasiert


PROJEKTE
───────────────────────────────────────────────────────────────

HorrorGames Forum
─────────────────
Vollständiges Forum mit Login-System, Beiträgen und Kommentaren.
Entwickelt mit ASP.NET Core, Entity Framework und PostgreSQL.
Implementiert Authentifizierung, CRUD-Operationen und
Datenbankrelationen.

Math Graph Generator
────────────────────
Visualisierungstool für mathematische Funktionen.
Interaktive Grafiken mit konfigurierbaren Parametern.
Echtzeit-Darstellung komplexer Funktionen.

Discord Bot
───────────
Bot für Server-Management und Moderation.
Automatisierte Aufgaben und Benutzerverwaltung.
Integration mit Discord API.


ZEITLICHER WERDEGANG
───────────────────────────────────────────────────────────────
2023 - Heute     Selbststudium C# und Unity
2024 - Heute     Backend-Entwicklung mit ASP.NET Core
2024 - Heute     Projekte und Portfolio-Aufbau
2026             Ziel: Beginn Ausbildung Fachinformatiker


WARUM ICH?
───────────────────────────────────────────────────────────────
✓ Starke Motivation: Ich lerne selbstständig und bin immer
  bereit, Neues zu entdecken
  
✓ Praktische Erfahrung: Mehrere eigene Projekte mit modernen
  Technologien umgesetzt
  
✓ Teamfähigkeit: Erfahrung mit Git/GitHub und Zusammenarbeit
  in Entwicklungsprojekten
  
✓ Deutschkenntnisse: B1-Niveau, kontinuierliche Verbesserung
  durch Kurse und Praxis


KONTAKT
───────────────────────────────────────────────────────────────
E-Mail:         kruty1918.dev@gmail.com
GitHub:         github.com/kruty1918dev-ai
Portfolio:      github.com/Kruty1918
Standort:       Wismar, Deutschland


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
