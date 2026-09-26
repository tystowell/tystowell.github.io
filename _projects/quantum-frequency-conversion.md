---
title: Quantum Frequency Conversion System
summary: Designed and built a free-space quantum frequency conversion setup that shifts 737 nm light to the 1283 nm telecom O-band in a PPLN waveguide, reaching ~70% internal conversion efficiency.
category: photonics
date: 2026-05-01
period: "2026"
status: Completed
featured: true
role: System designer & builder, Center for Quantum Networks (CQN)
collaborators: UMD
tools: [Nonlinear optics, PPLN waveguides, Optomechanics, CNC machining]
math: true
thumbnail: /assets/img/projects/quantum-frequency-conversion/setup.jpg
---

## Overview

Early in 2026, I had started work on a versatile simulation structure for cavity coupled Group-IV vacancies in diamond. As part of this, I started meeting with researchers in the Center for Quantum Networks (CQN) at UMD who were trying to build a quantum memory based on this architecture. That collaboration led to an opportunity for a 3 month contracted position in their lab, and this is the work that came out of that summer.

Silicon vacancy centers emit photons at a very specific frequency around 737nm. We were interested in interfacing our SiV memory with photonic qubits from an Ion trap group at UMD that converted their photons to 1283nm. In order to bridge that gap, we need a quantum frequency conversion system that could shift the photon's wavelength while preserving its quantum state. I built that system from scratch using an NTT Innovative Devices on-chip PPLN waveguide.

The system converts 737 nm photons from an SiV center to 1283nm using difference-frequency generation with a strong 1732 nm pump:

$$
\frac{1}{\lambda_\text{out}} = \frac{1}{\lambda_\text{in}} - \frac{1}{\lambda_\text{pump}}
\quad\Rightarrow\quad
\frac{1}{737\ \text{nm}} - \frac{1}{1732\ \text{nm}} \approx \frac{1}{1283\ \text{nm}}
$$

## What I built

The waveguide chip and pump laser were selected by my mentor. I designed the rest of the system:

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/quantum-frequency-conversion/setup.jpg' | relative_url }}" alt="Top-down photo of the frequency conversion setup on an optical table">
    <figcaption>The finished setup on the optics table</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/quantum-frequency-conversion/beam-path.png' | relative_url }}" alt="Beam-path schematic of the frequency conversion system">
    <figcaption>The designed system - photons from a 737nm source and a strong pump at 1732nm are both fed into a PPLN chip, in which the 737nm photons are converted to 1283nm. A series of filters remove the pump so that the 1283nm photons can be measured cleanly. </figcaption>
  </figure>
</div>

There were a series of design decisions I had to make, including the use of a dichroic mirror to combine the pump and signal, Off-axis parabolic (OAP) mirrors to simultaneously focus the two wavelengths with minimal chromatic abberation, a short pass filter and volumetric bragg grating to filter out pump and noise photons, temperature control, and assorted diagnostic elements, like a beam splitter and lens that allow for microscope imaging of the waveguide facet through the off-axis parabolic mirrors.

It was a difficult project, as the timeline was short. I had three months to design the experiment, place the order (some components took 6 weeks to arrive), build the system, and observe frequency conversion.

Not only that, but problems arose during development and had to be worked around. Alignment through the OAPs was difficult, and an imaging system had to be installed into the setup that let me visualize the astigmatism being introduced to improve waveguide coupling.

<figure class="figure-inset">
  <img src="{{ '/assets/img/projects/quantum-frequency-conversion/waveguide-facet.png' | relative_url }}" alt="Microscope view of the PPLN chip's edge, with light coupled into one waveguide">
  <figcaption>Microscope view of the PPLN chip's edge during alignment, with light coupled into one of the waveguides.</figcaption>
</figure>

## Results

The project was not perfect, but still very successful. Below is the internal conversion efficiency and fiber to fiber efficiency for the system.

| Metric | Value |
|---|---|
| Internal conversion efficiency | ~70% |
| Fiber-to-fiber efficiency | 2.5% |

One of the remaining problematic components when I left was a OAP being used for collection, which was introducing astigmatism and reducing our fiber to fiber efficiency significantly. I gave the team some suggestions on what lenses and dichroic mirrors to buy to replace this part, and future work should improve the total system efficiency significantly.

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/quantum-frequency-conversion/conversion-vs-pump.png' | relative_url }}" alt="Plot of converted 1283 nm power rising and residual 737 nm power falling with pump power">
    <figcaption>As pump power increases, converted 1283 nm power rises while the residual 737 nm signal is depleted toward a 27 nW unconvertible floor.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/quantum-frequency-conversion/tunability.png' | relative_url }}" alt="Plot of converted wavelength versus pump wavelength, a straight line with slope −0.526">
    <figcaption>The system is tuneable - changing the pump wavelength tunes the output linearly.</figcaption>
  </figure>
</div>

I should also add, during this summer I was able to work on a lot more than just this QFC system. I recovered an old pulsed laser (including settting up water cooling and N2 installations and full system alignment), used my knowledge of experiment design and CNC machining to support other experiments, and was able to work on the alignment of the core quantum memory setup a couple of times.

Working at CQN in Maryland was incredible! It's been an impactful period on my research career and I'm very grateful to the team who made it possible.
