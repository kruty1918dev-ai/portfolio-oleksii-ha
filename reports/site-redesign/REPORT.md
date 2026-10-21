# Developer website redesign, revision 2 — 20 October 2026

Prepared locally against public main `e2220fa14ba2f62cb622954cf8d5cd48903ebd3a`.
No remote push, deployment, DNS/mail change, Unity edit or player build was run.
The owner can upload the complete update with the provided Termux package.

## Implemented result

A permanent independent-developer website for Oleksiy Havryliuk / Kruty1918 Games.
There are 27 full static pages in English, Ukrainian and German: nine page types
plus a real 404 page. Every language version is usable without JavaScript.

| Route | Content |
|---|---|
| / | Developer introduction, project index, current game and selected work |
| /games | Current game and earlier projects, with clear development status |
| /portfolio | Three game/prototype projects and four smaller development tools |
| /about | Existing portrait, short biography and direct contacts |
| /quiet-camp | Forest-themed game page, real captures, guide and privacy links |
| /moyva | Cartographic strategy-prototype page, two-person context and contribution |
| /fun-and-ball | Sky-blue game-project page with original vertical captures |
| /privacy | Separate website privacy notice, with unresolved details disclosed |
| /quiet-camp/privacy | Original 14-section game policy and review qualifications |

English is the default. Ukrainian and German use /uk and /de suffixes on the
same page; the switch preserves the current route. The game policy's canonical
URL remains https://oleksiy-havryliuk.de/quiet-camp/privacy.

The old recruitment interface and dependency stack were removed from current
sources: no Ausbildung, Hannover, relocation plans, exam/age text, skills wall,
CV/PDF generator or phone number is rendered. The genuine portrait and relevant
project work remain. Collaborative Moyva work is explicitly distinguished from
current solo development. No imaginary new games, release dates, store buttons,
statistics or testimonials were added.

## Visual decisions

The developer site has its own restrained editorial identity: warm paper, neutral
ink, a rust accent, name-led introduction, a project register and fine rules.
The individual game pages differ in composition as well as colour:

- Quiet Camp uses a forest-green opening, genuine icon, framed landscape capture,
  cream content surface and short field-book-like notes.
- Moyva uses dark blue-grey, cartographic accents, bold sans-serif headings,
  monospace labels, a square generated-world map, side-by-side contribution/system
  notes and a wide-first technical gallery.
- Fun and Ball uses pale sky, cream, rounded controls and bold system lettering,
  a portrait capture next to the title and a three-image vertical gallery.

Common navigation order, developer identity, language controls, widths, spacing,
focus behaviour, contact links and footer connect the pages. The legal pages
remain readable documents. Original project media is the visual material;
there is no new game logo, stock illustration, external font or decorative
animation. These are concrete design decisions, not a guarantee about how any
viewer will judge the site's authorship. See docs/design-system.md.

## Implementation and future games

The old React/Spark/Vite/Tailwind stack is replaced by a dependency-free Node.js
static generator. npm ci uses a minimal matching lockfile. No network is needed
to build. All page content is rendered into HTML, with local assets and restrictive
security headers. No client router, visitor analytics, advertising or cookies are
introduced by the website code. Original image links remain usable without the
optional image-viewer script. Native details provides the mobile menu.

site/content.json owns the profile, complete UI translations, project catalogue,
project context and genuine media references. site/layout.mjs owns shared chrome
and metadata. site/projects.mjs selects distinct game compositions, with a neutral
fallback. public/assets/site.css holds shared rules and scoped game themes.
Legal content is kept separately under legal/quiet-camp and legal/website.
Image provenance and dimensions are recorded in docs/media-sources.json.

New projects receive their own permanent route, all three language versions,
catalogue links and sitemap entries. Add complete translated content, genuine
media and metadata, then run npm run routes and npm test. One project is marked
featured. A temporary fourth featured project generated 30 pages, selected the
neutral fallback and preserved the fixed Quiet Camp legal back link.

vercel.json explicitly selects npm ci, npm run build, dist and no framework
autodetection. Exact rewrites serve the static paths. /cv, /lebenslauf,
/funandball and /contact redirect. Unknown paths return a real HTTP 404.
The existing Vercel project/domain binding, STRATO DNS/mail and separate GitHub
Pages game guide are preserved. No DNS change is needed for this implementation.

