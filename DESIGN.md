---
name: AI for Designers
description: A practical, terminal-native guide teaching designers the prompt → skill → subagent ladder for Claude Code.
colors:
  paper: "#E7E6E1"
  paper-2: "#F1F0EB"
  card: "#FCFBF8"
  ink: "#17171C"
  ink-2: "#52525E"
  ink-3: "#86868F"
  rule: "#D6D4CC"
  rule-soft: "#E6E4DD"
  prompt-violet: "#6C5CE0"
  prompt-violet-soft: "#E8E4FB"
  prompt-violet-line: "#CFC6F5"
  skill-violet: "#4531C9"
  skill-violet-soft: "#DFD9F8"
  skill-violet-line: "#BFB4F0"
  skill-violet-ink: "#31219E"
  subagent-indigo: "#241680"
  subagent-indigo-soft: "#D7D2EC"
  subagent-indigo-line: "#B3AAD8"
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
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(38px, 6vw, 68px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(24px, 3vw, 33px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.15em"
rounded:
  s: "5px"
  m: "11px"
  l: "20px"
spacing:
  gutter: "40px"
  nav-height: "56px"
components:
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.m}"
    padding: "20px"
  nav-link-active:
    backgroundColor: "{colors.skill-violet}"
    textColor: "#ffffff"
    rounded: "{rounded.s}"
    padding: "7px 11px"
  code-inline:
    backgroundColor: "{colors.skill-violet-soft}"
    textColor: "{colors.skill-violet-ink}"
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
    textColor: "{colors.ink-3}"
    rounded: "999px"
    padding: "4px 9px"
---

# Design System: AI for Designers

## Overview

**Creative North Star: "The Terminal Ladder"**

This is a guide written by and for people who now live partly in a terminal. The visual system fuses two things the product itself is about: a command-line identity (the `❯` brand glyph, literal monospace command syntax, a mini terminal window in the hero) and the three-rung ladder — Prompt → Skill → Subagent — the whole guide teaches. The tier ramp isn't decorative color variety; it's the one idea made visible, so the deepening violet-to-indigo progression (`--t1` → `--t2` → `--t3`) must always track that specific meaning wherever it appears, never be reused as generic accent color.

The feel is precise and unshowy: warm, slightly desaturated paper (never bright white, deliberately not cream — "#F4F1EA reads as AI-default" per the token file's own comment) carries small, confident type moves rather than large decorative gestures. Cards and rungs sit gently, permanently lifted off the paper — elevation here is ambient and material, not a state you earn by hovering. Components read as workmanlike and precise: tight radii, thin rules, quiet hover lifts (translateY(-2px) plus a shadow deepen) — built for scanning and use, not for admiring.

**Confirmed rejection:** this system explicitly does not chase generic "AI-product" visual habits — no glossy gradient hero, no purple-on-white SaaS default, no stock illustration. Where purple/violet appears, it is load-bearing (the ladder), not a category costume.

**Key Characteristics:**
- Warm, matte paper surfaces (never pure white, never cream) with a bright off-white card surface for content
- A deepening violet→indigo tier ramp that always means Prompt→Skill→Subagent, never generic accent
- Terminal/CLI vocabulary throughout: the `❯` glyph, monospace command chips, a dark terminal window
- Ambient, always-on soft shadows — material lift at rest, not a hover reward
- Small radii (5–20px), thin 1px rules, no heavy borders

## Colors

Warm neutral paper and near-black ink carry the reading experience; a single deepening violet-indigo ramp is the system's one deliberate signature color, reserved for the ladder concept; three additional semantic accents (green/amber/red) exist only for create/caution/blocker meaning, never as decoration.

### Primary
- **Skill Violet** (#4531C9): the workhorse brand/link color — nav "current page" pill, active states, link color (via the readable `skill-violet-ink` #31219E variant), the default rung/tier when a general "skill" reference is needed. Middle rung of the ladder.
- **Prompt Violet** (#6C5CE0): first rung of the ladder — lightest, most energetic step in the tier ramp. Used only where "Prompt" (rung 1) is the specific referent.
- **Subagent Indigo** (#241680): third and deepest rung of the ladder — used only where "Subagent" (rung 3) is the specific referent.

### Neutral
- **Paper** (#E7E6E1): page background. Warm and matte — a deliberate choice against pure white or cream.
- **Paper, Lighter** (#F1F0EB): secondary surface — sticky toolbars, inset "when to use" boxes, alternating page bands.
- **Card White** (#FCFBF8): the raised-surface color for every card, rung, callout, and code block chrome.
- **Ink** (#17171C): primary text, headings, strong emphasis.
- **Ink, Muted** (#52525E): body copy default color.
- **Ink, Faint** (#86868F): tertiary text — timestamps, tag labels, placeholder-weight captions.
- **Rule** (#D6D4CC) / **Rule, Soft** (#E6E4DD): hairline dividers — `Rule` for structural borders (nav, cards), `Rule, Soft` for lighter internal separators (section bands).

### Named Rules
**The Ladder-Only Rule.** The three tier colors (Prompt Violet, Skill Violet, Subagent Indigo) and their soft/line tints exist to encode which rung of Prompt → Skill → Subagent a piece of UI refers to. Never repurpose them as a generic fourth or fifth accent color — if a new UI element needs color and isn't tied to a specific rung, it should default to a neutral or to Skill Violet only if it's a generic interactive/brand moment (nav, links).

**The Soft/Line Rule.** Every accent color (tier and semantic) ships as a triplet: the solid color for icons/text/fills, a `-soft` tint for its background wash, and a `-line` tint for its border — e.g. Skill Violet / Skill Violet Soft (#DFD9F8) / Skill Violet Line (#BFB4F0). Never pair a solid accent directly against Paper without its matching soft/line tint doing the transition.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif fallback)
**Body Font:** Inter Tight (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SFMono-Regular, Menlo, monospace fallback)

**Character:** A variable-optical-size display face (Bricolage Grotesque, weights 400–800) gives headlines a slightly condensed, confident geometry at tight negative tracking; Inter Tight carries long-form reading at a generous 1.62 line-height; JetBrains Mono is used liberally and structurally, not just for code — it's the system's "this is a command, a label, or a piece of UI chrome" signal.

### Hierarchy
- **Display** (800, `clamp(38px, 6vw, 68px)`, line-height 0.98, tracking -0.035em): page hero `h1` only.
- **Headline** (600, `clamp(24px, 3vw, 33px)`, tracking -0.02em): section `h2`.
- **Title** (600, 19–20px, tracking -0.01em): `h3`, card headings.
- **Body** (400, 16.5px, line-height 1.62): default paragraph text; lede paragraphs step up to 19px.
- **Label** (500, 11px, tracking 0.15em, uppercase, mono): eyebrows, nav links, tags, terminal chrome — always uppercase, always mono, always widely tracked.

### Named Rules
**The Mono-Means-Chrome Rule.** JetBrains Mono is reserved for structural/interface text (eyebrows, nav, tags, code, terminal, commands) — never for headlines or body prose. If something is set in mono, it is labeling or instructing, not narrating.

## Layout

Content sits in a `1100px` max-width `.wrap` container with `24px` side padding; long-form reading columns additionally clamp to a `72ch` measure (`.measure`). Page structure is a stack of `section.band` blocks (`52px` vertical padding, `1px` soft rule between them, no rule after the last), each opened by a `.sec-head` (heading + optional sub-line). The sticky top nav is a fixed `56px` (`--nav-h`), translucent with backdrop blur, and library pages add a second sticky toolbar (search + filter chips) that docks directly beneath it. Responsive behavior collapses multi-column grids (cards, comparisons, ladder rungs) to a single column under `760px`, and trims nav-link padding/size rather than hiding items.

## Elevation & Depth

Ambient, always-on soft shadows — not a hover reward. Every raised surface (card, rung, callout wrapper, day block, workflow card) carries a soft two-layer shadow at rest; hover only deepens it (swap to the larger `shadow-lg`) and lifts the element `2px`, it doesn't introduce depth that wasn't already there.

### Shadow Vocabulary
- **Ambient** (`box-shadow: 0 1px 2px rgba(23,23,28,.05), 0 10px 30px -16px rgba(23,23,28,.22)`): default resting elevation for cards, rungs, callouts, day blocks.
- **Lifted** (`box-shadow: 0 2px 6px rgba(23,23,28,.06), 0 24px 50px -24px rgba(36,22,128,.30)`): hover state for interactive cards, and the default state for the hero terminal window (already "raised" without interaction).

### Named Rules
**The Always-Lifted Rule.** Cards and rungs are never flat at rest. If a new component needs to feel calmer than the default card, reduce padding or remove the border — don't remove the shadow.

## Shapes

Three-step radius scale, all small: `5px` (buttons, chips, inline code, tags-as-pills use `999px` fully round instead), `11px` (the default for cards, rungs, callouts, day blocks — the system's "this is a raised panel" signal), `20px` (reserved for larger showcase-style containers). Borders are hairline `1px` in `Rule`, with several signature components (ladder rungs, callouts, day blocks) adding a `3px` colored left border keyed to their tier/semantic meaning — a left accent bar is this system's way of tagging a block's category without needing a badge.

## Components

### Navigation
Sticky, `56px`, translucent Paper with backdrop blur and a bottom hairline rule. Brand mark is the `❯` glyph in a `6px`-radius Skill Violet square. Links are mono, uppercase, 11.5px, widely tracked; the active page gets a solid Skill Violet pill (white text), other links get a Skill Violet Soft wash on hover. A "coming soon" link gets a small mono "soon" badge instead of a real hover state.

### Ladder Rung (signature)
Three-column grid (number badge · label+description · trailing command hint) with a `3px` left border and matching colored number badge, keyed to tier (Prompt/Skill/Subagent). Rungs animate in on load with a staggered slide-up-and-fade (50ms/150ms/250ms delay). On mobile, the trailing command hint is dropped, not shrunk.

### Callout
Card-styled box with a `3px` left accent border and an eyebrow label, in four semantic variants: `tip` (Skill Violet — guidance), `rule` (Create Green — a hard rule/doctrine), `warn` (Caution Amber — a gotcha), `stop` (Blocker Red — a hard blocker). Body text darkens to a variant-specific readable shade rather than staying at default Ink-2.

### Cards / Containers
- **Corner style:** 11px (default) or 20px for larger showcase panels.
- **Background:** Card White.
- **Shadow strategy:** Ambient at rest, Lifted + 2px translateY on hover (interactive cards only).
- **Border:** 1px Rule, tightening to Skill Violet Line on interactive hover.
- **Internal padding:** 20px is the default card padding; library/prompt cards follow the same scale.

### Code Block + Copy Button
Dark terminal-toned block (`#15151C` background, `#E7E6EF` text) independent of the light paper system — this is the one place the system deliberately inverts. Inline `<code>` instead stays in the light system: Skill Violet Soft background, Skill Violet Ink text. A floating mono copy button sits top-right of every block; it turns Create Green with a checkmark on successful copy, reverting after a timeout.

### Terminal Window (signature)
The hero's three-line demo terminal: dark chrome (`#1D1D26` title bar with three inert traffic-light dots), monospace body, syntax-colored by role (prompt `❯` in violet, comment/output in muted gray, success line in green). This is the clearest single expression of "The Terminal Ladder" — reuse it sparingly, only where showing an actual command sequence adds real information.

### Library Card
Used on the prompts/skills libraries: category eyebrow (mono, Skill Violet Ink), title, description, an inset "when to use" box (Paper 2 background), a collapsible `<details>` example section, and tags pinned to the card's bottom edge via `margin-top:auto`.

### Day Block (7-day path)
Two-column grid: large display-weight day number (Skill Violet) beside title + description + do-list, with a `3px` left border colored by which rung the day teaches (or Create Green for a "context" day). Structurally identical to Ladder Rung's left-accent pattern, scaled up for narrative content.

## Do's and Don'ts

### Do:
- **Do** keep the tier ramp (Prompt Violet / Skill Violet / Subagent Indigo) meaning-locked to the three rungs; never introduce a fourth "tier-like" color.
- **Do** pair every accent color with its own `-soft` background and `-line` border tint rather than placing a solid accent directly on Paper.
- **Do** set structural/interface text (nav, eyebrows, tags, code, terminal) in JetBrains Mono, uppercase, widely tracked where it's a label.
- **Do** give every card-like surface an ambient shadow at rest (11px radius, 1px Rule border) — nothing floats with zero elevation.
- **Do** use the `3px` colored left-border pattern (rung, callout, day block) to tag a block's category without adding a badge.

### Don't:
- **Don't** use a bright/pure white or cream background — Paper is deliberately warm and slightly desaturated ("#F4F1EA reads as AI-default" is the system's own stated rejection).
- **Don't** reach for a generic purple-on-white "AI SaaS" gradient hero, glossy CTA, or stock illustration — the violet in this system is load-bearing ladder meaning, not category decoration.
- **Don't** make elevation hover-only. Shadows here are ambient/material; hover deepens an existing shadow, it doesn't create one from flat.
- **Don't** set headline or body prose in JetBrains Mono — mono means interface chrome, not narration.
- **Don't** hand-roll a new border-radius value outside 5px / 11px / 20px (or 999px for fully round pills/chips).
