## Context

The site is a Hugo static site with a single home page (`layouts/index.html`). It has no content directory, no navigation header, and no multi-page structure. This change introduces Hugo's content model for the first time, adding a `content/news/` section alongside new layout templates and a site-wide nav partial.

The authoring workflow is: create a folder under `content/news/`, write `index.md`, drop in images, commit and push. Netlify auto-deploys.

## Goals / Non-Goals

**Goals:**
- Community-oriented narrative publishing — screenshots, stories, user showcases
- Zero new dependencies beyond Hugo's built-in content and RSS capabilities
- Authoring experience: one folder per post, images colocated, plain Markdown
- Landing page integration: latest posts surface automatically, no manual curation

**Non-Goals:**
- Comments, reactions, or any interactive features
- Structured release metadata (version fields, download links per post) — GitHub Releases handles that
- CMS or admin UI — Markdown files in the repo only
- Search across posts

## Decisions

### Page bundles over flat Markdown files

Each post is a leaf bundle (`content/news/<slug>/index.md`) rather than a flat file (`content/news/<slug>.md`). This allows images to live alongside the post content and enables Hugo's image processing pipeline (resize, WebP conversion, responsive srcsets) scoped to the bundle. For a community blog where screenshots are primary content, colocation is essential — it keeps the repo organised and avoids a sprawling `static/images/` directory.

### Up to 3 posts on landing page, hidden when empty

The "Latest" section uses `{{ range first 3 (where .Site.RegularPages "Section" "news") }}`. When no posts exist the entire section is wrapped in `{{ if ... }}` and omitted from the rendered HTML — no empty heading or orphaned layout. This transitions naturally from 0 → 1 → 2 → 3 posts without any config changes.

### Minimal nav header — not sticky

The site is a marketing/landing page. A sticky nav adds persistent chrome that competes with the hero. A simple static header (non-sticky) provides orientation for users arriving directly at a post URL without intruding on the landing page experience. Style: navy background, "Pomotroid" in green on the left, "News" link on the right — matches existing palette.

### RSS auto-discovery + visible link

Hugo generates `/news/index.xml` automatically when a content section exists. The `<link rel="alternate" type="application/rss+xml">` tag in `<head>` enables feed reader auto-discovery. A visible RSS icon link appears in two places: next to the "Latest" section heading on the landing page, and in the footer alongside the GitHub icon. This makes it findable without being prominent.

### OG meta per post driven by front matter

Each post's `single.html` template emits its own `og:title`, `og:description`, and `og:image` (using the `cover` front matter field if present, falling back to the site's default share image). This is important for the community-sharing use case — posts shared on social platforms should render rich previews.

### Pagination on `/news/` index

Hugo's built-in `.Paginate` handles the list page. Default page size of 12 cards. This requires no configuration and adds no complexity until the post count grows enough to matter.

## Risks / Trade-offs

- **Empty state on landing page**: If the Latest section is hidden when no posts exist, first-time visitors never see it mentioned. → Acceptable; the nav header always shows the News link regardless of post count.
- **No cover image fallback design**: Post cards without a cover image need a graceful fallback. → Text-only card variant with consistent height using CSS.
- **Image processing requires assets/ not static/**: Hugo Pipes image processing only works on files in `assets/` or page bundles, not `static/`. Post images in bundles work correctly; the existing site images in `static/` are unaffected. → Document in authoring guide (README).

## Open Questions

None.
