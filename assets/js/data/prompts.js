/* ============================================================================
   PROMPTS — content as data. This is the file you edit to grow the library.
   To add a prompt: copy one object, change the fields, done. The page and its
   search/filter rebuild themselves from this array.

   Fields:
     id        unique slug (used for deep-links)
     cat       category id (must match a PROMPT_CATEGORIES id)
     title     short imperative name
     desc      one line — what it produces
     when      when to reach for it
     tags      array of lowercase keywords for search
     prompt    the copy-ready text (what the Copy button copies)
     example   optional — a filled-in Acme example, shown collapsed
   ========================================================================== */

window.PROMPT_CATEGORIES = [
  {id:'research',      name:'UX Research',              blurb:'Turn raw input — notes, transcripts, goals — into structured insight.'},
  {id:'ia',           name:'Information Architecture', blurb:'Give content and navigation a structure people can hold in their head.'},
  {id:'ui',           name:'UI Design',                blurb:'Take a screen from idea to complete, considered, every-state-covered.'},
  {id:'interaction',  name:'Interaction & Motion',     blurb:'Specify behaviour and movement so a build feels intentional, not accidental.'},
  {id:'design-systems',name:'Design Systems',          blurb:'Make components reusable, tokenised, named, and safe to publish.'},
  {id:'a11y',         name:'Accessibility',            blurb:'Hold work to WCAG before review and before handoff — not after a complaint.'},
  {id:'ux-writing',   name:'UX Writing',               blurb:'Words as design material: labels, errors, empty states, onboarding.'},
  {id:'handoff',      name:'Developer Handoff',        blurb:'Hand work over so a developer can build it without asking you a thing.'},
  {id:'presentations',name:'Presentations',            blurb:'Turn design decisions into a story stakeholders can follow and approve.'},
  {id:'meta',         name:'Prompting & Meta',         blurb:'Work with Claude Code better: structure asks, spot automation, build tools.'}
];

