## ADDED Requirements

### Requirement: Page bundle structure
Each news post SHALL be a Hugo leaf bundle at `content/news/<slug>/index.md`. Images and other media for the post SHALL be placed in the same directory as `index.md`. Flat Markdown files at `content/news/<slug>.md` are not the intended pattern.

#### Scenario: Post with colocated image
- **WHEN** a post bundle contains `index.md` and `screenshot.png`
- **THEN** the image is accessible in the template via `.Resources.GetMatch "screenshot.png"`

### Requirement: Front matter schema
Every post SHALL include `title`, `date`, and `description` fields. The `cover` field is optional — when present it SHALL reference an image filename within the bundle. Posts without `cover` SHALL render gracefully with a text-only card fallback.

#### Scenario: Minimal valid post
- **WHEN** `index.md` contains only `title`, `date`, and `description` in front matter
- **THEN** the post builds without error and renders on the index and landing page

#### Scenario: Post with cover image
- **WHEN** `index.md` front matter includes `cover: "hero.png"` and `hero.png` exists in the bundle
- **THEN** the cover image renders in the post card and as the `og:image` for the post

### Requirement: Content section metadata
A `content/news/_index.md` file SHALL exist, providing the section title and description used by Hugo for the RSS feed title and the news index page heading.

#### Scenario: RSS feed title
- **WHEN** Hugo generates `/news/index.xml`
- **THEN** the feed title matches the title defined in `content/news/_index.md`
