---
title: "Simphony: Quantum Simulation of Photonic Circuits"
summary: Contributed to Simphony, BYU CamachoLab's open-source photonic integrated circuit simulator, focusing on its quantum simulation side, including extending it beyond Gaussian states to cat states.
category: simulation
date: 2024-10-01
period: Oct – Nov 2024
status: Published
role: Contributor, quantum simulation
collaborators: BYU CamachoLab
tools: [Python, JAX, Continuous-variable quantum optics]
math: true
thumbnail: /assets/img/projects/simphony/simphony-card.png
links:
  - label: My branch (quantum-interference)
    url: https://github.com/BYUCamachoLab/simphony/tree/quantum-interference
    icon: github
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

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/simphony/cat-wigner.png' | relative_url }}" alt="3D surface plot of a cat state's Wigner function, with two Gaussian peaks and negative interference fringes between them">
    <figcaption>Wigner function of a simulated cat state: two coherent-state peaks, with negative-valued interference fringes between them.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/simphony/cat-homodyne.gif' | relative_url }}" alt="Animation of a cat state's homodyne measurement distribution as the measurement phase rotates" loading="lazy">
    <figcaption>Simulated homodyne measurement as the local-oscillator phase rotates: two separated peaks along one quadrature, and interference fringes along the other.</figcaption>
  </figure>
</div>

## What I added

All of this lives on the [`quantum-interference` branch](https://github.com/BYUCamachoLab/simphony/tree/quantum-interference)
([my commits](https://github.com/BYUCamachoLab/simphony/commits/quantum-interference?author=tystowell)):

- **Density matrices** for representing quantum states.
- **Arbitrary sums of coherent states**, the building block for cat states.
- **Squeezed-state interference.**
- **Multimode states** and their evolution through circuits.
- **Homodyne detection**, simulating measurement of a chosen quadrature.
- **Phase corrections** for the cross terms between Gaussian components.
