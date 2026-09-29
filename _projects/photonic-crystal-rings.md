---
title: Photonic Crystal Ring Resonators for Dispersion Engineering
summary: I designed, simulated and laid out photonic crystal ring resonators, fabricated through Nokia, that use a corrugated inner wall to split chosen resonances and engineer dispersion.
category: photonics
date: 2025-06-01
period: Summer 2025
status: Not pursued further (Q factor)
role: Device design, simulation & layout
collaborators: Nokia (fabrication)
tools: [Lumerical FDTD, GDS layout, Microring resonators, Dispersion engineering]
thumbnail: /assets/img/projects/photonic-crystal-rings/card.png
hero: /assets/img/projects/photonic-crystal-rings/ring-layout.png
hero_alt: GDS layout of half of a ring resonator and its bus waveguide, with a periodic corrugation along the ring's inner wall
hero_caption: "Layout of one ring (top half shown) and its bus waveguide. The fine teeth along the inner wall are the photonic crystal modulation."
---

## Overview

This was one of my first chances to work on a research project in which I designed and fabricated my own integrated photonic structure. In our group, we have lots of students who are recruited by and work at Nokia, developing photonic chips. Working with some of these industry partners, we came up with a project that started off with a lot of steam and then hit a lot of challenges.

The initial idea was to see if we could use the same silicon process used by Nokia to do on-chip nonlinear optics. Specifically, they had a thin film of silicon nitride that theoretically had good enough confinement and a high enough third-order nonlinearity to generate a two-mode squeezed vacuum.

We needed anomalous dispersion in the ring in order to achieve phase matching, which was not trivial under the fabrication constraints. We actually investigated several solutions, but the most promising was using a photonic crystal ring which added a periodic corrugation of the inner wall. This would couple forward- and backward-traveling light, splitting a chosen resonance in two and giving a precise knob for controlling individual resonances and engineering the dispersion. I designed an array of these rings and had them fabricated through Nokia.

![Transmission spectrum from 1.50 to 1.60 µm showing evenly spaced resonance dips, with one dip near 1.552 µm split into two]({{ '/assets/img/projects/photonic-crystal-rings/mode-splitting.png' | relative_url }})
*The simulated transmission spectrum. The resonances are evenly spaced except near 1.552 µm, where the corrugation splits one resonance into a doublet, exactly the targeted effect.*

## Design

I simulated the rings in Lumerical FDTD, then laid out an array of variations for fabrication, sweeping the design parameters from ring to ring.

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/photonic-crystal-rings/fdtd-setup.png' | relative_url }}" alt="Lumerical FDTD simulation region containing a corrugated ring and bus waveguide">
    <figcaption>FDTD simulation setup in Lumerical: the corrugated ring, the bus waveguide and the source and monitors.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/photonic-crystal-rings/ring-array.png' | relative_url }}" alt="Layout of an array of fourteen ring resonators, each coupled to its own bus waveguide">
    <figcaption>The fabrication layout: an array of rings, each a different variation of the design.</figcaption>
  </figure>
</div>

## Outcome

The rings were fabricated and some mode splitting was observed, but after running some nonlinear optics simulations, I determined the Q-factor wouldn't be high enough to hit the threshold power for two-mode squeezed vacuum generation.

At the same time, my boss had some new projects and opportunities coming in, and the original excitement around this project had died down. Though I spent a few months on it (and then several more months waiting for the post-fabrication data), it was also a good example of avoiding the sunk-cost fallacy. While I would love to come back to photonic crystal design in the future, I'm also grateful that I was able to move away from this when it became clear that the initial ideas would not work.
