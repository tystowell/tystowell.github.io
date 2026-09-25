---
title: Linux Kernel Driver for Pi-Plates
summary: This was the first project of my first internship. I wrote a Linux kernel driver so a Raspberry Pi could drive Pi-Plates expansion boards.
category: embedded
date: 2020-06-24
period: "2020"
status: Completed
role: Engineering Intern, Harsch Systems
tools: [C, Linux kernel, SPI, GPIO]
thumbnail: /assets/img/projects/pi-plate-kernel-driver/card.jpg
hero: /assets/img/projects/pi-plate-kernel-driver/pi-and-plates.jpg
hero_alt: A Raspberry Pi surrounded by three green Pi-Plates expansion boards, laid out on a white countertop
hero_caption: "A Raspberry Pi (center) with three Pi-Plates expansion boards, including a DAQCplate (top right). The plates stack on the Pi's 40-pin header."
links:
  - label: Kernel driver
    url: https://github.com/Harsch-Systems/pi-plate-module
    icon: github
  - label: C library
    url: https://github.com/Harsch-Systems/pi-plate-io
    icon: github
---

## The problem

I worked under Mike Harsch at Harsch Systems for an internship that spanned most of the COVID era. He built industrial control systems that relied on a [raspberry pi plate add-on board](https://pi-plates.com/). Communication to these happened over the standard Python RPi.GPIO library. That normally works, but under heavier loads the library would force frequent, expensive context switches, which would sometimes cause it to miss strict timing requirements. My task was to move all of the I/O and the Pi-Plate protocol into the kernel, where the timing could be controlled.

I had never worked in kernel space, so this was a big learning experience for me. I relied heavily on the book *Linux Device Drivers* to learn how these things worked.

The finished module ([pi-plate-module](https://github.com/Harsch-Systems/pi-plate-module)) talks to the plates over SPI, manages acknowledge and interrupt GPIO lines, detects timing violations, exposes a device in the standard /dev folder, and was far more reliable than the previous implementation. It supports all the pi-plate devices, including newer ones that used slightly different timings and protocols.

## The C library

On top of the driver I wrote [pi-plate-io](https://github.com/Harsch-Systems/pi-plate-io), a user-space C library that wraps these kernel space commands to the pi-plates. These can read inputs and temperatures, drive relays and stepper motors, generate waveforms, and capturing oscilloscope style traces.
