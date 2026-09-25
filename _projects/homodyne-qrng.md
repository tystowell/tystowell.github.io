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
thumbnail: /assets/img/projects/homodyne-qrng/chip.jpg
hero: /assets/img/projects/homodyne-qrng/system-diagram.png
hero_alt: Block diagram of the QRNG from local oscillator and vacuum input through the photonic chip, TIAs and FPGA to a server
hero_caption: "The full QRNG: a local oscillator and the vacuum state are mixed on the photonic chip, amplified by the TIAs, then digitized and processed on the FPGA board before the random numbers go to a server."
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

## The system

- **Photonic integrated circuit (PIC):** the local oscillator and the vacuum input are combined
  in a multimode interference (MMI) coupler and split into four arms, each with a Mach–Zehnder
  modulator (MZM) and a photodiode.
- **Transimpedance amplifiers (TIAs):** pairs of photodiodes feed two custom TIAs, which turn the
  tiny photocurrent differences into voltages. Those voltages carry the amplified vacuum noise.
- **Digitization and extraction:** the Basys3 board's ADCs and FPGA turn the signals into certified
  random bits and send them on to a server.

![PCB layout of the detector board, with SMA connectors around the edge labeled for supply, bias, reference and output signals, and yellow lines drawn over the layout]({{ '/assets/img/projects/homodyne-qrng/detector-pcb.jpg' | relative_url }})
*Layout of the detector's circuit board. SMA connectors around the edge bring in the supplies, bias and reference voltages, and carry out the two amplified outputs (VOUT1, VOUT2).*

This page covers the experimental side. The FPGA system and theory, which were my main
contribution, are on the [QRNG FPGA Control & Randomness Extraction]({{ '/work/qrng-fpga/' | relative_url }}) page.

## Edge coupling & experimental work

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/homodyne-qrng/microscope-alignment.jpg' | relative_url }}" alt="Microscope objective above the chip's alignment stage, with Tyler out of focus behind it">
    <figcaption>The microscope objective and alignment stage used to line the chip up.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/homodyne-qrng/chip.jpg' | relative_url }}" alt="Photo of the TIA die and photonic chip wire-bonded onto a shared circuit board">
    <figcaption>The packaged detector: the TIA die (center) and the photonic chip (right), wire-bonded onto a shared board.</figcaption>
  </figure>
</div>

TODO: Coupling light into and out of the photonic chip through its edge facets, what the
alignment involved, and the measurements you took (for example, showing the detector was
quantum-noise-limited).

## Deployment at Oak Ridge National Laboratory

I worked on site at ORNL to set the system up as the random number source for their QKD system.
