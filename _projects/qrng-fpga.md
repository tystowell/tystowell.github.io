---
title: QRNG FPGA Control & Randomness Extraction
summary: Designed the FPGA system that digitizes a quantum random signal and turns it into certified random bits in real time with a hardware Toeplitz hasher, and did the entropy theory behind it.
category: photonics
date: 2022-01-01
period: Jan – Jul 2022
status: Completed
featured: true
role: FPGA design & QRNG theory
tools: [FPGA, Artix-7, Toeplitz hashing, Entropy estimation, C]
thumbnail: /assets/img/projects/toeplitz/fpga-board.jpg
hero: /assets/img/projects/toeplitz/fpga-board.jpg
hero_alt: Basys3 FPGA board with four SMA signal inputs and labeled control switches
hero_caption: "The QRNG's Basys3 FPGA board. Differential SMA inputs carry the X and P quadrature signals, and slide switches select the operating mode and which quadrature is sampled."
links:
  - label: Experimental side
    url: /work/homodyne-qrng/
    icon: arrow-right
  - label: Fast Toeplitz hashing (C)
    url: https://github.com/tystowell/ToeplitzAnalysis
    icon: github
  # - label: Paper
  #   url: TODO
  #   icon: file
---

## Overview

A quantum random number generator measures a truly random physical process, here the vacuum
noise seen by an [integrated homodyne detector]({{ '/work/homodyne-qrng/' | relative_url }}).
Raw measurements aren't uniformly random, though. They have to be digitized and passed through
a **randomness extractor** before they can be used. My main contribution to the QRNG paper was
all of that: the FPGA system and the theory behind it.

## FPGA architecture

The system runs on a Basys3 board with a Xilinx **Artix-7** FPGA:

![Block diagram of the FPGA post-processing system]({{ '/assets/img/projects/toeplitz/fpga-block-diagram.png' | relative_url }})
*The FPGA design: the amplified quantum signal is digitized, buffered, hashed by a hardware Toeplitz extractor and streamed out over USB.*

- **Digitization:** the transimpedance amplifier's output is sampled by the FPGA's 12-bit XADC, clocked from a 100 MHz oscillator.
- **Buffering:** a receive controller passes samples through an asynchronous FIFO, so no data is lost between clock domains.
- **Extraction in hardware:** a **Toeplitz hasher** built from a matrix constructor
  (seeded through a bootstrap control input), a multiplier and an accumulator compresses the raw samples into random output bits.
- **Output:** a transmit controller and USB controller stream the results to a host computer through an FT2232 USB chip.

TODO: Output bit rate, and any randomness test suites the output passed (e.g. NIST).

## QRNG theory

I did all of the theory work, including the **entropy calculations**. The raw samples follow a
Gaussian distribution, and the min-entropy of that distribution sets how many truly random bits
can be extracted from each sample. That number determines the output length of the Toeplitz hash.

![Left: histogram of raw samples following a Gaussian distribution. Right: the reduced, uniform distribution after extraction.]({{ '/assets/img/projects/toeplitz/extraction-distributions.png' | relative_url }})
*Extraction takes raw samples with a peaked, Gaussian distribution (left) and produces a shorter output that is uniformly distributed (right).*

## Follow-up: fast Toeplitz hashing in C

Later (2024), I wrote a separate, heavily optimized C implementation of Toeplitz hashing to run
very rapid tests on the FPGA system. It uses bit-level tricks to hash as fast as possible, which
made quick checks of the hardware's output practical.
[Code on GitHub](https://github.com/tystowell/ToeplitzAnalysis).
