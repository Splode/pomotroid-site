## 1. Hugo Project Scaffold

- [x] 1.1 Install Hugo Extended and verify version
- [x] 1.2 Create `hugo.toml` with site title, `baseURL = "https://pomotroid.app"`, and `[params.downloads]` block — each platform has `primary`, `primaryLabel`, `secondary`, `secondaryLabel` (Windows/Linux) or `brew` (macOS); populate with current release asset URLs from GitHub releases page
- [x] 1.3 Create directory structure: `layouts/`, `layouts/partials/`, `assets/scss/`, `static/fonts/`, `static/favicons/`

## 2. Static Assets

- [x] 2.1 Copy `public/favicons/` → `static/favicons/`
- [x] 2.2 Copy `public/pomotroid-screens.png`, `public/pomotroid-site-timer.svg`, `public/pomotroid-share-1200x630.png`, `public/pomotroid-share-1200x600.png` → `static/`
- [x] 2.3 Copy `public/google81410c2ee71b3a22.html` → `static/`
- [x] 2.4 Copy `public/favicon.ico` → `static/`
- [x] 2.5 Copy `MonaSansVF[wdth,wght,opsz,ital].woff2` and `.woff` from `~/code/mona-sans/fonts/webfonts/variable/` → `static/fonts/`

## 3. SCSS

- [x] 3.1 Create `assets/scss/_variables.scss` — port color tokens (`$colorBlue`, `$colorGreen`, `$colorNavy`, etc.) and breakpoints; add CSS custom properties block mirroring the SCSS vars
- [x] 3.2 Create `assets/scss/_base.scss` — `@font-face` for Mona Sans variable font (woff2 + woff, full axis range), body reset, `font-optical-sizing: auto`, base link styles, `img { max-width: 100% }`
- [x] 3.3 Create `assets/scss/main.scss` — `@use` imports, all page styles: hero, features, downloads, feedback, footer; native CSS Grid/Flexbox replacing Bootstrap Nucleus grid; section color blocks with `border-top` transitions replacing SVG Rounder

## 4. HTML Templates

- [x] 4.1 Create `layouts/partials/head.html` — port all meta from `public/index.html`: charset, viewport, title, updated meta description, keywords, canonical (`https://pomotroid.app`), OG tags, Twitter Card tags, favicon links, JSON-LD schema; link fingerprinted CSS via Hugo Pipes
- [x] 4.2 Create `layouts/index.html` — full page template: hero with SVG timer image and per-platform download options (primary button + secondary link or Homebrew snippet); five-feature highlights section; downloads section mirroring hero options; feedback section (GitHub links only, no Twitter); footer with GitHub icon and "Built with Tauri, Rust, and Svelte" line
- [x] 4.3 Wire all download hrefs and labels to `{{ .Site.Params.downloads.<platform>.primary }}`, `.primaryLabel`, `.secondary`, `.secondaryLabel`, `.brew` as appropriate

## 5. Build Verification

- [x] 5.1 Run `hugo server` and verify site renders correctly in browser
- [x] 5.2 Verify all primary download buttons and secondary options link to correct GitHub release assets; verify macOS Homebrew snippet renders as code element
- [x] 5.3 Verify `public/index.html` contains canonical, OG, and JSON-LD tags
- [x] 5.4 Verify fingerprinted CSS is emitted and linked
- [x] 5.5 Verify Mona Sans variable font loads and renders at correct weights (body 400, headings 600, title 700+)
- [x] 5.6 Verify no JavaScript is present in the built output (except inline font-display fallback if any)

## 6. Deployment Configuration

- [x] 6.1 Create `netlify.toml` — `[build]` with `command = "hugo --minify"`, `publish = "public"`, `[build.environment]` with `HUGO_VERSION`, `HUGO_EXTENDED = "true"`, `HUGO_BASEURL = "https://pomotroid.app"`
- [x] 6.2 Create `.github/workflows/gh-pages.yml` — on push to `main`, write a redirect `index.html` (meta refresh + JS redirect to `https://pomotroid.app`) and `.nojekyll`, then deploy to `gh-pages` branch using `peaceiris/actions-gh-pages`

## 7. Cleanup

- [x] 7.1 Remove `src/` directory
- [x] 7.2 Remove `public/` directory (Hugo will regenerate it; add to `.gitignore`)
- [x] 7.3 Remove `package.json`, `package-lock.json`, `babel.config.js`, `vue.config.js`, `.eslintrc.js`, `.browserslistrc`, `.travis.yml`
- [x] 7.4 Update `.gitignore` — add `public/`, remove Node-specific entries; add Hugo-specific entries (`resources/`, `.hugo_build.lock`)
- [x] 7.5 Update `README.md` with Hugo build instructions
