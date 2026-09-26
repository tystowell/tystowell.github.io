---
title: "Simphony: Quantum Simulation of Photonic Circuits"
summary: I contributed to Simphony, BYU CamachoLab's open-source photonic integrated circuit simulator. I did work mostly on the quantum simulation side, including implementing density matrices and sum of gaussian state capabilities.
category: simulation
date: 2024-10-01
period: "2024"
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
  - label: Paper (FiO + LS 2022)
    url: https://opg.optica.org/abstract.cfm?uri=fio-2022-JTu4A.32
    icon: file
---

## Overview

[Simphony](https://github.com/BYUCamachoLab/simphony) is an open-source simulator for photonic integrated circuits developed by BYU's CamachoLab. One of it's main appeals is the ability to propogate quantum gaussian states through classical circuit descriptions generated through Lumerical FDTD.

Up to this point, my previous research projects in my lab had dealt with the classical components of our systems, like noise and entropy extraction or FPGA control. This was my first project in which I had to learn and understand the quantum nature of light at a deeper level.

## Beyond Gaussian states

Simphony represents quantum states as Gaussian states, with a vector of means and covariance. This can simulate coherent, squeezed, two-mode squeezed vacuum, and thermal states, but cannot represent states like single photons. The benefit of this tradeoff is that it's very fast.

After working with other gaussian state simulators like [Strawberry Fields](https://strawberryfields.ai/), I learned that there was also a way to ise the gaussian formulism to simulate sums of gaussian states, like the cat state:

$$
|\text{cat}_\pm\rangle \propto |\alpha\rangle \pm |{-\alpha}\rangle ,
$$

My work involved two parts. First, I added density matrix functionality to simphony's preexisting engine. Then, I worked on integrating sums of Gaussian states (like cat states), which are represented as the sum of Gaussian terms and complex cross terms. After propogating each term through the circuit, the Wigner distribution can be extracted.

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/simphony/cat-wigner.png' | relative_url }}" alt="3D surface plot of a cat state's Wigner function, with two Gaussian peaks and negative interference fringes between them">
    <figcaption>Wigner function of a simulated cat state: two coherent-state peaks, with negative-valued interference fringes between them. This is done purely in a gaussian state basis.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/simphony/cat-homodyne.gif' | relative_url }}" alt="Animation of a cat state's homodyne measurement distribution as the measurement phase rotates" loading="lazy">
    <figcaption>Simulated homodyne measurement as the local-oscillator phase rotates, showing the interference fringes of the two cat states.</figcaption>
  </figure>
</div>

## Results

All of this lives on the [`quantum-interference` branch](https://github.com/BYUCamachoLab/simphony/tree/quantum-interference). This project was significant because it was the first time I had to dive deep into the quantum theory of light. I understood how density matrices and the quantum harmonic oscillator worked at a deeper level, and felt more comfortable going out on my own.

## Publication
(Note - this is from earlier work I did on the initial quantum simulation capabilities of simphony)

C. Carver, A. Probst, B. Arnesen, B. Fisher, **T. Stowell** and R. M. Camacho,
["Device-Aware Quantum Photonic Simulator for Gaussian States,"](https://opg.optica.org/abstract.cfm?uri=fio-2022-JTu4A.32)
*Frontiers in Optics + Laser Science 2022*, paper JTu4A.32 (Optica Publishing Group, 2022).
