---
title: RP2040 Industrial I/O Board
summary: Designed two generations of an RP2040 industrial I/O board in KiCad, with 0–10 V and current-loop analog I/O and isolated digital I/O. The second version places the bare RP2040 chip directly on a compact surface-mount board.
category: embedded
date: 2021-04-26
period: Apr – Aug 2021
status: Completed
role: Engineering intern, Harsch Systems
tools: [KiCad, PCB design, Surface-mount design, Analog circuits, RP2040]
thumbnail: /assets/img/projects/rp2040-board/card.jpg
hero: /assets/img/projects/rp2040-board/smd-render.jpg
hero_alt: KiCad 3D render of the surface-mount RP2040 board, with the RP2040 chip at the center surrounded by passives, op-amps and connectors
hero_caption: "Version 2, the surface-mount board: the bare RP2040 (center) with its own flash, crystal, switching regulator, USB and Qwiic connector, surrounded by the analog and digital I/O circuits."
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

A board that lets the Raspberry Pi RP2040 microcontroller talk to industrial equipment.
Industrial systems commonly signal with 0–10 V and current-loop analog levels and 24 V logic,
none of which a 3.3 V microcontroller can handle directly. The board translates between the two.
I designed it twice: first as a through-hole carrier for a Raspberry Pi Pico module, then as
a compact surface-mount board built around the bare RP2040 chip.

## Version 1: Pi Pico carrier board

- **Analog outputs:** the Pico's PWM outputs are smoothed by active low-pass filters and scaled
  by LM324 op-amp stages into a **0–10 V** output and a **20 mA** current-loop output.
- **Analog inputs:** a voltage divider, voltage follower and low-pass filter bring a **0–10 V**
  signal down to the ADC's 3.3 V range. A second stage converts a **20 mA** current-loop input.
- **Digital I/O:** inputs and outputs are **optically isolated** with PC817 optocouplers, with
  BC337 transistor drivers on the outputs and status LEDs on every channel.
- **Power:** runs from a **24 V** supply.

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

## Version 2: surface-mount board

The second version (July – August 2021) drops the Pico module and puts the **RP2040 chip
directly on the board**, which meant designing the support circuitry the Pico normally
provides:

- **QSPI flash** (W25Q32JV) for program storage, and a **crystal** for the clock.
- **Power:** a TPS56339 **switching regulator** steps the industrial supply down efficiently,
  followed by a 3.3 V LDO for the logic.
- **USB** for programming, a boot button, and test points.
- A **Qwiic I²C connector** for plugging in sensors.

[![KiCad PCB layout of the surface-mount board, showing dense routing fanning out from the RP2040 at the center, wide power traces on the right and connectors along the edges]({{ '/assets/img/projects/rp2040-board/smd-layout.png' | relative_url }})]({{ '/assets/img/projects/rp2040-board/smd-layout.png' | relative_url }})
*The version 2 layout in KiCad. Signal traces fan out from the RP2040 at the center, the wide traces on the right carry power from the 24 V input, and the analog and digital I/O circuits line the connectors along the edges. Click to enlarge.*

Moving to surface-mount parts made the board far more compact. Routing it meant working out
trace widths for the power and analog paths and adding vias for heat dissipation. Late in
routing I caught that the optocoupler on the 24 V outputs wasn't rated high enough for that
voltage.

TODO: How the optocoupler issue was resolved, and whether either board was fabricated and tested.
