---
title: Graphical Simulator for Cavity-Coupled Color Centers
summary: A full-physics, graphical simulator for color-center quantum memories in optical cavities, covering spin control, photon interactions and realistic noise. It reproduces results from leading experimental groups.
category: simulation
date: 2026-01-01
period: Jan 2026 – present
status: Paper in preparation
featured: true
role: Lead developer
collaborators: UMD, UMass, MIT, Qunnect
tools: [Python, Open quantum systems, Monte Carlo, GUI]
# thumbnail: /assets/img/projects/color-center-thumb.png   # a screenshot of the GUI works well
# hero: /assets/img/projects/color-center-gui.png
# hero_caption: "The simulator's graphical interface."
links:
  - label: Code
    url: https://github.com/tystowell
    icon: github
  # - label: Paper
  #   url: https://arxiv.org/abs/xxxx.xxxxx
  #   icon: file
---

## Overview

Color centers in diamond and related materials are leading candidates for quantum network
memories, but designing experiments around them means juggling spin physics, cavity optics,
control pulses and noise all at once. This is my most significant project: a simulator that
models all of it together, behind a graphical interface so experimentalists can use it directly.
The project is nearing completion, and I hope to have the paper published within the next two months.

## What it simulates

- **Full Hamiltonian model.** A parameterized description of color centers under strain,
  magnetic field and other perturbations, placed in a general cavity environment.
- **Microwave and RF control.** Time-domain simulation of spin control pulses.
- **Photon interactions.** Time-domain simulation of the emitter–cavity system interacting with
  generalized multimode photon wavepackets.
- **Realistic noise.** Dynamical decoupling under stochastic Monte Carlo noise models, including
  noise that is correlated across gates.
- **Graphical interface.** Everything above is configured and run from a GUI.

## Validation

The simulator reproduces published results from the Lukin (Harvard) and Englund (MIT) groups.
That includes the nuclear-spin phase-kickback interactions that recent work from the Englund
group has set out to resolve.

## Built with experimentalists

TODO: Add a GUI screenshot and one headline figure, such as a reproduced experimental result.
