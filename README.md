# Smart Building RFI Canvas

An interactive, open-source planning tool for commercial building owners, operators, and developers to plan smart building technology adoption and generate structured Requests for Information (RFIs) for technology procurement.

## Quick Start

**Open [`index.html`](index.html) in any browser.** No build step, no server, no dependencies.

1. Fill in your project details (building type, size, age, location)
2. Work through the 7 canvas sections — read the guidance, answer the questions, capture your notes
3. Mark each section complete as you go
4. Click **"Copy AI Brief to Clipboard"** to export a structured prompt
5. Paste the brief into Claude, ChatGPT, or any AI assistant to generate a professional RFI document

Your data is saved in your browser's local storage — it persists between sessions and never leaves your machine.

## What's in this repo

### [`index.html`](index.html) — Interactive Canvas

The main experience. A self-contained HTML page with an interactive version of the Smart Building RFI Canvas — 7 structured sections covering:

1. **Key Project Goals & Value Proposition** — Frame business outcomes, not technology
2. **Initial Actions** — Establish baselines, prioritize use cases
3. **Partnerships & Resources** — Vendors, MSIs, stakeholder alignment
4. **Costs & Risk** — Budgets, CAPEX/OPEX, cybersecurity, commissioning
5. **Management & Delivery** — Project governance, phased rollout
6. **Future-Proofing** — Open standards, lifecycle planning, upgrade paths
7. **Key Performance Indicators** — Quantitative and qualitative metrics

Each section includes:
- Questions from the original canvas
- **Skills-informed guidance** — domain-specific tips drawn from industry research
- **Tips** — practical insights from building industry experience
- Example outputs
- A notes area that auto-saves to local storage

### [`skills/`](skills/) — Smart Building Knowledge Base

A curated, research-backed knowledge base for AI assistants. When you paste your canvas brief into an AI, point it at this skills directory for deeper domain context:

- **Technologies** — BMS/BAS, HVAC optimization, access control, occupancy sensing, energy management
- **Building types** — Office, hospital, mixed-use
- **Outcomes** — Reduce energy costs, improve tenant experience, achieve LEED
- **Standards** — BACnet, MQTT, NIST 800-53
- **Cross-cutting** — MSI role, market statistics
- **RFI templates** — 6-section RFI structure modeled on the GSA Green Proving Ground format

Skills are structured Markdown files with YAML frontmatter. They render on GitHub, are human-editable, and serve as rich context for AI-assisted RFI generation.

### [`canvas/`](canvas/) — Original Static Canvas

The original poster-format planning template. Open `canvas/index.html` to view or print the classic layout.

## How AI-Assisted RFI Generation Works

The canvas captures your structured thinking. The AI does the drafting.

1. **You** work through the canvas, answering questions and capturing decisions for your specific building project
2. **You** export a structured AI brief (Markdown format with project details and all your notes)
3. **You** paste the brief into your preferred AI assistant (Claude, ChatGPT, etc.)
4. **The AI** generates a professional RFI document with structured vendor questions

For best results, also share the [`skills/`](skills/) directory with your AI assistant — it provides detailed domain knowledge on building technologies, cost benchmarks, standards, and RFI best practices.

### Why RFIs, not RFPs?

An **RFI** (Request for Information) asks vendors to describe their capabilities against your desired outcomes. An **RFP** prescribes specific solutions — too rigid for smart building tech where owners may not know what's available. The outcomes-based approach lets vendors innovate and compete on value, not just price.

## Philosophy

Built on three principles from decades of smart building industry experience:

1. **Outcomes first, not technology.** Start with "What problem are you solving?" Building owners think in NOI and tenant experience, not protocol specifications.
2. **Baby steps.** Guide through focused use cases — "What's the ONE problem you're solving first?" — not a laundry list of technology.
3. **Meet owners where they are.** The gap is readiness, not algorithms. The tool should help owners establish their baseline reality before requesting vendor information.

## Licensing

- **Code** (`index.html`, `canvas/`): [BSD 3-Clause License](LICENSE)
- **Content** (`skills/`): [Creative Commons Attribution-ShareAlike 4.0](LICENSE-CC-BY-SA-4.0)

## Credits

Designed by [Memoori Research](https://www.memoori.com).

The Smart Building RFI Canvas was originally created to help commercial real estate developers navigate technology adoption decisions. This interactive version adds AI-assisted RFI generation capabilities while preserving the canvas as a standalone planning framework.
