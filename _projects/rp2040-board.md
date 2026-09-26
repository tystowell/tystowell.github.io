---
title: RP2040 Industrial I/O Board
summary: Continuing my work at Harsch Systems, I designed two generations of an RP2040 industrial I/O board in KiCad, with 0–10 V and 4-20 mA input and output, along with optical isolation.
category: embedded
date: 2021-04-26
period: "2021"
status: Completed
role: Engineering Intern, Harsch Systems
tools: [KiCad, PCB design, Surface-mount design, Analog circuits, RP2040]
thumbnail: /assets/img/projects/rp2040-board/card.jpg
hero: /assets/img/projects/rp2040-board/smd-render.jpg
hero_alt: KiCad 3D render of the surface-mount RP2040 board, with the RP2040 chip at the center surrounded by passives, op-amps and connectors
hero_caption: "Version 2 of this design, the surface-mount board: the bare RP2040 (center) surrounded by the analog and digital I/O circuits."
links:
  - label: SMD board (v2)
    url: https://github.com/tyler-stowell/RP2040_SMD_Board
    icon: github
  - label: Through-hole board (v1)
    url: https://github.com/tystowell/RP2040_Board_KiCAD
    icon: github
  - label: Design notes
    url: https://github.com/tystowell/RP2040_Board_Design
    icon: github
---

## Overview

In my first project at HarschSystems, I had worked on device drivers to improve strict timing constraints for industrial applications. Now, my boss wanted to see if we could build our own architecture to cut costs and improve our system control.

In this project, I designed a board around the Raspberry Pi RP2040 microcontroller. The industrial systems we were looking at commonly worked with 0–10 V and 4-20 mA signals, none of which a 3.3 V microcontroller can handle directly. This board enables that control for the digital processor. I designed it twice: first as a through-hole carrier for a Raspberry Pi Pico module, then as a compact surface-mount board built around the bare RP2040 chip.

## Circuit Design

First, I had to learn a little more about circuit design. My boss had an additional requirement that he wanted optically isolated inputs (using PC817 optocouplers), and built in filters for analog control. Before doing any design, I prototyped the following subsystems:

1) **Analog outputs:** the Pico's PWM outputs were smoothed by active low-pass filters and scaled by LM324 op-amp stages into a **0–10 V** output or a **20 mA** current-loop output.
2) **Analog inputs:** a voltage divider, voltage follower and low-pass filter brought a **0–10 V** signal down to the ADC's 3.3 V range. A different stage converted the **4-20 mA** input.
3) **Digital I/O:** inputs and outputs were optically isolated with PC817 optocouplers, with BC337 transistor drivers on the outputs and status LEDs on every channel.
4) **Power:** the board ran from a **24 V** supply.

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/rp2040-board/board-render.jpg' | relative_url }}" alt="KiCad 3D render of the first, through-hole version of the board, with pads for a Raspberry Pi Pico">
    <figcaption>Version 1: a through-hole carrier board for a Raspberry Pi Pico module.</figcaption>
  </figure>
  <figure>
    <a href="{{ '/assets/img/projects/rp2040-board/schematic.png' | relative_url }}"><img src="{{ '/assets/img/projects/rp2040-board/schematic.png' | relative_url }}" alt="Full KiCad schematic of the version 1 board"></a>
    <figcaption>The version 1 schematic: the Pico in the center, with the analog and digital I/O subsystems around it. Click to enlarge.</figcaption>
  </figure>
</div>

## The final board

The second version dropped the whole Pico module and put the RP2040 chip directly on the board. This meant designing the support circuitry the Pico normally provides, such as the QSPI flash, crystal for the clock, a TPS56339 switching regulator for power, the USB for programming, and I2C connectors for auxilliary sensors.

The final designed board is shown below. Moving to surface-mount parts made it far more compact.

[![KiCad PCB layout of the surface-mount board, showing dense routing fanning out from the RP2040 at the center, wide power traces on the right and connectors along the edges]({{ '/assets/img/projects/rp2040-board/smd-layout.png' | relative_url }})]({{ '/assets/img/projects/rp2040-board/smd-layout.png' | relative_url }})
*The final version layout in KiCad. Signal traces fan out from the RP2040 at the center, the wide traces on the right carry power from the 24 V input, and the analog and digital I/O circuits line the connectors along the edges. Click to enlarge.*

I was unable to test the final board before I left, but I gave my boss good documentation and all the associated files to enable a prototype to be built in the future.