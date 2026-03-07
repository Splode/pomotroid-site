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

## Writing a post

Posts live in `content/news/` as Hugo page bundles (leaf bundles). Each post is a directory containing an `index.md` file. Images and other assets can be colocated alongside it.

```
content/news/
  my-first-post/
    index.md        ← post content
    cover.png       ← optional cover image (colocated)
```

**Front matter fields:**

```yaml
---
title: "My Post Title"
date: 2026-03-06
description: "A short summary shown in cards and OG meta."
cover: cover.png   # optional — used as og:image and news card cover
---
```

- `title` — displayed in the card, page heading, and OG title
- `date` — used for ordering (newest first) and display
- `description` — shown in cards and used as `og:description`
- `cover` — optional image filename relative to the bundle directory; renders in cards and as `og:image`

The post URL will be `/news/<bundle-directory-name>/`.

## Deployment

- **Netlify** — auto-deploys on push to `main` using `netlify.toml`
- **GitHub Pages** (`splode.github.io/pomotroid/`) — GitHub Actions deploys a redirect page pointing to `pomotroid.app`
