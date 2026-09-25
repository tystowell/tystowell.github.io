---
title: "Integrated Homodyne QRNG: Chip & Deployment"
summary: Experimental work on a quantum random number generator built from a photonic chip with co-designed on-chip transimpedance amplifiers, from edge-coupling the chip to deploying it at Oak Ridge National Laboratory.
category: photonics
date: 2022-01-01
period: Jan – Jul 2022
status: Completed
role: Edge coupling, experimental work & on-site deployment
collaborators: Oak Ridge National Laboratory
tools: [Homodyne detection, Photonic chips, Edge coupling, Transimpedance amplifiers]
# thumbnail: /assets/img/projects/qrng-thumb.jpg
# hero: /assets/img/projects/qrng-setup.jpg
links:
  - label: FPGA & theory side
    url: /work/qrng-fpga/
    icon: arrow-left
  # - label: Paper
  #   url: TODO
  #   icon: file
---

## Overview

Homodyne detection of the vacuum state produces genuinely random measurement results, which
makes it an excellent source of quantum randomness, but only if the detector is
quantum-noise-limited. This project co-designed a photonic chip and on-chip transimpedance
amplifiers to reach that regime, then turned the detector into a working quantum random number
generator.

This page covers the experimental side. The FPGA system and theory, which were my main
contribution, are on the [QRNG FPGA Control & Randomness Extraction]({{ '/work/qrng-fpga/' | relative_url }}) page.

## Edge coupling & experimental work

TODO: Coupling light into and out of the photonic chip through its edge facets, what the
alignment involved, and the measurements you took (for example, showing the detector was
quantum-noise-limited).

## Deployment at Oak Ridge National Laboratory

I worked on site at ORNL to set the system up as the random number source for their QKD system.

TODO: A photo of the chip or the setup.
