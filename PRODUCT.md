# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Individual UI/UX and product designers, anywhere from first-year to fifteenth-year experience — good at the craft, but haven't yet made AI a real part of how they work. Solo readers, not a team rollout: they may have already asked Claude to rewrite copy or rough out a screen, but don't have a repeatable system. Their job here is to learn which Claude Code tool to reach for (prompt, skill, or subagent) and when, and to make it repeatable.

## Product Purpose
A practical, production-ready guide to building AI into everyday design work with Claude Code specifically. Organized around one idea — the prompt → skill → subagent ladder: work you repeat climbs from something you type once, to something you save as a `/command`, to something that runs on its own. Success is a reader who routinely reaches for the right rung in their own work, turning repeated design tasks into tools that run themselves — not just someone who installed Claude Code and read through.

## Positioning
Built for Claude Code specifically, not general AI/prompt-tricks content and not other tools ("other tools come in a later version; this one earns its place first"). Teaches judgment — which rung a task belongs on — rather than handing over a prompt dump. Content is data, not markup: every prompt, skill, and subagent is an object in `assets/js/data/*.js`, rendered by one shared renderer (`app.js`); the installable `SKILL.md` and agent files are generated from those same definitions, so what a reader reads on the page is exactly what installs. A competing "list of prompts" site could not truthfully copy the ladder framing or that install-what-you-read guarantee.

## Operating Context
The reader works in a terminal running Claude Code (a paid plan is required — Pro, Max, Team, Enterprise, or API; the free Claude.ai tier is excluded) alongside their normal design tools. The guide's pages: `index.html` (start here, two-minute Claude Code on-ramp), `foundations.html` (the ladder, where AI helps vs. doesn't), `prompting.html` (45 prompts across 10 categories), `skills.html` (17 installable skills), `subagents.html` (5 installable subagents), `workflows.html`, `path.html` (a 7-day guided path), and `showcase.html` (a real landing page built with the method, with an "X-ray" toggle showing which prompt/skill/subagent produced each section).

## Capabilities and Constraints
- Fully static: plain HTML/CSS/JS, no build step, no framework, no dependencies beyond Google-hosted webfonts.
- Content-as-data architecture: `prompts.js`, `skills.js`, `subagents.js` feed one shared renderer (`app.js`) for search/filter/copy across pages — adding a prompt, skill, or subagent is a one-object data edit, not HTML surgery.
- Installable artifacts (`skills/<name>/SKILL.md`, `agents/<name>.md`) are generated from the same data definitions shown on the pages; keep them in sync with any data change.
- Shared nav is kept in sync by hand across every page (no build step) — a nav change must be replicated everywhere it appears.
- Deploy targets: GitHub Pages (`/` root, `.nojekyll` included) or Vercel; no config needed for either.
- Terminology: "the ladder" (Prompt → Skill → Subagent), each library page corresponds to one "rung."

## Brand Commitments
Name: "AI for Designers." Voice is direct and practical, e.g. "Stop doing by hand what you've already done twice." Visual vocabulary already established: a terminal/CLI motif (❯ glyph as brand mark, monospace command examples/terminal blocks). Typefaces already in use: Bricolage Grotesque (display), Inter Tight (body/UI), JetBrains Mono (code). A favicon and the ❯ glyph exist at the project root.

## Evidence on Hand
Real, populated content already exists — not placeholders: 45 prompts across 10 categories, 17 installable skills (`skills/`), 5 installable subagents (`agents/a11y-reviewer.md`, `design-critic.md`, `edge-case-hunter.md`, `handoff-writer.md`, `research-synthesizer.md`), and a working showcase page. Three README images live in `docs/images/` (`banner.png`, `ladder.png`, `architecture.png`). No testimonials, customer names, or press exist — do not fabricate any.

## Product Principles
- Teach the ladder, not just techniques — every page reinforces which rung a task belongs on, not just the task itself.
- Practical over theoretical — no LLM theory; only what changes what a designer does next.
- What you read is what installs — page content and the installable `SKILL.md`/agent files stay generated from the same source of truth.
- Solo-reader framing — write to one designer working alone, not a team-rollout guide.
- Respect the no-build-step constraint — every future addition stays a data-object edit, not new tooling.

## Accessibility & Inclusion
No formal accessibility standard is set for this site itself (distinct from the WCAG 2.2 AA guidance the `CLAUDE.md.template` recommends readers apply to their own products).
