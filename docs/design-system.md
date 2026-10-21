# Studio and game identities

The shared thread is a stable page structure, not a compulsory game palette.
The same name, navigation order, language links, width, spacing scale, link/focus
behaviour and footer stay in place as visitors move between projects. Visitors
can always return to the developer and can distinguish development work from a
store release. Native HTML navigation is fully usable without JavaScript.

## Developer / studio

Warm off-white paper, dark neutral ink and a restrained rust accent. The homepage
starts with the developer's name and an index of actual projects; a large current
project image follows. Fine rules separate entries rather than floating cards.
The portrait belongs on About, with a smaller introduction on the homepage.
Copy describes actual work in the first person, without skills scores, generic
creative slogans, recruitment history or relocation plans.

## Quiet Camp / `camp`

Forest-green opening, warm cream type, the genuine game icon and a framed
landscape capture. The rest of the game page reads like a restrained field book:
project facts, game description, short notes and landscape screenshots. The
legal document shares the forest frame but keeps a neutral, readable document
layout. It has no image gallery or game-marketing decoration.

## Moyva / `atlas`

Dark blue-grey background, warm cartographic accents, a bold sans-serif title
and small monospace project labels. A square generated-world map leads the
page. The contribution and numbered systems notes sit alongside each other;
the gallery leads with a wide gameplay view and then world/editor captures.
The two-person context and prototype status remain explicit.

## Fun and Ball / `play`

Pale sky-blue opening, cream content surface, bold rounded system lettering and
rounded controls. A portrait game capture balances the title. The later gallery
uses all three original vertical captures. No invented platform frames, new
logo, stock illustrations or store availability claims are added.

## Extending the catalogue

`site/projects.mjs` selects the composition from the project `theme` value;
`site/layout.mjs` keeps common chrome and sets the corresponding body theme.
`public/assets/site.css` holds shared rules plus three scoped game themes.
A new project without a theme gets a complete neutral page. It does not need
to resemble Quiet Camp. For a new visual identity, add a composition and a
scoped theme while preserving the shared navigation and accessible controls.

All assets are local and genuine. Fonts are platform-provided; exact glyphs can
vary between operating systems. CSS includes small-screen and reduced-motion
rules. No animation, external font loading, decorative gradient or third-party
tracking is needed for these identities.
