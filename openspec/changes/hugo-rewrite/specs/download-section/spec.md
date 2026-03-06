## ADDED Requirements

### Requirement: Primary and secondary download options per platform in hero
The hero section SHALL display download options for Windows, Mac, and Linux. Each platform SHALL have a primary download button. Windows and Linux SHALL also have a secondary download link below the primary button. macOS SHALL have a Homebrew code snippet as its secondary option. There SHALL be no JavaScript OS detection — all options are statically rendered.

#### Scenario: All options rendered without JS
- **WHEN** JavaScript is disabled in the browser
- **THEN** all platform download options (primary buttons and secondary links/code) are visible and functional

#### Scenario: Primary button links to correct asset
- **WHEN** a primary download button is clicked
- **THEN** the browser navigates to the corresponding primary GitHub release asset URL from `hugo.toml`

#### Scenario: Secondary link renders for Windows and Linux
- **WHEN** the hero section is rendered
- **THEN** Windows shows a secondary link to the standalone `.exe` and Linux shows a secondary link to the `.deb` package

#### Scenario: macOS Homebrew snippet renders
- **WHEN** the hero section is rendered
- **THEN** macOS shows `brew install --cask pomotroid` as a copyable code element below the DMG button

### Requirement: Dedicated downloads section mirrors hero options
A dedicated Downloads section below Features SHALL display the same primary button and secondary option for each platform, with platform name as a heading above each group.

#### Scenario: Downloads section structure
- **WHEN** the Downloads section is rendered
- **THEN** Windows, Mac, and Linux each appear as a column with a heading, primary button, and secondary option

### Requirement: Download params sourced from hugo.toml
All download hrefs and labels SHALL be template expressions reading from `{{ .Site.Params.downloads.<platform> }}`. The `hugo.toml` structure SHALL provide `primary`, `primaryLabel`, `secondary`, and `secondaryLabel` for Windows and Linux; `primary`, `primaryLabel`, and `brew` for macOS. No URLs or labels SHALL be hardcoded in layout files.

#### Scenario: URL update without template changes
- **WHEN** download URLs and labels in `hugo.toml` are updated to a new version
- **THEN** all button hrefs and labels in the built HTML reflect the new values

### Requirement: No Twitter share button
The Twitter/X share button and "Spread the word" CTA SHALL be removed. The Feedback section SHALL retain only the GitHub issues link and GitHub repo link.

#### Scenario: No Twitter elements in output
- **WHEN** the built `index.html` is inspected
- **THEN** no `twitter.com/intent/tweet` links or Twitter SVG icons are present
