---
title: Passive Green Machine Chip for Conference QKD
summary: Fabrication, packaging and characterization of an on-chip passive "green machine" for multi-party conference key distribution. I built a digital twin for the packaged device and found expected key rates for the system.
category: photonics
date: 2025-01-01
period: "2025"
status: Ongoing
featured: true
role: Simulation, theory & characterization
collaborators: Tyndall National Institute, UMD (coQREATE project)
tools: [Photonic integrated circuits, Digital twin, QKD security analysis]
thumbnail: /assets/img/projects/green-machine-passive/packaged-chip.jpg
hero: /assets/img/projects/green-machine-passive/packaged-chip.jpg
hero_alt: The packaged green machine chip in its mount, with fiber arrays attached to both edges
hero_caption: "The packaged chip, with fiber arrays attached to both edges, in its mount on the optical table."
links:
  - label: Paper (Optica Quantum 2.0)
    url: https://opg.optica.org/abstract.cfm?uri=quantum-2025-QW3A.36
    icon: file
  - label: Active version
    url: /work/green-machine-active/
    icon: arrow-right
---

## Overview

This chip is part of the **coQREATE** project. This was one of the first big collaborative projects that I had a chance to be a part of in the Center for Quantum Networks community. People at BYU, UMD, and Tyndall had worked together to make and package a photonic integrated circuit that implements a unitary known as the "green machine."

While this circuit has many applications, after a meeting with researchers at UMD, we determined that conference key agreement, a multiparty QKD protocol, was a promising first target. I worked with researchers from BYU to develop a full digital twin of our Tyndall-fabricated chip for quantum conference key agreement (QCKA).

## My contributions

While I met biweekly with collaborators to discuss packaging and characterization, the digital twin was my main contribution. I built a model of the chip's photonic subsystems and the QKD theory around it, including decoy states and finite key effects. This work was published as a [conference article](https://opg.optica.org/abstract.cfm?uri=quantum-2025-QW3A.36) at Optica Quantum 2.0.

## Predicted key rates

Simulations predicted that our packaged chip can distribute a shared secret key to 3 parties over 245 km, or 5 parties over around 155 km. These numbers depend on some of the parameters included in the simulation, including dark count rates and polarization and phase errors introduced in transmission. At that long range, it's possible to surpass the limit on ideal GHZ-state protocols, which have much stricter rate-loss scaling.

![Plot of asymptotic conference key rate versus range for 3-, 4- and 5-party networks, comparing the characterized chip, an ideal chip, ideal GHZ protocols and recent experiments]({{ '/assets/img/projects/green-machine-passive/key-rates.png' | relative_url }})
*Asymptotic key rate versus range for 3-, 4- and 5-party conference key agreement. Solid lines use the characterized chip, dashed lines an ideal chip, and dash-dot lines ideal GHZ-state protocols. Markers show recent experiments for comparison.*

This experiment was valuable, but we found that inconsistent phase responses in our passive chip limit its utility in other protocols. The follow-up, an [active version of the chip]({{ '/work/green-machine-active/' | relative_url }}), is now in design.

## Publication

B. Fisher, **T. Stowell**, J. G. Richardson, D. Saladukha, M. Hall, R. Bernson, I. Frank, S. Guha, P. O'Brien and R. M. Camacho,
["Quantum Conference Key Agreement Using a Photonic Integrated Circuit Green Machine,"](https://opg.optica.org/abstract.cfm?uri=quantum-2025-QW3A.36)
*Optica Quantum 2.0 Conference and Exhibition*, paper QW3A.36 (Optica Publishing Group, 2025).
