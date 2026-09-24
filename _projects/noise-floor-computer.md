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
continuously estimates each signal's noise floor.

## How it works

- Incoming data is split into overlapping segments (for example, length 300 with 50% overlap).
- A **windowed periodogram** is computed for each segment, with a Hamming window by default to
  reduce spectral leakage. The periodograms are averaged, and the noise floor is estimated
  from the asymptote of the spectrum.
- The heavy computation runs on a **separate worker thread** connected by queues, so data
  collection never stalls and no real-time samples are missed.

TODO: What system was this built for, and what did the capstone involve?
