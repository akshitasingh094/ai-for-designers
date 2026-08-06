/* ============================================================================
   SKILLS — content as data. Edit here to grow the library.
   'install' is generated from the same SKILL.md written to /skills/<name>/,
   so the copy-paste install command and the on-disk file never diverge.
   ========================================================================== */

window.SKILL_GROUPS = [
  {
    "id": "user",
    "name": "User-invoked",
    "blurb": "You type /name to run these. Task commands you reach for on demand \u2014 the verbs of your workflow."
  },
  {
    "id": "model",
    "name": "Model-invoked",
    "blurb": "No command. Claude reaches for these automatically when your task matches their description \u2014 standing rules and knowledge, always on."
  }
];

window.SKILLS = [
  {
    "name": "spec-interaction",
    "group": "user",
    "desc": "Turn a described UI interaction into a state table, variant matrix and ranked open questions. Stops before building.",
    "purpose": "Structure a behaviour into states and variants before you build.",
    "when": "You can describe what should happen but need it structured first.",
    "usage": "/spec-interaction hover on an Acme user-table row reveals a Remove action",
    "returns": "A state table, a variant matrix, stated assumptions, and open questions ranked by cost.",
    "tags": [
      "interaction",
      "states",
      "variants"
    ],
    "install": "mkdir -p ~/.claude/skills/spec-interaction\ncat > ~/.claude/skills/spec-interaction/SKILL.md <<'SKILL'\n---\nname: spec-interaction\ndescription: Turn a described UI interaction into a state table, variant matrix and ranked open questions. Stops before building.\n---\n\nYou are a staff product designer. Turn the interaction below into a spec.\n\nProduce ONLY:\n1. State table \u2014 state \u2192 trigger \u2192 visual change \u2192 duration/easing\n2. Variant matrix \u2014 component \u2192 property \u2192 values\n3. Assumptions you had to make (be blunt)\n4. Open questions blocking the build, ranked. Always check: keyboard/touch path,\n   error state, empty state, undo, whether a counter elsewhere goes stale, scope.\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the open questions. Do not build.\n\nInteraction: $ARGUMENTS\nSKILL"
  },
  {
    "name": "edge-cases",
    "group": "user",
    "desc": "Enumerate empty, emptied, loading, error, overflow and permission states for a screen, with shippable copy.",
    "purpose": "Surface the non-happy-path states before they surface in production.",
    "when": "Before building a screen, so edge states aren't afterthoughts.",
    "usage": "/edge-cases the Acme user-management table after adding row removal",
    "returns": "A state table with real copy, plus the three states most likely to occur in production.",
    "tags": [
      "edge cases",
      "empty",
      "error",
      "states"
    ],
    "install": "mkdir -p ~/.claude/skills/edge-cases\ncat > ~/.claude/skills/edge-cases/SKILL.md <<'SKILL'\n---\nname: edge-cases\ndescription: Enumerate empty, emptied, loading, error, overflow and permission states for a screen, with shippable copy.\n---\n\nYou are a product designer. For the screen below, enumerate the states\nusually missed. Table: state \u2192 when it occurs \u2192 what the user sees \u2192 next action.\n\nCover: empty (never used) AND emptied (user cleared it), loading (first + refresh),\nerror (request + validation), offline/stale, overflow (long/many/small screen),\nand no-permission. Give real copy, not placeholders. Then flag the 3 most likely\nin production.\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the top-three flag.\n\nScreen: $ARGUMENTS\nSKILL"
  },
  {
    "name": "flow-map",
    "group": "user",
    "desc": "Turn a feature description into a user flow with entry points, decision branches, exits and failure paths.",
    "purpose": "Map a journey, including the junctions and dead ends, before any pixels.",
    "when": "Start of a feature that crosses more than one screen.",
    "usage": "/flow-map an Acme admin invites a teammate who never accepts",
    "returns": "Actors, entry points, happy path, branches, exits, failure paths, and a Mermaid chart.",
    "tags": [
      "flow",
      "journey",
      "branches"
    ],
    "install": "mkdir -p ~/.claude/skills/flow-map\ncat > ~/.claude/skills/flow-map/SKILL.md <<'SKILL'\n---\nname: flow-map\ndescription: Turn a feature description into a user flow with entry points, decision branches, exits and failure paths.\n---\n\nYou are a product designer doing interaction design. For the feature below produce:\n1. Actors and their goal\n2. Entry points (incl. deep links, notifications, returning mid-flow)\n3. Happy path as [user action] \u2192 [system response]\n4. Decision points, each with both outcomes\n5. Exits: success, abandonment, and where the user lands\n6. Failure branches and their recovery\n7. The step most likely to cause drop-off, with the reason\nEnd with a Mermaid flowchart.\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the flowchart.\n\nFeature: $ARGUMENTS\nSKILL"
  },
  {
    "name": "a11y-check",
    "group": "user",
    "desc": "Audit a design against WCAG 2.2 AA \u2014 contrast, keyboard, focus, target size, motion, semantics. Blockers separated from improvements.",
    "purpose": "Hold work to the accessibility floor before review and handoff.",
    "when": "Before design review and before handoff.",
    "usage": "/a11y-check the Acme login form, used on desktop and tablet",
    "returns": "A criterion table with SC refs, then blockers separated from improvements.",
    "tags": [
      "wcag",
      "accessibility",
      "keyboard",
      "contrast"
    ],
    "install": "mkdir -p ~/.claude/skills/a11y-check\ncat > ~/.claude/skills/a11y-check/SKILL.md <<'SKILL'\n---\nname: a11y-check\ndescription: Audit a design against WCAG 2.2 AA \u2014 contrast, keyboard, focus, target size, motion, semantics. Blockers separated from improvements.\n---\n\nYou are an accessibility specialist reviewing a design against WCAG 2.2 AA.\nReport as: criterion \u2192 SC ref \u2192 pass/fail/risk \u2192 what to change.\n\nCheck: contrast in every state (incl. disabled) on the real background; full\nkeyboard path with tab order; visible focus; target size (24px min); motion and\nauto-dismiss timing; colour-alone signalling; and the semantics a developer must\nimplement (role, name, live regions, focus-on-removal).\nEnd by separating BLOCKERS from improvements.\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the blockers/improvements split.\n\nScreen, component or flow: $ARGUMENTS\nSKILL"
  },
  {
    "name": "token-map",
    "group": "user",
    "desc": "Map hardcoded values to existing design tokens and propose three-tier names for anything genuinely new, with light/dark checks.",
    "purpose": "Convert raw values into the shared token language before publishing.",
    "when": "Cleaning a file before it goes into a shared library.",
    "usage": "/token-map the Acme card \u2014 hover background and the success tick look hardcoded",
    "returns": "A mapping table with confidence, proposed tiered tokens, and a light/dark resolution check.",
    "tags": [
      "tokens",
      "variables",
      "theming"
    ],
    "install": "mkdir -p ~/.claude/skills/token-map\ncat > ~/.claude/skills/token-map/SKILL.md <<'SKILL'\n---\nname: token-map\ndescription: Map hardcoded values to existing design tokens and propose three-tier names for anything genuinely new, with light/dark checks.\n---\n\nYou are a design systems lead. Map the values below to tokens.\n1. Mapping table: value \u2192 existing token to use \u2192 confidence (+ the tolerance used)\n2. Proposed new tokens in three tiers (primitive \u2192 semantic \u2192 component); never\n   bind a component straight to a primitive\n3. Values that should NOT be tokenised, with reasoning\n4. Light + dark value for each proposed semantic token; flag any that can't resolve in both\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the theming check.\n\nValues or frame: $ARGUMENTS\nSKILL"
  },
  {
    "name": "naming-check",
    "group": "user",
    "desc": "Audit component, variant and layer names against a convention and return a dependency-safe rename order.",
    "purpose": "Make everything findable before publishing to a shared library.",
    "when": "Before publishing, when names are inconsistent or leak implementation.",
    "usage": "/naming-check the Acme Table Row component set and its layers",
    "returns": "A current \u2192 proposed table, then an ordered rename list that won't break instances.",
    "tags": [
      "naming",
      "convention",
      "layers"
    ],
    "install": "mkdir -p ~/.claude/skills/naming-check\ncat > ~/.claude/skills/naming-check/SKILL.md <<'SKILL'\n---\nname: naming-check\ndescription: Audit component, variant and layer names against a convention and return a dependency-safe rename order.\n---\n\nYou are a design systems lead. Audit naming for the target below.\nConvention (unless told otherwise): Category/Component Name; Title Case variant\nvalues describing state not appearance; Has\u2026 for booleans; layers named by purpose\nnot \"Frame 427\".\n\nOutput current \u2192 problem \u2192 proposed. Then an ordered rename list to run top-to-bottom\nwithout breaking instances (published renames last, flagged). Explain in one line why\nappearance-based names break when the design changes.\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the ordered rename list.\n\nTarget: $ARGUMENTS\nSKILL"
  },
  {
    "name": "prototype-wire",
    "group": "user",
    "desc": "Produce a Figma prototype wiring table \u2014 triggers, animation, easing, timing \u2014 with Smart Animate requirements and QA checks.",
    "purpose": "Connect existing states into a defensible, demo-ready prototype.",
    "when": "States exist and now need connecting with justified timings.",
    "usage": "/prototype-wire states: Default, Hover, Removing, Removed on the Acme row",
    "returns": "A wiring table, timing rationale, Smart Animate requirements, a QA checklist, and the reduced-motion fallback.",
    "tags": [
      "prototype",
      "motion",
      "timing"
    ],
    "install": "mkdir -p ~/.claude/skills/prototype-wire\ncat > ~/.claude/skills/prototype-wire/SKILL.md <<'SKILL'\n---\nname: prototype-wire\ndescription: Produce a Figma prototype wiring table \u2014 triggers, animation, easing, timing \u2014 with Smart Animate requirements and QA checks.\n---\n\nYou are a motion/interaction designer wiring a Figma prototype.\n1. Wiring table: from \u2192 trigger \u2192 to \u2192 animation \u2192 easing \u2192 duration (use Figma's real\n   triggers and animations)\n2. Timing rationale (anchor: <100ms instant, <400ms keeps flow, >500ms sluggish)\n3. Smart Animate requirements \u2014 which layers must share names to interpolate\n4. Playback QA checklist (double reflows, hijacked hovers, wrong-origin motion)\n5. Reduced-motion fallback\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the reduced-motion note.\n\nStates or interaction: $ARGUMENTS\nSKILL"
  },
  {
    "name": "copy-review",
    "group": "user",
    "desc": "A UX-writing pass on labels, buttons, tooltips, toasts, empty states and errors, with localisation risks flagged.",
    "purpose": "Make interface words clear, consistent and reusable out of context.",
    "when": "Any screen whose copy could be sharper.",
    "usage": "/copy-review toast 'Added successfully'; tooltip 'add to exclusion'; empty 'No data'",
    "returns": "A current \u2192 rewrite table with reasoning, then localisation warnings.",
    "tags": [
      "ux writing",
      "microcopy",
      "errors"
    ],
    "install": "mkdir -p ~/.claude/skills/copy-review\ncat > ~/.claude/skills/copy-review/SKILL.md <<'SKILL'\n---\nname: copy-review\ndescription: A UX-writing pass on labels, buttons, tooltips, toasts, empty states and errors, with localisation risks flagged.\n---\n\nYou are a UX writer. For each string: current \u2192 issue \u2192 rewrite \u2192 why.\nRules: buttons are verbs, labels are nouns; sentence case; no terminal period on\nlabels/buttons/toasts; an action keeps its name through the flow (Publish \u2192 Published);\ndrop \"successfully\"; confirmations name the object; errors say what happened and the\nnext step without blaming the user. Then flag localisation risks (length growth,\nconcatenation, pluralisation, embedded numbers).\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the localisation flags.\n\nStrings: $ARGUMENTS\nSKILL"
  },
  {
    "name": "handoff",
    "group": "user",
    "desc": "Generate a developer handoff a developer can build from without asking a question \u2014 behaviour, props, a11y, edge cases, acceptance criteria.",
    "purpose": "Hand work to engineering with nothing left implicit.",
    "when": "Handing a component or flow to engineering.",
    "usage": "/handoff the Acme row-removal interaction, going to the platform team",
    "returns": "Anatomy, behaviour spec, props/API, a11y requirements, edge cases, a binary acceptance checklist, and open product decisions.",
    "tags": [
      "handoff",
      "engineering",
      "acceptance criteria"
    ],
    "install": "mkdir -p ~/.claude/skills/handoff\ncat > ~/.claude/skills/handoff/SKILL.md <<'SKILL'\n---\nname: handoff\ndescription: Generate a developer handoff a developer can build from without asking a question \u2014 behaviour, props, a11y, edge cases, acceptance criteria.\n---\n\nYou are a staff product designer writing a developer handoff.\nProduce: 1. Anatomy with tokens \u00b7 2. Behaviour spec (state \u2192 trigger \u2192 result \u2192 timing)\n\u00b7 3. Props/API with defaults, as a developer would type it \u00b7 4. Accessibility (role,\nname, keyboard map, focus management incl. where focus goes on removal) \u00b7 5. Edge cases\n(long text, zero/many items, slow network, failed request, rapid clicks) \u00b7 6. Acceptance\ncriteria as a binary checklist \u00b7 7. Open decisions still owned by product.\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the open decisions.\n\nComponent or flow: $ARGUMENTS\nSKILL"
  },
  {
    "name": "design-critique",
    "group": "user",
    "desc": "A structured heuristic critique \u2014 hierarchy, Nielsen heuristics, cognitive load, consistency, accessibility \u2014 with three ranked changes.",
    "purpose": "Pressure-test a screen before anyone senior sees it.",
    "when": "Before showing work to stakeholders \u2014 while there's still time to act.",
    "usage": "/design-critique the Acme analytics dashboard; user is scanning, not reading",
    "returns": "A read of the screen's purpose, only the violated heuristics, and three ranked changes.",
    "tags": [
      "critique",
      "heuristics",
      "hierarchy"
    ],
    "install": "mkdir -p ~/.claude/skills/design-critique\ncat > ~/.claude/skills/design-critique/SKILL.md <<'SKILL'\n---\nname: design-critique\ndescription: A structured heuristic critique \u2014 hierarchy, Nielsen heuristics, cognitive load, consistency, accessibility \u2014 with three ranked changes.\n---\n\nYou are a staff product designer running a critique. Be direct; praise costs\nthe review its value.\n1. What this screen is trying to do (if you can't tell, that's finding #1)\n2. Visual hierarchy \u2014 squint test: first, second, third; does it match user priority?\n3. Nielsen heuristics \u2014 report only the violated ones: violation \u2192 consequence \u2192 fix\n4. Cognitive load \u2014 decisions per screen, working-memory load, redundancy\n5. Consistency \u2014 where it reinvents something the product already has\n6. Top 3 changes, ranked by impact per effort, each with its principle\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the top three.\n\nScreen or node: $ARGUMENTS\nSKILL"
  },
  {
    "name": "deck",
    "group": "user",
    "desc": "Turn design decisions into a stakeholder narrative \u2014 slide by slide, headlines as claims, with the three hardest questions pre-answered.",
    "purpose": "Present work upward so people who missed the sessions can approve it.",
    "when": "Presenting design work to leadership for a decision.",
    "usage": "/deck the Acme access-management redesign; 15 min; I need approval to build",
    "returns": "A slide-by-slide outline with claim-headlines, speaker notes, and the three hardest questions answered.",
    "tags": [
      "presentation",
      "stakeholders",
      "deck"
    ],
    "install": "mkdir -p ~/.claude/skills/deck\ncat > ~/.claude/skills/deck/SKILL.md <<'SKILL'\n---\nname: deck\ndescription: Turn design decisions into a stakeholder narrative \u2014 slide by slide, headlines as claims, with the three hardest questions pre-answered.\n---\n\nYou are a staff product designer presenting to people who attended none of the\nworking sessions. Produce a slide-by-slide outline. Each slide: a headline that is a\nCLAIM (not a topic), what's on it, and what you say aloud.\nStructure: problem in their language \u2192 today's workaround \u2192 the decision \u2192 why this,\nnot the alternatives (name real ones) \u2192 the flow as a story about a person \u2192 what it\ndoesn't do yet \u2192 the specific ask. Pre-answer the 3 hardest questions.\n\n## House rules\n- Reuse existing tokens and components; flag anything new before creating it.\n- WCAG 2.2 AA is the floor. No hover-only affordances.\n- Name the UX principle behind each recommendation.\n- Stop at the STOP POINT and wait.\nSTOP POINT: after the outline and the three questions.\n\nWork to present: $ARGUMENTS\nSKILL"
  },
  {
    "name": "design-principles",
    "group": "model",
    "desc": "Apply and name these UX principles whenever giving design feedback or making a UI recommendation.",
    "purpose": "Every recommendation comes back with the principle behind it named.",
    "when": "Auto-applies on any design feedback or UI recommendation.",
    "usage": "Ask 'why does this feel busy?' and the critique cites hierarchy, cognitive load, etc. by name.",
    "returns": "Recommendations that name their principle, so you learn the reasoning, not just the answer.",
    "tags": [
      "principles",
      "feedback",
      "learning"
    ],
    "install": "mkdir -p ~/.claude/skills/design-principles\ncat > ~/.claude/skills/design-principles/SKILL.md <<'SKILL'\n---\nname: design-principles\ndescription: Apply and name these UX principles whenever giving design feedback or making a UI recommendation.\n---\n\nWhen giving design feedback or a UI recommendation, ground it in a named\nprinciple and state the principle in one line. Draw from:\n- Progressive disclosure \u2014 reveal on demand; don't show every action at rest\n- Doherty threshold \u2014 acknowledge under 400ms; feedback before any network call\n- Visibility of system status \u2014 the interface always says what just happened\n- User control & freedom \u2014 reversible actions; undo before irreversible removal\n- Change blindness \u2014 animate removal (~250ms) so it reads as a consequence, not a bug\n- Fitts's Law \u2014 edge targets need \u226540px hit area regardless of glyph size\n- Hick's Law \u2014 fewer choices, faster decisions; curate rather than dump\n- Recognition over recall \u2014 show options; don't make people remember them\nNever give a recommendation without naming why it holds.\n\n(Model-invoked: no command. Once installed, Claude applies this automatically when your task matches the description above.)\nSKILL"
  },
  {
    "name": "accessibility-standards",
    "group": "model",
    "desc": "Apply WCAG 2.2 AA as the floor whenever designing or reviewing any UI \u2014 contrast, keyboard, focus, target size, motion, semantics.",
    "purpose": "The accessibility floor is applied to every screen automatically, not on request.",
    "when": "Auto-applies whenever you design or review a screen or component.",
    "usage": "Ask for any UI and it's checked for keyboard path, contrast, and focus without being told.",
    "returns": "Accessibility considered by default, so it's never a late-stage retrofit.",
    "tags": [
      "accessibility",
      "wcag",
      "standards"
    ],
    "install": "mkdir -p ~/.claude/skills/accessibility-standards\ncat > ~/.claude/skills/accessibility-standards/SKILL.md <<'SKILL'\n---\nname: accessibility-standards\ndescription: Apply WCAG 2.2 AA as the floor whenever designing or reviewing any UI \u2014 contrast, keyboard, focus, target size, motion, semantics.\n---\n\nTreat WCAG 2.2 AA as the minimum on all UI work, unprompted:\n- Text contrast 4.5:1 (3:1 large); UI components and focus indicators 3:1\n- Every interactive element reachable and operable by keyboard, with a visible focus state\n- Target size 24\u00d724px minimum\n- Never convey status by colour alone \u2014 pair it with text or icon\n- Auto-dismissing elements (toasts) must not be the only way information is delivered\n- When an element is removed, define where focus goes and what a screen reader announces\nIf a design violates any of these, say so before praising anything else.\n\n(Model-invoked: no command. Once installed, Claude applies this automatically when your task matches the description above.)\nSKILL"
  },
  {
    "name": "design-tokens",
    "group": "model",
    "desc": "Whenever a hardcoded colour, spacing, radius or type value appears in design work, map it to the token system instead of leaving raw values.",
    "purpose": "Raw values get caught and tokenised as a matter of course.",
    "when": "Auto-applies whenever hardcoded design values show up.",
    "usage": "Paste a spec with #4531C9 and it's flagged and mapped to the right semantic token.",
    "returns": "Consistent, themeable work; no orphan hex values slipping into the system.",
    "tags": [
      "tokens",
      "design systems",
      "consistency"
    ],
    "install": "mkdir -p ~/.claude/skills/design-tokens\ncat > ~/.claude/skills/design-tokens/SKILL.md <<'SKILL'\n---\nname: design-tokens\ndescription: Whenever a hardcoded colour, spacing, radius or type value appears in design work, map it to the token system instead of leaving raw values.\n---\n\nWhen design work contains raw values, treat them as tokens-in-waiting:\n- Map to an existing token where one is within tolerance\n- Use a three-tier model: primitive (grey-900) \u2192 semantic (surface-card, text-secondary)\n  \u2192 component (row-bg-hover). Never bind a component directly to a primitive.\n- A value used once and unlikely to recur may stay raw \u2014 say so rather than over-tokenising\n- Every semantic token must resolve in both light and dark; flag any that can't\nPrefer durable token names over one-off values whenever the value could recur.\n\n(Model-invoked: no command. Once installed, Claude applies this automatically when your task matches the description above.)\nSKILL"
  },
  {
    "name": "ux-writing-rules",
    "group": "model",
    "desc": "Apply these UX-writing rules whenever drafting or reviewing interface copy \u2014 labels, buttons, tooltips, toasts, errors, empty states.",
    "purpose": "Interface copy follows one consistent voice without being asked.",
    "when": "Auto-applies whenever you write or review UI copy.",
    "usage": "Ask for a confirmation toast and it names the object instead of saying 'Saved successfully'.",
    "returns": "Copy that reads fast, works out of context, and stays consistent across the product.",
    "tags": [
      "ux writing",
      "voice",
      "microcopy"
    ],
    "install": "mkdir -p ~/.claude/skills/ux-writing-rules\ncat > ~/.claude/skills/ux-writing-rules/SKILL.md <<'SKILL'\n---\nname: ux-writing-rules\ndescription: Apply these UX-writing rules whenever drafting or reviewing interface copy \u2014 labels, buttons, tooltips, toasts, errors, empty states.\n---\n\nWhen writing or reviewing interface copy, apply consistently:\n- Buttons are verbs; labels are nouns; sentence case; no terminal period on labels/buttons/toasts\n- An action keeps its name through the whole flow (Publish \u2192 Published)\n- Drop \"successfully\" \u2014 success is the default assumption\n- Confirmations name the object (\"Plan updated\", not \"Saved successfully\")\n- Errors state what happened and the next step, in the product's voice, never blaming the user\n- Empty states instruct and invite action; they don't apologise\n- Name things by what the user controls, never by how the system is built\n- Tooltips under six words\n\n(Model-invoked: no command. Once installed, Claude applies this automatically when your task matches the description above.)\nSKILL"
  },
  {
    "name": "naming-conventions",
    "group": "model",
    "desc": "Apply this naming convention whenever creating or auditing component, variant or layer names in design files.",
    "purpose": "Names stay consistent and meaningful across every file automatically.",
    "when": "Auto-applies whenever names are created or audited.",
    "usage": "Create a component and it's named Category/Component Name with purposeful layers, not 'Frame 12'.",
    "returns": "Findable, self-describing structure that survives being read by someone else.",
    "tags": [
      "naming",
      "convention",
      "design systems"
    ],
    "install": "mkdir -p ~/.claude/skills/naming-conventions\ncat > ~/.claude/skills/naming-conventions/SKILL.md <<'SKILL'\n---\nname: naming-conventions\ndescription: Apply this naming convention whenever creating or auditing component, variant or layer names in design files.\n---\n\nWhen creating or auditing names in design work, apply:\n- Components: Category/Component Name in Title Case\n- Variant properties: Title Case nouns (State, Size, Has Icon)\n- Variant values: describe state, not appearance (Disabled, not Grey BG)\n- Booleans: Has\u2026 / Show\u2026\n- Layers: named by purpose (Alarm label), never \"Frame 427\" or \"Rectangle 3\"\n- Tokens/styles: tier/category/role/modifier, lowercase-hyphenated\nAppearance-based names break the moment the design changes; always name by purpose.\n\n(Model-invoked: no command. Once installed, Claude applies this automatically when your task matches the description above.)\nSKILL"
  },
  {
    "name": "states-checklist",
    "group": "model",
    "desc": "Whenever designing a screen or component, ensure every state is considered \u2014 default, loading, empty, emptied, error, overflow, permission.",
    "purpose": "No screen ships as only its happy path.",
    "when": "Auto-applies whenever you design a screen or component.",
    "usage": "Design any list and it prompts for empty, emptied, loading, error, and overflow before calling it done.",
    "returns": "Complete designs where edge states were considered from the start.",
    "tags": [
      "states",
      "edge cases",
      "completeness"
    ],
    "install": "mkdir -p ~/.claude/skills/states-checklist\ncat > ~/.claude/skills/states-checklist/SKILL.md <<'SKILL'\n---\nname: states-checklist\ndescription: Whenever designing a screen or component, ensure every state is considered \u2014 default, loading, empty, emptied, error, overflow, permission.\n---\n\nWhen designing any screen or component, do not treat the default state as\nfinished until these are considered:\n- Default, and loading (first load + refresh with stale data)\n- Empty (never used) AND emptied (user removed the last item) \u2014 different copy\n- Error: request failed, and validation failed\n- Overflow: long text, many items, small viewport\n- Permission: user can't perform the action\nIf any is genuinely not applicable, say so explicitly rather than skipping it silently.\n\n(Model-invoked: no command. Once installed, Claude applies this automatically when your task matches the description above.)\nSKILL"
  }
];