window.PROMPTS = [

/* ---------- UX Research ---------- */
{
  id:'research-synthesis', cat:'research',
  title:'Synthesise research notes into themes',
  desc:'Cluster messy notes into named themes with supporting evidence.',
  when:'You finished interviews or a study and have a pile of notes to make sense of.',
  tags:['research','synthesis','themes','interviews','affinity'],
  prompt:`You are a UX researcher. Below are my raw notes from [N] sessions.

Produce:
1. 4–7 named themes, each a short claim (not a topic)
2. Under each theme, the supporting observations, quoted briefly
3. The 3 themes with the strongest evidence, flagged
4. Contradictions or outliers worth noting
5. The single most decision-relevant finding

Do not invent observations that aren't in the notes.

Notes:
[paste your notes]`,
  example:`For Acme's onboarding study: themes came back as "Users skip the tour to reach an empty workspace", "Trust hinges on the first import working", etc. — each with the exact quotes that supported it.`
},
{
  id:'research-test-plan', cat:'research',
  title:'Draft a usability test plan',
  desc:'A complete, runnable moderated-test plan from a goal.',
  when:'You need to validate a flow and want a structured plan fast.',
  tags:['usability','test plan','moderation','tasks','research'],
  prompt:`You are a UX researcher. I need a moderated usability test plan.

Context: [product, flow, what you're worried about]
Participants: [who, how many]

Produce:
1. Research questions (what we need to learn)
2. 4–6 realistic tasks written as scenarios, not instructions
3. What "success" looks like for each task
4. Follow-up probes per task
5. What NOT to prompt on, to avoid biasing
6. A pre- and post-test question set

Keep tasks free of UI vocabulary that gives away the answer.`,
  example:`For Acme Checkout: tasks like "You've added a plan and want to switch to annual billing before paying" — with success defined as reaching confirmation without asking the moderator.`
},
{
  id:'research-screener', cat:'research',
  title:'Write a recruitment screener',
  desc:'A screener survey that filters for the right participants.',
  when:'Recruiting for a study and you need to reach the right people without leading them.',
  tags:['screener','recruitment','survey','research'],
  prompt:`You are a UX researcher writing a recruitment screener.

Target participant: [describe]
Study: [what it's for]

Produce a screener that:
1. Qualifies people who match, disqualifies who don't
2. Hides which answers pass (no leading questions)
3. Includes 1–2 "trap" questions to catch inattentive responses
4. Captures the mix I need (roles, experience, tooling)
5. Ends with availability + incentive confirmation

Flag any question that could bias who self-selects in.`
},
{
  id:'research-transcript', cat:'research',
  title:'Turn a transcript into an affinity map',
  desc:'Extract atomic observations and group them, ready for a board.',
  when:'You have a transcript and want board-ready sticky notes, not a wall of text.',
  tags:['transcript','affinity','coding','research'],
  prompt:`You are a UX researcher. From the transcript below, extract
individual observations — one idea per line, in the participant's
own framing, no interpretation yet.

Then group them into candidate clusters and name each cluster.

Format each observation so I could put it on a sticky note.
Mark anything that's a direct pain point with [PAIN] and any
feature request with [ASK].

Transcript:
[paste]`
},
{
  id:'research-questions', cat:'research',
  title:'Derive research questions from a product goal',
  desc:'Convert a fuzzy business goal into answerable research questions.',
  when:'Someone hands you a goal ("increase activation") and you need to make it researchable.',
  tags:['research questions','goals','discovery','research'],
  prompt:`You are a UX research lead. Turn this goal into research questions.

Goal: [paste the business/product goal]

Produce:
1. The assumptions hidden inside this goal
2. 5–8 research questions that would test those assumptions
3. For each, the method best suited to answer it
4. Which questions are answerable with existing data vs need new research
5. The one question that, if answered, de-risks the most`
},

/* ---------- Information Architecture ---------- */
{
  id:'ia-cardsort', cat:'ia',
  title:'Analyse a card sort',
  desc:'Turn card-sort results into a proposed structure with confidence.',
  when:'You ran an open or closed card sort and need a structure out of it.',
  tags:['card sort','ia','structure','grouping'],
  prompt:`You are an information architect. Below are card-sort results.

Produce:
1. The groupings that emerged, with how consistently people agreed
2. A proposed category structure with labels
3. Cards that were "homeless" or split — and where you'd place them
4. Labels that caused confusion, with alternatives
5. Your confidence level per category, and what to validate next

Results:
[paste groupings or agreement matrix]`
},
{
  id:'ia-sitemap', cat:'ia',
  title:'Draft a sitemap from a feature list',
  desc:'A hierarchical sitemap with rationale for the grouping.',
  when:'You have a list of features/screens and need to organise them.',
  tags:['sitemap','hierarchy','navigation','ia'],
  prompt:`You are an information architect. Turn this feature list into a sitemap.

Features/screens: [paste]
Primary user + their top tasks: [describe]

Produce:
1. A hierarchical sitemap (render as an indented tree)
2. The principle behind the top-level grouping
3. Where you deliberately went shallow vs deep, and why
4. Anything that doesn't fit cleanly, flagged as an open question
5. What belongs in global nav vs contextual vs settings`,
  example:`Acme's console: grouped around "what you monitor / who has access / how you're billed" rather than by internal team ownership.`
},
{
  id:'ia-nav-options', cat:'ia',
  title:'Compare navigation models',
  desc:'Three navigation approaches with honest tradeoffs and a pick.',
  when:'Deciding between sidebar, top nav, hub-and-spoke, etc.',
  tags:['navigation','patterns','tradeoffs','ia'],
  prompt:`You are an information architect. For this product, compare navigation models.

Product: [describe scale — number of sections, depth, user type]

Produce:
1. Three genuinely different navigation models that could work
2. A comparison across: scalability, discoverability, screen real-estate,
   mobile behaviour, and how they age as the product grows
3. A recommendation, with the strongest argument against it
4. What would have to be true for the runner-up to win instead`
},
{
  id:'ia-content-audit', cat:'ia',
  title:'Content inventory audit',
  desc:'Structure a content audit and surface what to cut, keep, merge.',
  when:'A section has grown messy and you need to rationalise it.',
  tags:['content','audit','inventory','ia'],
  prompt:`You are a content strategist. I'll paste an inventory of pages/sections.

For each, assess: is it still needed, is it duplicated elsewhere, is it
findable, and does its label match its content?

Then recommend: keep / merge / cut / relabel — with reasoning.
End with the 3 changes that most reduce clutter.

Inventory:
[paste]`
},

/* ---------- UI Design ---------- */
{
  id:'ui-states', cat:'ui',
  title:'Enumerate every screen state',
  desc:'The full set of states a screen needs — including the ones you forget.',
  when:'Before building a screen, so empty/error/loading aren\'t afterthoughts.',
  tags:['states','empty','error','loading','edge cases','ui'],
  prompt:`You are a product designer. For the screen below, enumerate every state
it needs, including the ones commonly forgotten.

Screen: [describe]

Cover: default, loading (first load + refresh), empty (nothing yet) AND
emptied (user removed the last item), error (request failed + validation),
partial data, overflow (long text / many items), and no-permission.

For each: when it occurs, what the user sees, and what they can do next.
Then flag the 3 most likely to occur in production.`,
  example:`Acme's user table: "emptied" (admin removed the last teammate) needed different copy and a clear re-invite action — easy to miss if you only design the happy path.`
},
{
  id:'ui-layout-options', cat:'ui',
  title:'Generate layout options with rationale',
  desc:'Three layout directions for a screen, each justified.',
  when:'Early on a screen, when you want to widen the option space before committing.',
  tags:['layout','options','hierarchy','ui'],
  prompt:`You are a product designer. Propose three layout directions for this screen.

Screen + its single most important job: [describe]
Key content blocks: [list]

For each direction:
1. A one-line description + an ASCII wireframe
2. What it prioritises and what it trades off
3. Who it suits (first-time user vs power user)

Then recommend one for the stated primary job, and say what would change
your recommendation.`
},
{
  id:'ui-hierarchy-critique', cat:'ui',
  title:'Critique visual hierarchy',
  desc:'A squint-test read of what the eye catches first, second, third.',
  when:'A screen feels busy or "off" and you can\'t name why.',
  tags:['hierarchy','critique','visual','ui'],
  prompt:`You are a staff product designer. Critique the visual hierarchy of this screen.
Be direct — praise costs the critique its value.

[describe or attach the screen]

1. Squint test: what draws the eye first, second, third?
2. Does that order match what the user most needs? If not, what's competing?
3. What's louder than it deserves to be, and what's too quiet?
4. The 3 changes that most improve scan-ability, ranked, each with the principle behind it`
},
{
  id:'ui-component-breakdown', cat:'ui',
  title:'Break a screen into components',
  desc:'Decompose a screen into a reusable component tree.',
  when:'Moving from a mockup to a systematic, buildable structure.',
  tags:['components','decomposition','structure','ui'],
  prompt:`You are a design systems-minded product designer. Break this screen into
a component hierarchy.

[describe or attach the screen]

Produce:
1. A component tree (what contains what)
2. Which pieces are reusable vs one-off
3. For each reusable component, the props/variants it needs
4. What already likely exists in a design system vs what's genuinely new
5. Naming for each, as Category/Component Name`
},
{
  id:'ui-responsive', cat:'ui',
  title:'Specify responsive behaviour',
  desc:'How a layout reflows across breakpoints, stated explicitly.',
  when:'Handing off or building a layout that must work on multiple sizes.',
  tags:['responsive','breakpoints','reflow','mobile','ui'],
  prompt:`You are a product designer. Specify the responsive behaviour of this layout.

Layout + its blocks: [describe]
Breakpoints: [list, or ask me]

For each breakpoint, state: what stacks, what hides, what resizes, what moves,
and what the touch targets become. Flag any element that has no good small-screen
answer as an open question rather than forcing it.`
},

/* ---------- Interaction & Motion ---------- */
{
  id:'int-spec', cat:'interaction',
  title:'Spec an interaction',
  desc:'A described behaviour turned into a state table + variant matrix + open questions.',
  when:'You can describe what should happen but need it structured before building.',
  tags:['interaction','states','variants','spec'],
  prompt:`You are a staff product designer. Turn the interaction below into a spec.

Produce ONLY:
1. State table — state → trigger → visual change → duration/easing
2. Variant matrix — component → property → values
3. Assumptions you had to make (be blunt)
4. Open questions blocking the build, ranked — always check: keyboard/touch path,
   error state, empty state, undo, whether a counter elsewhere goes stale, scope

Do not start building. Stop and wait.

Interaction: [describe as observable steps]`,
  example:`Acme table row: hover reveals a "remove" action → click → row confirms then collapses. The spec surfaced that there was no keyboard path and no undo — before anything was built.`
},
{
  id:'int-prototype-wire', cat:'interaction',
  title:'Wire a prototype (triggers + timing)',
  desc:'A full trigger/animation/timing table with QA checks.',
  when:'States exist and now they need connecting, with defensible timings.',
  tags:['prototype','wiring','timing','motion','interaction'],
  prompt:`You are a motion/interaction designer. Wire these states into a prototype.

States: [list them exactly as named]

Produce:
1. Wiring table — from → trigger → to → animation → easing → duration
2. Timing rationale (anchor to: <100ms feels instant, <400ms keeps flow,
   >500ms feels sluggish in a demo)
3. Which layers must share names for Smart Animate to interpolate
4. A playback QA checklist (double reflows, hijacked hovers, wrong-origin motion)
5. The reduced-motion fallback`
},
{
  id:'int-microinteraction', cat:'interaction',
  title:'Design a microinteraction',
  desc:'The full trigger→rules→feedback→loops breakdown for a small moment.',
  when:'Designing a single moment — a toggle, a like, a save — with intent.',
  tags:['microinteraction','feedback','detail','interaction'],
  prompt:`You are an interaction designer. Design this microinteraction in full.

Moment: [describe — e.g. saving a filter view]

Break it down:
1. Trigger — what starts it
2. Rules — what happens and in what order
3. Feedback — how the system acknowledges, at each step
4. Loops & modes — repeated use, edge conditions, what persists
5. The failure case — what if it doesn't work
Name the UX principle behind each feedback choice.`
},
{
  id:'int-motion-timing', cat:'interaction',
  title:'Justify motion timing',
  desc:'Durations and easings for a set of transitions, with reasoning.',
  when:'Motion feels too fast, too slow, or arbitrary and you want a defensible system.',
  tags:['motion','easing','duration','interaction'],
  prompt:`You are a motion designer. For the transitions below, propose a timing system.

Transitions: [list — e.g. modal open, toast in/out, row collapse]

For each: duration, easing curve, and the reason. Group them into a small
set of reusable motion tokens (e.g. "quick" / "standard" / "expressive")
rather than a bespoke value each. State which transitions should be
instant, and which earn a slower, expressive treatment — and why.`
},

/* ---------- Design Systems ---------- */
{
  id:'ds-token-map', cat:'design-systems',
  title:'Map hardcoded values to tokens',
  desc:'Convert raw values to existing tokens; propose names for the genuinely new.',
  when:'Cleaning a file before it goes into a shared library.',
  tags:['tokens','variables','theming','design systems'],
  prompt:`You are a design systems lead. Map the hardcoded values below to tokens.

[paste values, or describe the frame]

Produce:
1. Mapping table — value → existing token to use → confidence
2. Proposed new tokens in three tiers (primitive → semantic → component),
   never binding a component straight to a primitive
3. Values that should NOT be tokenised (one-offs), with reasoning
4. Light + dark value for each proposed semantic token; flag any that can't resolve in both`
},
{
  id:'ds-component-api', cat:'design-systems',
  title:'Design a component API',
  desc:'The props/variants interface for a component, engineered for reuse.',
  when:'Before building a component, to get its interface right the first time.',
  tags:['component api','props','variants','design systems'],
  prompt:`You are a design systems lead. Design the API for this component.

Component: [name + what it does]
Where it'll be used: [contexts]

Produce:
1. Variants (discrete states) vs properties (boolean/text/instance-swap) — and why each is which
2. The full prop list with defaults, as a developer would type it
3. What's deliberately NOT configurable, to prevent misuse
4. One context you didn't design for — and whether the API survives it`
},
{
  id:'ds-variant-matrix', cat:'design-systems',
  title:'Design a variant matrix',
  desc:'The complete, non-exploding variant set for a component.',
  when:'A component needs multiple states/sizes and you want to avoid variant explosion.',
  tags:['variants','matrix','design systems'],
  prompt:`You are a design systems lead. Produce the variant matrix for this component.

Component + the states/sizes/options it needs: [describe]

1. Table: property → values, marking which are variants vs properties
2. Flag any combination that shouldn't exist (invalid states)
3. Identify variant explosion risk and how to collapse it into properties
4. The minimum set that covers real use without bloat`
},
{
  id:'ds-naming', cat:'design-systems',
  title:'Enforce a naming convention',
  desc:'Audit and fix component/variant/layer names, with a safe rename order.',
  when:'Before publishing, when names are inconsistent or leak implementation.',
  tags:['naming','convention','layers','design systems'],
  prompt:`You are a design systems lead. Audit naming for the component/frame below.

Convention (unless I say otherwise): Category/Component Name; Title Case variant
values that describe state not appearance; Has… for booleans; layers named by
purpose not "Frame 427".

Output: current name → problem → proposed name. Then an ordered rename list
I can run top-to-bottom without breaking instances (published renames last, flagged).

[describe or paste names]`
},
{
  id:'ds-contribution', cat:'design-systems',
  title:'Write a component doc template',
  desc:'A reusable documentation template for design-system components.',
  when:'Standardising how your system documents each component.',
  tags:['documentation','template','governance','design systems'],
  prompt:`You are a design systems lead. Produce a documentation template for our
component library — the fields every component's page must fill.

Cover: purpose, anatomy, when to use / when not to, variants & props,
content guidelines, accessibility notes, do/don't examples, and change log.
Keep it lean enough that contributors actually fill it in. Explain in one line
why each field earns its place.`
},

/* ---------- Accessibility ---------- */
{
  id:'a11y-audit', cat:'a11y',
  title:'Run a WCAG 2.2 AA audit',
  desc:'A criterion-by-criterion audit with blockers separated from improvements.',
  when:'Before design review and before handoff.',
  tags:['wcag','audit','contrast','keyboard','a11y'],
  prompt:`You are an accessibility specialist. Audit this design against WCAG 2.2 AA.

[describe the screen/flow + its usage context, incl. device]

Report as: criterion → SC ref → pass/fail/risk → what to change.
Check: contrast (every state, incl. disabled, on its real background), full
keyboard path with tab order, visible focus, target size (24px min),
motion/timing (auto-dismissing toasts), colour-alone signalling, and the
semantics a developer must implement.

End by separating BLOCKERS from improvements.`,
  example:`Acme's hover-to-reveal row action failed on "keyboard operable" and "target size" for field users on tablets — flagged as a blocker, not a nice-to-have.`
},
{
  id:'a11y-keyboard', cat:'a11y',
  title:'Map keyboard interaction',
  desc:'The complete keyboard model for a component or flow.',
  when:'Designing or handing off anything interactive.',
  tags:['keyboard','focus','tab order','a11y'],
  prompt:`You are an accessibility specialist. Define the keyboard interaction model
for this component/flow.

[describe]

Produce:
1. Tab order (what's focusable, in what sequence)
2. What each key does: Tab, Shift+Tab, Enter, Space, Esc, arrows, Home/End
3. Focus management — where focus goes on open, close, and when an element
   is removed from the DOM
4. Anything currently reachable only by pointer, flagged as a gap`
},
{
  id:'a11y-announcements', cat:'a11y',
  title:'Spec screen-reader announcements',
  desc:'What gets announced, when, and how — for dynamic changes.',
  when:'Any UI where things change without a page load (toasts, live updates, removal).',
  tags:['screen reader','aria','live region','a11y'],
  prompt:`You are an accessibility specialist. Specify screen-reader behaviour for
the dynamic changes in this UI.

[describe what changes and when]

For each change: what should be announced, its politeness (polite/assertive),
the role/name involved, and what would go wrong if it's silent. Include the
handoff note a developer needs (e.g. aria-live region placement).`
},
{
  id:'a11y-contrast', cat:'a11y',
  title:'Check contrast & colour-alone',
  desc:'Verify contrast across states and catch meaning carried only by colour.',
  when:'Finalising a palette or a component\'s states.',
  tags:['contrast','colour','wcag','a11y'],
  prompt:`You are an accessibility specialist. Review colour use in this design.

[paste the colours/states, or describe]

1. Contrast ratio for each text and UI element, on its actual background,
   in every state including disabled — pass/fail against AA
2. Anything where status is carried by colour alone (e.g. a green tick),
   and what secondary cue to add
3. The fixes, ordered by severity`
},

/* ---------- UX Writing ---------- */
{
  id:'ux-microcopy', cat:'ux-writing',
  title:'Microcopy pass',
  desc:'Rewrite labels, buttons, tooltips and toasts to be clear and consistent.',
  when:'Any screen whose words could be sharper or more consistent.',
  tags:['microcopy','labels','buttons','toasts','ux writing'],
  prompt:`You are a UX writer. Improve the strings below.

For each: current → issue → rewrite → why.
Rules: buttons are verbs, labels are nouns; sentence case; no terminal period
on labels/buttons/toasts; an action keeps its name through the flow (a "Publish"
button yields a "Published" toast); drop "successfully" (success is assumed);
confirmations name the object ("Plan updated", not "Saved successfully").

Strings:
[paste]`,
  example:`Acme: "Added successfully" → "Teammate invited"; "add to exclusion" → "Mute alert". Each survives being read out of context.`
},
{
  id:'ux-errors', cat:'ux-writing',
  title:'Rewrite error messages',
  desc:'Errors that say what happened and what to do — without blaming the user.',
  when:'Your errors are vague, technical, or apologetic.',
  tags:['errors','messaging','recovery','ux writing'],
  prompt:`You are a UX writer. Rewrite these error messages.

For each: what happened (plainly), why if it helps, and the next action.
Never blame the user, never just apologise, never expose system internals.
Keep the product's voice, not a person's.

Errors:
[paste]`
},
{
  id:'ux-empty', cat:'ux-writing',
  title:'Write empty-state copy',
  desc:'Empty states that instruct and invite action, not apologise.',
  when:'A screen can be empty — first-run or after the user clears it.',
  tags:['empty state','onboarding','ux writing'],
  prompt:`You are a UX writer. Write copy for this empty state.

Screen + why it's empty (never used yet vs emptied by the user): [describe]

Distinguish the two cases if both apply. Each should have: a one-line
orientation, the single next action, and no apology. An empty screen is an
invitation to act — write it that way.`
},
{
  id:'ux-onboarding', cat:'ux-writing',
  title:'Draft onboarding & tooltip copy',
  desc:'Short, non-patronising guidance for first-run and hints.',
  when:'Introducing a feature without a wall of text.',
  tags:['onboarding','tooltips','hints','ux writing'],
  prompt:`You are a UX writer. Draft onboarding copy for this feature.

Feature + what the user must understand to succeed: [describe]

Produce: the shortest set of hints/tooltips that gets them to first success.
Tooltips under 6 words. Say what they can do, not how the system works.
Cut anything that teaches something they'll discover anyway.`
},
{
  id:'ux-localisation', cat:'ux-writing',
  title:'Localisation risk review',
  desc:'Flag strings that break when translated.',
  when:'Before shipping copy that will be localised.',
  tags:['localisation','i18n','translation','ux writing'],
  prompt:`You are a UX writer with localisation experience. Review these strings for
translation risk.

Flag: length growth (German/Finnish), concatenation that won't reorder,
pluralisation, embedded numbers/dates, idioms, and text baked into layout
that will overflow. For each risk, the safer construction.

Strings:
[paste]`
},

/* ---------- Developer Handoff ---------- */
{
  id:'handoff-spec', cat:'handoff',
  title:'Write a component handoff spec',
  desc:'A spec a developer can build from without asking questions.',
  when:'Handing a component to engineering.',
  tags:['handoff','spec','engineering','handoff'],
  prompt:`You are a staff product designer writing a developer handoff.

Component + who receives it: [describe]

Produce:
1. Anatomy with tokens
2. Behaviour spec — state → trigger → result → timing
3. Props/API with defaults, as a developer would type it
4. Accessibility: role, name, keyboard map, focus management (incl. where focus
   goes when an element is removed)
5. Edge cases: long text, zero/many items, slow network, failed request, rapid clicks
6. Acceptance criteria as a binary checklist
7. Open decisions still owned by product`
},
{
  id:'handoff-acceptance', cat:'handoff',
  title:'Write acceptance criteria',
  desc:'Binary, testable criteria a QA engineer can tick off.',
  when:'Defining "done" for a piece of work.',
  tags:['acceptance criteria','qa','done','handoff'],
  prompt:`You are a product designer. Write acceptance criteria for this work.

[describe the feature/component]

Each criterion must be observable and binary — no "feels smooth". Cover the
happy path, each edge case, keyboard/screen-reader behaviour, and error handling.
Format as a checklist. Flag any criterion that hides an unmade product decision.`
},
{
  id:'handoff-edge-cases', cat:'handoff',
  title:'Enumerate edge cases for handoff',
  desc:'The non-happy-path list engineering needs before they start.',
  when:'Right before handoff, to prevent "what happens if…" mid-build.',
  tags:['edge cases','handoff','robustness'],
  prompt:`You are a product designer. List the edge cases engineering needs for this feature.

[describe]

Cover: empty, emptied, loading (first + refresh), error (request + validation),
offline/stale, overflow (long/many/small screen), permission, and rapid or
concurrent actions. For each: what the user should see and be able to do.
Flag the 3 most likely in production.`
},
{
  id:'handoff-state-mapping', cat:'handoff',
  title:'Map API/data states to UI',
  desc:'Connect backend states to what the interface shows.',
  when:'A feature depends on data/permissions and the UI must reflect every case.',
  tags:['data','api','states','handoff'],
  prompt:`You are a product designer working closely with engineering. Map data states to UI.

Data/endpoints involved: [describe — loading, success, empty, error, partial,
permission-denied, rate-limited, etc.]

Produce a table: data state → what the UI shows → what the user can do.
Flag any data state the design currently has no answer for.`
},

/* ---------- Presentations ---------- */
{
  id:'pres-narrative', cat:'presentations',
  title:'Turn decisions into a stakeholder narrative',
  desc:'A slide-by-slide story for people who missed the working sessions.',
  when:'Presenting design work upward for buy-in.',
  tags:['presentation','narrative','stakeholders','deck'],
  prompt:`You are a staff product designer presenting to people who attended none of
the working sessions.

Work + audience + the decision you need from them: [describe]

Produce a slide-by-slide outline. Each slide: a headline that's a CLAIM (not a
topic), what's on it, and what you say aloud. Structure: the problem in their
language → today's workaround → the decision → why this not the alternatives
(name real ones) → the flow as a story about a person → what it doesn't do yet
→ the specific ask. Pre-answer the 3 hardest questions.`,
  example:`Acme: opened on "Admins spend 20 min a week chasing stale access" — a claim they could feel — not "Access management redesign".`
},
{
  id:'pres-rationale', cat:'presentations',
  title:'Write a design rationale doc',
  desc:'The "why this, not that" behind a decision, defensibly.',
  when:'A decision will be questioned and you want the reasoning on record.',
  tags:['rationale','decision','documentation','presentations'],
  prompt:`You are a staff product designer. Write the rationale for this decision.

Decision + the alternatives you considered: [describe]

Produce:
1. The problem and the constraints that shaped the choice
2. Options considered, each with its real tradeoff
3. Why the chosen option wins, and the strongest case against it
4. What would make us revisit this
Keep it honest — a rationale that dismisses alternatives cheaply convinces no one.`
},
{
  id:'pres-critique-response', cat:'presentations',
  title:'Triage stakeholder feedback',
  desc:'Sort a pile of feedback into act / discuss / decline, with reasons.',
  when:'You got scattered feedback and need to respond without thrashing.',
  tags:['feedback','critique','triage','presentations'],
  prompt:`You are a staff product designer. Triage this feedback.

[paste the feedback]

For each item: what's the underlying concern (not the literal request), and
your response — act on it / discuss it / decline it — with a one-line reason.
Separate feedback about the goal from feedback about the execution. Flag any
item that's actually an unmade product decision in disguise.`
},
{
  id:'pres-impact', cat:'presentations',
  title:'Frame before/after impact',
  desc:'Articulate the change and its value in terms a stakeholder cares about.',
  when:'Showing the value of a redesign or fix.',
  tags:['impact','before after','value','presentations'],
  prompt:`You are a product designer. Frame the impact of this change for a stakeholder.

Before + after + who it affects: [describe]

Produce: the user's experience before (the friction, concretely), after (the
relief), and the business consequence that follows. Give me the one sentence
I'd lead with, and what metric — if any — would show it worked. Avoid inventing
numbers; if there's no metric, say what qualitative signal to watch.`
},

/* ---------- Prompting & Meta ---------- */
{
  id:'meta-structure', cat:'meta',
  title:'Turn a vague ask into a structured prompt',
  desc:'Reshape a fuzzy request into the six-block prompt skeleton.',
  when:'You know what you want roughly but your prompt keeps under-delivering.',
  tags:['prompting','structure','skeleton','meta'],
  prompt:`Rewrite my request below into a structured prompt using these blocks:
CONTEXT (product, platform, design system, my role) · TASK (one sentence) ·
SPEC (numbered, observable) · CONSTRAINTS (tokens, a11y, reuse) ·
DELIVERABLE (named artifact) · STOP POINTS (where you wait for me).

Then tell me which blocks I left implicit that you had to guess — those are
the ones causing weak results.

My request:
[paste your rough ask]`
},
{
  id:'meta-automation', cat:'meta',
  title:'Spot automation candidates',
  desc:'Find the repeated work in your requests and turn it into a skill.',
  when:'Periodically, to notice what you keep re-typing.',
  tags:['automation','skills','patterns','meta'],
  prompt:`You are my workflow coach. Below are several prompts I've written recently.

Identify structural repetition — the same shape with different specifics.
For each pattern found 3+ times, propose a skill: a name, a one-line description,
the fixed skeleton, and what becomes $ARGUMENTS. Then give me the 5 steps to
turn the strongest one into a SKILL.md.

My recent prompts:
[paste 3–6 of them]`
},
{
  id:'meta-claude-md', cat:'meta',
  title:'Write a CLAUDE.md for a design project',
  desc:'Standing project context so you stop re-explaining every session.',
  when:'Starting work in a repo/project you\'ll return to often.',
  tags:['claude.md','context','setup','meta'],
  prompt:`Help me write a CLAUDE.md for my design project. Interview me one question
at a time to fill these sections, then output the finished file:

- Who I am and how I want you to work
- Product, platform, theme
- Design system: library, token naming, type/spacing/radius scales
- Non-negotiables (reuse tokens, WCAG AA, no hover-only, components not frames)
- Current project context

Start by asking me the first question.`
},
{
  id:'meta-draft-skill', cat:'meta',
  title:'Draft a skill from a repeated prompt',
  desc:'Convert a prompt you keep reusing into a proper SKILL.md.',
  when:'You\'ve found a prompt worth saving and want it filed correctly.',
  tags:['skills','skill.md','authoring','meta'],
  prompt:`Turn the prompt below into a Claude Code skill.

Produce a complete SKILL.md: frontmatter (name, description written as a trigger
for when to use it), a role line, the output structure as numbered sections,
house rules (reuse tokens, WCAG AA, no hover-only, name the principle), a STOP
POINT, and $ARGUMENTS at the end for the part that changes. Tell me the exact
path to save it at.

Prompt to convert:
[paste]`
},
{
  id:'meta-grill', cat:'meta',
  title:'Grill me before I build',
  desc:'Get interviewed until every decision in a plan is resolved.',
  when:'Before starting something non-trivial, to surface gaps early.',
  tags:['alignment','interview','planning','meta'],
  prompt:`You are a staff product designer. Before I start building [describe the thing],
interview me. Ask one sharp question at a time, wait for my answer, then ask the
next — pushing on every branch I've left unresolved: scope, states, edge cases,
who it's for, what "done" means, what I'm NOT doing.

Keep going until you can restate the whole plan back to me with no open questions.
Then stop and give me that summary.`
}

];
