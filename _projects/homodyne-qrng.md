---
title: Integrated Homodyne Detector & Quantum Random Number Generator
summary: Co-designed a photonic chip and on-chip transimpedance amplifiers for quantum-noise-limited homodyne detection, then deployed it at Oak Ridge National Laboratory as a QRNG for their QKD system.
category: photonics
date: 2022-01-01
period: Jan – Jul 2022
status: Completed
featured: true
role: FPGA post-processing, QRNG theory & on-site deployment
collaborators: Oak Ridge National Laboratory
tools: [FPGA, Homodyne detection, Entropy estimation, Randomness extraction]
# thumbnail: /assets/img/projects/qrng-thumb.jpg
# hero: /assets/img/projects/qrng-setup.jpg
---

## Overview

Homodyne detection of the vacuum state produces genuinely random measurement results, which
makes it an excellent source of quantum randomness, but only if the detector is
quantum-noise-limited. This project co-designed a photonic chip and on-chip transimpedance
amplifiers to reach that regime, then turned the detector into a working quantum random number
generator.

## My contributions

- **FPGA post-processing:** did all of the FPGA work to process the detector output in real time.
- **QRNG theory:** did all of the theory work, including the entropy calculations that
  determine how much certified randomness can be extracted.
- **Deployment at ORNL:** worked on site at Oak Ridge National Laboratory to set the system up as
  the random number source for their QKD system.

Related: [Toeplitz Hashing Analysis]({{ '/work/toeplitz-analysis/' | relative_url }}). Toeplitz
hashing is a standard randomness extractor for QRNGs.

TODO: A photo of the chip or setup, and your extracted-entropy result.
