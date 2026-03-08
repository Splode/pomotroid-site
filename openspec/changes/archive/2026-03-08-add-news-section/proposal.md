## Why

The site currently has no channel for communicating with the Pomotroid community beyond static download links. A news section gives the project a narrative voice — a place to share release stories, feature previews, and user showcases that GitHub releases and issue trackers aren't suited for.

## What Changes

- Add a `content/news/` Hugo content section using page bundles (one folder per post, images colocated)
- Add `layouts/news/list.html` — paginated card grid at `/news/`
- Add `layouts/news/single.html` — individual post page with OG meta support
- Add `layouts/partials/nav.html` — minimal site header with home + News links (new element)
- Modify `layouts/index.html` — add "Latest" section (up to 3 most recent posts, hidden if no posts exist) between the Features and Downloads sections
- Modify `layouts/partials/head.html` — add RSS auto-discovery `<link>` tag
- Modify `layouts/index.html` footer — add RSS feed icon link alongside GitHub icon
- Add `content/news/_index.md` — news section metadata (title, description for RSS)

## Capabilities

### New Capabilities

- `news-posts`: Hugo page bundle content model for news posts — front matter schema, image colocation, authoring conventions
- `news-index`: `/news/` listing page — card grid, pagination, RSS link
- `news-single`: Individual post template — typography, image rendering, OG/Twitter meta per post
- `site-nav`: Minimal header navigation — home link, News link, present on all pages
- `landing-latest`: "Latest" section on the landing page — up to 3 recent post cards, conditionally rendered, RSS link

### Modified Capabilities

## Impact

- Adds: `content/`, `layouts/news/`, `layouts/partials/nav.html`
- Modifies: `layouts/index.html`, `layouts/partials/head.html`
- No changes to SCSS variables, deployment config, or `hugo.toml` params (aside from possible pagination setting)
- Hugo's built-in RSS generation requires no additional dependencies
