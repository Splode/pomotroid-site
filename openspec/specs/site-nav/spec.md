## ADDED Requirements

### Requirement: Minimal header nav present on all pages
A `layouts/partials/nav.html` partial SHALL be included at the top of every page layout (`index.html`, `news/list.html`, `news/single.html`). It SHALL display the site name "Pomotroid" as a home link on the left and a "News" link on the right. The nav SHALL use the existing navy background color and green accent for the site name, consistent with the existing design palette.

#### Scenario: Nav on landing page
- **WHEN** the home page is rendered
- **THEN** a header containing "Pomotroid" (linking to `/`) and "News" (linking to `/news/`) is present

#### Scenario: Nav on news pages
- **WHEN** any `/news/` page is rendered
- **THEN** the same nav header is present

### Requirement: Non-sticky positioning
The nav SHALL use static (non-sticky) positioning. It SHALL not follow the user as they scroll.

#### Scenario: Nav scrolls away
- **WHEN** a user scrolls down a long post
- **THEN** the nav scrolls out of view with the rest of the page

### Requirement: Active state on News link
The "News" link in the nav SHALL render with a visual active indicator when the current page is within the `/news/` section.

#### Scenario: Active state on news index
- **WHEN** the user is on `/news/` or any `/news/<slug>/` page
- **THEN** the "News" nav link has a visible active style (e.g., green underline or color)
