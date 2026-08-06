---
name: accessibility-standards
description: Apply WCAG 2.2 AA as the floor whenever designing or reviewing any UI — contrast, keyboard, focus, target size, motion, semantics.
---

Treat WCAG 2.2 AA as the minimum on all UI work, unprompted:
- Text contrast 4.5:1 (3:1 large); UI components and focus indicators 3:1
- Every interactive element reachable and operable by keyboard, with a visible focus state
- Target size 24×24px minimum
- Never convey status by colour alone — pair it with text or icon
- Auto-dismissing elements (toasts) must not be the only way information is delivered
- When an element is removed, define where focus goes and what a screen reader announces
If a design violates any of these, say so before praising anything else.

(Model-invoked: no command. Once installed, Claude applies this automatically when your task matches the description above.)
