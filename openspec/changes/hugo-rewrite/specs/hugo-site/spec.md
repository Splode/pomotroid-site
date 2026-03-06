## ADDED Requirements

### Requirement: Hugo project structure
The site SHALL be a valid Hugo project with `hugo.toml` at the root. The project SHALL NOT contain a `package.json`, `node_modules/`, or any Node.js toolchain files. Building the site SHALL require only the Hugo Extended binary.

#### Scenario: Clean build
- **WHEN** `hugo` is run in the project root
- **THEN** the site builds without errors and outputs to `public/`

#### Scenario: No Node dependency
- **WHEN** Node.js is not installed on the build machine
- **THEN** the site builds successfully

### Requirement: Single-page layout
The site SHALL render as a single HTML page via `layouts/index.html`. The page SHALL contain all sections: hero, features, downloads, feedback, and footer.

#### Scenario: Page structure
- **WHEN** the built `public/index.html` is inspected
- **THEN** it contains all five sections in document order

### Requirement: SCSS via Hugo Pipes
Styles SHALL be authored in SCSS and processed by Hugo Pipes (Dart Sass). The output SHALL be fingerprinted and minified in production. The SCSS structure SHALL use `_variables.scss` for design tokens and `_base.scss` for resets/font-face.

#### Scenario: SCSS compilation
- **WHEN** `hugo` builds the site
- **THEN** a single fingerprinted CSS file is emitted and linked in the HTML `<head>`

### Requirement: Config-driven site parameters
Download URLs, app version, and site metadata SHALL be defined in `hugo.toml` under `[params]`. Templates SHALL reference these values via `{{ .Site.Params }}` — no hardcoded URLs in layout files.

#### Scenario: Release update
- **WHEN** `hugo.toml` download URLs and version are updated
- **THEN** the built HTML reflects the new values without any template changes

### Requirement: Static assets preserved
All existing static assets (favicons, screenshots, share images, Google verification file) SHALL be copied to `static/` and served at the same paths as the current site.

#### Scenario: Favicon availability
- **WHEN** the built site is served
- **THEN** `favicons/` directory and all contained files are accessible at the same paths

### Requirement: Meta and structured data preserved
All existing `<head>` meta tags (description, keywords, OG, Twitter Card, JSON-LD schema) SHALL be present in the built HTML, updated to use the Netlify canonical URL.

#### Scenario: OG tags present
- **WHEN** the built `index.html` is inspected
- **THEN** `og:title`, `og:description`, `og:url`, and `og:image` meta tags are present with correct values
