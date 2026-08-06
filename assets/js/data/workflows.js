/* ============================================================================
   WORKFLOWS — end-to-end recipes. Each is a whole design job broken into
   ordered steps, every step tagged by rung (context / prompt / skill /
   subagent) and linked to the real library item it uses.
   Edit here to add a workflow; the page rebuilds itself.

   step.rung: 'context' | 'prompt' | 'skill' | 'subagent'
   step.ref:  { page, id, name }  — deep-links to that item's card
   ========================================================================== */

window.WORKFLOWS = [
{
  id:"ship-a-screen",
  title:"Ship a new screen",
  goal:"Take a screen from a blank idea to build-ready — every state covered, accessible, packaged.",
  when:"You've been handed a new screen to design and want a repeatable path through it.",
  tags:["ui","end-to-end","handoff"],
  steps:[
    {rung:"context", label:"Set your standing context", detail:"So every step below inherits your product, tokens and rules.", ref:{page:"prompting.html", id:"meta-claude-md", name:"Write a CLAUDE.md"}},
    {rung:"prompt", label:"Explore layout options", detail:"Widen the option space before committing to one direction.", ref:{page:"prompting.html", id:"ui-layout-options", name:"Layout options with rationale"}},
    {rung:"skill", label:"Spec the interaction", detail:"Turn the chosen behaviour into a state table and variant matrix.", ref:{page:"skills.html", id:"spec-interaction", name:"/spec-interaction"}},
    {rung:"subagent", label:"Hunt the edge cases", detail:"Delegate the full empty/error/overflow sweep so it doesn't clutter your thread.", ref:{page:"subagents.html", id:"edge-case-hunter", name:"edge-case-hunter"}},
    {rung:"skill", label:"Sharpen the copy", detail:"Labels, buttons, toasts and empty states in one consistent voice.", ref:{page:"skills.html", id:"copy-review", name:"/copy-review"}},
    {rung:"subagent", label:"Run an accessibility sweep", detail:"Hand the finished screen to a specialist for a WCAG audit.", ref:{page:"subagents.html", id:"a11y-reviewer", name:"a11y-reviewer"}},
    {rung:"skill", label:"Package for engineering", detail:"Behaviour, props, a11y, acceptance criteria — nothing left implicit.", ref:{page:"skills.html", id:"handoff", name:"/handoff"}}
  ],
  outcome:"A specced, accessible, copy-checked screen with a handoff a developer can build from unaided."
},
{
  id:"redesign-a-flow",
  title:"Redesign a flow that isn't working",
  goal:"Improve an underperforming flow with a clear read of what's broken and a plan to fix it.",
  when:"A multi-screen flow feels clunky or drops people, and you're about to rework it.",
  tags:["flow","redesign","ia"],
  steps:[
    {rung:"skill", label:"Map the current flow", detail:"Entry points, branches, exits — and the step most likely to lose people.", ref:{page:"skills.html", id:"flow-map", name:"/flow-map"}},
    {rung:"skill", label:"Critique what exists", detail:"An honest heuristic read of the current screens before you change them.", ref:{page:"skills.html", id:"design-critique", name:"/design-critique"}},
    {rung:"prompt", label:"Compare structural options", detail:"Three genuinely different directions for the new flow, with tradeoffs.", ref:{page:"prompting.html", id:"ia-nav-options", name:"Compare navigation models"}},
    {rung:"skill", label:"Spec the new interaction", detail:"Structure the redesigned behaviour into states and variants.", ref:{page:"skills.html", id:"spec-interaction", name:"/spec-interaction"}},
    {rung:"subagent", label:"Check the edge cases", detail:"Make sure the redesign covers the states the old one missed.", ref:{page:"subagents.html", id:"edge-case-hunter", name:"edge-case-hunter"}},
    {rung:"skill", label:"Package for engineering", detail:"Hand the reworked flow over cleanly.", ref:{page:"skills.html", id:"handoff", name:"/handoff"}}
  ],
  outcome:"A redesigned flow grounded in a diagnosis, with the fix specced and ready to build."
},
{
  id:"accessibility-pass",
  title:"Do an accessibility pass on a feature",
  goal:"Bring an existing feature up to WCAG 2.2 AA and document the semantics for the build.",
  when:"A feature shipped without an a11y review, or an audit flagged issues.",
  tags:["accessibility","audit","quality"],
  steps:[
    {rung:"context", label:"Turn on the floor", detail:"Install the standing rule so AA is applied to everything, unprompted.", ref:{page:"skills.html", id:"accessibility-standards", name:"accessibility-standards"}},
    {rung:"subagent", label:"Run the full audit", detail:"Contrast, keyboard, focus, targets, motion — blockers first.", ref:{page:"subagents.html", id:"a11y-reviewer", name:"a11y-reviewer"}},
    {rung:"prompt", label:"Define the keyboard model", detail:"Tab order and every key's behaviour, for the fixes.", ref:{page:"prompting.html", id:"a11y-keyboard", name:"Map keyboard interaction"}},
    {rung:"prompt", label:"Spec screen-reader announcements", detail:"What gets announced when things change, for handoff.", ref:{page:"prompting.html", id:"a11y-announcements", name:"Spec announcements"}},
    {rung:"skill", label:"Re-check after fixes", detail:"Confirm the blockers are gone before you call it done.", ref:{page:"skills.html", id:"a11y-check", name:"/a11y-check"}}
  ],
  outcome:"A feature that passes AA, with the keyboard model and announcements documented for engineering."
},
{
  id:"research-to-decisions",
  title:"Run a research round → decisions",
  goal:"Go from a research question to synthesised themes and decision-ready findings.",
  when:"You're planning a study and want a path from setup through to what to do about the results.",
  tags:["research","synthesis","discovery"],
  steps:[
    {rung:"prompt", label:"Draft the test plan", detail:"Research questions, tasks as scenarios, success criteria.", ref:{page:"prompting.html", id:"research-test-plan", name:"Draft a usability test plan"}},
    {rung:"prompt", label:"Write the screener", detail:"Recruit the right people without leading them.", ref:{page:"prompting.html", id:"research-screener", name:"Write a recruitment screener"}},
    {rung:"subagent", label:"Synthesise the notes", detail:"Delegate the pile of notes; get named themes with evidence back.", ref:{page:"subagents.html", id:"research-synthesizer", name:"research-synthesizer"}},
    {rung:"prompt", label:"Derive the decisions", detail:"Turn themes into the questions that de-risk what to build next.", ref:{page:"prompting.html", id:"research-questions", name:"Derive research questions"}}
  ],
  outcome:"Themes backed by evidence, and a short list of decision-ready findings — not a wall of notes."
},
{
  id:"stakeholder-review",
  title:"Prepare a stakeholder review",
  goal:"Turn finished design work into a narrative that gets a decision approved.",
  when:"You're presenting design work upward and need buy-in, not just admiration.",
  tags:["presentation","stakeholders","buy-in"],
  steps:[
    {rung:"skill", label:"Critique it first", detail:"Catch the weak spots before anyone senior does.", ref:{page:"skills.html", id:"design-critique", name:"/design-critique"}},
    {rung:"prompt", label:"Frame the impact", detail:"State the change in terms the audience actually cares about.", ref:{page:"prompting.html", id:"pres-impact", name:"Frame before/after impact"}},
    {rung:"skill", label:"Build the narrative", detail:"A slide-by-slide story with claim-headlines and the hard questions pre-answered.", ref:{page:"skills.html", id:"deck", name:"/deck"}},
    {rung:"prompt", label:"Triage the feedback", detail:"After the room reacts, sort responses into act / discuss / decline.", ref:{page:"prompting.html", id:"pres-critique-response", name:"Triage stakeholder feedback"}}
  ],
  outcome:"A review that lands as a decision, with the follow-up feedback already sorted."
},
{
  id:"ticket-to-plan",
  title:"Turn a ticket into a design plan",
  goal:"Convert a vague ask or PRD into a scoped plan with the gaps resolved before you design.",
  when:"A requirement lands and you want to start designing from clarity, not guesswork.",
  tags:["planning","scoping","meta"],
  steps:[
    {rung:"prompt", label:"Structure the ask", detail:"Reshape the fuzzy request into a clear, complete prompt — and expose what's missing.", ref:{page:"prompting.html", id:"meta-structure", name:"Structure a vague ask"}},
    {rung:"prompt", label:"Get grilled", detail:"Be interviewed until every branch — scope, states, 'done' — is resolved.", ref:{page:"prompting.html", id:"meta-grill", name:"Grill me before I build"}},
    {rung:"prompt", label:"Enumerate the states", detail:"List every state the screens will need, up front.", ref:{page:"prompting.html", id:"ui-states", name:"Enumerate every screen state"}},
    {rung:"skill", label:"Spec the interaction", detail:"Now that it's clear, structure it into states and variants.", ref:{page:"skills.html", id:"spec-interaction", name:"/spec-interaction"}}
  ],
  outcome:"A scoped plan with the open questions answered — you start designing from clarity."
}
];
