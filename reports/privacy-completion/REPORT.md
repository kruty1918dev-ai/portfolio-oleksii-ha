# Privacy implementation report — 20 October 2026

## Outcome

Completed all locally implementable source, content and verification work from
the approved plan. The package is a **release candidate**, not a verified Android
release privacy policy. The missing developer-local Firebase installation and
real account/runtime evidence prevent a truthful final readiness claim.

No deployment, remote push, DNS/mail mutation, Unity launch, player build,
installation, ADB operation or Google Play submission was performed.

## Confirmed identity/contact corrections

The owner confirmed **Oleksii Havryliuk** as the passport spelling used to verify
Google Play and **Oleksiy Havryliuk** as the German/public spelling. The legal
pages identify the natural person with both names and preserve the supplied
Ukrainian legal name without inventing a Latin patronymic. Kruty1918 Games is
identified as the brand/trading name, not a separate registered company.

The owner explicitly authorized necessary legal address use and confirmed the
postcode/house number. The address is held centrally in legal/controller.json
and rendered only in legal pages/bundled legal text, not the portfolio biography,
main marketing pages or unrelated reports. No residential lookup was conducted.
Mailboxes are owner-confirmed as working/personally managed. Public MX
`smtpin.rzone.de` indicates STRATO infrastructure; contracts/retention still need
account review. Confirmation is owner testimony, not inspection of identity papers.

## Game code

See the game repo's Design/Privacy/2026-10-20/IMPLEMENTATION.md for implementation
and limits. New functionality includes a neutral age-band selector, no optional
provider factory for unknown/under-16 users, independent crash/ad/Analytics
permissions, migration/stale-revision gates and withdrawal handling. Shared ad
wrapping protects even test providers. Requests use NPA, Teen treatment for 16–17,
and a conservative storage/vendor-consent guard in the publisher path.

The Android manifest removes FirebaseInitProvider, defaults Firebase/Crashlytics
collection off, retains Analytics storage denials and delays ad measurement.
These are prepared controls, not proof of merged-manifest/native behavior.
The conditional Crashlytics adapter has a separate runtime-verification gate.
Actual cache deletion ordering and persisted SDK overrides need device testing.

Production approvals remain closed. The bundled candidate notice is synchronized
with all 14 web-policy sections, tables and owner identity in en/uk/de. The
candidate revision is 2026-10-20.privacy-2. Acknowledgement grants no SDK consent.

An audit correction: rewarded ads can grant lives OR a cosmetic lantern. The
10/day UTC limit applies to extra lives; the lantern also has an ordinary-play
path. No planned analytics event or new ad format was added. The six numeric
qc_* families and existing level 1–30 analytics range are retained.

## Website and legal documents

Thirty full static language routes now include /impressum, /impressum/uk and
/impressum/de. The existing official Quiet Camp privacy routes are preserved.
The game policy and separate website privacy are complete in English, Ukrainian
and German, including actual owner details and the agreed protected 13+ profile.
Design remains the prepared developer-site/game identities with readable legal
layouts. All essential content is server-rendered HTML with local assets.

The public candidate notice explicitly identifies unresolved activation facts.
Normal builds retain it. `npm run release:check` and `npm run build:release`
require artifact/SDK evidence, 11 dated reviews and reviewed document hashes.
The guard refuses an unverified release build before replacing output. Source
flags or a manually edited checklist do not constitute real-world verification.
Final copy still needs to replace account/runtime-dependent qualifications after
actual facts are established; finalPublicTextAndTranslations is a required gate.

## Verification actually performed

- 61 dependency-free .NET privacy contracts pass, compiling the real core and
  conditional SDK adapters against labelled platform/SDK doubles. Covers age
  gates, zero premature factory/init calls, independent choices, legacy/stale
  choices, withdrawal races, NPA/Teen configuration and storage/vendor refusal.
- The existing monetization/save probe compiles and passes its initial navigation,
  economy and save/migration groups, then fails on the unchanged historical
  level gen:qc_mt:8. The same failure reproduces with the committed baseline
  probe/settings; no campaign fix or full-regression pass is claimed.
- Updated existing Editor/PlayMode fixture sources for age selection. Not run:
  Unity/native UI/real SDK tests, real Android traffic, device backup behavior.
- npm ci, static build, local link/metadata checks and release-guard unit checks
  pass. Thirty routes; 1,101 local links/assets/anchors checked.
- HTML validation passes on all 31 HTML documents including 404; only the
  stylistic redundant-role rule is disabled for mobile table semantics.
- Browser: 150 JavaScript-disabled layouts at 320/375/390/768/1440px and 40 axe
  WCAG A/AA/best-practice scans pass with no horizontal overflow or violations.
- Local uninstrumented browser: no third-party page assets/cookies. Keyboard,
  native menu, languages, gallery, privacy anchors, redirects and 404 pass.
- Address-scope check passes: actual address appears only on legal routes.
- Negative release build correctly fails with missing evidence and preserves
  existing dist. The evidence checklist remains pending, not falsely passed.
- Bundled-policy parity is checked with scripts/sync-game-policy.py --check.

Browser evidence is under this report directory. It is local Chromium, not a
new production-domain, physical phone, Safari or human screen-reader audit.
The previously live policy URLs returned HTTPS 200 and Impressum 404 before this
implementation; that does not constitute deployment of these new pages.

## Remaining release blockers and handoff

OWNER-CHECKLIST.md enumerates the exact evidence. Primarily: latest installed
SDK/source inventory, identified Android artifact and native privacy/network
matrix, UMP/account vendor configuration, GA4 retention/sharing, Crashlytics
cache/override behavior, provider agreements/transfers, mail and hosting retention,
regional/legal review and final text parity. Data Safety mapping is a separate
worksheet, not a submitted declaration.

The ZIP contains complete cumulative website/game patches, base references,
checksums and an apply-local script. It does not automatically push/deploy a
candidate. Applying to a fresh main clone stops on overlap; reconcile against
newer developer SDK work instead of overwriting it. See PUBLICATION.md for the
last release steps after evidence is complete. No DNS change is indicated.

Privacy persistence failures now prevent activating a newly granted SDK choice
and surface a save error. Device restarts/backups after failed writes still
need explicit release testing; an unrecorded choice must not be described as
durably saved. SDK/provider native behavior remains independently gated.
