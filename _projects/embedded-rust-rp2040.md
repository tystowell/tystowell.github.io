---
title: Embedded Rust on the Raspberry Pi Pico
summary: Brought up Rust firmware on the RP2040 microcontroller during a summer internship at Harsch Systems. There was no official SDK support, so I worked from the C SDK as a reference.
category: embedded
date: 2021-06-17
period: Summer 2021
status: Completed
role: Engineering intern, Harsch Systems
tools: [Rust, Embedded HAL, RP2040, Cortex-M]
links:
  - label: Write-up & code
    url: https://github.com/tystowell/embedded-rust-rp2040
    icon: github
  - label: rp-hal (fork)
    url: https://github.com/tystowell/rp-hal
    icon: github
---

## Overview

The Raspberry Pi Foundation's SDK for the RP2040 is written in C, so running **Rust** on the
Pi Pico meant working through the embedded Rust stack directly. I used the C SDK as a reference
while debugging.

## The embedded Rust stack

- **Micro-architecture crate** (`cortex-m`): routines common to the core, like panic behavior.
- **Peripheral access crate** (`rp2040-pac`): raw, register-level access generated from the chip's SVD file.
- **Hardware abstraction layer** (`rp-hal`): turns register sequences into simple calls. For
  example, a single call to turn on an LED replaces a series of reset, pad and GPIO register writes.

I also wrote up a guide to this stack in the repository's README.

TODO: What you got running (peripherals, drivers) and what it was used for.
