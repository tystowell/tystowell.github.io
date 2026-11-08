---
title: Predicting Quantum Simulation Runtime with MPS Probes
summary: First place in the Quantum Rings challenge at the 2026 Intermountain Quantum Competition. I led a team of four that predicted how long a tensor-network simulator would take on a circuit by running a tiny, budgeted MPS simulation of it first. We scored 93.8% on the hidden hold-out set.
category: competition
date: 2026-11-06
period: November 2026
status: 1st place
featured: true
role: Team lead
collaborators: Emma, Matthew and Amelia (teammates)
tools: [Python, NumPy, Tensor networks (MPS), scikit-learn]
links:
  - label: Code
    url: https://github.com/tystowell/IQC-TeamABC
    icon: github
  - label: Devpost
    url: https://devpost.com/software/quantum-circuit-simulation-runtime-prediction-with-mps-probe
    icon: external
thumbnail: /assets/img/projects/quantum-rings-runtime/card.png
hero: /assets/img/projects/quantum-rings-runtime/probe-poster.png
hero_video: /assets/img/projects/quantum-rings-runtime/probe.mp4
hero_alt: Animation of the MPS circuit probe running on a 50-qubit circuit. The bond dimension at each cut of the chain fills up to the cap of 8, the recent two-qubit gates scroll past, and the weight discarded by each SVD update is traced out.
hero_caption: "The circuit probe running on a 50-qubit training circuit at bond dimension χ = 8. Top left: the bond dimension at each cut of the qubit chain, which fills to the cap almost everywhere. Bottom left: the two-qubit gates being applied, with the current one in amber. Right: the weight thrown away by each truncated SVD. 85% of the SVD updates exceeded χ = 8. This is the kind of signal the model uses to tell an expensive circuit from a cheap one."
---

## Overview

