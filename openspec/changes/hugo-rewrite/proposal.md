## Why

The current site is a Vue 2 SPA — a JavaScript-rendered landing page with ~500MB of node_modules, a stale build toolchain (Vue 2 is EOL), and almost no runtime interactivity to justify the overhead. Replacing it with Hugo eliminates the framework entirely, improves performance, and makes the site trivially maintainable long-term.

## What Changes

- **BREAKING**: Remove Vue 2, vue-cli, webpack, and all npm dependencies
- **BREAKING**: Remove `bootstrap-nucleus` grid framework; replace with native CSS layout
- Replace Lato (TTF) + RobotoMono (TTF, unused) with Mona Sans variable font (WOFF2)
- Replace OS-detection download button (single, JS-driven) with per-platform primary and secondary download options
- Expand macOS downloads to include Homebrew install option alongside DMG
- Expand Linux downloads to show both AppImage (primary) and .deb (secondary)
- Move all download links and version string into `hugo.toml` site params — no more hunting component code on release
- Rewrite features section with current app capabilities: 5 curated highlights replacing the outdated 3-item list
- Update meta description and page copy to reflect current app (was Electron + Vue, now Tauri 2 + Rust + Svelte 5)
- Add tech stack credit to footer
- Remove Twitter/X share button and associated CTA copy
- Remove SVG Rounder section dividers; replace with clean color-block section transitions
- Add `netlify.toml` for Netlify deployment configuration
- Add GitHub Actions workflow for GH Pages redirect deployment
- GH Pages (`splode.github.io/pomotroid/`) becomes a redirect to the Netlify canonical domain
- Netlify domain becomes the canonical URL; all meta/OG/canonical tags updated accordingly

## Capabilities

### New Capabilities

- `hugo-site`: Hugo project structure — config, layouts, partials, SCSS pipeline, static assets
- `font-setup`: Mona Sans variable font integration (single WOFF2 file, all weights/widths via CSS axes)
- `download-section`: Per-platform download UI with primary and secondary options; macOS Homebrew code snippet; config-driven from hugo.toml
- `page-content`: Rewritten features section (5 curated highlights), updated meta description, footer tech stack credit
- `deployment`: Dual deployment — Netlify as canonical, GH Pages as redirect

### Modified Capabilities

## Impact

- Removes: `src/`, `public/`, `package.json`, `package-lock.json`, `babel.config.js`, `vue.config.js`, `.eslintrc.js`, `.browserslistrc`, `.travis.yml`, `node_modules/`
- Adds: `hugo.toml`, `layouts/`, `assets/`, `static/`, `netlify.toml`, `.github/workflows/`
- Features section copy rewritten; meta description updated; footer gains tech stack credit
- All images, favicons, and structured data tags preserved
- Build output: pure HTML + CSS, no JavaScript required
- Dependencies: Hugo binary only (no Node, no npm)
