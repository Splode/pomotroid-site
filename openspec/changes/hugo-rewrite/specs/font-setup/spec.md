## ADDED Requirements

### Requirement: Mona Sans variable font loaded
The site SHALL self-host the Mona Sans variable font using `MonaSansVF[wdth,wght,opsz,ital].woff2` as the primary source and `MonaSansVF[wdth,wght,opsz,ital].woff` as fallback. No other typeface files SHALL be included. Lato and RobotoMono SHALL be removed.

#### Scenario: Font file present
- **WHEN** the built site is served
- **THEN** both `MonaSansVF[wdth,wght,opsz,ital].woff2` and `.woff` are accessible under `/fonts/`

#### Scenario: No external font requests
- **WHEN** the page is loaded with network devtools open
- **THEN** no requests are made to Google Fonts, Adobe Fonts, or any external font CDN

### Requirement: Font-face declaration covers full axis range
The `@font-face` declaration SHALL specify `font-weight: 100 900` and `font-stretch: 75% 125%` to expose the full `wght` and `wdth` axis ranges to CSS. `font-display: swap` SHALL be set.

#### Scenario: Weight range available
- **WHEN** an element is styled with `font-weight: 200` through `font-weight: 800`
- **THEN** the variable font renders at the correct weight without fallback substitution

### Requirement: Optical sizing enabled globally
`font-optical-sizing: auto` SHALL be set on `body`. This allows the browser to automatically adjust `opsz` based on computed `font-size`, optimizing letterform rendering at both body and display scales without manual `font-variation-settings`.

#### Scenario: Display heading rendering
- **WHEN** the "Pomotroid" title (≥3rem) is rendered
- **THEN** the font renders with display-optimized letterforms (tighter tracking, refined optical weight)

### Requirement: Typography scale
Body text SHALL use `font-weight: 400`. Section headings (h2) SHALL use `font-weight: 600`. The page title ("Pomotroid") SHALL use `font-weight: 700` or higher. All weights SHALL be served from the single variable font file.

#### Scenario: Heading weight
- **WHEN** an h2 element is inspected
- **THEN** its computed `font-weight` is 600 or greater
