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

There are 33 complete pages and a 404 page. English uses the base route;
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

Both public policies are complete visitor-facing documents dated 23 October
2026. The Quiet Camp policy revision is `2026-10-23.public-policy-4-cloudflare`. They explain
the implemented processing and the conditions for optional game services. They
do not display internal review or unfinished-document notices.

Website publication and Android service activation are separate operations.
The existing runtime/evidence flags remain unchanged. `npm run release:check`
and `npm run build:release` still require actual Android, account and SDK evidence;
normal `npm run build` produces the public website without enabling game services.
See [current Cloudflare policy source notes](docs/privacy-cloudflare-2026-10-23.md)
and [earlier policy source notes](docs/policy-publication-2026-10-22.md).

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
