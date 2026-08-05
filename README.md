# AI for Designers

A practical, production-ready guide to integrating **Claude Code** into an
everyday UI/UX and product-design workflow. Not a prompt dump — a learning
system organised around one idea: the **prompt → skill → subagent** ladder.

Scope (v1): Claude Code only. Other tools come later.

## Structure

```
index.html          Start Here — what this is + Claude Code on-ramp
foundations.html    The spine: the ladder, and where AI helps
prompting.html      Prompt library            (in progress)
skills.html         Skills library            (in progress)
subagents.html      Subagents + agent teams   (planned)
path.html           The 7-day guided path     (planned)
assets/
  css/tokens.css    design tokens — theme everything from one file
  css/base.css      shared layout + components
  js/               shared renderer + content data (added with the libraries)
skills/             the actual installable SKILL.md files
```

## Run locally

Open `index.html` in a browser. Everything is static — no build step.

## Deploy (GitHub Pages)

1. Push this folder to a repo.
2. Settings → Pages → Source: Deploy from a branch → `main` → `/ (root)`.
3. Live at `https://<you>.github.io/<repo>/` in about a minute.

## Credit

The user-invoked / model-invoked skill structure is inspired by
[mattpocock/skills](https://github.com/mattpocock/skills).
