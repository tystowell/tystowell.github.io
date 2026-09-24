---
title: Vision Navigation for FTC Robotics
summary: Phone-camera navigation for a FIRST Tech Challenge robot, correcting position estimates for the phone's viewing angle.
category: software
date: 2018-05-17
period: "2018"
status: Completed
tools: [Java, Vuforia, Android]
links:
  - label: Source
    url: https://github.com/tystowell/VuforiaNavigationRelic
    icon: github
---

## Overview

Navigation code for the 2017–18 FIRST Tech Challenge game *Relic Recovery*. The robot's phone
tracks image targets on the field with Vuforia. I derived a correction that factors the
phone's rotation out of the measured position, which gives more accurate results when the camera
sits at an angle to the target.

TODO: Your role on the team, and how the robot did.
