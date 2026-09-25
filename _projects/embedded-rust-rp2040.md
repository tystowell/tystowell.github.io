---
title: Embedded Rust on the Raspberry Pi Pico
summary: I worked on implementing a Rust compiler for the RP2040 microcontroller during a summer internship at Harsch Systems. There was no official SDK support, so I worked from the C SDK as a reference, which was very helpful.
category: embedded
date: 2021-06-17
period: "2021"
status: Completed
role: Engineering Intern, Harsch Systems
tools: [Rust, Embedded HAL, RP2040]
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

This was my last project at HarschSystems before I left for college, and it was probably the most difficult as well. The Raspberry Pi Foundation's SDK for the RP2040 was written in C, but my boss wanted to be able to run Rust. This meant bringing up the embedded Rust stack directly, since at the time the RP2040 was new and unsupported (now, Rust is supported on the RP2040). I used the C SDK as a reference.

<figure class="figure-inset">
  <img src="{{ '/assets/img/projects/embedded-rust/rp2040-pinout.png' | relative_url }}" alt="Pinout diagram of the RP2040 chip, showing GPIO, QSPI, USB, power and debug pins around a 56-pin package" style="width: min(100%, 320px);">
  <figcaption>The RP2040's 56 pins: 30 GPIO (four doubling as ADC inputs), QSPI flash, USB, power and debug. Every peripheral used is reached through these pins and the registers behind them. Figure: Raspberry Pi RP2040 datasheet.</figcaption>
</figure>

## The embedded Rust stack

Trying to get Embedded Rust working on the RP2040 was incredibly difficult, and I only managed to implement a few peripherals before I finished. The Embedded Rust crate stack splits the job of talking to hardware across several crates, from low-level register access up to friendly hardware abstractions.

![Diagram of the embedded Rust crate stack, from board and HAL crates down through the micro-architecture and peripheral access crates to the microcontroller's hardware]({{ '/assets/img/projects/embedded-rust/rust-stack.png' | relative_url }})
*The embedded Rust stack, from high abstraction (left) to the hardware (right). The example microcontroller shown is an STM32F3, but the same structure applies to the RP2040. Figure: [The Embedded Rust Book](https://docs.rust-embedded.org/book/start/registers.html).*

## Register level control

I wrote test programs for GPIO pins, the ADC, and PWM control, configuring each peripheral register by register directly via the peripheral access crate. This involved taking it out of reset, selecting pin functions, and setting up clocks, counters and duty cycles.

As an example of the code I had to write, here is the PWM setup, which brings the peripheral out of reset and configures channel 0 for a 50% duty cycle (note that I referred frequently to the official C SDK to understand the correct ordering here)

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

This project only lasted a short time of my total duration at HarschSystems. In the end, I left my boss with some working examples that had been tested on an RP2040 and some documentation with a guide of how to proceed.