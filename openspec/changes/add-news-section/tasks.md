## 1. Content Structure

- [x] 1.1 Create `content/news/_index.md` with title "News" and a brief description for the RSS feed
- [x] 1.2 Create a sample post bundle at `content/news/welcome/index.md` with title, date, description, and placeholder body — serves as authoring reference and first post

## 2. SCSS

- [x] 2.1 Add nav styles to `assets/scss/main.scss` — `.site-nav` with navy background, flex layout, home link in green, News link with active state
- [x] 2.2 Add news card styles — `.news-card` (cover image, title, date, description, hover state), `.news-grid` (responsive CSS Grid, text-only fallback variant)
- [x] 2.3 Add "Latest" section styles — `.latest-header` (flex row with heading, "All news →" link, and RSS icon link aligned right)
- [x] 2.4 Add single post styles — `.post-header` (title, date, back link), `.post-body` (prose typography: line-height, image sizing, heading hierarchy)

## 3. Partials and Head

- [x] 3.1 Create `layouts/partials/nav.html` — site name link left, News link right, active class when `eq .Section "news"`
- [x] 3.2 Update `layouts/partials/head.html` — add `<link rel="alternate" type="application/rss+xml" title="Pomotroid News" href="/news/index.xml" />`
- [x] 3.3 Update `layouts/partials/head.html` — add per-page OG override block: if `.IsPage` and `.Section` is "news", emit post-specific `og:title`, `og:description`, `og:url`, `og:image` (cover or site default)

## 4. Layout Templates

- [x] 4.1 Update `layouts/index.html` — add `{{ partial "nav.html" . }}` at top of `<body>` before `<main>`
- [x] 4.2 Update `layouts/index.html` — add "Latest" section between Features and Downloads sections, wrapped in `{{ if (where .Site.RegularPages "Section" "news") }}`, showing `first 3` posts as cards with "All news →" and RSS links in heading
- [x] 4.3 Update `layouts/index.html` — add RSS icon link to footer alongside GitHub icon
- [x] 4.4 Create `layouts/news/list.html` — news index page: `{{ partial "nav.html" . }}`, page heading with RSS link, paginated card grid using `.Paginator.Pages`, pagination controls
- [x] 4.5 Create `layouts/news/single.html` — individual post: `{{ partial "nav.html" . }}`, post title, date, back link to `/news/`, `{{ .Content }}` body

## 5. Verification

- [x] 5.1 Run `hugo server` and verify nav appears on home page, `/news/`, and a post page
- [x] 5.2 Verify "Latest" section is absent from home page when no posts exist (comment out sample post, rebuild)
- [x] 5.3 Verify "Latest" section renders correctly with the sample post
- [x] 5.4 Verify `/news/` card grid renders with and without cover image (text-only fallback)
- [x] 5.5 Verify `/news/index.xml` is generated and contains correct feed title and post entries
- [x] 5.6 Verify RSS `<link>` auto-discovery tag is present in `<head>` on all pages
- [x] 5.7 Verify per-post OG tags are correct in built HTML for a post with and without a cover image
- [x] 5.8 Verify active state on News nav link when on `/news/` pages

## 6. Documentation

- [x] 6.1 Update `README.md` — add "Writing a post" section documenting the page bundle structure, front matter fields (title, date, description, cover), and image colocation pattern
