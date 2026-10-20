# Quiet Camp privacy website delivery

20 October 2026 — implemented locally; public publication is blocked pending factual/legal review and owner authorization.

## A. Repository audit and source evidence

Audited game main `01784d3614c643eac487baa25d589dce6ed2c0ef` and portfolio main `6e8ab50cdb319a2b186c0db04d8f8e0d3a547b44`. [SOURCE-AUDIT.md](SOURCE-AUDIT.md) contains immutable file/line links. [source-manifest.json](source-manifest.json) records source hashes. Remote heads rechecked on audit day: the game has only main at that commit. The newest game commits set the package ID and connect AdMob sample inventory. The attached checkout did not contain the developer’s reported newer Firebase installation. This is an availability limit, not proof the SDKs are absent from the developer’s machine. No local user changes were overwritten.

Read AGENTS and applicable restrictions. No Unity/player build was run. No review push was made because either repository’s push may publish automatically. No Vercel account connector or .vercel/project.json was available; existing public deployment/status/DNS evidence is recorded without inventing an account configuration.

## B. Actual personal-data processing

Verified: local progress/settings/album/choice receipts; conditional numeric Analytics event adapter with collection off; on-demand UMP/rewarded-ad integration and development sample IDs, production publication gates closed; voluntary support mailto; potential policy-content loader with current draft remote fetch disabled. Unity Analytics/Ads/cloud diagnostics settings are disabled. Android backup and final merged permissions remain unresolved.

Firebase/Crashlytics installation is reported by the developer, not verifiable from this checkout. All descriptions reflect that distinction. The proposed event names in the brief are not treated as emitted events; the six implemented qc_* families and parameters are documented instead. No fictitious Crashlytics consent switch or default-off claim was added.

[DATA-INVENTORY.md](DATA-INVENTORY.md) and [data-inventory.csv](data-inventory.csv) provide data, source, purpose, basis, recipients, retention, consent, code evidence and verification status.

## C. Website design and implementation

Correct source: the portfolio repository, serving the custom domain through the existing Vercel project, strongly supported by identical live HTML on the domain and portfolio-oleksii-ha.vercel.app and the successful commit deployment status. The game’s docs/ site remains on GitHub Pages. No domain move or duplicate policy on Pages.

Complete static English, Ukrainian and German documents share 14 numbered sections and the same legal substance. Genuine Quiet Camp icon copied from docs/images/brand-icon.png at the audited commit. Charcoal/forest masthead, cream document surface, moss links and restrained copper details; serif headings and system body font; no external asset dependency. Desktop sidebar, mobile native collapsible contents and stacked table. No JavaScript, cookie control, analytics, third-party fonts or consent imitation. Review status remains visible until release facts are resolved. Impressum is described as pending, without a broken link.

English canonical: https://oleksiy-havryliuk.de/quiet-camp/privacy

## D. Files created and modified

Portfolio repository (local checkout /workspace/portfolio-audit):

- `legal/quiet-camp/content.json`: complete maintained EN/UK/DE policy source.
- `legal/quiet-camp/policy.css`, `brand-icon.png`, `htmlvalidate.json`: source styling, genuine icon, validator configuration.
- `scripts/render-quiet-camp-policy.py`: deterministic static renderer with translation structure checks.
- `scripts/check-quiet-camp-policy.py`: local browser/accessibility checks.
- `public/quiet-camp/privacy/index.html`, `uk/index.html`, `de/index.html`, `policy.css`, `brand-icon.png`: actual deployable static files.
- `vercel.json`: three exact routes and scoped security headers; no unrelated route/DNS configuration.
- `reports/quiet-camp/`: audit, inventory, Data Safety, legal blockers, publication instructions, test evidence and screenshots. Reports stay outside public/.

Game repository:

- `QuietCamp/Assets/QuietCamp/Resources/QuietCamp/legal.json`: canonical privacy URL and supplied technical-support email only.
- `docs/index.html`, `docs/site-i18n.json`: footer link with UK/EN/DE labels.
- `docs/privacy-integration.md`: exact integration/status instructions.

No C# gameplay, scenes, SDK collection, age behavior or monetization changes. Package files, existing portfolio source and domain/email settings unchanged. The game/footer links should be released only after their destination stops returning 404.

## E. Browser and technical results

[TEST-RESULTS.md](TEST-RESULTS.md), [browser-results.json](browser-results.json), [external-links.json](external-links.json), [output-manifest.json](output-manifest.json) and [web-build.log](web-build.log).

15 no-JS language/viewport combinations passed; all specified widths covered. Six axe scans passed with zero violations/incompletes; HTML checks passed. Keyboard/contents/language navigation passed. No new page tracking requests/cookies. Eight external policy destinations returned HTTPS 200. Full web build passed using local package resolution; pre-existing npm ci lock mismatch prevents a clean-install reproducibility claim. Generated files copied unchanged to dist.

Actual screenshots: [English desktop](screenshots/en-desktop.png), [English phone](screenshots/en-mobile.png), [Ukrainian phone](screenshots/uk-mobile.png), [German phone table](screenshots/de-mobile-table.png). Nine screenshots total. No production-page success is claimed: its required URL currently returns HTTPS 404.

## F. Google Play, AdMob, Firebase and GDPR review

[GOOGLE-PLAY-DATA-SAFETY.md](GOOGLE-PLAY-DATA-SAFETY.md) maps app interactions, diagnostics/crash logs, identifiers, approximate location and conditional support data, separating local-only information and Play sharing exceptions. Not submitted.

[LEGAL-AND-RELEASE-REVIEW.md](LEGAL-AND-RELEASE-REVIEW.md) links the current official Play, Google, GDPR/DDG/TDDDG and privacy references and explains the difference between legal notice, consent, age handling and actual SDK defaults. No approval/compliance guarantee. The official policy is not a substitute for app behavior changes and verification.

## G. Remaining blockers

- Official Latin spelling remains unverified as instructed. Suitable non-residential legal postal address/Impressum unresolved; no residential address extracted or published.
- Actual developer-local Firebase/Crashlytics versions, collection defaults, crash/log/breadcrumb behavior and controls unavailable.
- Actual Google contracting entity, selected vendors, production UMP messages, transfer arrangements and retention/linked settings unverified. GA4 two months and support twelve months are targets, not asserted settings. Crashlytics ninety days before deletion starts is a documented provider rule, not immediate backup erasure.
- No verified age screen, parental authorization or UMP/ad underage treatment. Ages 13–15 and 16–17 require a real strategy; German Article 8 threshold is not replaced by a 13+ label.
- Mailbox operations, support/deletion procedure, hosting logs/terms/retention, backup behavior, final manifest/SDK traffic and Vercel account binding need confirmation. Existing dependency lock needs a separately reviewed reproducibility repair.
- No policy deployment authorized. English, Ukrainian and German copies accurately disclose unresolved facts and remain review copies.

## H. Exact route publication

Follow [HOSTING-AND-PUBLICATION.md](HOSTING-AND-PUBLICATION.md). Resolve blockers and update all translations; confirm the existing Vercel Git/domain binding; repair or verify the install strategy; regenerate/check/build; then obtain explicit publication authorization before pushing/deploying to the identified project. Reuse the existing domain and TLS. No DNS change is indicated. Test exact HTTPS routes and headers after publication, then release the Unity/menu/guide links and synchronize the later bundled notice revision. Complete Play Data Safety against the verified Android release only.

Current local implementation is concrete and reviewable. No DNS, public website, Google Play record, mailbox or production game was changed.
