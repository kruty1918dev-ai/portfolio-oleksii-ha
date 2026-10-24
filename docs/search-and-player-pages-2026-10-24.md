# Player pages and search metadata — 24 October 2026

The website now prepares39 indexed HTML pages across English, Ukrainian and German, plus a noindex404. New pages:

- `/quiet-camp/account`, `/quiet-camp/account/uk`, `/quiet-camp/account/de`.
- `/quiet-camp/delete-account`, `/quiet-camp/delete-account/uk`, `/quiet-camp/delete-account/de`.

Game-page actions, the help/documents hub and every shared footer expose these routes. The deletion guide links to the existing live Worker form at `https://quietcamp-access.oleksiy-havryliuk.workers.dev/v1/cloud/delete-account`. Its static instructions and link work without JavaScript. The website does not collect Google/Facebook passwords or perform deletion itself. The player reauthenticates and confirms in the Worker form. Existing game/Worker/deletion links remain compatible.

Account sign-in starts from the game, which supplies the one-time handoff. The website does not manufacture ticket URLs or link players to a context-free login operation. Session login and POST APIs are not included in the website sitemap. This change does not alter Worker responses or deploy backend code; the active authentication work can continue independently.

`site/player-pages.json` holds the three translated guides and visible game overview; `site/search.json` holds search titles and descriptions. Search metadata distinguishes the developer, game, account help and deletion pages. The Ukrainian game page includes the natural name “Quiet Camp (Квіт Кемп)”. No keyword stuffing, hidden keyword blocks, review stars, download counts, price, store availability or unverified health claims are added.

`site/search.mjs` supplies static Schema.org WebSite/Organization/Person/WebPage graphs, plus a VideoGame graph and breadcrumbs where applicable. These are descriptive structured data, not a guarantee of a special Google result. The shared layout adds Open Graph site name and Twitter card metadata, preserves canonical/hreflang URLs, and avoids repeating the brand in page titles. JSON-LD is escaped and allowed by exact SHA-256 CSP hashes; `unsafe-inline` and `unsafe-eval` remain absent. The generated Vercel configuration must be committed with metadata changes because the script hashes are derived from the prepared pages. `npm run routes` refreshes it; ordinary build rejects a stale routing/security configuration.

A live read before these changes found no Ausbildung/apprenticeship copy in the home pages or their metadata. A search result still showing it is likely an older indexed snippet. Google can select its own snippet from page content and may need to recrawl the site; changing meta descriptions does not instantly replace search results.

## Publication and Search Console

1. Publish the verified changes through the existing repository/Vercel deployment. Confirm the six new routes return200, use the intended canonical/hreflang, and appear in `https://oleksiy-havryliuk.de/sitemap.xml`.
2. Open Google Search Console for the existing `oleksiy-havryliuk.de` property. Reuse its verification if present. If verification is missing, use the exact DNS TXT or HTML verification value supplied by Google; do not invent a token or replace unrelated DNS records.
3. Under Sitemaps, submit or resubmit `https://oleksiy-havryliuk.de/sitemap.xml`.
4. Use URL Inspection / URL-Prüfung and Request indexing / Indexierung beantragen for the homepage, `/quiet-camp`, `/quiet-camp/uk`, `/quiet-camp/de`, and the account/deletion guides. Repeated requests do not speed crawling.
5. Inspect the old URL shown for the Ausbildung snippet as well. `/cv` redirects to `/about`, `/lebenslauf` to `/about/de`; keep these redirects and request recrawling of the relevant destination.
6. Keep the existing Google Play deletion URL working. After publishing, the localized website guide can also be used as the discoverable account-deletion information URL; it clearly names Quiet Camp and leads to the actual form.

No Search Console session or indexing authority was available here. Do not claim that a sitemap has been submitted, a crawl requested, an account deleted or search ranking achieved. Google determines whether/when pages are indexed and which snippet/sitelinks appear.

## Validation

- Static build and full website checks:39translated routes+404, localized links, sourced images, metadata and policy integrity.
- Search/player checks:allroutes in sitemap, discoverable localized deletion links, real Worker form destination, no destructive POST on the static site, localized game name, strict CSP for12structured-data graphs, no invented ratings/offers.
- Policy synchronization check:complete en/uk/de policy remains revision `2026-10-23.public-policy-7-google-facebook` and matches the existing game candidate; no policy-body changes.
- Chromium desktop/mobile checks use real local HTML/CSP, follow game→deletion and footer→account links in all3languages, check horizontal overflow and console errors, and confirm the form link without JavaScript. They do not exercise OAuth or deletion.

Sources:
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
