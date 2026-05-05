# Planning Guide

Eine professionelle Portfolio-Webseite für einen 18-jährigen Bewerber für eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung, die Kompetenz, Lernbereitschaft und technische Orientierung authentisch vermittelt.

**Experience Qualities**:
1. **Vertrauenswürdig** - Die Webseite vermittelt Seriosität und Ehrlichkeit durch klare Struktur, professionelle Gestaltung und realistische Selbstdarstellung ohne Übertreibungen.
2. **Fokussiert** - Minimalistisches Design lenkt die Aufmerksamkeit auf das Wesentliche: Projekte, Fähigkeiten und Motivation des Bewerbers.
3. **Zugänglich** - Klare deutsche Sprache, intuitive Navigation und durchdachte Informationshierarchie machen es Personalverantwortlichen leicht, sich ein Bild zu machen.

**Complexity Level**: Light Application (multiple features with basic state)
Dies ist eine moderne Single-Page-Application mit mehreren interaktiven Sektionen, sanfter Navigation, Kontaktfunktionalität und optionalem Theme-Switching - mehr als eine statische Seite, aber fokussiert auf Präsentation statt komplexer Logik.

## Essential Features

**Hero Section mit CTA-Buttons**
- Functionality: Präsentiert Name, Ziel und Kernkompetenzen mit klaren Handlungsaufforderungen
- Purpose: Sofortiger professioneller Eindruck und klare Navigation zu den wichtigsten Bereichen
- Trigger: Beim Laden der Seite sichtbar
- Progression: Nutzer sieht Titel und Untertitel → liest Kurztext → klickt auf einen der drei CTA-Buttons (Projekte, Kontakt, GitHub) → wird zu entsprechender Sektion/Link geführt
- Success criteria: Nutzer versteht innerhalb von 3 Sekunden, wer der Bewerber ist und was er sucht

**Über mich Sektion**
- Functionality: Ausführliche Selbstvorstellung mit persönlichem Hintergrund, Interessen und Zielen
- Purpose: Authentisches Bild des Bewerbers vermitteln und Motivation deutlich machen
- Trigger: Nutzer scrollt nach unten oder klickt auf Navigation
- Progression: Nutzer scrollt zur Sektion → liest persönlichen Text → versteht Hintergrund und Motivation
- Success criteria: Personalverantwortliche bekommen ein klares Bild von Person, Motivation und Situation

**Skills-Übersicht mit Level-Indikatoren**
- Functionality: Visuelle Darstellung von Technologien und Kenntnisstand mit ehrlichen Level-Angaben
- Purpose: Transparente Kommunikation der vorhandenen Fähigkeiten ohne Übertreibung
- Trigger: Nutzer erreicht Skills-Sektion beim Scrollen
- Progression: Nutzer sieht Skill-Karten → erkennt Technologien → versteht durch Level-Anzeige den aktuellen Kenntnisstand → kann technisches Profil einschätzen
- Success criteria: Unternehmen können technisches Niveau realistisch einschätzen

**Projekt-Portfolio mit Details und Bildern**
- Functionality: Präsentation von 4 Projekten mit visuellen Vorschaubildern, Beschreibung, Technologie-Stack, Status und GitHub-Links, inklusive prominenter Erklärung zur KI-gestützten Entwicklung
- Purpose: Praktische Erfahrung und Lernfortschritt durch echte Projekte demonstrieren; transparente Kommunikation über den Einsatz von KI als Produktivitätswerkzeug und moderne Arbeitsweise
- Trigger: Nutzer scrollt zu Projekten oder klickt auf "Projekte ansehen"
- Progression: Nutzer sieht KI-Hinweis und versteht die moderne Arbeitsweise → scrollt zu Projektkarten → betrachtet Projektbilder → liest Beschreibungen → versteht Kontext und Lernziele → klickt auf GitHub-Link → kann Code einsehen
- Success criteria: Unternehmen können praktische Fähigkeiten und Projektarbeit nachvollziehen und verstehen, dass KI-Nutzung ein Zeichen von Effizienz und Ergebnisorientierung ist

