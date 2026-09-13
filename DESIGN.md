---
name: Domenico Fioravanti — Personal Site
description: A senior engineering leader's résumé rendered as a live shell session — status bar, git log, and command output standing in for hero, timeline, and achievements.
colors:
  bg: "#0b0e13"
  bg-panel: "#12161d"
  bg-panel-2: "#161b23"
  fg: "#eef0f3"
  muted: "#8b93a1"
  line: "#242a34"
  accent: "#ffb454"
  accent-contrast: "#0b0e13"
  ok: "#4ade80"
  bg-light: "#f4f5f7"
  bg-panel-light: "#ffffff"
  bg-panel-2-light: "#eceef2"
  fg-light: "#14171c"
  muted-light: "#565f6c"
  line-light: "#d7dbe2"
  accent-light: "#b5651d"
  accent-contrast-light: "#ffffff"
  ok-light: "#1f8a4c"
typography:
  display:
    fontFamily: "'Space Grotesk', -apple-system, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'IBM Plex Sans', -apple-system, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.75rem"
    letterSpacing: "0.12em"
rounded:
  sm: "2px"
spacing:
  grid: "64px"
components:
  button-mode-toggle:
    backgroundColor: "{colors.bg-panel}"
    textColor: "{colors.fg}"
    rounded: "{rounded.sm}"
    padding: "0.35rem 0.6rem"
  button-mode-toggle-hover:
    backgroundColor: "{colors.bg-panel}"
    textColor: "{colors.fg}"
  chip:
    backgroundColor: "{colors.bg-panel}"
    textColor: "{colors.fg}"
    rounded: "{rounded.sm}"
    padding: "0.35rem 0.75rem"
    typography: "{typography.label}"
---

# Design System: Domenico Fioravanti — Personal Site

## Overview

**Creative North Star: "The Shell Session"**

The site presents itself as a live terminal session rather than a document. The wordmark reads as a login prompt (`domenico@fioravanti`), navigation links wear a `~/` path prefix like shell aliases, section headings are auto-numbered CLI output (`[ 01 profile ]`), the hero tagline is typed after a `>` prompt marker with a genuine blinking cursor, and the résumé's proudest facts render as command output: a green `ok` status per achievement, a `git log --roles` timeline for the career history, a `stack --list` matrix for technology depth. Nothing here is illustrative or decorative — every visual device is a real piece of developer-tool vocabulary, chosen because the audience (engineering hiring managers) reads that vocabulary fluently and it doubles as a credibility signal.

The system rejects conventional résumé/portfolio warmth (soft shadows, rounded cards, editorial serif type, generous whitespace-as-luxury) in favor of the flat, dense, monospace-inflected register of an IDE or terminal emulator. It is confident and technical rather than approachable and personal — the persona is a senior engineer's own tool, not a marketing site about one.

