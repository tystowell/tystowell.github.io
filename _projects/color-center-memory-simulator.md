---
title: Graphical Simulator for Cavity-Coupled Color Centers
summary: I took on the challenge of building a full stack simulator for cavity coupled Group IV quantum memory devices. It works well and replicates experimental results.
category: simulation
date: 2026-01-01
period: "2026"
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

This project is one that I'm incredibly proud of. It was my own project. It involved almost a year of work and collaboration with other researchers. And the final product was actually useful.

For some context, cavity coupled color centers in diamond is a leading candidate for quantum network memory architecture. However, simulating these systems involves a large number of disparate simulation techniques, ranging from defect hamiltonian and time domain control techniques to cavity dynamics and complicated noise models. Simultaneously simulating arbitrary photon wavepacket reflection and the electronic control necessary for dynamic decoupling within the same simulation is a difficult problem, especially if you want spin-spin density matrices across a network at the end of it.

In this project, I made the library Quiver, which brought cavity coupled group-IV color center simulation tools together and enabled a graphical interface tailored for the kinds of parameters that experimentalists need to use. The project is almost done, and I hope to have the paper published within the next two months.

I should add that this project was also the first time I started using AI in my work to accelerate development. For the first few months I developed without it, and towards the end started using it to run tests and help integrate new features, like the GUI.

## What it simulates

If I had to describe the stack, I would represent it as follows:

- Defect hamiltonian model: A parameterized description of color centers under strain, magnetic field, noise and other perturbations
- Cavity dynamics model: A description of the cavity environment, including atom-field coupling
- Time domain simulation structure: Time domain simulations of the lindbladian / master equation for everything from MW control to arbitrary wavepacket reflections
- Realistic noise: Dynamical decoupling under stochastic Monte Carlo noise models
- Protocols: Combining gates into a full circuit in order to extract density matrices from networking protocols

## Interface

Everything above is available both as a python library and graphical interface. Experiments can be configured as circuits of gates on the electron, nucleus, and photon, and the results give full density matrices for any elements of the system.

![Screenshot of the simulator's GUI, showing device setup, a gate circuit and population traces]({{ '/assets/img/projects/color-center-simulator/gui.png' | relative_url }})
*The circuit builder: device and cavity parameters (left), a two-node protocol with photon, spin-control and dynamical-decoupling gates (top), and the resulting spin populations over 11 µs (bottom).*

## Validation

The simulator replicates results from work done in the Lukin (Harvard) and Englund (MIT) groups, including two node entanglement distribution and nuclear-spin phase-kickback interactions.