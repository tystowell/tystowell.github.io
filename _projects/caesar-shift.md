---
title: Keyless Caesar Cipher Decryption
summary: Breaks Caesar-shift ciphers without the key by scoring every possible shift against the letter-frequency profile of English. The right key stands out as a sharp minimum.
category: software
date: 2018-04-17
period: "2018"
status: Completed
tools: [Java, Frequency analysis]
thumbnail: /assets/img/projects/caesar-shift/caesar-card.png
hero: /assets/img/projects/caesar-shift/letter-frequencies.png
hero_alt: Bar chart of English letter frequencies, with E highest at 12.0%, then T at 9.1% and O at 8.1%
hero_caption: "The fingerprint the decoder looks for: how often each letter appears in English, from the reference table in FrequencyTest.java."
links:
  - label: Source
    url: https://github.com/tystowell/CaesarShift
    icon: github
---

## Overview

Two small Java programs:

- **Encryption:** shifts text by a given key across the 96 printable ASCII characters (32–127).
- **Frequency test:** recovers the plaintext *without* the key.

[![Three panels: plaintext from A Tale of Two Cities, the scrambled ciphertext with key 42, and the recovered plaintext]({{ '/assets/img/projects/caesar-shift/demo.png' | relative_url }})]({{ '/assets/img/projects/caesar-shift/demo.png' | relative_url }})
*The full round trip: the opening of* A Tale of Two Cities *is encrypted with key 42, then recovered with no key at all. Click to enlarge.*

## How it works

A Caesar shift has only 96 possible keys, but checking each one by eye is slow. Instead, the
decoder undoes every candidate shift and compares the resulting character distribution with
English: it sums the absolute differences between the observed and expected frequencies across
all 96 characters. Wrong shifts produce gibberish with a flat, un-English distribution. The
right shift reproduces English's fingerprint, so its score drops sharply.

<figure class="figure-inset">
  <img src="{{ '/assets/img/projects/caesar-shift/shift-scores.png' | relative_url }}" alt="Line plot of the discrepancy score for each of the 96 candidate shifts, with a sharp minimum of 0.53 at shift 42">
  <figcaption>Every shift scored against English. The true key, 42, scores 0.53, while the next best scores 1.25, so the lowest score is the key.</figcaption>
</figure>