**Key Characteristics:**
- Full dark/light mode pair, dark-first (a terminal's native state), both built from the same four-tier neutral system (`bg` → `bg-panel` → `bg-panel-2` → `fg`).
- A single functional accent (Terminal Amber) plus one narrowly-scoped status color (Log-Success Green) — never more than two colors doing work on screen at once.
- Zero shadows anywhere; depth comes from background-tier shifts and hairline borders only.
- Near-flat geometry (2px radius) — corners are barely softened, not rounded.
- Monospace (JetBrains Mono) carries all metadata, labels, and system chrome; a geometric sans display face (Space Grotesk) carries headings and titles; a humanist sans (IBM Plex Sans) carries body prose. Three faces, three distinct jobs, never mixed within one role.

## Colors

A near-monochrome neutral scale with exactly one working accent and one reserved status color — restraint is the point; a résumé that shouts in ten colors reads as unserious to this audience.

### Primary
- **Terminal Amber** (`#ffb454` dark / `#b5651d` light): the system's only expressive color. Used for links, the active nav item, the `@` in the wordmark, stat numerals, the "next up" panel border, section-kicker text, and hover states. In light mode it shifts from amber to a deeper burnt-rust so it still holds contrast against the near-white panel background — same role, recalibrated value, not a different color.

### Neutral
- **Void** (`#0b0e13` dark / `#f4f5f7` light — `bg`): the page background; carries the faint 64px pinstripe grid (`--bg-image`), the one purely atmospheric touch in the system.
- **Panel** (`#12161d` dark / `#ffffff` light — `bg-panel`): the surface for every bordered cell — stat tiles, explore cards, chips, stack-matrix cells, split-grid columns.
- **Panel Deep** (`#161b23` dark / `#eceef2` light — `bg-panel-2`): reserved for the status bar and footer — the two "chrome" bars that frame the page like a terminal window's title/status bars, one tier darker (dark mode) than ordinary content panels.
- **Signal** (`#eef0f3` dark / `#14171c` light — `fg`): primary text.
- **Muted** (`#8b93a1` dark / `#565f6c` light — `muted`): secondary text — meta lines, labels, timestamps, kickers.
- **Hairline** (`#242a34` dark / `#d7dbe2` light — `line`): every border, divider, and grid-cell seam in the system.

### Named Rules
**The Two-Color Rule.** Only Terminal Amber and Log-Success Green ever carry semantic color; everything else is neutral. A third color anywhere is a bug, not a variant.

**The Status-Color Rule.** Log-Success Green (`#4ade80` dark / `#1f8a4c` light — `ok`) appears in exactly two places: the live status-bar dot and the achievements list's `ok` marker. It signals "this ran successfully," never decoration, never a second accent.

## Typography

**Display Font:** Space Grotesk (with `-apple-system, sans-serif` fallback)
**Body Font:** IBM Plex Sans (with `-apple-system, sans-serif` fallback)
**Label/Mono Font:** JetBrains Mono (with `'SFMono-Regular', Menlo, monospace` fallback)

**Character:** A geometric display face for confident, slightly technical headings; a plain humanist sans for readable prose; a proper coding monospace for anything that is, in spirit, terminal output. The pairing reads as "engineer's toolkit," never "creative studio."

### Hierarchy
- **Display** (700, page/section titles like the h1 and timeline/explore titles, `-0.01em` tracking): named roles, headings, and titled cards. Always Space Grotesk.
- **Title** (600, ~1.05–1.15rem, Space Grotesk): sub-headings inside components — `next-up-title`, `explore-title`, `timeline-title`.
- **Body** (400, ~1rem, IBM Plex Sans, 1.6 line-height): profile prose, achievement text, entry-list summaries.
- **Label** (400–600, 0.7–0.85rem, JetBrains Mono, uppercase, 0.05–0.12em tracking): section eyebrows, stat labels, nav links, chips, tags, meta lines, the status bar, and the footer. This is the system's most-used role — nearly every piece of UI chrome, as opposed to body prose, is mono.

### Named Rules
**The Prose-Is-Sans Rule.** The moment text is read as a sentence rather than scanned as a label or datum, it drops out of mono into IBM Plex Sans. Mono marks "this is system output," never paragraphs.

## Layout

A single narrow reading column, `760px` max-width, centered — closer to a terminal window's comfortable line length than a marketing site's wide canvas, reinforcing that this is meant to be read closely by one hiring manager, not scanned widely by a crowd. The page background carries a faint 64px×64px pinstripe grid in the hairline color, visible through every unfilled area — a graph-paper/IDE-canvas texture that never competes with content because it's the same low-contrast neutral as borders.

Multi-item groupings (stats, explore cards, the stack matrix, the education/languages split) share one pattern: a **bordered grid** — the outer container gets a 1px border, cells are laid edge-to-edge with a 1px gap filled by the hairline color, so the gap itself reads as a shared divider rather than whitespace. Grids collapse to a single column below `560px`–`640px` breakpoints (component-specific) and expand to 2, 3, or 4 columns above it. Section headings auto-increment via a CSS counter (`section-index`) into bracketed `[ 01 profile ]` labels — the numbering is structural, generated once per page, not hand-authored per section.

## Elevation & Depth

Flat by design — zero `box-shadow` anywhere in the system. Depth is conveyed entirely through a three-tier neutral background stack (`bg` < `bg-panel` < `bg-panel-2`, each one step lighter/denser than the last in dark mode) plus 1px hairline borders. The status bar and footer sit one tier "deeper" (`bg-panel-2`) than ordinary content panels (`bg-panel`), reading as fixed chrome framing scrollable content, the way a terminal emulator's title bar sits apart from its buffer.

### Named Rules
**The No-Shadow Rule.** Never introduce a `box-shadow`, blur, or glow. If something needs to look "raised," give it a border and a panel-tier background shift instead — the same tool a terminal or IDE would use.

## Shapes

Near-flat geometry: a single `2px` radius (`--radius`) applied uniformly to the mode-toggle button, chips, tags, and the "HEAD" badge — enough to soften a raw rectangle, never enough to read as "rounded." Every other surface (panels, cards, grid cells, borders) is a hard-cornered rectangle. Borders are always 1px and always the hairline `--line` color; there is no heavier border weight anywhere in the system.

## Components

### Buttons
- **Shape:** 2px radius, 1px hairline border.
- **Primary (mode toggle):** panel background, foreground text, sun/moon emoji + "Light"/"Dark" label, mono font.
- **Hover:** border color shifts to Terminal Amber; no background or shadow change.

### Chips / Tags
- **Focus chip** (homepage "focus" list): each item is prefixed with a literal `--` (mono, 50% opacity) before its label, styled to read as a CLI flag (`--org-design`, `--event-driven`) rather than a generic pill.
- **Timeline tag** (experience page): same bordered-panel treatment without the `--` prefix, used for a role's technology tags.
- **Style:** panel background, hairline border, 2px radius, mono type, muted foreground.

### Cards / Containers (bordered-grid cells)
- **Corner style:** square (no radius on the container itself; only interactive chip-scale elements get the 2px radius).
- **Background:** panel tier, sitting against a hairline-colored gap that reads as the divider between cells.
- **Shadow strategy:** none — see Elevation & Depth.
- **Border:** 1px hairline around the outer grid; 1px gaps between cells simulate internal dividers.
- **Internal padding:** roughly `1–1.25rem` (desktop), consistent across stat tiles, explore cards, stack cells, and split columns.

### Navigation
- **Style:** each link is prefixed with a `~/` pseudo-element (55% opacity) so the nav itself reads as a set of shell path aliases (`~/experience`, `~/speaking`).
- **Typography:** mono, lowercase, 0.9rem, 500 weight.
- **States:** muted by default; the active route (`aria-current="page"`) turns Terminal Amber. No underline, no background change.
- **Mobile:** wraps via flexbox; no distinct mobile nav pattern (hamburger, drawer) exists yet — worth confirming intent before assuming one should be added.

### Status Bar (signature component)
A fixed-feeling top strip (deepest panel tier) that mimics a system status line: a small pulsing-green dot plus "Open to new roles · Dublin, IE" on the left, "Sys.uptime: 25+ yrs" on the right — both mono, uppercase, small. It's the site's clearest single expression of the North Star: literally presenting availability as system status.

### Git-Log Timeline (signature component, experience page)
A two-column grid: a marker column (a dot, filled amber and labeled "HEAD" for the current role, otherwise a hollow hairline-bordered dot) connected by a vertical hairline "line," paired with a content column per role (title, company, dates, prose, tag chips). Reads directly as `git log --oneline --graph` rendered as a career history — the system's strongest, most literal expression of the shell-session metaphor.

### Command-Output List (signature component, homepage achievements)
A borderless, top-divided list where each item is prefixed by a green mono `ok` marker — literally an assertion/test-runner's passing-check output repurposed as a bragging-rights list.

## Do's and Don'ts

### Do:
- **Do** keep every UI-chrome label (nav, eyebrows, stats, tags, meta lines) in JetBrains Mono; reserve IBM Plex Sans strictly for read-as-prose text.
- **Do** express new "signature" content (a new résumé section, a new list) as a piece of real developer/terminal vocabulary (a log, a diff, a status line, a manifest) rather than a generic card or hero.
- **Do** keep the bordered-grid pattern (1px outer border, 1px hairline-filled gaps) as the default for any new multi-item grouping.
- **Do** hold the accent to Terminal Amber only; if a second signal color is ever needed, it must be as narrowly scoped as Log-Success Green currently is.

### Don't:
- **Don't** add a `box-shadow`, glow, or blur anywhere — depth is background-tier and border only.
- **Don't** round any corner beyond 2px, and don't round outer panel/grid containers at all.
- **Don't** introduce a third brand color, a gradient, or a decorative illustration — the system's restraint (near-monochrome + one accent) is load-bearing, not incidental.
- **Don't** widen the reading column past its current narrow, single-track feel to chase a "landing page" width; the site is designed to be read closely, not scanned broadly.
- **Don't** invent warmth-signaling devices (soft serif display type, generous rounded cards, editorial photography treatment) — that's a different, explicitly-rejected register for this audience.
