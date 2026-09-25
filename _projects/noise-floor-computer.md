---
title: Real-Time Noise Floor Computer
summary: High school capstone project. Estimates the noise floor of many signals in real time using averaged, windowed periodograms on a background thread.
category: software
date: 2021-02-21
period: "2021"
status: Completed
role: High school capstone project
tools: [Java, Signal processing, Multithreading]
links:
  - label: Source
    url: https://github.com/tystowell/NoiseFloorComputer
    icon: github
---

## Overview

A library that takes a stream of frames from a system producing several related signals and
continuously estimates each signal's noise floor. The signals come from the lenslet array of an
**adaptive optics** wavefront sensor, where each lenslet reports how far its spot has shifted.

<figure>
  <img src="{{ '/assets/img/projects/noise-floor-computer/AdaptiveOpticsExplained.png' | relative_url }}" alt="Three images of solar granulation: blurry with AO-76 off, sharp with AO-76 on, and sharper still with AO-76 plus speckle reconstruction">
  <figcaption>Why adaptive optics matters: the same patch of the Sun with the AO-76 system off, on, and on with speckle reconstruction. Image credit: W. Cao &amp; N. Gorceix.</figcaption>
</figure>

## How it works

<figure class="figure-inset">
  <img src="{{ '/assets/img/projects/noise-floor-computer/MySystemDiagram.png' | relative_url }}" alt="Flowchart: wavefront sensor lenslet array, subdivide into overlapping segments, constant detrending, Hamming window, discrete Fourier transform, convert to periodogram, compute average, estimate asymptote, integrate and square root, noise floor" style="width: min(100%, 200px);">
  <figcaption>The processing pipeline, from raw lenslet shifts to a noise floor estimate.</figcaption>
</figure>

- Incoming data is split into overlapping segments (for example, length 300 with 50% overlap),
  and each segment has its mean removed (constant detrending).
- A **windowed periodogram** is computed for each segment, with a Hamming window by default to
  reduce spectral leakage. The periodograms are averaged, and the noise floor is estimated
  from the asymptote of the spectrum, then integrated and square-rooted to give an RMS value.
- The heavy computation runs on a **separate worker thread** connected by queues, so data
  collection never stalls and no real-time samples are missed.

## Results

![Top: X shift of one lenslet over 512 samples, fluctuating between about -18 and 34 mm. Bottom: its averaged power spectral density, with a large peak near zero frequency, smaller peaks near 10 and 32, and a flat floor beyond]({{ '/assets/img/projects/noise-floor-computer/MySystemResults.png' | relative_url }})
*One lenslet's X shift over time (top) and its averaged power spectral estimate (bottom). The energy sits at low frequencies with a few distinct peaks; the flat tail above them is the noise floor the library estimates.*

TODO: What system was this built for, and what did the capstone involve?
