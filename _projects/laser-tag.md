---
title: Laser Tag System
summary: As part of BYU's electrical engineering junior core, I built a working laser tag system from the ground up, including the optical transmitter and receiver board.
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

This project is a little bit different, because unlike most of the other projects I chose to highlight here, I did this one as part of a class at BYU. I mostly tried to avoid including class projects on this website, but a couple of projects in particular were too cool to ignore. This was the big junior core project at BYU, where all electrical and computer engineers have to built their own laser tag unit.

## Optical front end

This project was done in a team of 2, and I was able to team with a good friend of mine. The first part of the project was to design an optical transceiver board with the highest signal to noise ratio possible. We managed to scrape by in the top 10% of the class, so we were very happy with our design and build.

- Transmitter: An LED with PWM control to transmit on different channels, representing different teams.
- Receiver: A photodiode picks up incident light and amplifies the signal. One of the hardest challenges was isolating LED noise on the power supply from this amplifier.
- Supply filtering: The filter on the op amp supply had to be good enough that we wouldn't rail anytime the LED was fired.

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

## The Unit

The second part of the project was working on the laser unit, including embedded programming and finite impulse response filters. We also had to code all of the game logic to interface with other units made by other teams.

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/laser-tag/gun-rear.jpg' | relative_url }}" alt="Rear of the laser tag gun, showing the grip, buttons, speaker holes and a display listing lives, hits and shots">
    <figcaption>The back of the gun: buttons, speaker and a display that tracks lives, hits and shots.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/laser-tag/scope-shot.png' | relative_url }}" alt="Oscilloscope capture of a received shot, with the time-domain signal in yellow and its FFT in pink">
    <figcaption>Here, we show the oscilloscope capture of a signal sent by one gun and received at a distance of around 30 feet.</figcaption>
  </figure>
</div>

## Results

The main reason I enjoyed this project was that it was an opportunity to work on an embedded system and bring it together into a final project. And I think it was just super cool too! If I learned anything, it's how I would design PCBs, 3d printed cases and power management to build an actual product that I would sell to people. And, of course, I had some practice playing laser tag when it was all done haha.