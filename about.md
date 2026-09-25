---
title: About
permalink: /about/
eyebrow: About me
lede: "TODO: one or two sentences on who you are and what you want to work on in grad school."
---

<!-- Everything below is ordinary Markdown. Replace the TODOs with your own content. -->

## Research interests

TODO: A short paragraph on the questions that excite you — e.g. quantum networks and repeaters,
solid-state spin–photon interfaces, quantum frequency conversion, and simulation of open quantum systems.

## Education

**Brigham Young University** — B.S. in TODO, expected 2027
: TODO: advisor, lab, honors, relevant coursework.

## Experience

<!-- Newest first. -->

**Research Intern**, Center for Quantum Networks (CQN) — Summer 2026
: Designed and built a [quantum frequency conversion system]({{ '/work/quantum-frequency-conversion/' | relative_url }}).

**Undergraduate Researcher**, TODO Lab — 2022–present
: Built a [graphical simulator for cavity-coupled color centers]({{ '/work/color-center-memory-simulator/' | relative_url }}),
  worked on [green machine photonic chips]({{ '/work/green-machine-passive/' | relative_url }}) for conference QKD
  (coQREATE project), and developed an [integrated homodyne QRNG]({{ '/work/homodyne-qrng/' | relative_url }})
  deployed at Oak Ridge National Laboratory. Contributed quantum simulation features to CamachoLab's
  [Simphony]({{ '/work/simphony/' | relative_url }}) photonic circuit simulator.

**Engineering Intern**, Harsch Systems — Summer 2021
: Designed an [RP2040-based industrial I/O board]({{ '/work/rp2040-board/' | relative_url }}) in KiCad and
  brought up [embedded Rust firmware]({{ '/work/embedded-rust-rp2040/' | relative_url }}) on the Raspberry Pi Pico.

## Student teams

**BYU Mars Rover**, science module — 2026–present
: Responsible for the optical components, including the [fluorescence detector]({{ '/work/byu-mars-rover/' | relative_url }}).

**BYU Rocketry** — freshman year
: Built a [rocket designed to reach a target altitude]({{ '/work/byu-rocketry/' | relative_url }}).

## Publications & presentations

{% if site.data.publications.size > 0 %}
<ul class="pubs">
{% for pub in site.data.publications %}
  <li>
    <span class="pub-type mono">{{ pub.type }}</span>
    <div>
      {% if pub.url != "" %}<a href="{{ pub.url }}"><strong>{{ pub.title }}</strong></a>{% else %}<strong>{{ pub.title }}</strong>{% endif %}<br>
      <span class="muted">{{ pub.authors }} · <em>{{ pub.venue }}</em>, {{ pub.year }}</span>
    </div>
  </li>
{% endfor %}
</ul>
{% endif %}

## Skills

- **Simulation:** TODO (Python, NumPy/SciPy, QuTiP, Julia, …)
- **Experimental:** TODO (free-space & fiber optics, nonlinear optics, single-photon detection, …)
- **Embedded & hardware:** Rust, RP2040 / Cortex-M, KiCad PCB design
- **Software:** Python, Java, JavaScript, C, TensorFlow, Git
