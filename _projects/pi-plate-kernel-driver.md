---
title: Linux Kernel Driver for Pi-Plates
summary: Wrote a Linux kernel driver and companion C library so a Raspberry Pi could reliably drive Pi-Plates expansion boards under heavy load, replacing a Python GPIO approach that missed the boards' strict timing requirements.
category: embedded
date: 2020-06-24
period: Summer 2020
status: Completed
role: Engineering intern, Harsch Systems
tools: [C, Linux kernel, SPI, GPIO, Device tree]
# thumbnail / hero: add your own photo of a Pi with a plate attached
links:
  - label: Kernel driver
    url: https://github.com/Harsch-Systems/pi-plate-module
    icon: github
  - label: C library
    url: https://github.com/Harsch-Systems/pi-plate-io
    icon: github
---

## The problem

Harsch Systems' Raspberry Pis communicated with [Pi-Plates](https://pi-plates.com/) expansion
boards through the Python `RPi.GPIO` library. That normally works, but under heavy load it
broke down: the library forced frequent, expensive context switches, and the program's many
delays left it exposed to being taken off the processor long enough to miss the plates' strict
timing requirements. My task was to move all of the I/O and the Pi-Plate protocol **into the
kernel**, where the timing could be controlled.

## Learning kernel development

I had never worked in kernel space, so I started by reading *Linux Device Drivers* and
working through its example projects. My first driver was deliberately simple: controlling an
LED with a button, but written as a kernel module driven by **interrupts**.

## The driver

The finished module ([pi-plate-module](https://github.com/Harsch-Systems/pi-plate-module)):

- **Talks to the plates over SPI**, managing the frame, acknowledge and interrupt GPIO lines
  the protocol depends on. Plates that signal "ready" on an acknowledge pin (DAQC2, TINKER,
  THERMO) and plates that don't (DAQC, RELAY, MOTOR) are both supported.
- **Detects timing violations:** if the process is descheduled for too long in the middle of a
  transfer, the driver notices and restarts the transaction instead of returning bad data.
- **Exposes a character device** that user programs call with a single `ioctl` command, with a
  mutex so concurrent programs can't interleave transactions.
- **Loads through a device tree overlay** and has a configurable debug-logging level.

## The C library

On top of the driver I wrote [pi-plate-io](https://github.com/Harsch-Systems/pi-plate-io), a
user-space C library that wraps each plate's commands: reading inputs and temperatures,
driving relays and stepper motors, generating waveforms, and capturing two-channel
oscilloscope traces.

*This work was done under a separate GitHub account (`tyler-stowell`) and lives in the Harsch
Systems organization.*

TODO: Did the driver go into production use, and how much did it improve reliability?
