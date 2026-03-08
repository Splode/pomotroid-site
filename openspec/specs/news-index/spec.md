## ADDED Requirements

### Requirement: Card grid layout
The `/news/` page SHALL render posts as a responsive card grid. Each card SHALL display the post's cover image (if present), title, date, and description. Cards without a cover image SHALL render as text-only cards with consistent height.

#### Scenario: Grid with cover images
- **WHEN** posts have cover images defined
- **THEN** each card shows the cover image above the title and description

#### Scenario: Text-only card fallback
- **WHEN** a post has no cover image
- **THEN** the card renders without an image placeholder and maintains consistent card height

### Requirement: Chronological ordering
Posts SHALL be listed in reverse chronological order (newest first) on the index page.

#### Scenario: Post ordering
- **WHEN** multiple posts exist with different dates
- **THEN** the post with the most recent date appears first

### Requirement: Pagination
The index page SHALL paginate at 12 posts per page. A navigation element SHALL appear at the bottom of the page when more than 12 posts exist.

#### Scenario: Pagination controls
- **WHEN** more than 12 posts exist
- **THEN** pagination links appear below the card grid

### Requirement: Visible RSS link
The news index page SHALL display a visible RSS feed link near the page heading, in addition to the auto-discovery tag in `<head>`.

#### Scenario: RSS link on index
- **WHEN** the `/news/` page is rendered
- **THEN** an RSS icon link pointing to `/news/index.xml` is visible on the page
