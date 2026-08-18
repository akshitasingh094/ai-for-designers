---
name: AI for Designers
description: A practical, terminal-native guide teaching designers the prompt → skill → subagent ladder for Claude Code.
colors:
  paper: "#E4E7E3"
  paper-2: "#EEF1EC"
  card: "#FAFCF9"
  ink: "#14191A"
  ink-2: "#4A524C"
  ink-3: "#838C86"
  rule: "#CBD1CC"
  rule-soft: "#DCE1DD"
  prompt-green: "#5FB85A"
  prompt-green-soft: "#DFF0DD"
  prompt-green-line: "#B9DDB5"
  prompt-green-ink: "#2A7028"
  skill-green: "#227A34"
  skill-green-soft: "#D7ECD4"
  skill-green-line: "#A9D6A4"
  skill-green-ink: "#1F6B2C"
  subagent-pine: "#164D22"
  subagent-pine-soft: "#CFE3CE"
  subagent-pine-line: "#9CC79A"
  create-green: "#0E7C66"
  create-green-soft: "#D6EDE6"
  create-green-line: "#B2DccF"
  caution-amber: "#9A6209"
  caution-amber-soft: "#F7EAD2"
  caution-amber-line: "#E7D3A6"
  blocker-red: "#963030"
  blocker-red-soft: "#FBE7E7"
  blocker-red-line: "#EEC5C5"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(42px, 7.5vw, 88px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(24px, 3vw, 33px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "17.5px"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11.5px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.15em"
rounded:
  s: "0px"
  m: "0px"
  l: "0px"
spacing:
  gutter: "40px"
  nav-height: "56px"
components:
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.m}"
    padding: "20px"
  card-primary-inverted:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.m}"
    padding: "24px"
  nav-link-active:
    backgroundColor: "{colors.skill-green}"
    textColor: "#ffffff"
    rounded: "{rounded.s}"
    padding: "7px 11px"
  code-inline:
    backgroundColor: "{colors.skill-green-soft}"
    textColor: "{colors.skill-green-ink}"
    rounded: "{rounded.s}"
    padding: "1.5px 6px"
  copy-button:
    backgroundColor: "#2E2E3D"
    textColor: "#EDECF5"
    rounded: "{rounded.s}"
    padding: "6px 10px"
  copy-button-done:
    backgroundColor: "{colors.create-green}"
    textColor: "#ffffff"
    rounded: "{rounded.s}"
    padding: "6px 10px"
  tag:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.s}"
    padding: "4px 9px"
---

# Design System: AI for Designers

## Overview

**Creative North Star: "The Terminal Ladder"**

This is a guide written by and for people who now live partly in a terminal. The visual system fuses two things the product itself is about: a command-line identity (the `❯` brand glyph, literal monospace command syntax, a mini terminal window in the hero) and the three-rung ladder — Prompt → Skill → Subagent — the whole guide teaches. The tier ramp isn't decorative color variety; it's the one idea made visible, so the deepening green progression (`--t1` → `--t2` → `--t3`) must always track that specific meaning wherever it appears, never be reused as generic accent color. Green is the system's committed hue — the most literal color a terminal has (phosphor CRT green, `git diff` green) — not an arbitrary brand pick.

The feel is precise and unshowy: a cool, neutral gray-green paper (never cream, never beige, never terracotta, anywhere in the system — a deliberate exclusion, not an oversight) carries small, confident type moves rather than large decorative gestures. Cards and rungs sit gently, permanently lifted off the paper — elevation here is ambient and material, not a state you earn by hovering. Every corner in the real UI is sharp — flat `0px` radius on every surface, no exceptions. Borders are a deliberate `2px`, not a hairline — components read as workmanlike and precise but not timid: bold rules, quiet hover lifts (translateY(-2px) plus a shadow deepen), one inverted solid-ink card for real contrast at the page's single most important decision point.

**Confirmed rejection:** this system explicitly does not chase generic "AI-product" visual habits — no glossy gradient hero, no purple-on-white SaaS default, no stock illustration, no soft-rounded default-app-icon geometry, no trendy variable-grotesque display face, no warm cream/beige/terracotta surface anywhere. Where green appears, it is load-bearing (the ladder), not a category costume.

