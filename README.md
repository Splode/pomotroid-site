# pomotroid-site

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6f61c52-65b1-49eb-846f-02492b8d3a5e/deploy-status)](https://app.netlify.com/projects/pomotroid/deploys)

> Landing page for the [Pomotroid app](https://github.com/Splode/pomotroid) — [pomotroid.app](https://pomotroid.app)

Built with [Hugo](https://gohugo.io) (Extended). No Node.js required.

## Prerequisites

[Hugo Extended](https://gohugo.io/installation/) v0.157.0 or later.

```bash
# macOS
brew install hugo

# or download from https://github.com/gohugoio/hugo/releases
```

## Development

```bash
# Serve with live reload at localhost:1313
hugo server

# Build for production
hugo --minify
```

## Updating a release

Edit `hugo.toml` and update the version and download URLs under `[params.downloads]`. No template changes needed.

## Deployment

- **Netlify** — auto-deploys on push to `main` using `netlify.toml`
- **GitHub Pages** (`splode.github.io/pomotroid/`) — GitHub Actions deploys a redirect page pointing to `pomotroid.app`
