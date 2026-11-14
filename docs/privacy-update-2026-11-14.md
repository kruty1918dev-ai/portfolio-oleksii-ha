# Quiet Camp privacy update — 14 November 2026

Revision: `2026-11-14.public-policy-12-google-opt-in`, all three languages.
The existing Vercel site and canonical routes are preserved. No new site,
analytics tag, cookie banner, contact form or external resource was introduced.
Publication is through the existing main-branch Vercel integration; live receipts
are recorded separately after deployment, not inferred from a Git push.

## Source-backed changes

- Current game main `334ce501`: Firebase Analytics opt-in and withdrawal,
  first-win invitation without backfilling, main-menu-only privacy/account controls;
  separate crash choice, no aggregate-statistics service.
- Deployed Worker `126c45d4-3f98-4cd4-b642-9ac851695182`: only Google for new
  authentication/linking, existing EU D1 without read replication, one-hour web
  cookie and maximum 90-day game sessions. Old Facebook identifiers/sessions
  remain recognized for continuity/deletion, never advertised as a new login.
- Current ad policy: free immediate retries; no lives gate; preloaded win break
  after animation/before results, gameplay banner, voluntary one-hint videos.
  Optional Analytics is independent from permitted AdMob impression/security data.
- No invented GA4 two-month retention confirmation. D1 recovery is described
  by the provider's applicable Free/Paid window, not an assumed billing plan.
  An EU database does not promise EU-only Firebase Authentication or network processing.
- Account/deletion guides, website privacy and search descriptions no longer
  offer Facebook or invite new provider linking; legacy-access requests have an
  email path with appropriate identity verification.
- The Unity full offline policy and summaries are synchronized by the game's
  existing `tools/sync_privacy_policy.py --write-published`. No SDK review flags
  are enabled, and historical saves are not rewritten.

## Checks and limits

Static build/checks pass: 39 translated routes + 404, all policy sections,
local links, metadata, sitemap, 12 JSON-LD graphs and their strict CSP hashes,
unchanged media provenance. Six policy-sync contracts pass in the game repo.
Existing release-guard tests pass by rejecting incomplete synthetic evidence.
No Unity, player build, mobile test, real login/deletion or new browser capture
was run for this text update. This does not resolve the partially explained
old-APK withdrawal observation or certify legal compliance/Android readiness.
GA4 console retention/sharing, final Google Play Data Safety, minor-consent
arrangements and native SDK/network acceptance remain separate owner/release work.

## Primary references checked

- [Firebase privacy and authentication location](https://firebase.google.com/support/privacy)
- [Analytics collection controls](https://firebase.google.com/docs/analytics/configure-data-collection)
- [Crashlytics opt-in controls](https://firebase.google.com/docs/crashlytics/customize-crash-reports?platform=unity)
- [UMP choices and privacy options](https://developers.google.com/admob/unity/privacy)
- [D1 jurisdiction](https://developers.cloudflare.com/d1/configuration/data-location/)
- [D1 recovery](https://developers.cloudflare.com/d1/reference/time-travel/)
- [D1 plan limits](https://developers.cloudflare.com/d1/platform/limits/)
- [Official §25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html)
- [BfDI GDPR/BDSG guidance](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Broschueren/INFO1.pdf?__blob=publicationFile&v=18)

These references support provider/legal descriptions; project implementation
claims come from the current game/Worker source and dated evidence above.
