# Smart Building Skills — Knowledge Base

A curated, research-backed knowledge base for smart building technology procurement. Each "skill" is a structured Markdown file covering a specific technology category, building type, desired outcome, or industry standard.

## Structure

```
skills/
├── building-types/        # Building-type-specific guidance (office, hospital, etc.)
├── outcomes/              # Desired business outcomes (reduce energy, improve NOI, etc.)
├── technologies/          # Technology categories, each with:
│   └── <category>/
│       ├── _index.md      # Overview, standards, market context
│       ├── rfi-guidance.md # Questions to ask vendors, evaluation criteria
│       ├── vendors.md     # Key vendors (not endorsements)
│       └── cost-benchmarks.md
├── standards/             # Protocol & standard references (BACnet, MQTT, etc.)
├── cross-cutting/         # Topics spanning categories (MSI role, procurement models)
├── templates/             # RFI section templates modeled on GSA structure
├── schema/                # YAML frontmatter schema and validation
└── manifest.json          # Auto-generated index of all skills
```

## Skill file format

Each skill is a Markdown file with YAML frontmatter:

```yaml
---
id: "bms-bas"
title: "Building Management System / Building Automation System"
category: "technology"
tags: ["bms", "bas", "building-automation"]
building_types: ["office", "hospital", "hotel", "retail"]
outcomes: ["reduce-energy-costs", "improve-tenant-experience"]
standards: ["bacnet", "mqtt", "ashrae-90-1"]
last_updated: "2026-05-28"
---
```

## Using skills independently

These files are designed to be useful on their own — browse them on GitHub, clone them for your own AI tools, or use them as reference material. They do not require the web app.

## Contributing

See [CONTRIBUTING.md](../docs/CONTRIBUTING.md) for guidelines on authoring and submitting new skills.

## License

Content in this directory is licensed under [Creative Commons Attribution-ShareAlike 4.0 International](../LICENSE-CC-BY-SA-4.0).
