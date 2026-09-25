---
title: Single-Wheel Robot
summary: A modular robot I built entirely from scratch as a summer control-systems project. It started as a roomba-style robot and converts into a single large wheel, split into two independently driven halves, in 5–10 minutes. I did everything, from the 3D design and printing to the power system, control and code.
category: robotics
date: 2025-06-01
period: Summer 2025
status: Completed
role: "Solo project: design, fabrication, electronics, control & software"
tools: [3D CAD, 3D printing, Power electronics, Control systems, Embedded programming]
thumbnail: /assets/img/projects/wheel-robot/card.jpg
---

## Overview

A summer project to get hands-on with control systems: a robot that, in its final form, is a
single large wheel, split down the middle into two halves that spin independently. I built every
part of it myself: the mechanical design, 3D printing, power system, control loop and software.

## Design

I designed every part in Fusion 360 and 3D-printed them.

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/wheel-robot/cad-roomba.jpg' | relative_url }}" alt="Fusion 360 model of the roomba-style chassis, with a central hub, drive wheel, curved bumper covers and an electronics bay">
    <figcaption>The roomba-style chassis in Fusion 360, with its drive wheel, bumper covers and electronics bay.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/wheel-robot/cad-frame.jpg' | relative_url }}" alt="Fusion 360 model of a circular frame with cross-shaped spokes, a central hub and mounting feet">
    <figcaption>Another view of the design: the circular frame, its spokes and central hub.</figcaption>
  </figure>
</div>

## Building it: electronics & power

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/wheel-robot/soldering.jpg' | relative_url }}" alt="Soldering iron held over the partly assembled robot on a lab bench, with its motors, driver boards and a LiPo battery nearby">
    <figcaption>Wiring the electronics into the printed chassis.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/wheel-robot/chassis-electronics.jpg' | relative_url }}" alt="The robot's black 3D-printed chassis with a LiPo battery, two DC gear motors and their motor driver boards mounted inside">
    <figcaption>The drivetrain and power system: a LiPo battery, two DC gear motors, their motor drivers and a voltage regulator.</figcaption>
  </figure>
</div>

TODO: The microcontroller, motors, sensors and power system.

## First version: roomba mode

The robot didn't start out as a wheel. My first version was a **roomba-style robot**: a
round, low chassis that drives on two wheels.

<figure class="figure-inset">
  <video src="{{ '/assets/img/projects/wheel-robot/roomba-mode.mp4' | relative_url }}" poster="{{ '/assets/img/projects/wheel-robot/roomba-mode-poster.jpg' | relative_url }}" autoplay muted loop playsinline controls preload="metadata" aria-label="Video of the robot in its roomba-style configuration driving on a carpeted floor"></video>
  <figcaption>The original roomba-style configuration, driving on carpet.</figcaption>
</figure>

## Final version: the wheel

Once roomba mode worked, I adapted it into the single-wheel design and kept the two
**modular**: switching between modes takes about 5–10 minutes of swapping parts.

TODO: What the controller does (for example, keeping the robot upright and steering by
driving the two halves at different speeds), how you tuned it, and what was hardest.

<figure class="figure-inset">
  <video src="{{ '/assets/img/projects/wheel-robot/spin.mp4' | relative_url }}" poster="{{ '/assets/img/projects/wheel-robot/spin-poster.jpg' | relative_url }}" autoplay muted loop playsinline controls preload="metadata" aria-label="Video of the wheel robot standing on its edge on a carpeted floor, spinning in place"></video>
  <figcaption>The final product: standing on its edge and spinning in place on its two halves.</figcaption>
</figure>
