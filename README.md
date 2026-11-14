# Kruty1918 Games — Oleksiy Havryliuk

The independent game developer website at https://oleksiy-havryliuk.de.
All pages share the same forest palette, typography, navigation, spacing and
footer. Project imagery keeps each game recognizable within that common frame.
Kruty1918 Games is a personal trading name, not a separate registered company.

## Build and preview

Vercel uses Node.js 22.x. The static generator has no npm dependencies.

```sh
npm ci
npm run build
npm test
npm run preview
```

Open http://127.0.0.1:4173. Generated HTML lives in `dist/`; edit the source files,
not the generated output. `vercel.json` contains the build, routing and security
settings for the existing Vercel project.

## Pages and languages

There are 39 complete pages and a 404 page. English uses the base route;
Ukrainian and German retain the same page with `/uk` and `/de` suffixes, for
example `/about/uk` and `/quiet-camp/privacy/de`.

| Route | Content |
|---|---|
| `/` | Developer introduction, selected games and contacts |
| `/games` | Game catalogue |
| `/portfolio` | Games, tools and experiments |
| `/about` | Portrait, biography, project context and contacts |
| `/quiet-camp` | Quiet Camp scenes and project links |
| `/moyva` | World-generation prototype and contribution |
| `/fun-and-ball` | Earlier Unity game |
| `/quiet-camp/legal` | Support, privacy contact and documents |
| `/quiet-camp/account` | Sign-in, account linking and cloud-save help |
| `/quiet-camp/delete-account` | Account deletion guide and link to the live deletion form |
| `/privacy` | Website privacy policy |
| `/quiet-camp/privacy` | Quiet Camp privacy policy |
| `/impressum` | Owner identity, postal address and contacts |

Existing routes, policy URLs and redirects remain compatible. Language links
keep the current page. Navigation, document contents and original gallery image
links work without JavaScript. JavaScript adds keyboard controls for the image
viewer, Escape handling for the mobile menu and a policy reading indicator.

## Maintain the site

- `site/content.json`: the complete en/uk/de catalogue and visible interface copy.
- `site/layout.mjs`: one shared header, footer, metadata and language navigation.
- `site/projects.mjs`: the common project layout and natural-ratio galleries.
- `site/player-pages.json` / `player-pages.mjs`: translated account and deletion guides.
- `site/search.json` / `search.mjs`: localized search metadata and static structured data.
- `public/assets/site.css`: shared design; `site.js`: progressive interactions.
- `legal/website/content.json`: website policy, eight sections in each language.
- `legal/quiet-camp/content.json`: game policy, fourteen sections in each language.
- `legal/controller.json`: confirmed owner identity and contacts.
- `docs/media-sources.json`: image dimensions, responsive variants and provenance.
- `docs/selected-media-2026-10-22.json`: sources and selection rationale for new imagery.

To add a game, supply one project entry with a unique slug, all three languages,
a hero, gallery and image provenance. Run `npm run routes`, review the changed
Vercel route map, build and test. Cards, project pages, language alternatives
and sitemap entries are generated from the catalogue.

Do not add external fonts, tracking, invented screenshots, store availability
or unverified project credits. Hosting is static; contact links use email.

## Policies and Android release evidence

The current Quiet Camp policy revision is
`2026-11-14.public-policy-12-google-opt-in`, dated 14 November 2026 in en/uk/de.
It describes Google-only new sign-in, optional cloud progress, independent
Firebase Analytics consent, first-win invitation and main-menu privacy controls,
free retries, banner/win-break advertising and one-hint rewarded videos.
Facebook is paused; historical identities and verified-deletion support remain.
The website privacy notice, account/deletion guides and search metadata are aligned.
See [the update evidence and remaining limits](docs/privacy-update-2026-11-14.md).

Website publication does not activate game SDKs, sales or real ad inventory.
The release-evidence file remains a dated incomplete Android checklist;
`release:check` and `build:release` must still reject missing artifact,
native consent/network and provider-account evidence. Ordinary `build` publishes
static information without claiming Android release acceptance. Earlier reports
and policy revisions remain historical; they do not describe the current text.

The canonical game policy renderer can synchronize draft game resources without
enabling SDKs. After applying the accompanying policy-sync compatibility update
to a local game checkout:

```sh
python scripts/sync-game-policy.py --game-root /path/to/quiet-camp --write-candidate
python scripts/sync-game-policy.py --game-root /path/to/quiet-camp --check
```

Earlier reports in `reports/` and V1/V2 design documents describe their dated
revisions. The current shared layout is documented in
[the design system](docs/design-system.md).

## Search and player account discovery

Account help and deletion are linked from the game page, documents hub and shared footer, with all six translated routes in the sitemap. The actual deletion form stays on the existing Worker and requires fresh provider sign-in plus confirmation. Browser sign-in for the game requires its handoff and is not offered as a standalone website login.

See [search and publication instructions](docs/search-and-player-pages-2026-10-24.md) for metadata, strict CSP hashes and Google Search Console steps. Run `npm run routes` after changing structured-data content to regenerate the matching Vercel security hashes, then build/test. Search result snippets and indexing remain controlled by the search engine; no indexing request was submitted from this workspace.
