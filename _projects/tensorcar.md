---
title: TensorCar
summary: This was the culmination of several months worth of trying to teach myself machine learning. I wanted to teach a simulated car to drive a track with Q-learning in TensorFlow.
category: ml
date: 2020-04-13
period: "2020"
status: Partial success
tools: [Python, TensorFlow, NumPy, Pygame]
thumbnail: /assets/img/projects/tensorcar/tensorcar-card.png
hero: /assets/img/projects/tensorcar/track-sensors.png
hero_alt: Top-down view of the track showing the car's raycast sensors, velocity vector and numbered reward gates
hero_caption: "The model sees 12 raycast distances, the car velocity, and the reward gates around the track."
links:
  - label: Source
    url: https://github.com/tystowell/TensorCar
    icon: github
---

## Overview

When I learned that Google's DeepMind could beat a human at Go, it felt like magic to me. I spent the next several months trying to teach myself machine learning. I don't include all of those attempts here (I did demos ranging from simple fully connected networks for digit recognition to convolutional neural networks), but the culmination of this was to try and build my own Q-learning reward based model.

## How it works

First, I built a simple racing game in python. Once I got the controls working for myself, I then moved into building the model that I could train to beat it.

I wrote a script that gave me 12 raycast distance sensors (every 30 degrees) so the car would know where it was relative to surrounding walls. I also gave it the current velocity and heading, making for 15 network inputs. Then, I defined the outputs - coast, steer left, steer right, and thrust.

For rewards, I made a series of gates that it had to pass, as well as a punishment for hitting the walls and for taking too much time. The network itself had two fully connected layers with 50 nodes and ReLU activation.

![Diagram of the Q-network: 15 sensor inputs, two dense layers of 50 ReLU units, and 4 output Q-values]({{ '/assets/img/projects/tensorcar/q-network.jpg' | relative_url }})
*One forward pass of the Q-network on the sensor reading above. Here "thrust" has the highest Q-value, so the car accelerates.*

## Results

This was my first attempt at Q-learning. If my goal was to understand how it works, then it was a big success haha. If the goal was to make the car drive, less so. It managed to complete a full loop a few times, but was shaky and sometimes would crash partway through instead. It definitely did improve, but not by a lot. I imagine a continuous reward function and better tuning of the time penalty, along with more training, could have improved this significantly.

If I learned a lesson, it's this - machine learning can rise or fall on the smallest parameter tunings. It's not easy! But it is really cool.