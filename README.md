# Oleksiy Havryliuk — independent developer website

The personal website for **Oleksiy Havryliuk / Kruty1918 Games**, at
https://oleksiy-havryliuk.de. Games, selected projects, developer information and
contacts share navigation and a common editorial frame; each game has its own visual identity. This is a developer portfolio,
not a recruitment CV. Kruty1918 Games is a personal trading name, not a separate
registered company.

## Build and preview

Requires Node.js 22 or newer. There are no npm dependencies, external fonts,
tracking scripts, runtime APIs or client-side router.

```sh
npm ci
npm run build
npm test
npm run preview
```

Preview: http://127.0.0.1:4173. Stop with Ctrl+C.
All public HTML is generated into **dist/**. Do not edit generated output.
Vercel uses the committed build/install/output settings in vercel.json.

## Pages and languages

English is the default. Ukrainian and German use `/uk` and `/de` suffixes, while
retaining the same page: `/about/uk`, `/portfolio/de`, etc. Language changes never
send visitors back to the homepage unnecessarily.

| English route | Purpose |
|---|---|
| `/` | Developer home and selected projects |
| `/games` | Current and earlier game projects |
| `/portfolio` | Game projects and smaller tools/experiments |
| `/about` | Developer portrait, short biography and contacts |
| `/quiet-camp` | Quiet Camp game page |
| `/moyva` | Collaborative strategy prototype and contribution |
| `/fun-and-ball` | Earlier game project |
| `/impressum` | Owner-confirmed natural-person legal identity, address and contacts |
| `/privacy` | Website hosting, correspondence and unresolved legal details |
| `/quiet-camp/privacy` | Existing game privacy document and review qualifications |

Ten page types × three languages = 30 complete static pages, plus a real 404
page. The original Quiet Camp policy URL and its language URLs are retained.
`/cv`, `/lebenslauf`, `/funandball` and `/contact` have explicit redirects.

## Maintain content and add a game

- **site/content.json**: developer details, all visible UI copy, project catalogue,
  project context, original links, images and full en/uk/de copy.
- **site/layout.mjs**: shared head, metadata, header, language navigation and footer.
- **site/projects.mjs**: distinct game compositions with a neutral fallback.
- **public/assets/site.css**: studio design and scoped game themes; **site.js** adds only an optional
  accessible image viewer. Menu, page content and language links work without JS.
- **legal/quiet-camp/content.json**: maintained full privacy document. All legal
  facts, contacts, unresolved SDK/age/address qualifications remain explicit.
- **legal/website/content.json**: separate complete en/uk/de website privacy notice.
- **legal/quiet-camp/policy.css**: scoped legal-document layout using shared colours.
- **public/media/**: optimized genuine project images and developer portrait.
- **docs/media-sources.json**: source/provenance and dimensions for each image.

To add a game, add a project entry with a unique URL slug, en/uk/de content,
gallery and context to site/content.json. Choose a theme (`camp`, `atlas`, `play`) only when it suits the project, or omit it for a neutral page. See docs/design-system.md to add a bespoke identity. Put genuine images in public/media
and record dimensions/provenance in docs/media-sources.json. Run `npm run routes`
to generate the static pages and the exact Vercel route map, review vercel.json,
then `npm test`. Project pages, portfolio cards, language alternates and sitemap
entries are generated from the catalogue. The home and games pages identify the
project marked featured as current. Do not fabricate availability, store links,
team contributions or screenshots.

## Verification and release

`npm test` verifies routes, canonical/hreflang, local links/assets/anchors, section
coverage and removal of recruitment content. Optional browser checks are in
scripts/browser-check.py; they require local Python Playwright/Chromium/axe-core,
which are not build dependencies. See reports/site-redesign/ for captured evidence.

The deployment still belongs to the existing portfolio Vercel project. No DNS,
mail, domain, Unity repo or game SDK configuration changes are needed. A main
push can deploy automatically. The redesign was prepared locally for owner-led
upload through Termux, not pushed or deployed by the assistant.

The public policy is a **review copy**. The earlier privacy audit and legal
blockers remain documented in reports/quiet-camp/ (historical audit snapshot).
The redesign updates its surrounding design and status wording, without claiming
that the release SDK configuration, teen handling or postal-address requirements
are resolved. A real multilingual legal-notice page now contains owner-confirmed details; remaining release checks are tracked separately.

## Privacy completion and release checks

The 2026-10-20 privacy implementation adds owner-confirmed passport/Play spelling
Oleksii Havryliuk alongside the public name Oleksiy Havryliuk, legal pages and a
protected 13+ release profile. Full status and actual verification limits are in
[reports/privacy-completion/REPORT.md](reports/privacy-completion/REPORT.md).

`npm run build` deliberately keeps candidate notices. `npm run release:check`
requires actual SDK/artifact/account/retention evidence and reviewed document
hashes; `npm run build:release` refuses missing evidence before changing output.
It does not certify a release by itself. Current evidence is incomplete. The
package does not push or deploy automatically. Never treat a manually flipped
flag as verification or enable production SDKs just because a policy URL exists.

Bundled game notice parity: `python scripts/sync-game-policy.py --game-root
/path/to/quiet-camp --check`. The explicit --write-candidate mode updates draft
legal resources only; it refuses an already published non-draft configuration.
