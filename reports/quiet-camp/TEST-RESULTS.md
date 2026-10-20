# Technical checks — 20 October 2026

Verified locally, not a deployed-site certification. See browser-results.json, external-links.json, output-manifest.json, web-build.log and screenshots/ for machine-readable evidence.

| Check | Result |
|---|---|
| Complete no-JavaScript pages | EN/UK/DE each tested at 320, 375, 390, 768 and 1440px: 15 passing combinations |
| Document overflow | documentElement and body width within viewport at every tested width |
| Canonicals and language metadata | Each version self-canonical; exact English URL; three language alternates + x-default; correct html lang |
| Policy coverage | All 14 section anchors present and populated; one h1; numbered h2 hierarchy |
| Translation parity | Matching section order, paragraph counts, five processing rows, contact details and every section’s external/contact hrefs; full translations manually reviewed for factual qualifications and legal substance |
| Essential content without JS | No script elements; complete legal text remains visible; no client translation load |
| Keyboard | Tab reveals skip link; Enter focuses main; mobile summary expands with Enter; contents anchor reaches rights; language links work |
| Mobile layout | Native compact details/summary contents; stacked semantic table cells; no sticky header/sidebar on phone widths; comfortable navigation targets |
| Accessibility automation | axe-core WCAG 2 A/AA, 2.1 A/AA, 2.2 AA and best-practice tags, all languages at 390/1440: 6 scans, zero violations and zero incomplete results, including text contrast |
| HTML checks | html-validate 11.16.4 recommended rules: all three pass with one documented adjustment: explicit table/row/cell roles are retained to preserve semantics when mobile CSS changes table display; no-redundant-role style rule disabled for this check |
| Requests/cookies | Uninstrumented, JS-disabled browser contexts requested only the local document/CSS/icon; no cookies. axe was injected separately in a test context and is not shipped |
| Reduced motion | Requested in browser tests; no decorative animation; reduced-motion CSS disables motion |
| External policy links | Eight unique external destinations all HTTPS 200, including Google terms/privacy, Firebase, game site and authority directory. Official-domain root also 200 separately. Language destinations tested locally |
| Existing official URLs | Actually tested over HTTPS: root 200, required privacy route 404, planned Impressum 404; new policy not deployed |
| No noindex | No noindex meta in generated pages; production X-Robots-Tag must be checked after authorized publication |
| Web build | npm run build passed (TypeScript build configured by existing project with --noCheck + Vite). All five static policy outputs verified byte-for-byte in dist |
| Dependency reproducibility | Existing npm ci failed due package/lock inconsistency (@github/spark and Octokit entries). Local verification used npm install --ignore-scripts --package-lock=false. Neither package.json nor lock changed. Build success is not a claim that a clean CI install works |
| Existing app build warnings | Existing Tailwind container media-query CSS optimization warnings and large app chunks; standalone policy has its own small CSS and no app JS dependencies |
| Game integration | JSON/central URL/support fields verified. Existing localized PrivacyPanel uses validated Application.OpenURL. Publication/teen/SDK gates stay false and bundled draft stays true. No scene asset change |
| Unity/build limits | No Unity Editor launch, EditMode/PlayMode or C# compilation available here. Config-only integration does not require a new component; in-game button/open-browser behavior still needs Unity/device verification after website publication. No Android/desktop/player build executed |
| Private information | New public files contain only the supplied developer name, country and designated privacy/support contacts. No residential address or private credentials added |
| Publication | No push, deployment, DNS change, mailbox change, message send or Play submission |

Screenshots: EN, UK and DE each have desktop, mobile first viewport and mobile data-table capture. They show this actual local page, not a generated mockup or Unity game screenshot. Chromium version is recorded in browser-results.json.

Limits: automated checks are not a complete WCAG audit. No human screen-reader session, Android hardware/browser, actual native UMP form, release packet capture, production Vercel rewrite execution, worldwide reachability, official-name document, legal-address review or Google/Firebase console settings were verified. A responsive table explicitly retains semantic roles and column headers; additional assistive-technology testing remains advisable.

Reproduce with a locally installed Python Playwright/Chromium and axe-core:

```sh
python3 scripts/render-quiet-camp-policy.py
python3 -m http.server 8765 --bind 127.0.0.1 --directory public
# In a second terminal:
python3 scripts/check-quiet-camp-policy.py --axe /absolute/path/to/axe.min.js
html-validate --config legal/quiet-camp/htmlvalidate.json public/quiet-camp/privacy/index.html public/quiet-camp/privacy/uk/index.html public/quiet-camp/privacy/de/index.html
```

The browser script does not install dependencies, publish files or launch Unity.
