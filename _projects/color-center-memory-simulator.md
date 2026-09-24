---
title: Color-Center Quantum Memory Simulator
summary: A full simulator of color-center–based quantum memory devices, from spin dynamics to photon-mediated entanglement.
category: simulation
date: 2025-01-01
period: 2024 – present
status: Ongoing
featured: true
role: Lead developer
advisor: "TODO: Prof. Name"
tools: [Python, QuTiP, NumPy, SciPy]
math: true
# thumbnail: /assets/img/projects/color-center-thumb.png   # 16:10 works best
# hero: /assets/img/projects/color-center-hero.png
# hero_caption: "Simulated spin-echo fidelity vs. memory time."
links:
  - label: Code
    url: https://github.com/tystowell
    icon: github
  # - label: Paper
  #   url: https://arxiv.org/abs/xxxx.xxxxx
  #   icon: file
---

## Overview

TODO: Two or three sentences for a non-specialist. What problem does this simulator solve, and why does
it matter for quantum networks?

## The physics

TODO: Describe the model. Math renders with MathJax when `math: true` is set in the front matter —
for example, the ground-state spin Hamiltonian of an NV center in a magnetic field:

$$
H = D S_z^2 + \gamma_e \mathbf{B}\cdot\mathbf{S} + \sum_k \mathbf{S}\cdot\mathbf{A}_k\cdot\mathbf{I}_k
$$

with open-system dynamics described by a Lindblad master equation,
$\dot\rho = -\tfrac{i}{\hbar}[H,\rho] + \sum_j \mathcal{D}[L_j]\rho$.

## What I built

- TODO: Architecture — modules, what's configurable.
- TODO: Validation — which experiments or analytic results you reproduced.
- TODO: Performance — sizes/timescales it handles.

## Results

TODO: Your headline figure or number. Add images with standard Markdown:

<!-- ![Caption text]({{ '/assets/img/projects/your-figure.png' | relative_url }}) -->

## What I learned

TODO: What this taught you and how it shapes what you want to do in a PhD.
