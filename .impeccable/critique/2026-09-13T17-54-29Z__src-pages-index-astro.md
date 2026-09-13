---
target: homepage (src/pages/index.astro)
total_score: 26
max_score: 32
na_heuristics: 9,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/domenico/rd/personal-website/src/pages/index.astro"
target_fingerprint: "sha256:2b9187e017d44fffb42d9f011c60c97c1bff3901cda0f19d398809edcfd8c4cb"
target_path: /Users/domenico/rd/personal-website/src/pages/index.astro
timestamp: 2026-09-13T17-54-29Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Status bar, mode-toggle label swap, `aria-current` amber nav state, blinking cursor — coherent and purpose-built |
| 2 | Match Between System & Real World | 4 | Terminal vocabulary matches the audience's actual professional fluency — the metaphor *is* the credibility signal |
| 3 | User Control and Freedom | 2 | Mobile nav overflow traps "Contact" off-screen with no scroll cue |
| 4 | Consistency and Standards | 3 | Bordered-grid system is consistent, but `nav a` / `.explore-card` have no `:hover` while `.mode-toggle` / `.next-up-item` do |
| 5 | Error Prevention | 4 | No forms beyond a binary toggle; nothing to err on |
| 6 | Recognition Rather Than Recall | 2 | Six styled "section headings" are `<span>`, not real headings |
| 7 | Flexibility and Efficiency | 3 | Persisted theme preference rewards return visits; no other accelerators needed |
| 8 | Aesthetic and Minimalist Design | 4 | Verified live: exactly two working colors, zero `box-shadow` anywhere |
| 9 | Error Recovery | n/a | No error-producing interactions exist on this page |
| 10 | Help and Documentation | n/a | Persuade-mode surface; Explore cards serve as the appropriate lightweight substitute |
| **Total** | | **26/32** | **Good (81%)** |

## Design Specificity Verdict

**LLM assessment:** Genuinely specific, not a reskin. The `[ 01 profile ]` counter-generated brackets, `~/` nav-path pseudo-elements, `ok`-prefixed achievements, and git-log timeline are real developer-tool vocabulary applied with restraint. An unrelated product couldn't lift this composition unchanged without the terminal conceit reading as arbitrary. The one place specificity slips: the Explore grid and Education/Languages split are functionally identical to any bordered-card SaaS marketing grid — competent, but generic.

