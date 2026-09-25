---
title: Laser Tag System
summary: Built a working infrared laser tag system from the ground up as the major design project of BYU's electrical engineering junior core, including the optical transmitter and receiver board.
category: coursework
date: 2026-01-01
period: Jan – Apr 2026
status: Completed
role: Optical transmitter & receiver board design
tools: [KiCad, PCB design, Analog filters, Infrared optics]
thumbnail: /assets/img/projects/laser-tag/card.jpg
hero: /assets/img/projects/laser-tag/gun-side.jpg
hero_alt: The finished laser tag gun, a blue enclosure with a clear window showing the circuit boards inside, a lens tube on the front and a small display on the back
hero_caption: "The finished gun. The circuit boards are visible through the window, with the optics in the tube at the front and the game display on the back."
---

## Overview

The major design project of BYU's electrical engineering junior core: a complete laser tag
system built from the ground up, with each player's gun and receiver sending and detecting
infrared hits.

## Optical front end

The gun's optics board both fires and detects shots:

- **Transmitter:** the `TX` signal switches an LED through a VN2106 MOSFET to send the shot.
- **Receiver:** a BPW34 photodiode picks up incoming light. Two MCP6002 op-amp filter and
  amplifier stages clean up and boost its signal before it goes out on `RX`.
- **Supply filtering:** a filtered voltage network provides clean supply rails for the analog stages.

<div class="figure-row">
  <figure>
    <a href="{{ '/assets/img/projects/laser-tag/schematic.png' | relative_url }}"><img src="{{ '/assets/img/projects/laser-tag/schematic.png' | relative_url }}" alt="KiCad schematic of the optics board: LED transmitter, photodiode, voltage filter and two op-amp filter stages"></a>
    <figcaption>The optics board schematic: transmitter, photodiode, supply filter and two filter stages. Click to enlarge.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/laser-tag/optics-pcb.png' | relative_url }}" alt="KiCad PCB layout of the optics board">
    <figcaption>The board layout in KiCad.</figcaption>
  </figure>
</div>

## Results

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/laser-tag/gun-rear.jpg' | relative_url }}" alt="Rear of the laser tag gun, showing the grip, buttons, speaker holes and a display listing lives, hits and shots">
    <figcaption>The back of the gun: buttons, speaker and a display that tracks lives, hits and shots.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/laser-tag/scope-shot.png' | relative_url }}" alt="Oscilloscope capture of a received shot, with the time-domain signal in yellow and its FFT in pink">
    <figcaption>A shot received from across the room: the received signal (yellow) and its FFT (pink), which shows distinct frequency peaks.</figcaption>
  </figure>
</div>

## My contributions

TODO: Confirm your part (for example, designing the optics board with a partner), and add
anything else you built: firmware, hit detection, game logic.
