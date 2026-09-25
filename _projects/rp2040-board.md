---
title: RP2040 Industrial I/O Board
summary: Designed a custom Raspberry Pi Pico (RP2040) carrier board in KiCad with 0–10 V and current-loop analog I/O and optically isolated digital I/O, during a summer internship at Harsch Systems.
category: embedded
date: 2021-04-26
period: Spring – Summer 2021
status: Completed
role: Engineering intern, Harsch Systems
tools: [KiCad, PCB design, Analog circuits, RP2040]
thumbnail: /assets/img/projects/rp2040-board/board-render.jpg
hero: /assets/img/projects/rp2040-board/board-render.jpg
hero_alt: 3D render of the RP2040 I/O board in KiCad
hero_caption: "KiCad 3D render of the board. The Raspberry Pi Pico mounts on the pads at the front, and power comes in through the barrel jack or the 24 V header."
links:
  - label: KiCad files
    url: https://github.com/tystowell/RP2040_Board_KiCAD
    icon: github
  - label: Design notes
    url: https://github.com/tystowell/RP2040_Board_Design
    icon: github
---

## Overview

A carrier board for the Raspberry Pi Pico (RP2040) that lets it talk to industrial equipment.
Industrial systems commonly signal with 0–10 V and current-loop analog levels and 24 V logic,
none of which a 3.3 V microcontroller can handle directly. The board translates between the two.

## Circuit design

- **Analog outputs:** the Pico's PWM outputs are smoothed by active low-pass filters and scaled
  by LM324 op-amp stages into a **0–10 V** output and a **20 mA** current-loop output.
- **Analog inputs:** a voltage divider, voltage follower and low-pass filter bring a **0–10 V**
  signal down to the ADC's 3.3 V range. A second stage converts a **20 mA** current-loop input.
- **Digital I/O:** inputs and outputs are **optically isolated** with PC817 optocouplers, with
  BC337 transistor drivers on the outputs and status LEDs on every channel.
- **Power:** runs from a **24 V** supply.

[![Full KiCad schematic of the board]({{ '/assets/img/projects/rp2040-board/schematic.png' | relative_url }})]({{ '/assets/img/projects/rp2040-board/schematic.png' | relative_url }})
*The top-level schematic: the Pico in the center, analog and digital I/O subsystems around it, and detail of each circuit block around the edges. Click to enlarge.*

TODO: A line on whether the board was fabricated and tested.
