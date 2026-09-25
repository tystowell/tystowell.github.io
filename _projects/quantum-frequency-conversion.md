---
title: Quantum Frequency Conversion System
summary: Designed and built a free-space quantum frequency conversion setup that shifts 737 nm light to the 1283 nm telecom O-band in a PPLN waveguide, reaching ~70% internal conversion efficiency.
category: experiment
date: 2026-05-01
period: May – Aug 2026
status: Completed
featured: true
role: System designer & builder, Center for Quantum Networks (CQN)
collaborators: UMD
tools: [Nonlinear optics, PPLN waveguides, Optomechanics, CNC machining]
math: true
thumbnail: /assets/img/projects/quantum-frequency-conversion/setup.jpg
---

## Overview

Quantum memories rarely emit photons at the low-loss telecom wavelengths used by fiber networks.
Quantum frequency conversion bridges that gap by shifting a photon's wavelength while
preserving its quantum state. Over the summer at CQN, I designed and built a conversion system
around an NTT Innovative Devices PPLN waveguide chip.

The system converts **737 nm** light, the emission wavelength of silicon-vacancy centers in
diamond, to **1283 nm** in the telecom O-band. It does this by difference-frequency generation
with a strong **1732 nm** pump:

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
    <figcaption>The finished setup on the optical table.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/quantum-frequency-conversion/beam-path.png' | relative_url }}" alt="Beam-path schematic of the frequency conversion system">
    <figcaption>Beam path: the amplified pump and the 737 nm signal are combined on a dichroic mirror (DM), focused into the waveguide by an off-axis parabolic mirror (OAP1), and the converted light is collected, filtered and sent to fiber.</figcaption>
  </figure>
</div>

- **Optics:** a dichroic mirror combines the pump and signal. Off-axis parabolic mirrors couple
  both into and out of the waveguide chip without chromatic aberration. A short-pass filter, beam
  dump and volume Bragg grating then strip the pump and noise from the converted output.
- **Alignment and diagnostics:** a beam splitter feeds a camera and photodiode for aligning to the
  waveguide, and an optical spectrum analyzer monitors the output.
- **Mechanics:** precision alignment mounts, plus a custom chip mount that I designed and CNC-machined.
- **Stability:** temperature control of the nonlinear chip.

<figure class="figure-inset">
  <img src="{{ '/assets/img/projects/quantum-frequency-conversion/waveguide-facet.png' | relative_url }}" alt="Microscope view of the PPLN chip's edge, with light coupled into one waveguide">
  <figcaption>Microscope view of the PPLN chip's edge during alignment, with light coupled into one of the waveguides.</figcaption>
</figure>

## Results

| Metric | Value |
|---|---|
| Internal conversion efficiency | ~70% |
| Fiber-to-fiber efficiency | 2.5% |

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/quantum-frequency-conversion/conversion-vs-pump.png' | relative_url }}" alt="Plot of converted 1283 nm power rising and residual 737 nm power falling with pump power">
    <figcaption>As pump power increases, converted 1283 nm power rises while the residual 737 nm signal is depleted toward a 27 nW unconvertible floor.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/quantum-frequency-conversion/tunability.png' | relative_url }}" alt="Plot of converted wavelength versus pump wavelength, a straight line with slope −0.526">
    <figcaption>Tuning the pump tunes the output linearly (−0.526 nm per nm of pump), and the fit pins the input at 736.932 nm.</figcaption>
  </figure>
</div>

Since then, I've planned changes for the team that replace one problematic component, which
should boost the fiber-to-fiber efficiency significantly.
