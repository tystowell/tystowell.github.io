---
title: Photonic Crystal Ring Resonators for Dispersion Engineering
summary: Designed, simulated and laid out photonic crystal ring resonators, fabricated through Nokia, that use a corrugated inner wall to split chosen resonances and engineer dispersion.
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

Ring resonators trap light in a tight loop, which makes them ideal for nonlinear optics, but
what they can do depends heavily on their **dispersion**: how the resonance frequencies are
spaced. A photonic crystal ring adds a periodic modulation around the ring, here a corrugation
of the inner wall, which couples forward- and backward-traveling light and splits a chosen
resonance in two. That gives a precise knob for shifting individual resonances and engineering
the dispersion. I designed a set of these rings and had them fabricated through Nokia.

## Design

I simulated the rings in Lumerical FDTD, then laid out an array of variations for fabrication,
sweeping the design parameters from ring to ring.

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

## Mode splitting

![Transmission spectrum from 1.50 to 1.60 µm showing evenly spaced resonance dips, with one dip near 1.552 µm split into two]({{ '/assets/img/projects/photonic-crystal-rings/mode-splitting.png' | relative_url }})
*Transmission spectrum (wavelength in µm). The resonances are evenly spaced except near 1.552 µm, where the corrugation splits one resonance into a doublet, exactly the targeted effect.*

## Outcome

The rings were fabricated, but the team ultimately decided their **Q factor** wouldn't be high
enough for them to be useful, so the project wasn't taken further.

TODO: One line on what you learned or would change, for example what limited the Q.
