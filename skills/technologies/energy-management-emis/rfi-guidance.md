---
id: "energy-management-emis-rfi-guidance"
title: "Energy Management / EMIS — RFI Guidance"
category: "technology"
tags: ["energy", "emis", "rfi", "procurement"]
last_updated: "2026-05-28"
version: "1.0"
---

## Questions to Ask Vendors

### Technology Overview
- Describe your platform's capabilities across the EMIS spectrum: utility tracking, sub-metering, diagnostics, optimization, grid interaction.
- What data sources does your platform ingest (utility meters, sub-meters, BAS data, weather, occupancy, rate schedules)?
- Does your platform perform automated fault detection and diagnostics? Is this rule-based, ML-driven, or both?
- Can your system actively control equipment (optimization) or is it monitoring/advisory only?
- Do you support ENERGY STAR Portfolio Manager integration for automated benchmarking?

### Metering & Data
- What metering hardware do you support or require? Do you work with existing meters?
- What granularity of data does your platform provide (15-min, 5-min, 1-min, real-time)?
- How do you handle data gaps, meter failures, or communication interruptions?
- Can your platform disaggregate energy consumption by end-use (HVAC, lighting, plug loads) without sub-metering every circuit?

### Grid Interaction & Demand Response
- Can your platform participate in utility demand response programs? Which programs and utilities have you worked with?
- Do you support time-of-use rate optimization and peak demand management?
- Can your system manage on-site generation (solar) and battery storage?
- What is your approach to Grid-Interactive Efficient Buildings (GEB)?

### Carbon & Compliance
- Does your platform track carbon emissions (Scope 1, 2, 3)?
- Can you automate reporting for building performance standards, local energy benchmarking laws, or LEED recertification?
- How do you handle the EU EPBD BACS requirements for buildings with heating systems >290 kW?

## Evaluation Criteria

| Criterion | Weight | What to Look For |
|---|---|---|
| Data integration breadth | High | Works with multiple BAS vendors, meter types, utility data sources |
| Automated diagnostics | High | AI/ML fault detection, actionable recommendations, quantified savings potential |
| Portfolio management | High | Multi-building dashboards, cross-site benchmarking, portfolio-level reporting |
| Carbon tracking | Medium | Scope 1/2/3 emissions, automated regulatory reporting |
| Grid interaction | Medium | Demand response participation, peak management, rate optimization |
| Data granularity | Medium | Real-time or near-real-time data, not just monthly utility bills |
| Compliance automation | Medium | ENERGY STAR, local benchmarking laws, LEED, EU EPBD |

## Red Flags & Common Pitfalls

- **Monitoring-only with no actionable recommendations** — Dashboards without prioritized, quantified recommendations don't drive savings
- **Requires proprietary meters only** — Should work with industry-standard metering hardware
- **No M&V methodology** — If the vendor can't explain how they measure and verify savings, claimed results are unreliable
- **Ignores rate structure** — Energy management isn't just about kWh — demand charges, time-of-use rates, and ratchet clauses often dominate the bill
- **No BAS integration** — If the platform can't pull data from the BAS, you'll need extensive manual metering

## Contract Clauses to Include

- **Savings measurement:** Specify IPMVP option for measuring and verifying energy savings
- **Data ownership:** All metering and analytics data owned by building owner, exportable in standard formats
- **Meter maintenance:** Vendor responsibility for maintaining accuracy of any supplied metering hardware
- **Compliance updates:** Vendor must update reporting capabilities as benchmarking regulations change
- **Performance guarantees:** If vendor claims specific savings, include contractual guarantee with financial remedy