**Ausbildungs-Timeline**
- Functionality: Chronologische Darstellung des bisherigen Bildungswegs und Lernfortschritts
- Purpose: Bildungshintergrund transparent machen und Entwicklungsweg aufzeigen
- Trigger: Nutzer scrollt zur Ausbildungs-Sektion
- Progression: Nutzer sieht Timeline → verfolgt Bildungsweg → versteht aktuelle Situation und Ziele
- Success criteria: Bildungsweg ist klar und nachvollziehbar dargestellt

**Kontakt-Sektion**
- Functionality: Kontaktinformationen mit direktem E-Mail-Link und GitHub-Profilen
- Purpose: Einfache Kontaktaufnahme für interessierte Unternehmen ermöglichen
- Trigger: Nutzer klickt auf "Kontakt aufnehmen" oder scrollt zum Ende
- Progression: Nutzer erreicht Kontakt-Sektion → sieht E-Mail und GitHub-Links → klickt auf "E-Mail schreiben" → E-Mail-Client öffnet sich mit vorausgefüllter Adresse
- Success criteria: Kontaktaufnahme ist mit einem Klick möglich

## Edge Case Handling

- **Lange Texte auf mobilen Geräten** - Typography und Spacing passen sich responsive an, um Lesbarkeit zu garantieren
- **Externe Links nicht erreichbar** - Links öffnen in neuem Tab, kein Verlust der Portfolio-Seite
- **Sehr kleine Bildschirme** - Mobile-First Design mit angepassten Card-Layouts und Stack-Anordnung
- **Langsames Scrollen oder Springen** - Smooth-Scroll-Verhalten für bessere UX
- **Fehlende JavaScript-Unterstützung** - Alle Inhalte sind ohne JS sichtbar, nur interaktive Features fehlen
- **Druck oder PDF-Export** - Klare Typografie und Kontraste funktionieren auch im Druck

## Design Direction

Das Design soll Professionalität, technische Kompetenz und jugendliche Motivation vereinen. Es vermittelt Seriosität für deutsche Ausbildungsbetriebe, ohne steif oder langweilig zu wirken. Die Ästhetik ist modern und minimalistisch mit klaren Linien, großzügigen Weißräumen und gezielten Farbakzenten. Der Gesamteindruck ist ruhig, fokussiert und vertrauenswürdig - wie ein Bewerber, der weiß, was er möchte, und bereit ist zu lernen.

## Color Selection

Eine professionelle, ruhige Farbpalette basierend auf Dunkelblau und dezenten Akzenten, die Vertrauen und technische Kompetenz vermittelt.

- **Primary Color**: Dunkelblau (oklch(0.35 0.08 250)) - vermittelt Professionalität, Vertrauen und technische Orientierung; wird für wichtige Buttons und Akzente verwendet
- **Secondary Colors**: Helles Grau (oklch(0.96 0 0)) für Karten und Hintergründe, Mittelgrau (oklch(0.45 0 0)) für weniger prominente Texte
- **Accent Color**: Frisches Blau (oklch(0.55 0.15 240)) für interaktive Elemente, Hover-Zustände und wichtige CTAs
- **Foreground/Background Pairings**: 
  - Background White (oklch(0.99 0 0)): Dunkelgrau Text (oklch(0.25 0 0)) - Ratio 14.2:1 ✓
  - Primary Dunkelblau (oklch(0.35 0.08 250)): White Text (oklch(0.99 0 0)) - Ratio 8.1:1 ✓
  - Accent Blau (oklch(0.55 0.15 240)): White Text (oklch(0.99 0 0)) - Ratio 5.2:1 ✓
  - Card Background (oklch(0.96 0 0)): Dunkelgrau Text (oklch(0.25 0 0)) - Ratio 13.1:1 ✓

