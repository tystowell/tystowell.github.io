---
title: QRNG FPGA Control & Randomness Extraction
summary: Designed the FPGA system that digitizes a quantum random signal and turns it into certified random bits in real time with a hardware Toeplitz hasher.
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
  - label: Paper (arXiv:2412.02077)
    url: https://arxiv.org/abs/2412.02077
    icon: file
---

## Overview

This was one of my first two projects in BYU's CamachoLab, and it took place concurrently and on the same system as the other. Before I arrived, members of the group had been working on designs for a photonic integrated circuit and on-chip transimpedance amplifier that would allow for quantum-shot noise limited [homodyne detection](({{ '/work/homodyne-qrng/' | relative_url }})) with an exceptionally large signal to noise ratio. The first target application of this would be a quantum random number generator.

The challenge was that these vacuum measurement weren't uniformly random, and they were mixed with classical noise from the system as well. I was responsible for the entire classical side of the system - the amplifiers, ADCs, and postprocessing system that would allow us to confidently generate random numbers from a purely quantum source with confidence.

## QRNG theory

The most interesting part of this for me was the information theory side of the project. The signal from our homodyne measurement was the sum of two random gaussians, from both classical and quantum noise, and we needed to generate purely quantum random numbers. I spent a lot of time learning about how information entropy works, to answer questions from how we could isolate the quantum randomness to how the quantization introduced by the ADCs influenced the rate of bit generation. In the end, the min-entropy of our quantum distribution set how many truly random bits can be extracted from each sample.

![Left: histogram of raw samples following a Gaussian distribution. Right: the reduced, uniform distribution after extraction.]({{ '/assets/img/projects/toeplitz/extraction-distributions.png' | relative_url }})
*Extraction takes raw samples with a peaked, Gaussian distribution (left) and produces a shorter output that is uniformly distributed (right).*

### Toeplitz hashing in hardware

The main randomness extraction algorithm is done via an operating called Toeplitz hashing. In Toeplitz hashing, the raw bits are multiplied by a random binary matrix, with all arithmetic done modulo 2. In that arithmetic, multiplying bits is an **AND** and adding them is an **XOR**, so the whole hash reduces to a grid of simple logic gates, which is exactly what an FPGA does well. This is good, because the speeds at which we wanted to generate uniform quantum random numbers would not be possible on a normal computer.

![A 2×2 binary matrix multiplied by a vector modulo 2, next to the equivalent circuit of AND gates feeding XOR gates]({{ '/assets/img/projects/toeplitz/gf2-multiply.png' | relative_url }})
*A small example: the matrix product modulo 2 (left) and the same computation built from AND and XOR gates (right).*

### Simulation & implementation

Using a Basys3 board with built in ADCs, I made the full system design, verified it in simulation before running it on the board, and then synthesized and placed it on the Artix-7 in Xilinx Vivado. Below is a simulated example of one important operation of the chip - bootstrapping the Toeplitz hash matrix using an initial seed and quantum random numbers from the system. It was important to design the timing such that this bootstrap operation would not corrupt data actively being hashed.

![Vivado simulation waveform showing input data, hash results, the clock and the bootstrap control signal, with red and blue marks linking parts of the matrix register to results]({{ '/assets/img/projects/toeplitz/hasher-simulation.png' | relative_url }})
*Simulating the hasher in Vivado: input data, hash results, the clock and the bootstrap control signal. The red and blue marks link parts of the Toeplitz matrix register (left) to the results they produce (right).*

<figure class="figure-inset">
  <img src="{{ '/assets/img/projects/toeplitz/vivado-placement.png' | relative_url }}" alt="Vivado device view of the Artix-7 FPGA, with the design's logic placed across the chip" style="width: min(100%, 360px);">
  <figcaption>The synthesized design placed on the Artix-7, in Vivado's device view.</figcaption>
</figure>

## FPGA architecture

The system runs on a Basys3 board with a Xilinx **Artix-7** FPGA:

![Block diagram of the FPGA post-processing system]({{ '/assets/img/projects/toeplitz/fpga-block-diagram.png' | relative_url }})
*The FPGA design: the amplified quantum signal is digitized, buffered, hashed by a hardware Toeplitz extractor and streamed out over USB.*

- Digitization: the transimpedance amplifier's output is sampled by the FPGA's 12-bit XADC, clocked from a 100 MHz oscillator.
- Buffering:*a receive controller passes samples through an asynchronous FIFO, so no data is lost between clock domains.
- Extraction in hardware: a Toeplitz hasher built from a matrix constructor (seeded through a bootstrap control input), a multiplier and an accumulator compresses the raw samples into random output bits.
- Output: a transmit controller and USB controller stream the results to a host computer through an FT2232 USB chip.

This was also designed with testing in mind - based on the operational mode, the module could hash data from the ADCs or from the USB, and it could return values from the input or output of the hasher. This allowed us to run system tests, and it worked 100% of the time after 12+ hours of continuous operation.

## Randomness tests

The extracted output passes the full NIST SP 800-22 statistical test suite. As a check, the same tests failed without the quantum signal (that is, without the local oscillator and vacuum measurement). The randomness comes from the quantum measurement, not from the electronics.

<figure class="figure-inset">
  <a href="{{ '/assets/img/projects/toeplitz/nist-results.png' | relative_url }}"><img src="{{ '/assets/img/projects/toeplitz/nist-results.png' | relative_url }}" alt="Table of NIST SP 800-22 test p-values for the X, P and Z outputs, all above 0.01" style="width: min(100%, 300px);"></a>
  <figcaption>NIST SP 800-22 results for the three outputs (X̂, P̂, Ẑ), including the Random Excursions and Random Excursions Variant tests. Every p-value is above 0.01. Click to enlarge.</figcaption>
</figure>

Later, I also wrote a separate, heavily optimized C implementation of Toeplitz hashing to run very rapid tests on the FPGA system. It uses bit-level tricks to hash as fast as possible, which made quick checks of the hardware's output practical. [Code on GitHub](https://github.com/tystowell/ToeplitzAnalysis).

## Conclusion

This project was my first introduction to the world of experimental quantum optics! In another post, I describe the work I was able to do on the optics and hardware side of things, as well work done to deploy the system at Oak Ridge National Labs.

## Publication

C. Carver, J. Marchant, B. Fisher, N. Townsend, **T Stowell**, A. Barlow, B. Arnesen, S.-H. W. Chiang and R. M. Camacho, ["Integrated Differential Conjugate Homodyne Detection for Quantum Random Number Generation,"](https://arxiv.org/abs/2412.02077) arXiv:2412.02077 (2024).