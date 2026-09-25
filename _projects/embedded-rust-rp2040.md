---
title: Embedded Rust on the Raspberry Pi Pico
summary: Brought up Rust firmware on the RP2040 microcontroller during a summer internship at Harsch Systems. There was no official SDK support, so I worked from the C SDK as a reference.
category: embedded
date: 2021-06-17
period: Summer 2021
status: Completed
role: Engineering intern, Harsch Systems
tools: [Rust, Embedded HAL, RP2040, Cortex-M]
thumbnail: /assets/img/projects/embedded-rust/card.png
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

<figure class="figure-inset">
  <img src="{{ '/assets/img/projects/embedded-rust/rp2040-pinout.png' | relative_url }}" alt="Pinout diagram of the RP2040 chip, showing GPIO, QSPI, USB, power and debug pins around a 56-pin package" style="width: min(100%, 320px);">
  <figcaption>The RP2040's 56 pins: 30 GPIO (four doubling as ADC inputs), QSPI flash, USB, power and debug. Every peripheral used here is reached through these pins and the registers behind them. Figure: Raspberry Pi RP2040 datasheet.</figcaption>
</figure>

## The embedded Rust stack

Embedded Rust splits the job of talking to hardware across several crates, from low-level
register access up to friendly hardware abstractions:

![Diagram of the embedded Rust crate stack, from board and HAL crates down through the micro-architecture and peripheral access crates to the microcontroller's hardware]({{ '/assets/img/projects/embedded-rust/rust-stack.png' | relative_url }})
*The embedded Rust stack, from high abstraction (left) to the hardware (right). The example microcontroller shown is an STM32F3, but the same structure applies to the RP2040. Figure: [The Embedded Rust Book](https://docs.rust-embedded.org/book/start/registers.html).*

- **Micro-architecture crate** (`cortex-m`): routines common to the core, like panic behavior.
- **Peripheral access crate** (`rp2040-pac`): raw, register-level access generated from the chip's SVD file.
- **Hardware abstraction layer** (`rp-hal`): turns register sequences into simple calls. For
  example, a single call to turn on an LED replaces a series of reset, pad and GPIO register writes.

I also wrote up a guide to this stack in the repository's README.

## Driving peripherals at the register level

I wrote test programs for **GPIO (blinky)**, the **ADC** and **PWM**, configuring each
peripheral register by register through the peripheral access crate: taking it out of reset,
selecting pin functions, and setting up clocks, counters and duty cycles. Here is the PWM setup,
which brings the peripheral out of reset and configures channel 0 for a 50% duty cycle:

```rust
// Take the PWM block out of reset, and wait for it
p.RESETS.reset.modify(|_, w| w.pwm().clear_bit());
while p.RESETS.reset_done.read().pwm().bit_is_clear() {}

pwm.ch0_div.write(|w| unsafe { w.int().bits(0x01u8) });           // Clock divider = 1
pwm.ch0_top.write(|w| unsafe { w.ch0_top().bits(0xffffu16) });    // Counter wraps at max
pwm.ch0_cc.write(|w| unsafe { w.a().bits(0x7fffu16) });           // 50% duty cycle
pwm.ch0_csr.write(|w| w.en().set_bit());                          // Enable the channel

io.gpio[0].gpio_ctrl.write_with_zero(|w| w.funcsel().pwm_a_0());  // Route PWM to GPIO 0
```

[All three examples are on GitHub](https://github.com/tystowell/embedded-rust-rp2040/tree/HEAD/examples).

TODO: What the firmware was ultimately used for at Harsch Systems.