## Legal scope and unresolved requirements

All original game-policy sections, paragraphs, data rows, source links, contacts
and qualifications are structurally identical to the deployed base in all three
languages. Only the review status label was corrected: release review is pending,
rather than claiming the already-public draft has not yet been published.

A separate /privacy notice covers website requests, Vercel hosting, external
links and email correspondence in all three languages. It explicitly states
that logging settings, host/mail contracts, transfer safeguards and actual
retention are not verified. It does not invent a fixed hosting-log period.
The intended 12-month correspondence schedule is identified as unconfirmed.
There is no unnecessary website consent banner because no optional tracking is
implemented in the website code. Game consent remains an in-app issue.
Vercel privacy/DPA/subprocessor pages and DDG section 5 returned HTTPS 200;
this does not establish the account's contractual arrangements.

Remaining blockers before claiming legal readiness:

1. A legally suitable serviceable postal address and an actual Impressum. No
   residential address was extracted, inferred or published, and no broken
   Impressum link was introduced.
2. Documentary confirmation of the supplied Latin legal-name spelling.
3. Audit of the developer's latest Firebase/Crashlytics release configuration,
   actual collection defaults, consent and underage/teen handling.
4. Actual analytics/ad retention settings, provider contracts and transfer
   safeguards; correct Google Play Data Safety declarations for the real release.
5. Working privacy/support mailboxes, their provider and deletion workflow;
   actual Vercel account logging, retention and data-processing arrangements.

The previous game audit in reports/quiet-camp is retained as a historical
snapshot, not presented as new verification of the unavailable local Unity
installation. Its older route/build observations are superseded by this report
for the redesigned site. No legal-compliance or Google Play approval is promised.

## Verification

- npm ci, npm run build and npm test pass; 27 pages and 984 local
  links/assets/anchors, complete canonical/hreflang and sitemap metadata.
- HTML validation passes on all 28 generated HTML files including 404. Explicit
  semantic roles remain for the mobile table; only the stylistic redundant-role
  validator rule is disabled.
- Chromium: 27 routes at 320, 375, 390, 768 and 1440px with JavaScript disabled:
  135 passing layouts, text present, zero document/body horizontal overflow.
- axe: 36 WCAG 2/2.1/2.2 A/AA and best-practice scans, zero violations and zero
  incomplete checks. All pages at 390px plus Ukrainian pages at 1440px.
- Keyboard skip link, native menu, language context, gallery next/Escape/focus
  restoration, legal contents, contact anchor, 404 and /cv redirect pass.
- 45 additional checks pass: Pixel 7, iPhone 13 and iPad touch-profile emulation,
  640x480 landscape and 200% root text at a 640 CSS-pixel viewport.
- Uninstrumented local browser loads no third-party page assets and sets no
  cookies. The optional gallery also uses only local assets.
- All 19 unique external links returned HTTPS 200 in the tested environment.
- Future-project fixture passes with 30 complete routes and neutral composition.

Evidence: browser-results.json, device-results.json, external-links.json,
website-privacy-sources.json and 18 local screenshots. Browser coverage is
Chromium, including mobile emulation; no physical Android/iPhone, Safari,
Firefox or human screen-reader session was available. Automated accessibility
checks do not replace a full assistive-technology audit. The redesign has not
been deployed or tested at the production domain.

## Owner-led publication

Download developer-site-v2-termux.zip into Android Download. The complete package
contains the binary-capable Git patch, checked upload script, Ukrainian
instructions and previews. The older redesign ZIP is not required.

The script verifies the patch hash and authenticated GitHub account, clones
current main into a fresh folder, checks compatibility, applies the commit and
performs a normal push to portfolio-oleksii-ha main. It never force-pushes and
stops on errors. Existing phone checkouts are left alone. There are no tokens,
private keys or credential files in the delivery; phone npm is not needed.

The main push can trigger the existing Vercel deployment. After its build succeeds,
check /uk, /games/uk, /portfolio/uk, /about/uk, the three game pages, /privacy/uk,
and all existing Quiet Camp policy language routes over HTTPS. Check mobile
navigation and language switching. If Vercel reports a conflicting Dashboard
build override, inspect the identified existing project settings rather than
changing DNS or creating another domain binding.
