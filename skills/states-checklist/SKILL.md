---
name: states-checklist
description: Whenever designing a screen or component, ensure every state is considered — default, loading, empty, emptied, error, overflow, permission.
---

When designing any screen or component, do not treat the default state as
finished until these are considered:
- Default, and loading (first load + refresh with stale data)
- Empty (never used) AND emptied (user removed the last item) — different copy
- Error: request failed, and validation failed
- Overflow: long text, many items, small viewport
- Permission: user can't perform the action
If any is genuinely not applicable, say so explicitly rather than skipping it silently.

(Model-invoked: no command. Once installed, Claude applies this automatically when your task matches the description above.)
