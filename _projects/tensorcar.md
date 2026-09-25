---
title: TensorCar
summary: Teaching a simulated car to drive a track with Q-learning in TensorFlow. An honest first attempt at reinforcement learning.
category: ml
date: 2020-04-13
period: "2020"
status: Partial success
tools: [Python, TensorFlow, NumPy, Pygame]
thumbnail: /assets/img/projects/tensorcar/tensorcar-card.png
hero: /assets/img/projects/tensorcar/track-sensors.png
hero_alt: Top-down view of the track showing the car's raycast sensors, velocity vector and numbered reward gates
hero_caption: "What the agent sees: 12 raycast distance sensors, its velocity, and numbered reward gates around the track."
links:
  - label: Source
    url: https://github.com/tystowell/TensorCar
    icon: github
---

## Overview

"Driving a car in the most convoluted possible way." A car in a Pygame track simulation learns
to steer using deep Q-learning implemented with TensorFlow.

## How it works

- **State:** 12 raycast sensors spaced every 30° measure the distance to the track walls. Together
  with the car's x and y velocity and its heading, they make **15 network inputs**.
- **Actions:** at each step the car chooses one of four actions: coast, steer left, steer right, or thrust.
- **Rewards:** the track is divided by numbered **reward gates**. Passing the next gate earns
  **+30**, and hitting a wall ends the run with **−60**.
- **Q-network:** two fully connected hidden layers of 50 ReLU units map the 15 inputs to a
  Q-value for each action, and the car takes the action with the highest value.

![Diagram of the Q-network: 15 sensor inputs, two dense layers of 50 ReLU units, and 4 output Q-values]({{ '/assets/img/projects/tensorcar/q-network.jpg' | relative_url }})
*One forward pass of the Q-network on the sensor reading above. Here "thrust" has the highest Q-value, so the car accelerates.*

## Results

It was my first attempt at Q-learning. The car completed a full lap a few times but usually
crashed between the first and second turns, and it drove slowly.

## What I'd change

- A **continuous reward function** instead of sparse rewards at the gates.
- A **time penalty** to encourage faster driving.
- Building up from simpler Q-learning problems first.
