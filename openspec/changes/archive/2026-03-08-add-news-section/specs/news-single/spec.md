## ADDED Requirements

### Requirement: Post body rendering
The single post template SHALL render the full Markdown body via `{{ .Content }}`. Inline images referenced in the Markdown SHALL render within the post body.

#### Scenario: Post with body images
- **WHEN** a post's Markdown contains an image reference to a bundle resource
- **THEN** the image renders inline within the post body

### Requirement: Post metadata display
Each post SHALL display its title and formatted publication date. A link back to `/news/` SHALL be present on every post page.

#### Scenario: Back navigation
- **WHEN** a user is reading a post at `/news/<slug>/`
- **THEN** a link to `/news/` is visible on the page

### Requirement: Per-post Open Graph meta
The single post template SHALL emit `og:title`, `og:description`, and `og:url` meta tags populated from the post's front matter. When a `cover` image is defined in front matter, it SHALL be used as `og:image`. When no cover is defined, the site's default share image SHALL be used as fallback.

#### Scenario: OG tags with cover
- **WHEN** a post with a cover image is built
- **THEN** `og:image` points to the post's cover image URL

#### Scenario: OG tags without cover
- **WHEN** a post without a cover image is built
- **THEN** `og:image` falls back to the site default share image

### Requirement: Post URL structure
Post URLs SHALL follow the pattern `/news/<slug>/` where `<slug>` is derived from the bundle directory name.

#### Scenario: Post URL
- **WHEN** a bundle exists at `content/news/my-first-post/`
- **THEN** the post is accessible at `/news/my-first-post/`
