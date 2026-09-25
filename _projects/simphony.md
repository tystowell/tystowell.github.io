---
title: "Simphony: Quantum Simulation of Photonic Circuits"
summary: Contributed to Simphony, BYU CamachoLab's open-source photonic integrated circuit simulator, focusing on its quantum simulation side, including extending it beyond Gaussian states to cat states.
category: simulation
date: 2024-10-01
period: 2024 – 2025          # TODO: confirm
status: Published
role: Contributor, quantum simulation
collaborators: BYU CamachoLab
tools: [Python, JAX, Continuous-variable quantum optics]
math: true
# thumbnail: /assets/img/projects/simphony-thumb.png
# hero: /assets/img/projects/simphony-wigner.png
# hero_caption: "Wigner function of a cat state propagated through a simulated circuit."
links:
  - label: Simphony on GitHub
    url: https://github.com/BYUCamachoLab/simphony
    icon: github
  - label: Documentation
    url: https://simphonyphotonics.rtfd.io
    icon: external
  # - label: Paper
  #   url: TODO
  #   icon: file
---

## Overview

[Simphony](https://github.com/BYUCamachoLab/simphony) is an open-source simulator for photonic
integrated circuits developed by BYU's CamachoLab. Alongside classical circuit simulation, it can
propagate **quantum states of light** through a circuit, which lets a designer see how squeezing,
entanglement and loss evolve across a chip. My work focused on this quantum simulation side, and
I'm a co-author on one of the later papers about the toolkit.

## Beyond Gaussian states

Simphony represents quantum states as **Gaussian states**: coherent, squeezed, two-mode squeezed
and thermal states, each described by a mean vector and a covariance matrix. Linear optical
circuits map Gaussian states to Gaussian states, so this is efficient, but it can't capture
non-Gaussian resources like **cat states**,

$$
|\text{cat}_\pm\rangle \propto |\alpha\rangle \pm |{-\alpha}\rangle ,
$$

which matter for continuous-variable quantum computing and error correction.

I worked on integrating cat states and other **sums of Gaussian states** into the simulator,
using an approach similar to [Strawberry Fields](https://strawberryfields.ai/). The state is
written as a weighted sum of Gaussian terms (including complex cross terms), each term is
propagated through the circuit with the existing Gaussian machinery, and the results are
recombined.

TODO: What you got working, and a figure (for example, a cat state's Wigner function before and after a lossy circuit).
