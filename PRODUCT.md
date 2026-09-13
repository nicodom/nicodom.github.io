# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: recruiters and hiring managers evaluating Domenico Fioravanti for senior engineering leadership roles (Director / VP / CTO-level). The site's job is to get him shortlisted and into interviews — it functions as job-hunting collateral, not a general personal blog or agency-style portfolio.

## Product Purpose

A personal portfolio/résumé site that presents Domenico's engineering leadership track record, technical depth, and public speaking/community-organizing activity in a form a hiring manager can scan and trust. Success is measured by interview requests and inbound interest from serious roles, not traffic or engagement metrics.

## Positioning

"Sociotechnical Architect" — the combination of (1) org design and team-topology work, (2) event-driven/data-platform architecture depth, and (3) hands-on agentic-AI adoption and governance framework work. This three-part combination, not any single pillar, is the claim a neighboring candidate profile could not credibly copy. Confirmed as the pitch to lead with; matches the hero tagline and profile copy already live on the homepage.

## Operating Context

- Content is authored as Markdown in three Astro content collections: `speaking`, `experience`, `community` (schemas in `src/content.config.ts`), each backed by real dated entries already populated.
- Deploys automatically to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.
- No CMS or backend — all content changes are file edits + git push.
- Status bar on every page currently reads "Open to new roles · Dublin, IE" — this is live, editable copy that should be kept current as availability changes, not a static design element.

## Capabilities and Constraints

- Static site (Astro, no server runtime) — any "contact" or interactive feature must work within that constraint (static forms, mailto, or third-party embeds only).
- Contact page intentionally lists only LinkedIn and GitHub — no email or phone. This is a deliberate filter (inbound routed through LinkedIn), not a gap to fill.
- Speaking entries support `slidesUrl`/`videoUrl`/`photosUrl`/`eventUrl` fields in the schema, but no slide PDFs have been uploaded yet (`public/slides/` holds only `.gitkeep`) and no entry currently sets `slidesUrl`. Undecided: whether/when real slide decks get added.
- Headshot image exists at `public/images/domenico.jpg` and is in use on the homepage.

## Brand Commitments

- Name/identity: "domenico@fioravanti" wordmark, terminal/developer-tool visual language already implemented (see DESIGN.md territory — not re-litigated here). Dark-mode-first with a light-mode toggle.
- Voice in body copy is factual, achievement- and metric-led (e.g. "Built engineering orgs from scratch to 45+ people"), not casual or narrative.

## Evidence on Hand

- Full experience history (12 roles, `src/content/experience/`), speaking history (8 talks, `src/content/speaking/`), and community organizing history (7 entries, `src/content/community/`) are populated with real dates, summaries, and links — this is not placeholder content.
- Headshot photo is present and in use.
- No slide decks uploaded yet (see Capabilities and Constraints) — future work must not fabricate `slidesUrl` links.
- No testimonials, press, or third-party case studies exist or should be invented.

## Product Principles

1. Every claim is a real, verifiable fact from Domenico's actual history — never invented metrics, testimonials, or filler content.
2. Scannability for a time-constrained hiring manager outranks narrative flourish; the achievements/experience/stack sections exist to be skimmed in under a minute.
3. Speaking and community activity support the leadership/architecture positioning — they're evidence of influence and communication skill, not a separate "creator" identity.
4. Contact stays deliberately narrow (LinkedIn/GitHub) — don't add inbound channels without an explicit decision to do so.
5. Content changes (new talks, roles, community activity) are the expected steady-state work; visual/design changes are comparatively rare and should preserve the established identity unless a redesign is explicitly requested.
