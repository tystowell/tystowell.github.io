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

On November 6-7th, 2026, I went to the first [Intermountain Quantum Competition](https://iqc.devpost.com/project-gallery), a 24-hour hackathon, after my boss suggested I sign up.

This event was my first hackathon, and I'm super glad I went. The first day, we got to listen to a panel of experts, including my boss Dr. Ryan Camacho, meet some industry sponsors, and form teams. At 3pm, we gathered to hear the problem statements and get to work.

Out challenge was to take a quantum circuit (an OpenQASM file) with a specific threshold, and predict how long Quantum Rings' simulator would take to run it, without running it. The training set had 532 circuits, each run at five thresholds from 16 to 1024. Runtimes ranged from 0.15 seconds to the 6-hour cap, and some circuits had as many as 6 million gates. Our predictions had to be generated in under 15 seconds. Each prediction was scored on a log scale as 1 − &#124;log₁₀(predicted / actual)&#124;, so being off by 2× costs the same at one second as at one hour.

It was a very long 24 hours, but it was well worth it. (My wife may or may not agree with that statement haha). Seeing everything come together last minute and being able to present our solution was immensely satisfying. Our model scored **93.8% on the hidden hold-out circuits**, the top score in the challenge. For comparison, the organizers' own reference model scored around 80%, depending on the dataset used for validation.

## Why was this so difficult?

The first obvious metric would be how many lines or qubits the circuit has. If you're a little more versed on quantum simulation techniques, you may even hazard a guess that the number of two qubit gates is connected to the runtime. As shown below, none of these metrics is effective at actually predicting the runtime of a quantum circuit.

[![Three scatter plots of runtime against QASM line count, qubit count and two-qubit gate count, each showing a wide spread]({{ '/assets/img/projects/quantum-rings-runtime/simple-features.png' | relative_url }})]({{ '/assets/img/projects/quantum-rings-runtime/simple-features.png' | relative_url }})
*Runtime at threshold 16 against QASM line count, qubit count and two-qubit gate count (526 completed runs). Runtime rises roughly with each, but the spread at any given size is several orders of magnitude.*

To understand why this is so difficult, it's important to understand how we can simulate circuits that have as many as 250 qubits in the first place. After all, a naive approach would require a state size of 2^250 complex numbers, a number that is comparable to the number of atoms in the observable universe (in practice, there are a few orders of magnitude more atoms than states here, but still).

To be able to work with this in the first place, we have to use something called a tensor network. These allow the size of our state to scale with the degree of entanglement in our circuit, so a 250-qubit circuit that barely entangles can be cheap (~500 complex numbers) while a circuit with 20 qubits that entangles them all can take hours (>1 million complex numbers!)

## Background: matrix product states

A matrix product state (MPS) stores an *n*-qubit state as a chain of small tensors, one per qubit, instead of 2ⁿ amplitudes. The bond between two neighboring tensors has a dimension χ, which sets how much entanglement can exist across that cut. A cut with bond dimension χ can hold at most log₂ χ bits of entanglement.

![Diagram comparing a three-qubit state vector with eight amplitudes to a matrix product state of three tensors joined by bonds of dimension 2]({{ '/assets/img/projects/quantum-rings-runtime/mps.png' | relative_url }})
*A full state vector (left) against the same state as a matrix product state (right). Contracting the bonds recovers every amplitude. For weakly entangled states the bonds stay small, so the storage grows linearly with qubit count instead of exponentially.*

To apply a two-qubit gate, we merge two neighboring tensors (we can only apply gates on adjacent qubits in this model, but in practice we can work around that with swap operations), then split the resulting tensor again using a singular value decomposition (SVD). Each SVD costs roughly χ³, and we discard any singular values below a certain threshold or count to keep the simulation fast. The simulator's runtime then depends on how large the bonds grow, and on how many SVDs are done at that size.

## The MPS probe

Most of the other teams (and likely QuantumRings themselves) used a neural network to estimate the runtime of the QASM circuits. In practice, this doesn't work very well, because the neural network would need to predict how much non-Clifford entanglement a circuit generates. We can't just ask how many two qubits gates there are, because the amount of bond order a two qubit gate creates depends on the quantum state going into the operation. And we can't know that quantum state without running the circuit, which takes hours.

So, we took a really cool shortcut. This was the "aha" moment of our work, and the part that I find the coolest. To know how long simulating the circuit would take, we simulated the circuit badly. We create a "matrix product state probe" that runs a real MPS simulation, but forces the bond order to stay low (e.g. χ = 8 and χ = 16). Capping the bond order to this degree makes the resulting state very incorrect. However, the singular values it computes along the way (and then throws away), show at what rate the circuit's entanglement tries to grow.

From each probe we kept a handful of numbers:

- the entanglement entropy at each cut of the chain, at its peak and at the end;
- the fraction of cuts that reached the χ cap, and the share of SVD updates that had to truncate;
- how much weight each truncation threw away;
- whether the average entanglement was still rising over the second half of the run or had leveled off.

A circuit that fills χ = 8 almost immediately and keeps discarding weight, like the one at the top of this page, will be expensive. A circuit that doesn't need to throw away very much SVD weight will be cheaper.

### Strict timing requirements

The full prediction had to finish in 15 seconds for every circuit, including circuits that were 200 MB of QASM. There are a few optimizations that helped that be possible:

- **A work budget** Some circuits are too long for the probe to finish. So, each SVD is charged by its size, and the probe stops early when it reaches a certain budget. Keeping it timer independent means the same ciruit always gives the same results.
- **Merging gates.** Consecutive gates on the same pair of qubits are combined into one update. If the combined gate turns out not to entangle (operator Schmidt rank 1), it is split back into two single-qubit gates, with no SVD needed. Both steps are exact.
- **Long-range gates by swapping.** A gate between distant qubits moves one next to the other with swaps, applies the gate, and swaps back.

The probe does skip measurement and reset gates. Reset gates in particular are problematic, because they trace out the state of a qubit and effectively transform the state into a mixed state. Future work would fix this oversight, but for now, a "band-aid" solution was added right as the competition ended, in which we filtered out long circuits with reset gates as likely candidates for timing out.

## A couple of other features

We used tree ensembles, feature extraction, and other assorted bells and whistles to boost the performance of our model before the competition ended. I won't go into detail on those here, as the MPS probe was the primary innovation and added more than any other part. However, we ended up fitting the following formula with all of our results.

![Fitted runtime formula: a startup constant, plus a term summing the capped bond dimension raised to the power 2.17, plus terms for measurement, swaps and resets scaled by probe entanglement]({{ '/assets/img/projects/quantum-rings-runtime/formula.png' | relative_url }})
*The fitted cost formula. The largest term sums, over the cuts that each gate crosses, the estimated bond dimension capped at the threshold. Two of the terms are scaled by entanglement that the probe measured.*

## Results

<figure class="figure-inset">
  <a href="{{ '/assets/img/projects/quantum-rings-runtime/predicted-vs-actual.png' | relative_url }}"><img src="{{ '/assets/img/projects/quantum-rings-runtime/predicted-vs-actual.png' | relative_url }}" alt="Log-log scatter plot of predicted against actual runtime from 0.1 seconds to 6 hours, with points clustered tightly along the diagonal"></a>
  <figcaption>Predicted against measured runtime on validation circuits the model never saw, colored by threshold (lighter is higher). The shaded band is within 2× of the true runtime, which held for 91% of runs. Hollow circles are runs that timed out, so their true runtime is the 6-hour cap.</figcaption>
</figure>

Before the hold-out set was released, we checked the model three ways, from easiest to hardest:

| Held out during validation | Score |
|---|---|
| A random 20% of circuits | 90.3% |
| Groups of similar circuits (mainly size) | 87.8% |
| Whole gate-set families (e.g. all Toffoli gates) | 70.9% |

On the organizers' hidden hold-out set, the model scored **93.8%**.

[![Bar chart of where the remaining 9.7 points of error come from, led by sub-second runs at 2.89 points]({{ '/assets/img/projects/quantum-rings-runtime/error-budget.png' | relative_url }})]({{ '/assets/img/projects/quantum-rings-runtime/error-budget.png' | relative_url }})
*Where the remaining 9.7 points of validation error come from. The biggest share is very short runs, which we sometimes predicted slightly too slow. Next come circuits where the probe got through less than half the circuit before its budget ran out. About 1.4 points is measurement noise, since repeated runs of the same circuit vary by 3–5%.*

## What's next

There's honestly some room for improvement here. The results of a 24 hour hackathon in which we pushed to the end with some heavy AI usage are far from a finished product haha. However, I'm super proud of what we did accomplish, and I may look at this more to see if there's any way to get a paper or research project out of it. I'm really curious at looking at the extreme outliers - on one circuit, we predicted a runtime of 10s and it took over 6 hours on real hardware. What makes that special? How can we catch those circuits? How can we attach these algorithms to trick it into predicting the wrong runtime? All of those could be their own interesting direction for research like this.

Thanks so much to QuantumRings for the awesome problem! This was seriously one of the coolest projects I've worked on in a bit, and I appreciate that it has real world consequences and applications. Hopefully there will be opportunities to work together again in the future!
