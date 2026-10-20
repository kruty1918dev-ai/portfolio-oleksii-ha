# Publishing the exact official policy URL

Prepared, not deployed. Never push this delivery to an auto-deploying branch or run `vercel --prod` before the owner explicitly authorizes publication. A preview deployment also requires respecting the owner’s no-publication instruction; local review is sufficient here.

## Architecture established by this audit

- STRATO: domain registrar as supplied by owner; no account access and no proof of mail hosting.
- Public custom-domain root: `https://oleksiy-havryliuk.de/` returned 200 over verified HTTPS and a Vercel response ID.
- `https://portfolio-oleksii-ha.vercel.app/` returned byte-identical live HTML.
- Website source: `kruty1918dev-ai/portfolio-oleksii-ha` main, commit `6e8ab50cdb319a2b186c0db04d8f8e0d3a547b44`. Existing Vite/Spark/React app; public/ is copied into dist by its normal web build. Main commit has a successful `Vercel – portfolio-oleksii-ha` deployment status pointing to `https://vercel.com/oleksiy-havryliuk/portfolio-oleksii-ha/BUyd2eMUq8Wqv2gSuvCjQ4H22zSj`.
- A second status context `project-u8d1i` is blocked; it is not a reason to change domains/projects.
- No tracked vercel.json or attached `.vercel/project.json` existed before this work. No Vercel account connector/credentials are available in this session. Therefore Dashboard Git/Domain binding and overrides must still be confirmed by the owner in the identified project. Do not invent project IDs or run interactive login.
- Read-only public DNS snapshot: apex A 216.198.79.1; www CNAME cname.vercel-dns.com. No DNS changes were necessary for this path. Values are observations, not suggested replacement records.
- `/quiet-camp/privacy` and `/impressum` returned 404. They were actually reached over HTTPS; the new page has not been tested on production because it has not been deployed.
- The game guide `https://kruty1918dev-ai.github.io/quiet-camp/` is separately served from the Unity repo’s docs/. It should keep its own path and hosting. No Pages CNAME or custom-domain migration is part of this work.

## Files and route map

| Public URL | Website repository file | Vercel output |
|---|---|---|
| /quiet-camp/privacy | public/quiet-camp/privacy/index.html | dist/quiet-camp/privacy/index.html |
| /quiet-camp/privacy/uk | public/quiet-camp/privacy/uk/index.html | dist/quiet-camp/privacy/uk/index.html |
| /quiet-camp/privacy/de | public/quiet-camp/privacy/de/index.html | dist/quiet-camp/privacy/de/index.html |
| /quiet-camp/privacy/policy.css | public/quiet-camp/privacy/policy.css | same path under dist |
| /quiet-camp/privacy/brand-icon.png | public/quiet-camp/privacy/brand-icon.png | same path under dist |

vercel.json adds only three exact rewrites and scoped security headers. It does not add a root catch-all or modify unrelated portfolio routes. The static pages are independent of the app’s React bootstrap, Spark proxy, Google fonts and app analytics. Each translation has a self canonical and the same four hreflang alternatives (including English x-default). All essential policy text is present in HTML. No noindex directive is added.

GitHub Pages is not the policy source: docs/privacy/index.html would normally become github.io/quiet-camp/privacy/ and would not establish the required custom-domain URL. The only change to the illustrated guide is a localized external footer link to the official canonical route.

## Local review

From the portfolio checkout:

```sh
python3 scripts/render-quiet-camp-policy.py
python3 -m http.server 8765 --bind 127.0.0.1 --directory public
```

Open http://127.0.0.1:8765/quiet-camp/privacy/ and its /uk/ and /de/ siblings. The simple local server adds directory slashes; production Vercel exact rewrites are prepared for the canonical extensionless paths. Canonical metadata always names the official domain, not localhost. No secrets, external assets or npm install are needed to view the legal page.

## Steps after blockers are resolved and publication is explicitly authorized

1. Verify the developer-local Firebase/Crashlytics release, UMP/teen behavior, recipient/retention settings, legal name/address, mailboxes and host data processing described in LEGAL-AND-RELEASE-REVIEW.md. Update all three content.json translations together. Replace review qualifications only with supported facts. Remove the review banner/status via the renderer after the factual/legal review is complete, not merely to make the page look final. Add the actual Impressum URL only when that page exists. Re-run checks and captures.
2. In the owner’s Vercel dashboard confirm the project `portfolio-oleksii-ha` under the identified account has the official domain and Git repository. Confirm root directory, framework preset and current deployment/build/install overrides. Preserve the existing working domain/SSL binding. Use existing npm run build and dist output for the Vite project unless an observed account configuration requires otherwise. Do not create a second project or attach the domain elsewhere.
3. Fix the pre-existing dependency lock inconsistency in a separate reviewed change or confirm the project’s supported install strategy. `npm ci` currently fails because package.json and the lock disagree, including @github/spark and transitive Octokit entries. The local web build passed after npm install --package-lock=false --ignore-scripts; that verifies code compatibility with locally resolved packages, not clean reproducibility. The delivery does not silently rewrite hundreds of unrelated dependencies.
4. Run `python3 scripts/render-quiet-camp-policy.py`, the documented HTML/browser checks, and `npm run build`. Verify all five static files are copied unchanged to dist and the main portfolio page still works. Keep reports/legal source outside the public directory. Add the three policy URLs to the existing public/sitemap.xml in the authorized release change; the current review delivery deliberately does not advertise an unpublished legal document in the sitemap.
5. Publish the approved portfolio change through the existing project. A Git push to its production branch may itself deploy; authorization must precede that push. This task did not push, deploy or change DNS.
6. Verify HTTPS GET 200 with Content-Type text/html at exactly `https://oleksiy-havryliuk.de/quiet-camp/privacy`, `/uk`, `/de`, and the trailing-slash forms used by browsers; test assets, headers, language links, hash anchors, no-JS rendering, no auth/payment/geo restrictions and no noindex/X-Robots-Tag. Confirm the English canonical is exactly the required URL. Test from relevant regions for Play availability. If an existing Vercel override redirects unexpectedly, repair the project routing after inspecting its actual configuration; do not guess at DNS.
7. Confirm the privacy and support mailboxes can receive and process requests through an owner-approved test. Implement and document server-data deletion/retention operations. Publishing a mailto link is not proof of that workflow.
8. Only after the website is live, integrate the prepared game legal.json URL/support change. The existing Settings → Privacy → Documents action uses Application.OpenURL. Confirm in Unity or an already authorized test environment without producing a player build. The current intermediate game change would open a 404 until publication. Leave sdkDisclosuresReviewed/teenPrivacyReviewed and publication metadata unset until the actual reviews pass; do not turn these gates on merely because a URL exists.
9. In a subsequent legally reviewed release, synchronize legal.revision/publishedOn, bundled privacy_content language variants/hashes/allowlist and summaries to the approved policy using the game’s existing document pipeline. draft=true is intentionally preserved now. Existing boot notice acknowledgement is separate from all optional consents. No scene reference needs to be invented for the present config-only menu link.
10. Supply the exact public URL in the Play Console and app settings after live checks. Complete Data Safety from the verified release, not this conditional report. Do not submit automatically. A player build needs separate explicit authorization.

No changes to MX, TXT verification, email routing, domain ownership, STRATO account settings or unrelated DNS records are needed or authorized by this delivery.
