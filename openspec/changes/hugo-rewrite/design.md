## Context

The current site is a Vue 2 SPA (`vue-cli` + webpack) serving a single static landing page for the Pomotroid desktop app. It has one component with actual logic (`Rounder.vue` — a decorative SVG) and one computed property (`platformInfo` — OS detection via `navigator.platform`). Everything else is static HTML/CSS. The site deploys to GitHub Pages at `splode.github.io/pomotroid/` and has no secondary deployment.

The rewrite targets Hugo as a zero-dependency static site generator. All design decisions optimize for simplicity and long-term maintainability over feature richness. The canonical domain is `pomotroid.app` (Netlify).

## Goals / Non-Goals

**Goals:**
- Eliminate Node.js/npm build toolchain entirely
- Produce visually refreshed output with updated typography and rewritten content
- Make release updates a one-file, one-commit operation (hugo.toml params)
- Establish Netlify as canonical deployment, GH Pages as redirect
- Self-host Mona Sans variable font for all typography

**Non-Goals:**
- Full SEO audit or structural improvements beyond updating canonical URL
- Dark/light mode or theme switching
- Any client-side interactivity beyond what static HTML provides

## Decisions

### Hugo over other SSGs (Eleventy, Astro, etc.)

Hugo is a single binary with no runtime dependencies. Eleventy requires Node; Astro requires Node and is designed for component-heavy sites. For a one-page brochure site, Hugo's zero-dependency model is the correct choice — `brew install hugo` and the site builds.

### Native CSS over utility frameworks (Tailwind, etc.)

The current site's styles are ~200 lines of hand-written SCSS. Replacing Bootstrap Nucleus with Tailwind or similar trades one dependency for another. Native CSS Grid and Flexbox cover every layout need on this page without a build-time dependency. SCSS is retained via Hugo Pipes (uses Dart Sass, included in Hugo extended).

### Variable font over static font files

Mona Sans ships a variable WOFF2 (`MonaSansVF[wdth,wght,opsz,ital].woff2`) with `wght` (100–900), `wdth` (75–125%), `opsz`, and `ital` axes. One file replaces the two TTF files in the current site (Lato Regular + RobotoMono Light, the latter unused). WOFF2 + variable = significantly smaller payload than two uncompressed TTFs. `font-optical-sizing: auto` on `body` lets the browser set `opsz` per element without manual `font-variation-settings`.

### Config-driven download links

Download URLs and version string live in `hugo.toml` under `[params.downloads]`. Templates reference `{{ .Site.Params.downloads.windows }}` etc. This makes release updates a single-file edit with no template changes required.

### Netlify as canonical, GH Pages as redirect

Netlify auto-detects Hugo and builds natively. The `netlify.toml` sets `HUGO_BASEURL` via env so no baseURL juggling is needed in `hugo.toml`. The GH Pages deployment does NOT build the Hugo site — it deploys a single `redirect/index.html` with `<meta http-equiv="refresh">` and a JS fallback pointing to the Netlify domain. This avoids dual-baseURL complexity entirely.

### Section transitions: color blocks over SVG curves

The `Rounder.vue` SVG arc component masked hard edges between `#2F384B` and `#3D4457` sections. Removing it means sections meet at a clean horizontal line. A subtle `border-top: 1px solid rgba(255,255,255,0.07)` on dark-background sections provides visual definition without decorative elements. The light-background Features section gets natural contrast from the color change alone.

### CSS custom property naming aligned with app theme tokens

The Pomotroid app defines its color system via CSS custom properties in theme JSON files (e.g. `--color-background`, `--color-foreground`, `--color-accent`). The site's SCSS variables SHALL use the same names as CSS custom properties — `--color-background: #2f384b` rather than inventing a separate naming scheme. This creates a coherent design language between the app and its landing page, and makes the token mapping self-documenting.

### Feature curation: five highlights over full enumeration

The app ships 14+ features. Listing all of them on a landing page dilutes the message. Five curated highlights are selected to tell a progressive story: core timer → statistics → themes → background operation → localization. Each highlight is specific and concrete — no marketing language. The full feature list is available in the GitHub README for those who want it.

### Download section: primary button + secondary option per platform

Each platform now ships multiple artifacts (Windows: installer + portable exe; macOS: DMG + Homebrew; Linux: AppImage + .deb). The UI pattern is one prominent download button (primary) with a secondary link or code snippet below it. macOS Homebrew is rendered as a copyable code block, not a button, since it's a terminal command rather than a file download. AppImage is the primary Linux artifact (no root install required). The `hugo.toml` params structure reflects this: each platform has `primary`, `primaryLabel`, and either `secondary`/`secondaryLabel` or `brew` keys.

### SCSS via Hugo Pipes

Hugo Extended includes Dart Sass. `assets/scss/main.scss` is processed with `resources.Get | css.Sass | resources.Fingerprint`. This preserves the existing SCSS variable/partial structure while producing a fingerprinted, minified output with no npm sass dependency.

## Risks / Trade-offs

- **Hugo Extended required**: Standard Hugo does not include Dart Sass. The build assumes Hugo Extended. Netlify uses Extended by default; local installs must use `hugo-extended`. → Documented in README, enforced in `netlify.toml` with `HUGO_VERSION`.
- **No JS platform detection**: The hero now shows all three download buttons instead of one OS-targeted button. This is a UX simplification, not a regression — the lower Downloads section already showed all three. → Accepted trade-off for zero-JS page.
- **GH Pages redirect latency**: `meta http-equiv="refresh"` redirects have a brief visual flash. JS fallback fires immediately for most users. → Acceptable for a legacy URL that should be replaced.
- **Unsigned binary warning omitted**: macOS users may see a Gatekeeper warning on first launch. The decision to omit this from the landing page means some users will be surprised. → Can be added as a tooltip or footnote near the macOS download in a future update.

## Migration Plan

1. Scaffold Hugo site structure alongside existing Vue source
2. Write and review updated features copy; port all styles
3. Configure `netlify.toml` and connect repo to Netlify (domain: `pomotroid.app`)
5. Add GitHub Actions workflow for GH Pages redirect
6. Remove Vue source tree (`src/`, `public/`, `package.json`, etc.)
7. Merge and verify both deployments

## Open Questions

None.
