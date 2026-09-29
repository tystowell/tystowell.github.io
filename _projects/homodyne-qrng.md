---
title: "Integrated Homodyne QRNG: Chip & Deployment"
summary: Experimental work on a quantum random number generator built from a photonic chip with co-designed on-chip transimpedance amplifiers, from wirebonding the chip to deploying it at Oak Ridge National Laboratory.
category: photonics
date: 2022-01-01
period: "2022"
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
  - label: Paper (arXiv:2412.02077)
    url: https://arxiv.org/abs/2412.02077
    icon: file
---

## Overview

This was one of my first two projects in BYU's CamachoLab, along with some FPGA work I did that tied into the same project.

In the project I was moving into, the team had been working on doing homodyne detection of the vacuum state with record high signal to noise ratios. This project co-designed a photonic chip and on-chip transimpedance amplifiers to reach that regime, and then turned the detector into a working quantum random number generator.

## The Pre-existing System

When I arrived, two pieces of the system were in development and about to arrive:

- Photonic integrated circuit (PIC): the local oscillator and the vacuum input are combined in a multimode interference (MMI) coupler and split into four arms, each with a Mach–Zehnder modulator (MZM) and a photodiode. We were just about to receive this when I arrived.
- Transimpedance amplifiers (TIAs): pairs of on-chip photodiodes feed two custom TIAs which amplify the signal prior to measurement

I had a few tasks. First of all, I was supposed to learn how to wirebond chips in BYU's cleanroom so that I was prepared to wirebond our PICs when they arrived. Secondly, I was to work on the edge coupling setup that another student of ours had started so that we were ready to characterize the chip when it arrived. Finally, since I had some significant experience in PCB design, I was working with another student to design a secondary amplification stage on a PCB that would host the chip upon arrival (shown below).

![PCB layout of the detector board, with SMA connectors around the edge labeled for supply, bias, reference and output signals, and yellow lines drawn over the layout]({{ '/assets/img/projects/homodyne-qrng/detector-pcb.jpg' | relative_url }})
*Layout of the detector's circuit board. SMA connectors around the edge bring in the supplies, bias and reference voltages, and carry out the two amplified outputs (VOUT1, VOUT2).*

This page covers the experimental side. The FPGA system and theory, which were my other main contribution, are on the [QRNG FPGA Control & Randomness Extraction]({{ '/work/qrng-fpga/' | relative_url }}) page.

## My work

We were able to fabricate the PCB and finish the edge coupling stage. When the chip arrived, I wirebonded it in the cleanroom and spent many hours in the lab with the microscope working to align the edge couplers.

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

In the end, we had a working system, complete with detection, amplification, and even classical postprocessing, ready for deployment at Oak Ridge National Laboratory, who had worked with us during the development of this so it could be used on their QKD system.

## Deployment at Oak Ridge National Laboratory

For a few months, I worked on site at ORNL. Here, I worked in a team of 3 from BYU to setup the same edge coupling system and the postprocessing that we had been working on during the last year. It was a great opportunity to deploy and use a real product, and a fantastic end to this project.
