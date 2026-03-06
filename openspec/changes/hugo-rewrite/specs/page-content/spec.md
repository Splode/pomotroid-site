## ADDED Requirements

### Requirement: Features section with five curated highlights
The features section SHALL present exactly five highlights. Each highlight SHALL have a concise heading and one to two sentences of specific, concrete copy — no marketing superlatives. The five highlights and their approved copy are:

1. **Fully configurable** — Set your own focus duration, short break, long break, and rounds per cycle. Global shortcuts let you start, pause, and skip rounds without switching windows.

2. **Session statistics** — Every completed session is logged. Review your day at a glance, track weekly streaks, and explore your full history with a 52-week heatmap.

3. **37 themes — or your own** — Ships with Nord, Dracula, Catppuccin, Gruvbox, Tokyo Night, and more. Drop a JSON file into the themes folder for a custom theme. Changes apply instantly, no restart required.

4. **Runs quietly in the background** — Minimize or close to tray and keep the timer running. A dynamic tray icon shows your progress arc in real time, and desktop notifications handle round transitions.

5. **Seven languages** — Auto-detects your OS language. Available in English, Spanish, French, German, Japanese, Simplified Chinese, and Portuguese.

#### Scenario: Five features rendered
- **WHEN** the Features section is inspected
- **THEN** exactly five feature items are present, each with a heading and descriptive copy

#### Scenario: No outdated feature copy
- **WHEN** the built HTML is inspected
- **THEN** the text "Charming Sound Notifications" and "Simple & Easy to Use" do not appear

### Requirement: Updated meta description
The page `<meta name="description">` and OG/Twitter description tags SHALL be updated to reflect the current app. The approved copy is: "Pomotroid is a simple, configurable Pomodoro timer with session statistics, 37 bundled themes, and global shortcuts. Free and open source. Available for Windows, macOS, and Linux."

#### Scenario: Meta description present and current
- **WHEN** the built `index.html` head is inspected
- **THEN** the `<meta name="description">` content matches the approved copy above

### Requirement: Footer tech stack credit
The footer SHALL include a brief tech stack line crediting Tauri, Rust, and Svelte alongside the existing author attribution. Approved copy: "Built with Tauri, Rust, and Svelte."

#### Scenario: Tech stack line in footer
- **WHEN** the footer is rendered
- **THEN** text referencing Tauri, Rust, and Svelte is present

### Requirement: Canonical and OG URLs use pomotroid.app
All canonical, OG, and Twitter Card URL tags SHALL reference `https://pomotroid.app`. The JSON-LD schema `url` field SHALL also use `https://pomotroid.app`.

#### Scenario: Canonical URL correct
- **WHEN** the built `index.html` head is inspected
- **THEN** `<link rel="canonical">` href is `https://pomotroid.app`

#### Scenario: OG URL correct
- **WHEN** the built `index.html` head is inspected
- **THEN** `<meta property="og:url">` content is `https://pomotroid.app`