**Key Characteristics:**
- Cool neutral gray-green paper (never cream, beige, or terracotta) with a bright near-white card surface for content
- A deepening green tier ramp that always means Prompt→Skill→Subagent, carried by badges and tinted backgrounds — never a border accent, never a generic accent
- Terminal/CLI vocabulary throughout: the `❯` glyph, monospace command chips, a dark terminal window
- Ambient, always-on soft shadows — material lift at rest, not a hover reward
- **Sharp corners everywhere** — `0px` radius is the system's radius, full stop; the only curves in the real UI are true circles (the terminal window's traffic-light dots)
- **Bold `2px` borders** on every card-like surface — a deliberate, visible rule, not a hairline
- One inverted solid-ink card (white text) marks the single most important decision on a page — real contrast, spent once, not scattered
- Every hero h1 leads its page directly, no kicker or eyebrow above it, set tight and large (up to 88px, -0.04em tracking)
- Motion decelerates smoothly (exponential ease-out); nothing overshoots or springs

## Colors

A cool neutral gray-green carries the reading experience; a single deepening green ramp is the system's one deliberate signature color, reserved for the ladder concept; three additional semantic accents (teal-green/amber/red) exist only for create/caution/blocker meaning, never as decoration. No cream, beige, or terracotta appears anywhere in this palette.

