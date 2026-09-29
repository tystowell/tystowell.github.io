---
title: Semiconductor Device Fabrication in the Cleanroom
summary: On a team of four in BYU's cleanroom, I helped fabricate our own semiconductor devices from scratch, including a MOSFET, photodiodes, solar cells and a laser.
category: coursework
date: 2025-09-01
period: "2026"
status: Completed
role: "Team Member"
collaborators: Team of 4
tools: [Cleanroom fabrication, Semiconductor devices, Photolithography, Integrated optics]
thumbnail: /assets/img/projects/cleanroom-fabrication/card.jpg
---

## Overview

This was another class project that I had to include here. Actually, I didn't even have to take this class for my major. The second half of it, I had to request an add code for, and it didn't count towards my graduation. However, I had heard about this class and determined that it was one of the most interesting classes at BYU, so I took it just to learn more.

Over two semesters, I worked with a team of four in BYU's cleanroom to fabricate semiconductor devices, including a MOSFET, LED, photodiode, and laser. I want to show some of the results from a few of those projects here!

## MOSFET

<figure class="figure-float">
  <a href="{{ '/assets/img/projects/cleanroom-fabrication/mosfet-process.png' | relative_url }}"><img src="{{ '/assets/img/projects/cleanroom-fabrication/mosfet-process.png' | relative_url }}" alt="Process flow for the MOSFET: oxide growth, etch doping areas, dope source and drain, etch gate oxide, deposit oxide, etch source and drain vias, deposit and pattern metal, test with probes, each with a cross-section"></a>
  <figcaption>The MOSFET process flow, with a cross-section after each step: from oxide growth through doping, gate formation and metallization to probe testing. Click to enlarge.</figcaption>
</figure>

This class taught me a lot about how semiconductor devices work, both on the theoretical and experimental side. Our first-semester target was to create a MOSFET on silicon: growing an oxide, etching and doping the source and drain, etching back to form the gate oxide, opening vias, and depositing and patterning the metal contacts. We had a set of premade masks available to us and full access to the cleanroom to make it happen.

Our MOSFETs were likely the most successful in the class! The I–V curves were near ideal (with some channel length modulation higher than expected given the device parameters).

![Probe station: the microscope and probe arms over the wafer, a close-up of the probe tips, and a microscope view of the probes landed on a transistor's pads]({{ '/assets/img/projects/cleanroom-fabrication/mosfet-probing.jpg' | relative_url }})
*Testing the finished transistors on a probe station (left), with the probe tips on the wafer (center) and landed on a device's contact pads under the microscope (right).*

## Photodiodes

<figure class="figure-float">
  <a href="{{ '/assets/img/projects/cleanroom-fabrication/photodiode-process.png' | relative_url }}"><img src="{{ '/assets/img/projects/cleanroom-fabrication/photodiode-process.png' | relative_url }}" alt="Process flow for the photodiode over weeks 2 and 3: oxide growth, photolithography, oxide etching, spin-on-glass doping, aluminum evaporation, photolithography, aluminum etching and backside aluminum evaporation"></a>
  <figcaption>The photodiode process flow over two weeks: oxide growth, photolithography and etching, spin-on-glass (SOG) doping, then front and back aluminum contacts. Click to enlarge.</figcaption>
</figure>

The photodiodes started from an epitaxial wafer with an intrinsic silicon layer on P+ silicon. We grew an oxide, patterned it with photolithography, doped an N+ region with spin-on glass, then evaporated and patterned aluminum contacts on the front and back.

The photodiodes worked well! Our quantum efficiencies were not particularly high (though our measurement setup was also not particularly precise), but they were able to detect fairly low light levels from a distance.

![Photodiode test stand with labeled parts: the photodiode and probes under a microscope, white light and RGB light controls, an amplification stage, a multimeter measurement stage, and the microscope image of a ring-shaped device on a monitor]({{ '/assets/img/projects/cleanroom-fabrication/photodiode-test-stand.jpg' | relative_url }})
*The photodiode test stand: probes on the device under the microscope, controllable white and RGB illumination, and an amplification and measurement chain.*

## Laser

<figure class="figure-float">
  <a href="{{ '/assets/img/projects/cleanroom-fabrication/laser-process.png' | relative_url }}"><img src="{{ '/assets/img/projects/cleanroom-fabrication/laser-process.png' | relative_url }}" alt="Process flow for the laser over weeks 10 to 12: aluminum evaporation, photolithography, aluminum etching, backside aluminum evaporation, GaAs etching and testing"></a>
  <figcaption>The laser process flow over weeks 10–12, ending with probe testing (the red region is glow escaping through the cavity mode). Click to enlarge.</figcaption>
</figure>

This was the part of these classes that I was the most excited for. We built a laser from a III–V epitaxial wafer, using a GaAs substrate and InGaAlP multi-quantum-well gain region, clad by InAlP optical layers. We evaporated and patterned aluminum contacts, etched the GaAs contact layer into a stripe for optical confinement, and tested the finished devices.

![Layer structure of the laser wafer: a P++ and P+ GaAs contact layer, InGaP/InGaAlP/InAlP optical cladding layers, an InGaAlP gain region, and an N+ GaAs substrate, with layer thicknesses, simplified on the right]({{ '/assets/img/projects/cleanroom-fabrication/laser-layers.png' | relative_url }})
*The epitaxial layer structure (left), with thicknesses, and the simplified stack used in the process diagrams (right): contact, optical cladding, gain and substrate layers.*

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/cleanroom-fabrication/laser-probing.jpg' | relative_url }}" alt="A probe contacting the laser die on the probe station, with red light visible and a photodetector positioned beside it">
    <figcaption>Probing a laser die, with a photodetector positioned to collect its output.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/cleanroom-fabrication/laser-emission.jpg' | relative_url }}" alt="Microscope image of bright red emission along the laser's contact stripe">
    <figcaption>Red emission from the laser under the microscope.</figcaption>
  </figure>
</div>

It was a little bit debatable whether or not we actually hit the lasing threshold on our device. At high current, we did start to see our emission vs current plot spike slightly, but we couldn't push the current any higher in our setup to see if the trend continued. Regardless, this project was an incredible chance for me to see how laser diodes are actually built and operated.
