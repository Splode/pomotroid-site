## ADDED Requirements

### Requirement: Netlify deployment configuration
A `netlify.toml` SHALL be present at the project root, configuring Hugo Extended as the build command, `public` as the publish directory, and specifying `HUGO_VERSION` and `HUGO_BASEURL` environment variables. Netlify SHALL be the canonical deployment target.

#### Scenario: Netlify build succeeds
- **WHEN** the repo is connected to Netlify and a push triggers a build
- **THEN** Netlify builds the Hugo site and publishes to the configured domain without manual configuration

#### Scenario: Correct base URL used
- **WHEN** the Netlify build runs
- **THEN** all internal URLs and canonical tags in the output use the Netlify domain (not `splode.github.io/pomotroid/`)

### Requirement: Canonical URL points to Netlify domain
The `<link rel="canonical">` tag, all OG `og:url` and `twitter:url` meta tags, and the JSON-LD `@id` SHALL use the Netlify domain as the base URL. The GitHub Pages URL SHALL NOT appear as canonical in the built output.

#### Scenario: Canonical tag in Netlify build output
- **WHEN** the Netlify-built `index.html` is inspected
- **THEN** `<link rel="canonical">` href matches the Netlify domain

### Requirement: GitHub Pages redirect deployment
A GitHub Actions workflow SHALL deploy a redirect page to the `gh-pages` branch on every push to `main`. The redirect page SHALL be a minimal `index.html` containing a `<meta http-equiv="refresh" content="0; url=NETLIFY_URL">` tag, a `<link rel="canonical">` pointing to the Netlify domain, and a JavaScript `window.location.href` fallback.

#### Scenario: GH Pages redirects to Netlify
- **WHEN** a browser navigates to `splode.github.io/pomotroid/`
- **THEN** the browser is immediately redirected to the Netlify canonical URL

#### Scenario: Redirect works without JavaScript
- **WHEN** JavaScript is disabled and a browser navigates to the GH Pages URL
- **THEN** the meta refresh redirect fires and the browser navigates to the Netlify URL

### Requirement: GH Pages does not serve the full Hugo site
The GitHub Actions workflow SHALL NOT run `hugo` to build the full site for GH Pages. It SHALL only deploy the redirect `index.html`. This avoids baseURL conflicts between the subpath GH Pages URL and the root-domain Netlify URL.

#### Scenario: GH Pages branch contents
- **WHEN** the `gh-pages` branch is inspected after a workflow run
- **THEN** it contains only the redirect `index.html` (and `.nojekyll` to disable Jekyll processing)
