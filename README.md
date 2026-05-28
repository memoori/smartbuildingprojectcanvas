# Smart Building Project Canvas

An open-source toolkit for commercial real estate developers, owners, and operators to plan smart building technology adoption and generate structured Requests for Information (RFIs) for technology procurement.

## What's in this repo

### [`canvas/`](canvas/) — The Developers Smart Building Project Canvas

The original planning template — a structured 7-step framework for thinking through smart building technology projects:

1. Key Project Goals & Value Proposition
2. Initial Actions
3. Partnerships & Resources
4. Costs & Risk
5. Management & Delivery
6. Future-Proofing
7. Key Performance Indicators

Open `canvas/index.html` in a browser to view or print the canvas.

### [`skills/`](skills/) — Smart Building Knowledge Base

A curated, research-backed knowledge base covering building technology categories, building types, desired outcomes, industry standards, and procurement best practices. Skills are structured Markdown files that can be:

- Browsed on GitHub as standalone reference material
- Used as context for AI-powered RFI generation
- Contributed to via pull requests

### [`app/`](app/) — RFI Generator Web App *(coming soon)*

A self-hostable Next.js web application that walks users through the canvas framework, takes their specific inputs (building type, goals, budget, timeline), and generates professional technology procurement RFIs using their own LLM API key (OpenAI, Anthropic, or Google).

### [`wireframes/`](wireframes/) — UX Wireframes *(coming soon)*

Interactive HTML/CSS wireframes for the web app, built for iteration before full implementation.

## Philosophy

This tool is built around three principles drawn from decades of smart building industry experience:

1. **Outcomes first, not technology.** Start with "What problem are you solving?" — not "What technology do you want?" Building owners think in NOI and tenant experience, not protocol specifications.

2. **Baby steps.** Don't overwhelm. Guide users through focused use cases — "What's the ONE problem you're solving first?" — rather than a laundry list of technology.

3. **RFIs, not RFPs.** An RFI asks vendors to describe their capabilities against your desired outcomes. An RFP prescribes specific solutions. For most building owners exploring smart building technology, an RFI is the right starting point — it lets vendors innovate and compete on value.

## Licensing

- **Code** (`canvas/`, `app/`, `wireframes/`): [BSD 3-Clause License](LICENSE)
- **Content** (`skills/`): [Creative Commons Attribution-ShareAlike 4.0](LICENSE-CC-BY-SA-4.0)

## Credits

Designed by [Memoori Research](https://www.memoori.com).

The Smart Building Project Canvas was originally created to help commercial real estate developers navigate technology adoption decisions. This extended toolkit adds AI-powered RFI generation capabilities while preserving the canvas as a standalone planning framework.