### Primary
- **Skill Green** (#227A34): the workhorse brand/link color — nav "current page" block, active states, link color (via the readable `skill-green-ink` #1F6B2C variant). Middle rung of the ladder.
- **Prompt Green** (#5FB85A): first rung of the ladder — lightest, most energetic step in the tier ramp. Used only where "Prompt" (rung 1) is the specific referent. Light enough that it needs its own readable text variant, `prompt-green-ink` (#2A7028), anywhere it carries text on a light surface — the raw color fails contrast as text.
- **Subagent Pine** (#164D22): third and deepest rung of the ladder — used only where "Subagent" (rung 3) is the specific referent.

### Neutral
- **Paper** (#E4E7E3): page background. Cool neutral gray with a whisper of green toward the accent — explicitly not cream, beige, or terracotta.
- **Paper, Lighter** (#EEF1EC): secondary surface — sticky toolbars, inset "when to use" boxes, alternating page bands.
- **Card White** (#FAFCF9): the raised-surface color for every card, rung, callout, and code block chrome.
- **Ink** (#14191A): primary text, headings, strong emphasis. Also the fill for the inverted primary card.
- **Ink, Muted** (#4A524C): body copy default color.
- **Ink, Faint** (#838C86): reserved for the `showcase.html` demo product's own palette only (it plays a fictional Acme product, not this site's chrome). Every real body-scale text on the actual guide uses Ink or Ink, Muted — Ink, Faint fails WCAG AA against both Paper and Card and must never carry real reader-facing text.
- **Rule** (#CBD1CC) / **Rule, Soft** (#DCE1DD): `Rule` for structural borders (nav, cards), `Rule, Soft` for lighter internal separators (section bands).

### Named Rules
**The Ladder-Only Rule.** The three tier colors (Prompt Green, Skill Green, Subagent Pine) and their soft/line tints exist to encode which rung of Prompt → Skill → Subagent a piece of UI refers to. Never repurpose them as a generic fourth or fifth accent color — if a new UI element needs color and isn't tied to a specific rung, it should default to a neutral or to Skill Green only if it's a generic interactive/brand moment (nav, links).

**The Soft/Line Rule.** Every accent color (tier and semantic) ships as a triplet: the solid color for icons/fills, a `-soft` tint for its background wash, and a `-line` tint for its border — e.g. Skill Green / Skill Green Soft (#D7ECD4) / Skill Green Line (#A9D6A4). Never pair a solid accent directly against Paper without its matching soft/line tint doing the transition. Prompt Green additionally needs its `-ink` variant (#2A7028) anywhere it carries text rather than a fill, because the raw tier color is too light to read.

**The No-Cream Rule.** Cream, beige, and terracotta are excluded from this palette entirely — not merely avoided by default, but a confirmed rejection. If a warm neutral is ever needed, shift it cool/gray-green first; never toward tan or ivory.

## Typography

**Display Font:** Archivo (with system-ui, sans-serif fallback)
**Body Font:** Inter Tight (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SFMono-Regular, Menlo, monospace fallback)

**Character:** Archivo (weights 600/800) is a severe, industrial grotesk — grounded and technical rather than friendly or trendy, deliberately not one of the variable-grotesque display faces (Space Grotesk, Syne, Bricolage Grotesque and kin) that have become the default display voice of AI-generated marketing pages. Inter Tight carries long-form reading at a generous 1.62 line-height; JetBrains Mono is used liberally and structurally, not just for code — it's the system's "this is a command, a label, or a piece of UI chrome" signal, earned by a product that's genuinely about the terminal, not worn as a costume.

### Hierarchy
- **Display** (800, `clamp(42px, 7.5vw, 88px)`, line-height 0.98, tracking -0.04em — the system's tracking floor, as tight as this type ever gets): page hero `h1` only. Every hero leads with this headline directly — no eyebrow or kicker above it (see Do's and Don'ts).
- **Headline** (600, `clamp(24px, 3vw, 33px)`, tracking -0.02em): section `h2`.
- **Title** (600, 19–20px, tracking -0.01em): `h3`, card headings.
- **Body** (400, 17.5px, line-height 1.62): default paragraph text; lede paragraphs step up to 20.5px.
- **Label** (500, 11.5px, tracking 0.15em, uppercase, mono): eyebrows, nav links, tags, terminal chrome — always uppercase, always mono, always widely tracked.

### Named Rules
**The Mono-Means-Chrome Rule.** JetBrains Mono is reserved for structural/interface text (eyebrows, nav, tags, code, terminal, commands) — never for headlines or body prose. If something is set in mono, it is labeling or instructing, not narrating.

## Layout

Content sits in a `1100px` max-width `.wrap` container with `24px` side padding; long-form reading columns additionally clamp to a `75ch` measure (`.measure`) — left-aligned, never centered, so capped-width text starts at the same left edge as the full-width hero and card grids above and below it. Multi-column content (`.compare`, `.cards`, `.lib-grid`) stays at the full `.wrap` width instead of being squeezed into the reading measure; only genuine prose, single-column code/callout sequences, and headings get the cap. Page structure is a stack of `section.band` blocks (`52px` vertical padding, `1px` soft rule between them, no rule after the last), each opened by a `.sec-head` (heading + optional sub-line). The sticky top nav is a fixed `56px` (`--nav-h`), translucent with backdrop blur, and library pages add a second sticky toolbar (search + filter chips) that docks directly beneath it. Responsive behavior collapses multi-column grids (cards, comparisons, ladder rungs) to a single column under `760px`, and trims nav-link padding/size rather than hiding items.

## Elevation & Depth

Ambient, always-on soft shadows — not a hover reward. Every raised surface (card, rung, callout wrapper, day block, workflow card) carries a soft two-layer shadow at rest; hover only deepens it (swap to the larger `shadow-lg`) and lifts the element `2px`, it doesn't introduce depth that wasn't already there.

### Shadow Vocabulary
- **Ambient** (`box-shadow: 0 1px 2px rgba(20,25,26,.05), 0 10px 30px -16px rgba(20,25,26,.22)`): default resting elevation for cards, rungs, callouts, day blocks.
- **Lifted** (`box-shadow: 0 2px 6px rgba(20,25,26,.06), 0 24px 50px -24px rgba(22,77,34,.30)`): hover state for interactive cards, and the default state for the hero terminal window (already "raised" without interaction). The colored tail tints toward Subagent Pine, matching the ladder's deepest step.

### Named Rules
**The Always-Lifted Rule.** Cards and rungs are never flat at rest. If a new component needs to feel calmer than the default card, reduce padding — don't remove the shadow or thin the border.

## Shapes

Flat and bold. Every surface in the real UI — cards, rungs, callouts, day blocks, buttons, chips, tags, code blocks, the nav brand mark, the favicon — is `0px` radius, full stop. The only curves anywhere are true circles (the terminal window's three traffic-light dots, representing a real physical object) and the `50%` avatar-style circles inside the `showcase.html` demo, which is a separate fictional product's own design language, not this system's. Borders on every primary card-like component (`.card`, `.rung`, `.callout`, `.day`, `.compare .col`, `.pcard`, `.wf-card`) are a deliberate `2px` in `Rule` (or a semantic `-line` tint on a tinted surface) — a visible, committed rule, not a hairline. Secondary/nested elements (inset boxes, collapsible details, form inputs, small chips) stay at a quieter `1px`, which is itself the hierarchy signal: bold border means primary card, hairline means secondary detail. Category and tier meaning live in a colored number badge, a tinted background, or a colored heading, never in a border color or a soft corner.

## Components

### Navigation
Sticky, `56px`, translucent Paper with backdrop blur and a bottom hairline rule. Brand mark is the `❯` glyph in a sharp-cornered Skill Green square (matches the favicon). Links are mono, uppercase, 11.5px, widely tracked; the active page gets a solid Skill Green block (white text, sharp corners — not a pill), other links get a Skill Green Soft wash on hover. A "coming soon" link gets a small mono "soon" badge instead of a real hover state. Under 760px, links scroll horizontally with a fade-edge mask instead of wrapping or clipping.

### Ladder Rung (signature)
Three-column grid (number badge · label+description · trailing command hint), tier (Prompt/Skill/Subagent) carried entirely by the colored number badge — a bold `2px` border on all sides, no accent edge. The Prompt badge (lightest tier color) uses dark ink numerals instead of white, since white fails contrast on that light a green; Skill and Subagent badges use white. Rungs animate in on load with a staggered slide-up-and-fade using a smooth exponential ease-out (`cubic-bezier(.16,1,.3,1)`, no overshoot/bounce), 50ms/150ms/250ms delay. On mobile, the trailing command hint is dropped, not shrunk.

### Callout
Card-styled box, tinted background per semantic variant with a matching `-line` border tint at `2px` (no border accent on any single edge) and an eyebrow label: `tip` (Skill Green — guidance), `rule` (Create Green — a hard rule/doctrine), `warn` (Caution Amber — a gotcha), `stop` (Blocker Red — a hard blocker). Body text darkens to a variant-specific readable shade rather than staying at default Ink-2.

### Cards / Containers
- **Corner style:** sharp, `0px`, no exceptions.
- **Background:** Card White (or solid Ink for the one inverted primary card — see below).
- **Shadow strategy:** Ambient at rest, Lifted + 2px translateY on hover (interactive cards only).
- **Border:** bold `2px` Rule, tightening to Skill Green Line on interactive hover.
- **Internal padding:** 20px is the default card padding; library/prompt cards follow the same scale.

### Primary Card (signature, inverted)
The single most important next-step card on a page (e.g. "Where to go next"'s Foundations card) is inverted to solid Ink with white heading text, Prompt Green for its "k" label and CTA, and a muted light-green for its body copy. This is the system's one deliberate high-contrast moment — real inversion, spent once per page, not a tint. Everything else on the page stays quiet so this reads as the obvious next action.

### Two-Column Compare
A pair of `.compare .col` panels for genuine either/or or fit/not-fit content, bold `2px` bordered like every other primary card. Semantic variants tint the whole panel (background + `-line` border + heading color): `good`/`bad` (Create Green / Blocker Red) for a real fit/not-fit judgment, `tier-t2`/`tier-t3` (Skill Green / Subagent Pine) when the two columns are a genuine ladder-tier choice. A neutral, untinted `.col` (no variant class) is correct when the two columns are just different — not better/worse, not different tiers.

### Code Block + Copy Button
Dark terminal-toned block (`#15151C` background, `#E7E6EF` text) independent of the light paper system — this is the one place the system deliberately inverts on every page (the Primary Card is the other, used once per page at most). Inline `<code>` instead stays in the light system: Skill Green Soft background, Skill Green Ink text. A floating mono copy button sits top-right of every block; it turns Create Green with a checkmark on successful copy, reverting after a timeout.

### Terminal Window (signature)
The hero's three-line demo terminal: dark chrome (`#1D1D26` title bar with three inert traffic-light dots), monospace body, syntax-colored by role (prompt `❯` in violet — the one place a small violet accent survives, confined entirely to this dark terminal syntax-highlighting world, never the light paper system — comment/output in muted gray, success line in green). This is the clearest single expression of "The Terminal Ladder" — reuse it sparingly, only where showing an actual command sequence adds real information.

### Library Card
Used on the prompts/skills libraries: category eyebrow (mono, Skill Green Ink), title, description, an inset "when to use" box (Paper 2 background, quiet `1px` border), a collapsible `<details>` example section, and tags pinned to the card's bottom edge via `margin-top:auto`. The card itself carries the bold `2px` border like every other primary card.

### Day Block (7-day path)
Two-column grid: large display-weight day number (Skill Green) beside title + description + do-list, bold `2px` bordered. Which rung the day teaches (or "context" for a non-rung day) is carried entirely by a small colored `.rung-tag` pill next to the heading — the Prompt variant uses `prompt-green-ink` for its text (same contrast fix as the ladder rung badges), not the raw tier color.

## Do's and Don'ts

### Do:
- **Do** keep the tier ramp (Prompt Green / Skill Green / Subagent Pine) meaning-locked to the three rungs; never introduce a fourth "tier-like" color.
- **Do** pair every accent color with its own `-soft` background and `-line` border tint rather than placing a solid accent directly on Paper.
- **Do** set structural/interface text (nav, eyebrows, tags, code, terminal) in JetBrains Mono, uppercase, widely tracked where it's a label.
- **Do** give every primary card-like surface an ambient shadow at rest, sharp corners, and a bold `2px` border — nothing floats with zero elevation, nothing gets a timid hairline.
- **Do** carry category/tier meaning with a colored number badge, a tinted background, or a colored heading — never a border accent.
- **Do** let every hero `h1` lead the page directly, with the lede paragraph doing any framing a label might otherwise carry.
- **Do** use `prompt-green-ink`, never raw Prompt Green, anywhere that color carries text rather than a fill — the raw tier color fails contrast.
- **Do** spend the one inverted solid-ink card on exactly one thing per page: the single most important next action.

### Don't:
- **Don't** use cream, beige, or terracotta anywhere in this system — not the background, not a tint, not an accent. This palette is cool neutral gray-green, by deliberate exclusion.
- **Don't** reach for a generic purple-on-white "AI SaaS" gradient hero, glossy CTA, or stock illustration — green in this system is load-bearing ladder meaning, not category decoration.
- **Don't** make elevation hover-only. Shadows here are ambient/material; hover deepens an existing shadow, it doesn't create one from flat.
- **Don't** set headline or body prose in JetBrains Mono — mono means interface chrome, not narration.
- **Don't** round any corner in the real UI — the radius scale is `0px` across the board; not a small radius, none. Reserve any curve for a true circle representing a real round object (the terminal window's dots).
- **Don't** thin a primary card's border below `2px` — the bold rule is the point; reserve `1px` for secondary/nested elements only.
- **Don't** reach for Bricolage Grotesque, Space Grotesk, Syne, or another trendy variable-grotesque display face — deliberately replaced with Archivo, chosen for its severe, industrial, non-trendy character.
- **Don't** put a kicker or eyebrow label above an `h1`/`h2` headline — deliberately removed sitewide as a recognizable AI-generated-UI tell; the headline carries its own weight. (A callout's or card's small annotation label above body copy, with no heading involved, is a different, legitimate pattern and stays.)
- **Don't** add a colored `border-left`/`border-top` accent to a card, rung, callout, day block, or compare panel — deliberately removed sitewide; use a badge, a tinted background, or a colored heading instead.
- **Don't** draw a decorative hairline grid, dot-grid, or line-field behind a hero — deliberately removed; trust the type and the terminal demo to carry the hero, not a background texture.
- **Don't** use overshoot/bounce easing — replaced sitewide with a smooth exponential ease-out (`cubic-bezier(.16,1,.3,1)`); real motion here decelerates, it doesn't spring past its target.
- **Don't** use Ink, Faint (`--ink-3`) for any real reader-facing text on the actual guide pages — it fails WCAG AA against Paper and Card. It is reserved for the `showcase.html` demo product's own separate palette.
- **Don't** use raw Prompt Green as a text color on a light surface — it fails contrast at ~2:1. Use `prompt-green-ink` instead; this is the one tier step in the ramp light enough to need it.