**Deterministic scan:** `impeccable detect` on `index.astro` + `BaseLayout.astro` + `theme.css`: exit 2, 31 findings — 1 `overused-font` warning (Space Grotesk, `BaseLayout.astro:33`) and 30 `design-system-font-size` advisories (literal rem values across `theme.css` not enumerated in DESIGN.md's type scale). In-page browser detector separately found 6 anti-patterns: `all-caps-body` (`.section-label`), `blinking-cursor` (`.cursor`), and `line-length` (~89 chars/line, 4 `<p>` elements).

**Cross-check — false positives:** `all-caps-body`, `blinking-cursor`, and the `overused-font` warning are false positives: all three are confirmed, deliberate parts of the Shell Session identity. **Real signal:** the `line-length` finding independently corroborates a problem Assessment A found from a different angle — the profile paragraphs and two achievement bullets are genuinely too dense. The 30 font-size advisories are more a documentation gap than a live defect, but values cluster suspiciously close together (`0.85` vs `0.9` vs `0.97rem`) — worth a `$impeccable typeset` pass.

**Visual overlays:** Detector output was captured via injected console logging in a temporary tab; no overlay is left open since that tab was closed during cleanup. Both dark and light mode rendered cleanly with no console errors.

## Overall Impression

Well-executed, specific design with one real structural gap: the page's HTML doesn't back up what it visually promises. It looks like six clearly-labeled sections, but a screen reader sees one heading on the entire page. It looks responsive, but the header nav overflows the viewport on mobile with "Contact" clipped off-screen. Visual craft is ahead of the underlying markup.

## What's Working

1. **The `ok`-prefixed achievements list** reframes self-promotional content as literal passing-test output — the visual grammar of CI/test-runner "ok" output is one this audience trusts, so the credibility claim feels verified rather than asserted.
2. **CSS-counter-driven section numbering** means `[ 01 profile ]` never needs manual renumbering and reinforces the "generated system output" fiction for free.
3. **The restraint is real, not aspirational.** Verified live: exactly two working colors, zero shadows anywhere, matching DESIGN.md's claims exactly.

## Priority Issues

**[P1] Six visual "section headings" aren't real headings**
Why it matters: `querySelectorAll('h1,h2,h3,h4,h5,h6')` on the live page returns exactly one result — the `<h1>` name. "Profile," "Achievements," "Focus," "Explore," "Education," "Languages" are all `<span class="section-label section-heading">`, structurally plain text. Fails WCAG 1.3.1/2.4.6.
Fix: Change these spans to real `<h2>` elements — class and visual styling stay identical.
Suggested command: $impeccable harden

**[P1] Mobile header nav overflows the viewport — "Contact" is clipped off-screen**
Why it matters: Measured directly at 375–390px width: viewport is 500 CSS px wide, but "Contact"'s right edge sits at 518.75px, with `scrollWidth` confirming real horizontal overflow and no visual cue it exists.
Fix: Make `.site-header nav ul` wrap onto its own row below ~600px, or stack the nav.
Suggested command: $impeccable adapt

**[P2] Light-mode accent fails WCAG AA contrast on body-sized text**
Why it matters: Computed contrast for `--accent-light: #b5651d` on `--bg-light: #f4f5f7` = 3.97:1, below the 4.5:1 minimum. Drives every link, active nav state, and section kickers in light mode.
Fix: Darken the light-mode accent (toward `#9c5015`) until it clears 4.5:1.
Suggested command: $impeccable harden

**[P2] Two achievement bullets and the profile paragraphs run too long for their own metaphor**
Why it matters: PRODUCT.md states this section should be skimmable in under a minute; achievement items 3 and 5 run 24 and 33 words, stacking three named frameworks in one breath — corroborated by the detector's line-length finding on profile `<p>` elements.
Fix: Trim each achievement to under 15 words; move elaboration to /experience/.
Suggested command: $impeccable clarify

**[P2] No on-page path back to Contact — a peak-end-rule miss**
Why it matters: After the hero, nothing in the body re-surfaces a path to contact. The page's last visible content is the Languages list — the least consequential fact — for a page whose entire success metric is interview requests.
Fix: Add a closing line or card near the Explore grid.
Suggested command: $impeccable clarify

## Persona Red Flags

**Casey (Distracted Mobile User):** The clipped "Contact" nav link is invisible to her. The amber-bordered "Next Up" promo outranks the LinkedIn/GitHub links directly below it. Four dense profile paragraphs gate the achievements section behind the section she's most likely to skip.

**Sam (Accessibility-Dependent User):** Heading-based navigation surfaces exactly one heading on the whole page. The six `<section>` landmarks have no distinguishing accessible names. Light-mode link contrast at 3.97:1 makes body-sized links harder to read for low vision specifically in light mode.

**Riley (Deliberate Stress-Tester):** A contrast checker against light-mode links fails immediately. Achievement item 5's 33-word, triple-acronym sentence is exactly what a careful reviewer would flag against the product doc's own "skim in under a minute" claim.

## Minor Observations

- No `:hover` state on nav links or Explore cards (present on mode-toggle and next-up-item).
- The blinking cursor has no `prefers-reduced-motion` guard.
- Keyboard focus falls back to the browser's generic blue outline rather than an on-brand amber ring.
- 30 literal font-size values in theme.css sit just outside DESIGN.md's documented type scale — a $impeccable typeset pass could tighten these into real scale steps.

## Questions to Consider

1. The "Next Up" box is the only element styled with the accent at full border strength on the homepage — is a speaking gig really what should out-rank the identity/positioning statement sitting right beside it?
2. The achievements list works because each line reads like real command output — so why do two of five lines run three times longer than a real terminal line ever would?
3. Contact is deliberately narrow per your confirmed product principle — but it's also structurally invisible in the page body. Was the narrowness of the channel and the invisibility of the channel actually meant to be the same decision?
