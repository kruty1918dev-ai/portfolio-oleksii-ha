# Developer-site architecture

Build: Node.js native filesystem APIs only. No React/Spark/Vite/Tailwind/browser
API call is required. npm ci now succeeds against a minimal matching lockfile.
The previous client-side CV and recruitment interface and its dependency stack
were removed from current sources. Git history retains prior versions.

Source data → shared templates → dist static documents and assets. The builder
checks translation structure and route uniqueness, escapes ordinary content and
preserves the legal document's existing authored paragraphs. Inline tracking or
third-party assets are not added. CSP restricts assets to the same origin.

Explicit vercel.json settings take precedence over auto-detected frontend presets:
install npm ci, build npm run build, output dist, framework null. Exact rewrites
serve extensionless paths. There is no SPA fallback that turns unknown routes
into a false 200 homepage. A real static 404 page is emitted. Changes to existing
Vercel domain bindings, STRATO DNS, mail and the separate GitHub Pages guide are
not part of this repository update.

All project pages are catalogue-driven, with distinct compositions selected in
site/projects.mjs and scoped CSS themes. Shared chrome stays in site/layout.mjs.
A new project without a theme receives a complete neutral page. See
docs/design-system.md for the design rationale. A future slug automatically receives all
three localizations, a game/project page, catalogue links and sitemap entries when
complete translations and image metadata are supplied. Mark one project featured
for the primary game. Run npm run routes after adding/removing routes and commit
the resulting vercel.json with the source data.

Legal content: paragraphs, recipient/retention qualifications, controller identity,
privacy/support addresses and all 14 sections are retained from the previous
release. The review badge wording now means “release review pending”, rather than
incorrectly saying the already-public draft has not been published. No legal
approval or new in-app consent control is asserted. Privacy links now lead back
to the game page on this domain; the illustrated guide remains an external link
on the Quiet Camp page.

The additional /privacy route uses legal/website/content.json and the shared
legal layout. It covers website delivery and correspondence separately from the
game. Its legal-address and provider-account gaps are explicitly labelled.