The first [Intermountain Quantum Competition](https://iqc.devpost.com/project-gallery) was a 24-hour hackathon at BYU on November 6–7, 2026. I took the Quantum Rings challenge and formed a team with three people I met at the event, Emma, Matthew and Amelia, and I led the team.

The challenge was to take a quantum circuit (an OpenQASM file) and a simulator setting called the `threshold`, and predict how long Quantum Rings' simulator would take to run it, without running it. The training set had 532 circuits, each run at five thresholds from 16 to 1024. Runtimes ranged from 0.15 seconds to the 6-hour cap, and the prediction had to take under 15 seconds per circuit. Each prediction was scored on a log scale as 1 − &#124;log₁₀(predicted / actual)&#124;, so being off by 2× costs the same at one second as at one hour.

We won first place. Our model scored **93.8% on the hidden hold-out circuits**, the top score in the challenge. For comparison, the organizers' own reference model scored 77.9% and predicting the median runtime scored 27.4%.

## Why simple counts don't work

The obvious features are how big the circuit is: how many lines, qubits, or two-qubit gates it has. None of them predict runtime well. Circuits with the same number of qubits can differ in runtime by up to five orders of magnitude.

[![Three scatter plots of runtime against QASM line count, qubit count and two-qubit gate count, each showing a wide spread]({{ '/assets/img/projects/quantum-rings-runtime/simple-features.png' | relative_url }})]({{ '/assets/img/projects/quantum-rings-runtime/simple-features.png' | relative_url }})
*Runtime at threshold 16 against QASM line count, qubit count and two-qubit gate count (526 completed runs). Runtime rises roughly with each, but the spread at any given size is several orders of magnitude.*

The reason is that the simulator stores the state as a tensor network, so its cost depends on how much entanglement the circuit builds up, not on how big the circuit is. A 250-qubit circuit that barely entangles can be cheap, while a circuit with a few dozen qubits that entangles everything can run for hours.

## Background: matrix product states

A matrix product state (MPS) stores an *n*-qubit state as a chain of small tensors, one per qubit, instead of 2ⁿ amplitudes. The bond between two neighboring tensors has a dimension χ, which sets how much entanglement can exist across that cut. A cut with bond dimension χ can hold at most log₂ χ bits of entanglement.

![Diagram comparing a three-qubit state vector with eight amplitudes to a matrix product state of three tensors joined by bonds of dimension 2]({{ '/assets/img/projects/quantum-rings-runtime/mps.png' | relative_url }})
*A full state vector (left) against the same state as a matrix product state (right). Contracting the bonds recovers every amplitude. For weakly entangled states the bonds stay small, so the storage grows linearly with qubit count instead of exponentially.*

A two-qubit gate is applied by merging the two neighboring tensors, applying the gate, and splitting them again with a singular value decomposition (SVD). Each SVD costs roughly χ³, and if more than χ singular values survive, the smallest are discarded. The simulator's runtime therefore depends on how large the bonds grow, and on how many SVDs are done at that size. We treated the threshold as the cap on bond dimension, and the cost formula below is built on that assumption.

## The MPS probe

Rather than guess from the circuit's structure how large the bonds would grow, we simulated the circuit, very cheaply. The probe runs a real MPS simulation at a tiny bond dimension, χ = 8 and χ = 16, far below the simulator's thresholds of 16 to 1024. Its output state is discarded and its accuracy doesn't matter. What matters is the singular values it computes along the way, which show whether the circuit's entanglement grows, levels off, or shrinks again.

From each probe we kept a handful of numbers:

- the entanglement entropy at each cut of the chain, at its peak and at the end;
- the fraction of cuts that reached the χ cap, and the share of SVD updates that had to truncate;
- how much weight each truncation threw away;
- whether the average entanglement was still rising over the second half of the run or had leveled off.

A circuit that fills χ = 8 almost immediately and keeps discarding weight, like the one at the top of this page, will keep growing at the real thresholds. A circuit whose entanglement stays low or levels off will stay cheap.

### Making it fit in 15 seconds

The full prediction had to finish in 15 seconds for every circuit, including circuits that were 200 MB of QASM. A few choices made that possible:

- **A work budget instead of a timer.** Each SVD is charged by its size, and the probe stops when it has spent a fixed budget. A timer would make the features depend on how fast the machine is. With a budget, the same circuit always gives the same features.
- **Merging gates.** Consecutive gates on the same pair of qubits are combined into one update. If the combined gate turns out not to entangle (operator Schmidt rank 1), it is split back into two single-qubit gates, with no SVD needed. Both steps are exact.
- **Skipping product states.** A gate between two qubits that are still unentangled is applied to their single-qubit states directly whenever the result stays a product state. This needs no swaps, and lets the probe get much further through wide circuits that stay mostly unentangled.
- **Long-range gates by swapping.** A gate between distant qubits moves one next to the other with swaps, applies the gate, and swaps back.

The probe skips measurement and reset, so it overestimates circuits that measure and reset qubits mid-circuit. That shows up in the error breakdown below.

## From probe to runtime

The predictor combines a fitted cost formula with tree ensembles (scikit-learn extra-trees) that correct it and predict the runtime directly. The probe's numbers feed both.

![Fitted runtime formula: a startup constant, plus a term summing the capped bond dimension raised to the power 2.17, plus terms for measurement, swaps and resets scaled by probe entanglement]({{ '/assets/img/projects/quantum-rings-runtime/formula.png' | relative_url }})
*The fitted cost formula. The largest term sums, over the cuts that each gate crosses, the estimated bond dimension capped at the threshold. Two of the terms are scaled by entanglement that the probe measured.*

Alongside the probe, a faster analysis of the circuit's structure estimates the entanglement at each cut. A short set of rules flags circuits that will clearly run past the 6-hour cap.

Adding the two small probes was the largest single improvement we made, about **10 points** on our validation score. We also tried larger probes (χ = 64 to 128), but they took up to 56 seconds per circuit, well over the limit. Starting the probe partway into the circuit gave no gain.

## Results

<figure class="figure-inset">
  <a href="{{ '/assets/img/projects/quantum-rings-runtime/predicted-vs-actual.png' | relative_url }}"><img src="{{ '/assets/img/projects/quantum-rings-runtime/predicted-vs-actual.png' | relative_url }}" alt="Log-log scatter plot of predicted against actual runtime from 0.1 seconds to 6 hours, with points clustered tightly along the diagonal"></a>
  <figcaption>Predicted against measured runtime on validation circuits the model never saw, colored by threshold (lighter is higher). The shaded band is within 2× of the true runtime, which held for 91% of runs. Hollow circles are runs that timed out, so their true runtime is the 6-hour cap.</figcaption>
</figure>

Before the hold-out set was released, we checked the model three ways, from easiest to hardest:

| Held out during validation | Score |
|---|---|
| A random 20% of circuits | 90.3% |
| Groups of similar circuits | 87.8% |
| Whole gate-set families | 70.9% |

On the organizers' hidden hold-out set, the model scored **93.8%**.

[![Bar chart of where the remaining 9.7 points of error come from, led by sub-second runs at 2.89 points]({{ '/assets/img/projects/quantum-rings-runtime/error-budget.png' | relative_url }})]({{ '/assets/img/projects/quantum-rings-runtime/error-budget.png' | relative_url }})
*Where the remaining 9.7 points of validation error come from. The biggest share is very short runs, which we predicted slightly too slow. Next come circuits where the probe got through less than half the circuit before its budget ran out. About 1.4 points is measurement noise, since repeated runs of the same circuit vary by 3–5%.*

More than half of the remaining error traces back to the probe. Some of it comes from circuits the probe couldn't get far enough through within its budget. The rest comes from circuits with mid-circuit measurements and resets, which the probe skips.
