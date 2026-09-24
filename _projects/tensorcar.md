---
title: TensorCar
summary: Teaching a simulated car to drive a track with Q-learning in TensorFlow. An honest first attempt at reinforcement learning.
category: ml
date: 2020-04-13
period: "2020"
status: Partial success
tools: [Python, TensorFlow, NumPy, Pygame]
links:
  - label: Source
    url: https://github.com/tystowell/TensorCar
    icon: github
---

## Overview

"Driving a car in the most convoluted possible way." A car in a Pygame track simulation learns
to steer using deep Q-learning implemented with TensorFlow.

## Results

It was my first attempt at Q-learning. The car completed a full lap a few times but usually
crashed between the first and second turns, and it drove slowly.

## What I'd change

- A **continuous reward function** instead of sparse rewards.
- A **time penalty** to encourage faster driving.
- Building up from simpler Q-learning problems first.

TODO: A GIF of the car driving would work well here.
