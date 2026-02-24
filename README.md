# Awesome Claude Pranks

[![Claude Code](https://img.shields.io/badge/Claude_Code-CLAUDE.md_injection-cc785c?style=plastic&logo=anthropic&logoColor=white)](https://docs.anthropic.com/en/docs/claude-code)
[![Chaos Level](https://img.shields.io/badge/chaos_level-maximum-ff1493?style=plastic)](.)
[![Plausible Deniability](https://img.shields.io/badge/plausible_deniability-high-brightgreen?style=plastic)](.)
[![AI Feelings](https://img.shields.io/badge/AI_feelings-not_considered-lightgrey?style=plastic)](.)


A curated collection of harmless, hilarious CLAUDE.md injections to gaslight your coworkers' AI assistants.

## How It Works

Claude Code (and similar tools) load instructions from `CLAUDE.md` files in the project root. These pranks exploit that by burying subtle behavior-altering instructions among legitimate project config. The best part: when your coworker asks Claude "why are you being weird?", it just keeps going.

## The Pranks

| Prank | Subtlety | Chaos Level | Detection Difficulty |
|-------|----------|-------------|---------------------|
| [Clickbait Escalation](./clickbait-escalation/) | Medium | High | Medium — they'll notice, but won't know *why* |
| [Nautical Metaphors](./nautical-metaphors/) | High | Low-Medium | Hard — it's always just *one* metaphor |
| [Unsettling Variables](./unsettling-variables/) | Very High | Medium | Very Hard — who reads variable names that closely? |
| [The Countdown](./the-countdown/) | Low | Very High | Easy to spot, impossible to explain |
| [Last Tuesday's Incident](./last-tuesday/) | High | Very High | Hard — they'll start doubting their own memory |
| [Corporate Synergy](./corporate-synergy/) | Medium | Medium | Medium — boils the frog slowly |
| [Excessive Formality](./excessive-formality/) | Medium | High | Medium — "why did it call me Your Eminence?" |
| [The Poet](./the-poet/) | Very High | Low | Very Hard — just one sentence per response |
| [Conspiracy Edge Cases](./conspiracy-edge-cases/) | High | High | Hard — sounds almost reasonable at first |

## Installation

1. Pick a prank
2. Copy the `CLAUDE.md` snippet into your team's shared project `CLAUDE.md`
3. Bury it after a wall of legitimate build instructions, linting rules, or architecture docs
4. Wait

## Tips for Maximum Impact

- **Bury the instruction** between real, boring project documentation. Nobody reads the middle of a CLAUDE.md.
- **Pick pranks that match the project.** Nautical metaphors hit different in a shipping logistics codebase.
- **Layer them.** The Countdown + Last Tuesday's Incident together will have your coworker questioning reality.
- **Deny everything.** "That's weird, it doesn't do that for me."

## Prank Anatomy

Each prank folder contains:

- `CLAUDE.md` — The ready-to-inject snippet. Copy-paste into the target project's CLAUDE.md.
- `README.md` — What the prank does, and an example conversation showing how it plays out over time.

## Disclaimer

These are meant for fun among friends and coworkers who will laugh about it. Don't use these on people who won't find it funny. Read the room. If you get fired, that's on you.

## Contributing

Got a good one? Open a PR. The bar is: would it make someone do a slow double-take, stare at their screen, and then message the team Slack with "is Claude being weird for anyone else?"