## Font Selection

Die Typografie vermittelt Klarheit, Modernität und Professionalität durch eine Kombination aus serifenloser Grotesque für Fließtext und einem technischen Akzent.

- **Typographic Hierarchy**:
  - H1 (Name Hero): Inter Bold / 48px Desktop, 36px Mobile / -0.02em letter-spacing / line-height 1.1
  - H2 (Sektions-Überschriften): Inter SemiBold / 32px Desktop, 24px Mobile / -0.01em / line-height 1.2
  - H3 (Karten-Titel): Inter SemiBold / 20px / normal spacing / line-height 1.3
  - Body (Fließtext): Inter Regular / 16px / normal spacing / line-height 1.6
  - Small (Meta-Info): Inter Regular / 14px / normal spacing / line-height 1.5
  - Technologie-Tags: JetBrains Mono Medium / 13px / normal spacing / Monospace-Charakter für technischen Touch

## Animations

Animationen sind subtil und funktional - sie unterstützen das Verständnis der Interface-Struktur ohne abzulenken. Sanfte Fade-ins beim Scrollen zu neuen Sektionen geben visuelles Feedback. Hover-Effekte auf Buttons und Karten sind minimal (leichte Elevation, Farbwechsel) mit 200ms Transition. Smooth-Scroll zwischen Sektionen verbessert die Navigation. Keine aufmerksamkeitsheischenden Animationen oder Autoplay-Effekte.

## Component Selection

- **Components**: 
  - Button (shadcn) für alle CTAs mit Primary- und Outline-Varianten
  - Card (shadcn) für Skills, Projekte und "Warum ich"-Karten mit einheitlichem Padding und Elevation
  - Badge (shadcn) für Technologie-Tags in kleiner, dezenter Form
  - Separator (shadcn) für visuelle Trennung zwischen Sektionen
  - Scroll-Area (shadcn) falls Timeline sehr lang wird
  
- **Customizations**: 
  - Custom Timeline-Komponente mit vertikaler Linie und Punkten für Ausbildungsweg
  - Custom Progress-Bar für Skill-Levels (keine Standard-Komponente, da spezifisches Design nötig)
  - Custom Navigation-Dots (optional) für sanftes Springen zwischen Sektionen
  
- **States**: 
  - Buttons: Subtile Scale-Animation bei Hover (102%), Farbwechsel, aktiver State mit leichter Abdunkelung
  - Cards: Elevation-Änderung bei Hover (shadow-sm zu shadow-md), Transition 200ms
  - Links: Underline-Effekt bei Hover, Farbwechsel zu Accent
  
- **Icon Selection**: 
  - @phosphor-icons/react durchgehend verwendet
  - Envelope für E-Mail-Kontakt
  - GithubLogo für GitHub-Links
  - Code für Programmier-Skills
  - Rocket für Motivation/Ziele
  - GraduationCap für Ausbildung
  - Briefcase für Projekte
  - ArrowRight für Navigation/CTAs
  
- **Spacing**: 
  - Sektions-Padding: py-20 Desktop, py-12 Mobile
  - Container max-width: max-w-6xl mit px-6
  - Card-Padding: p-6
  - Gap zwischen Elementen: gap-8 für Sektionen, gap-4 für Card-Inhalte
  - Konsistente mb-4 für Überschriften, mb-8 für Gruppen
  
- **Mobile**: 
  - Hero-Text zentriert auf Mobile, linksbündig auf Desktop
  - Button-Gruppe von horizontal zu vertikal Stack auf Mobile
  - Projekt-Grid von 2 Spalten auf 1 Spalte
  - Skills-Grid von 3 Spalten auf 1-2 Spalten je nach Breakpoint
  - Timeline bleibt vertikal, aber mit reduziertem Padding
  - Navigation Dots ausgeblendet auf sehr kleinen Screens
