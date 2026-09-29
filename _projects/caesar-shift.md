---
title: Keyless Caesar Cipher Decryption
summary: Used a character-frequency dataset to decrypt a Caesar-shifted plaintext without the key. A fun little project that seemed like magic to me at the time.
category: software
date: 2018-04-17
period: "2018"
status: Completed
tools: [Java, Information Theory]
thumbnail: /assets/img/projects/caesar-shift/caesar-card.png
hero: /assets/img/projects/caesar-shift/letter-frequencies.png
hero_alt: Bar chart of English letter frequencies, with E highest at 12.0%, then T at 9.1% and O at 8.1%
hero_caption: "The decoder looks for how often each letter appears in English, from the reference table in FrequencyTest.java."
links:
  - label: Source
    url: https://github.com/tystowell/CaesarShift
    icon: github
---

## Overview

I wrote two Java programs: one that uses a key to encrypt a message, and one that tries to decrypt it without the key. I used the most insecure encryption method ever invented, the Caesar shift, so it's more a proof of concept and something that I enjoyed as opposed to anything novel.

[![Three panels: plaintext from A Tale of Two Cities, the scrambled ciphertext with key 42, and the recovered plaintext]({{ '/assets/img/projects/caesar-shift/demo.png' | relative_url }})]({{ '/assets/img/projects/caesar-shift/demo.png' | relative_url }})
*The full round trip: the opening of* A Tale of Two Cities *is encrypted with key 42, then recovered with no key at all. Click to enlarge.*

## How it works

<figure class="figure-float">
  <img src="{{ '/assets/img/projects/caesar-shift/shift-scores.png' | relative_url }}" alt="Line plot of the discrepancy score for each of the 96 candidate shifts, with a sharp minimum of 0.53 at shift 42">
  <figcaption>For each candidate key, the program checks how well the resulting message lines up with English. At a shift of 42, the message has the same letter distribution as common English.</figcaption>
</figure>

This Caesar shift was done along the ASCII alphabet, so admittedly most of the characters had a probability near 0 and it was far too easy for the key to be decrypted. However, when I made this, I thought it was magic, and I'm including it here because not every project I worked on was significant. Some of them were just significant to me.
