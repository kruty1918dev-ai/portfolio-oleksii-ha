import { profile } from "@/lib/profile"

export const cvData = {
  fullText: `Lebenslauf

${profile.name}
Telefon: ${profile.phoneDisplay}
E-Mail: ${profile.email}
GitHub: ${profile.githubUrl}
Portfolio: ${profile.portfolioUrl}
Standort: ${profile.locationDe} — ${profile.relocationDe}

Persönliche Daten

Name: ${profile.name}
Geburtsdatum/-ort: 16.05.2008, Khmelnytskyi (Ukraine)
Wohnort: 23966 Wismar, Deutschland — ${profile.relocationDe}
Staatsangehörigkeit: Ukrainisch
Aufenthalt: Aufenthaltserlaubnis nach § 24 AufenthG

Kurzprofil

Motivierter Bewerber für eine IT-Ausbildung mit praktischen technischen Projekten in C#, Unity, Git/GitHub, Linux/Ubuntu, PC-Hardware, Arduino und Netzwerken. Ich lerne besonders gut durch eigene Projekte, Debugging und technische Fehlersuche.

Schulbildung und Deutsch

09/2014 - 05/2024
Sharivska Mittelschule
Schulabschluss nach 11 Schuljahren. Die ukrainischen Schulunterlagen liegen in deutscher Übersetzung vor. Die Bewertung in Niedersachsen wird vorbereitet.

09/2024 - 07/2025
Zierow Berufsschule
Deutschförderung / sprachliche Vorbereitung, nicht benotet

Deutsch
Aktuell B1-Deutschkurs, B1-Prüfung am 18.07. geplant, Ziel B2 bis zum Ausbildungsbeginn

Ausbildungsziel

Duale IT-Ausbildung im Raum Hannover, besonders in den Bereichen:
- Fachinformatiker für Systemintegration
- Fachinformatiker für Anwendungsentwicklung
- Fachinformatiker für Digitale Vernetzung
- IT-Systemelektroniker

Praktische Projekte

Moyva
Mein stärkstes aktuelles Unity/C#-Projekt: ein rundenbasiertes Strategiespiel-Prototyp mit prozeduraler Weltgenerierung, Grid-/Tile-Logik, Unity-Editor-Tools, Debugging und Refactoring.
Öffentliche technische Projektübersicht:
${profile.moyvaShowcaseUrl}

Arduino MP3 Player
Hardware- und Elektronik-Lernprojekt mit Display, Tastensteuerung, Lautstärkeregelung, Ladefunktion und Fehlersuche.

Weitere Lernprojekte
- Fun and Ball: Unity-Spielprojekt mit Gameplay-Logik
- 2D Tile / Hex Generator: technische Prototypen zur prozeduralen Generierung
- Order Management System: C#, ASP.NET Core, EF Core, SQLite, Docker

Kenntnisse

- C#, Unity, Git/GitHub
- Linux/Ubuntu, Terminal, Fehlersuche
- ASP.NET Core Grundlagen
- SQL- und Datenbank-Grundlagen
- PC-Hardware, Netzwerke, Arduino, Elektronik und Löten

Sprachkenntnisse

Ukrainisch: Muttersprache
Deutsch: B1-Kurs, Ziel B2
Englisch: Grundkenntnisse

Persönliche Stärken

- lernbereit
- zuverlässig
- ruhig
- ausdauernd
- technisches Interesse
- systematisches Denken

Wismar, den 02.07.2026`
}
