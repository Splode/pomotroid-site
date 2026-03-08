## ADDED Requirements

### Requirement: Latest section conditionally rendered
The landing page SHALL include a "Latest" section that renders up to 3 of the most recent news posts. The section SHALL be completely omitted from the rendered HTML when no posts exist — no empty heading or layout shell.

#### Scenario: No posts exist
- **WHEN** no content exists under `content/news/`
- **THEN** the "Latest" section does not appear in the built `index.html`

#### Scenario: Posts exist
- **WHEN** one or more news posts exist
- **THEN** the "Latest" section is present in the built `index.html`

### Requirement: Up to 3 most recent posts shown
The "Latest" section SHALL show at most 3 posts, ordered by date descending. When fewer than 3 posts exist, only the available posts are shown.

#### Scenario: Fewer than 3 posts
- **WHEN** exactly 2 posts exist
- **THEN** 2 post cards render in the "Latest" section

#### Scenario: More than 3 posts
- **WHEN** more than 3 posts exist
- **THEN** exactly 3 post cards render in the "Latest" section

### Requirement: Post cards on landing page
Each post card in the "Latest" section SHALL display the post title, publication date, and description. Clicking a card SHALL navigate to the full post.

#### Scenario: Card links to post
- **WHEN** a user clicks a post card in the "Latest" section
- **THEN** the browser navigates to `/news/<slug>/`

### Requirement: "All news" and RSS links in Latest section heading
The "Latest" section heading SHALL be accompanied by a "All news →" link pointing to `/news/` and a visible RSS icon link pointing to `/news/index.xml`.

#### Scenario: Links present in heading area
- **WHEN** the "Latest" section renders
- **THEN** both the "All news →" link and the RSS icon link are visible near the section heading

### Requirement: Placement between Features and Downloads
The "Latest" section SHALL appear in the landing page between the Features section and the Downloads section.

#### Scenario: Page section order
- **WHEN** the landing page is rendered with posts present
- **THEN** document order is: Hero → Features → Latest → Downloads → Feedback → Footer
