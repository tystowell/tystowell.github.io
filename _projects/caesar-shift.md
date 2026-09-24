---
title: Keyless Caesar Cipher Decryption
summary: Breaks Caesar-shift ciphers without the key by matching the ciphertext's letter distribution to the frequency profile of English.
category: software
date: 2018-04-17
period: "2018"
status: Completed
tools: [Java]
links:
  - label: Source
    url: https://github.com/tystowell/CaesarShift
    icon: github
---

## Overview

Two small programs:

- **Encryption:** shifts text by a given key across the printable ASCII range (32–127).
- **Frequency test:** recovers the plaintext *without* the key. Each possible shift is scored by
  how closely the resulting character distribution matches typical English letter frequencies,
  and the best-scoring shift wins.

TODO: An example ciphertext → plaintext, or a bar chart comparing the letter distributions.
