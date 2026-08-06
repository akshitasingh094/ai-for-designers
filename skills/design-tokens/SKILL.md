---
name: design-tokens
description: Whenever a hardcoded colour, spacing, radius or type value appears in design work, map it to the token system instead of leaving raw values.
---

When design work contains raw values, treat them as tokens-in-waiting:
- Map to an existing token where one is within tolerance
- Use a three-tier model: primitive (grey-900) → semantic (surface-card, text-secondary)
  → component (row-bg-hover). Never bind a component directly to a primitive.
- A value used once and unlikely to recur may stay raw — say so rather than over-tokenising
- Every semantic token must resolve in both light and dark; flag any that can't
Prefer durable token names over one-off values whenever the value could recur.

(Model-invoked: no command. Once installed, Claude applies this automatically when your task matches the description above.)
