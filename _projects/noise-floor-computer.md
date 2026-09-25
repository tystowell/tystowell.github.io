---
title: Real-Time Noise Floor Computer
summary: My high school capstone project. It estimated the noise floor of real signals from the Daniel K. Inouye Solar Telescope (DKIST) in real time.
category: software
date: 2021-02-21
period: "2021"
status: Completed
role: High school capstone project
tools: [Java, Signal processing, Multithreading]
thumbnail: /assets/img/projects/noise-floor-computer/card.png
links:
  - label: Source
    url: https://github.com/tystowell/NoiseFloorComputer
    icon: github
---

## Overview

In High School, I was lucky to be connected with Erik Johansson, an engineer working on the adaptive optics system on the Daniel K. Inouye Solar Telescope (DKIST). He helped me work on a senior year capstone project to take real data from DKIST and compute the noise floor in real time. This project was both my introduction to signal processing and also an interesting multithreaded challenge to synchronize regular arrival of dataframes with periodic, large calculations of the system noise floor. It was also a chance to learn how to write code that fit into a bigger system, as it had to accept actual processed signals from the lenslet array of an adaptive optics wavefront sensor.

<figure>
  <img src="{{ '/assets/img/projects/noise-floor-computer/ao-comparison.png' | relative_url }}" alt="Three images of solar granulation: blurry with AO-76 off, sharp with AO-76 on, and sharper still with AO-76 plus speckle reconstruction">
  <figcaption>An image used to explain to me how the adaptive optics system on DKIST is able to clean up images of the sun.</figcaption>
</figure>

## How it works

<figure class="figure-inset">
  <img src="{{ '/assets/img/projects/noise-floor-computer/pipeline.png' | relative_url }}" alt="Flowchart: wavefront sensor lenslet array, subdivide into overlapping segments, constant detrending, Hamming window, discrete Fourier transform, convert to periodogram, compute average, estimate asymptote, integrate and square root, noise floor" style="width: min(100%, 200px);">
  <figcaption>The pipeline of the system I built, from collection of data to computation of the nosie floor.</figcaption>
</figure>

1) Incoming data is split into overlapping segments (for example, length 300 with 50% overlap), and each segment has its mean removed
2) A windowed periodogram is computed for each segment, with a Hamming window by default to reduce spectral leakage. 
3) The periodograms are averaged, and the noise floor is estimated from the asymptote of the spectrum, then integrated and square-rooted to give an RMS value.
4) The heavy computation runs on a seperate thread connected by queues, so data collection doesn't stall (which would miss samples)

## Results

![Top: X shift of one lenslet over 512 samples, fluctuating between about -18 and 34 mm. Bottom: its averaged power spectral density, with a large peak near zero frequency, smaller peaks near 10 and 32, and a flat floor beyond]({{ '/assets/img/projects/noise-floor-computer/results.png' | relative_url }})
The above figure is an example output from my system, both showing the low frequency atmospheric noise and the high frequency noise floor of the sample. The full system would report this noise floor over time.
