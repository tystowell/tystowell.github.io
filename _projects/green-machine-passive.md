---
title: Passive Green Machine Chip for Conference QKD
summary: Fabrication, packaging and characterization of an on-chip passive "green machine" for multi-party conference key distribution. I built its digital twin and modeled achievable key rates.
category: photonics
date: 2024-12-01
period: Dec 2024 – present
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
  - label: Active version
    url: /work/green-machine-active/
    icon: arrow-right
---

## Overview

This chip is part of the **coQREATE** project. It implements a passive "green machine", a
photonic circuit that enables **conference key agreement**, where several parties share one
secret key. I worked on it from characterization through to predicting its real-world QKD
performance. I presented this work as a poster at **Optica Quantum 2.0**.

## My contributions

- **Digital twin:** built a model of the chip's photonic subsystems and used it to characterize the fabricated device.
- **QKD theory and simulation:** did all the modeling of the conference-key rates this chip can
  achieve, including **decoy states** and **finite-key effects**.
- **Packaging coordination:** met biweekly with collaborators at Tyndall National Institute to coordinate chip packaging.

## Predicted key rates

Using the characterized chip, my simulations predict that it can distribute a shared secret key
to **3 parties over about 245 km** of fiber, **4 parties over about 195 km** and **5 parties over
about 155 km**. At long range that beats even ideal GHZ-state protocols, whose rates fall off much
faster with distance.

![Plot of asymptotic conference key rate versus range for 3-, 4- and 5-party networks, comparing the characterized chip, an ideal chip, ideal GHZ protocols and recent experiments]({{ '/assets/img/projects/green-machine-passive/key-rates.png' | relative_url }})
*Asymptotic key rate versus range for 3-, 4- and 5-party conference key agreement. Solid lines use the characterized chip, dashed lines an ideal chip, and dash-dot lines ideal GHZ-state protocols. Markers show recent experiments for comparison.*

The follow-up, an [active version of the chip]({{ '/work/green-machine-active/' | relative_url }}), is now in design.
