---
title: Graphical Simulator for Cavity-Coupled Color Centers
summary: Quiver, a full-physics, graphical simulator for group-IV color-center quantum memories in optical cavities, covering spin control, photon interactions and realistic noise. It reproduces results from leading experimental groups.
category: simulation
date: 2026-01-01
period: Jan 2026 – present
status: Paper in preparation
featured: true
role: Lead developer
collaborators: UMD, UMass, MIT, Qunnect
tools: [Python, Open quantum systems, Monte Carlo, GUI]
thumbnail: /assets/img/projects/color-center-simulator/architecture.png
hero: /assets/img/projects/color-center-simulator/architecture.png
hero_alt: Architecture of the simulator, from defect and cavity physics through time-domain simulation to a full entanglement protocol
hero_caption: "How the simulator fits together: a device model of the defect and cavity (top left), a time-domain master-equation simulation of photon reflection and microwave control (top right), and full protocols built from gates, here producing heralded nuclear spin–spin entanglement with F = 0.82 (bottom)."
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
control pulses and noise all at once. This is my most significant project: **Quiver**, a simulator
for group-IV color centers that models all of it together, behind a graphical interface so
experimentalists can use it directly.
The project is nearing completion, and I hope to have the paper published within the next two months.

## What it simulates

- **Full Hamiltonian model.** A parameterized description of color centers under strain,
  magnetic field and other perturbations, placed in a general cavity environment.
- **Microwave and RF control.** Time-domain simulation of spin control pulses.
- **Photon interactions.** Time-domain simulation of the emitter–cavity system interacting with
  generalized multimode photon wavepackets.
- **Realistic noise.** Dynamical decoupling under stochastic Monte Carlo noise models, including
  noise that is correlated across gates.
- **Protocols.** Gates combine into full network protocols, such as heralded entanglement between the nuclear spins of two separate defects.

## Graphical interface

Everything above is configured and run from a GUI. Experiments are laid out as circuits of
gates on the electron, nuclear and photon registers, and the results show up as population
traces, reflectivity spectra and pulse envelopes.

![Screenshot of the simulator's GUI, showing device setup, a gate circuit and population traces]({{ '/assets/img/projects/color-center-simulator/gui.png' | relative_url }})
*The circuit builder: device and cavity parameters (left), a two-node protocol with photon, spin-control and dynamical-decoupling gates (top), and the resulting spin populations over 11 µs (bottom).*

## Validation

The simulator reproduces published results from the Lukin (Harvard) and Englund (MIT) groups.
That includes the nuclear-spin phase-kickback interactions that recent work from the Englund
group has set out to resolve.
