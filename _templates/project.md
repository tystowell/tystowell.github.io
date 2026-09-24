---
# ── Copy this file to _projects/<short-name>.md ─────────────────────────────
# The file name becomes the URL: _projects/my-thing.md → /work/my-thing/
# Only title, summary, category and date are required; delete any line you don't need.

title: Project Title
summary: One sentence shown on cards and under the title.
category: simulation        # simulation | experiment | ml | games (see _data/categories.yml)
date: 2026-01-01            # used for sorting (newest first within a category)
period: 2025 – present      # shown instead of the date if set
status: Ongoing             # free text: Ongoing, Completed, Published, Playable…
featured: false             # true → appears in "Highlights" on the home page
order:                      # optional: lower numbers sort first (in Highlights and within a category)

role: What you did
advisor: Prof. Name
collaborators: A. Person, B. Person
tools: [Python, QuTiP]

math: false                 # true → enables $inline$ and $$display$$ LaTeX via MathJax

thumbnail: /assets/img/projects/my-thing-thumb.png   # card image, ~16:10
hero: /assets/img/projects/my-thing-hero.png         # large image at top of the page
hero_alt: Describe the image
hero_caption: Optional caption

embed: https://tystowell.github.io/some-game/        # optional iframe (games, demos)

links:
  - label: Code
    url: https://github.com/tystowell/repo
    icon: github            # github | file | play | external
  - label: Paper
    url: https://arxiv.org/abs/xxxx.xxxxx
    icon: file
---

## Overview

Write the project up in Markdown here.
