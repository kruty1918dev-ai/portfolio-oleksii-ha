# Shared website and game accounts — 24 October 2026

Prepared branch: feature/shared-player-accounts-20261024, coordinated with the
same branch in kruty1918dev-ai/quiet-camp. Publish the new Worker and SQL
migration 0004 first, then merge the website branch for the existing Vercel deploy.
Cloudflare credentials are unavailable in this environment; no production D1,
Worker, Firebase/Meta setting or administrator allow-list has been changed.

The existing three translated account landing pages now link to the developer's
account portal on the existing Cloudflare Worker. The informational website stays
static, with no Firebase SDK, account cookies, secrets or visitor tracking. All
39 public routes, deletion-form discovery and sitemap remain. Personal account
and admin documents are noindex/no-store and are not added to the sitemap.

The Worker implements verified Google/Facebook sign-in, one Firebase UID per
server profile, editable camper name, provider-verified email where available,
connected methods, cloud-save timestamp, browser-only sign-out, fresh-proof
account deletion, and a server-authorized owner directory with exact search and
bounded pagination. Provider linking never merges profiles by matching email.
Native sign-in/deletion endpoints are prepared; the Unity client is a separate
implementation task with Config/NATIVE-SIGN-IN-UA.md. No native login is claimed.

Website/game policies in all languages explain minimal profile fields, necessary
one-hour HttpOnly/Secure/Strict website-session cookies, restricted owner access,
and deletion including minimal race-prevention markers. Policy revision:
2026-10-24.public-policy-11-shared-player-accounts. The game bundle retains all
14 sections, with matching canonical body SHA-256. Existing service/privacy
review flags are not enabled by the policy update.

Verification: website build and all static/search/release-fixture tests pass;
39 workerd/D1 contracts pass; nine browser combinations (en/uk/de at widths
1440/390/320) exercise actual portal HTML with mocked Firebase and APIs, including
profile edits, XSS-safe rendering, linking, cancellation, deletion success/retry,
and private directory layout. Six policy browser checks pass without JavaScript
or third-party requests. Five isolated policy-sync fixtures pass. Browser and
backend tests are separate evidence; real provider OAuth, production deletion,
Android chooser, credentials and mobile performance remain unverified.

Owner instructions: Server/cloudflare/PLAYER-ACCOUNTS-UA.md in the game repo.
Delivery includes a bundled Worker, new migration, guide and copyable Unity prompt.
Do not publish a static portal link before its Worker service is ready.
