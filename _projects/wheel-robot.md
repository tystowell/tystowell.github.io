---
title: Single-Wheel Robot
summary: As a summer project, I built a modular robot from scratch. I modeled and 3d printed the parts, built the power electronics, and programmed it from scratch. The design is modular, allowing for two different modes of operation.
category: robotics
date: 2025-06-01
period: "2025"
status: Completed
role: "Solo project: design, fabrication, electronics, control & software"
tools: [3D CAD, 3D printing, Power electronics, Control systems, Embedded programming]
thumbnail: /assets/img/projects/wheel-robot/card.jpg
---

## Overview

If I hadn't decided to go into quantum photonics, there's a good chance I'd have done robotics instead. There's something immensely satisfying about building something from scratch and having complete ownership of it, and then watching it do something really cool!

The idea for this started a long time ago. Several years ago, I had the idea for a robot that looked like a single wheel but could drive around. It seemed like a challenging project that would be such a cool product, and this summer, I decided I was going to build it.

## Design

I designed every part in Fusion 360 from scratch. I wanted an initial version that was a little simpler, so I designed a chassis that was modular and could serve as a roomba while I practiced the basic robotics skills needed to build it.

<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/wheel-robot/cad-roomba.jpg' | relative_url }}" alt="Fusion 360 model of the roomba-style chassis, with a central hub, drive wheel, curved bumper covers and an electronics bay">
    <figcaption>The roomba-style chassis in Fusion 360</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/wheel-robot/cad-frame.jpg' | relative_url }}" alt="Fusion 360 model of a circular frame with cross-shaped spokes, a central hub and mounting feet">
    <figcaption>Another view of the design, focusing on how a single half of the wheel would integrate onto the main chassis (later versions of the outer wheel had inner ridges to be driven by a gear). </figcaption>
  </figure>
</div>

## Electronics

The electronics were the part I felt more confident on. Using a LIPO battery, a buck converter, and a couple of H-bridges, I created both the 12 V rail needed for the motors and the 5 V logic rail for the raspberry pi. The wiring wasn't too difficult either, and when possible, I tried to solder things in place (as opposed to breadboard wiring) to reduce complexity.
<div class="figure-row">
  <figure>
    <img src="{{ '/assets/img/projects/wheel-robot/soldering.jpg' | relative_url }}" alt="Soldering iron held over the partly assembled robot on a lab bench, with its motors, driver boards and a LiPo battery nearby">
    <figcaption>Wiring the electronics into the printed chassis.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/wheel-robot/chassis-electronics.jpg' | relative_url }}" alt="The robot's black 3D-printed chassis with a LiPo battery, two DC gear motors and their motor driver boards mounted inside">
    <figcaption>The final electronics, including DC motors, a buck converter, a LIPO battery, and 2 H-bridges. The raspberry pi is also mounted on the backside.</figcaption>
  </figure>
</div>

## First version: roomba mode

The first version worked great! It could drive around using the two motors directly attached to wheels.

<figure class="figure-inset">
  <video src="{{ '/assets/img/projects/wheel-robot/roomba-mode.mp4' | relative_url }}" poster="{{ '/assets/img/projects/wheel-robot/roomba-mode-poster.jpg' | relative_url }}" autoplay muted loop playsinline controls preload="metadata" aria-label="Video of the robot in its roomba-style configuration driving on a carpeted floor"></video>
  <figcaption>The original roomba-style configuration, driving on carpet.</figcaption>
</figure>

## Final version: the wheel

Once roomba mode worked, I started adapting the design. Instead of connecting the motor shafts directly to wheels, they attached to gears that drove inner ridges on larger wheels that fit around the entire chassis. Using the same motors, that allowed for independent control of two halves of a large wheel. The central chassis would then rest inside, free to spin up / down along the interior of the wheel for acceleration.

<figure class="figure-inset">
  <video src="{{ '/assets/img/projects/wheel-robot/spin.mp4' | relative_url }}" poster="{{ '/assets/img/projects/wheel-robot/spin-poster.jpg' | relative_url }}" autoplay muted loop playsinline controls preload="metadata" aria-label="Video of the wheel robot standing on its edge on a carpeted floor, spinning in place"></video>
  <figcaption>The final product: a single wheel that can drive around and turn in place. </figcaption>
</figure>

## Lessons Learned

This was an awesome project! The only regret I have is that the semester started, and some research deadlines came up, and I wasn't able to work on the active control system that I wanted to make for this. I think integrating a gyroscope would have let me smooth out the acceleration and driving signficantly. I still have the working robot, so that will likely be a future project when I have time again.