---
id: "hvac-optimization-rfi-guidance"
title: "HVAC Optimization — RFI Guidance"
category: "technology"
tags: ["hvac", "rfi", "procurement", "energy-optimization"]
last_updated: "2026-05-28"
version: "1.0"
---

## Questions to Ask Vendors

### Technology Overview
- Describe your HVAC optimization approach. Is it rule-based, model-predictive, ML-driven, or a combination?
- Does your solution require replacement of existing controllers, or can it overlay onto existing BAS/BMS?
- What sensor inputs does your system require (temperature, humidity, CO2, occupancy, weather)?
- How does your system handle demand-controlled ventilation (DCV)?
- Does your platform support ASHRAE Guideline 36 sequences of operation?

### Performance
- What energy savings have you achieved in comparable building types? Provide case studies with verified data.
- How do you measure and verify (M&V) energy savings? Do you follow IPMVP protocols?
- What is the typical time from installation to measurable savings?
- How does your system maintain occupant comfort while optimizing energy? What comfort metrics do you track?
- Can your system participate in demand response or grid-interactive programs?

### Integration
- How does your system integrate with existing BAS/BMS platforms? List specific platforms you have integrated with.
- What building data do you require access to (BAS points, utility meters, weather, occupancy)?
- How do you handle buildings with multiple HVAC system types (VAV, FCU, DOAS, chilled beams)?
- Can your platform manage optimization across a portfolio of buildings?

### Deployment & Risk
- What is the typical deployment timeline from contract to operational optimization?
- What happens if your system fails or loses connectivity? What is the fallback mode?
- Do you offer performance guarantees or shared-savings models?
- What cybersecurity measures protect the connection between your platform and our BAS?

## Evaluation Criteria

| Criterion | Weight | What to Look For |
|---|---|---|
| Verified energy savings | High | Third-party M&V results in comparable buildings, not just vendor claims |
| Non-invasive deployment | High | Overlay approach that preserves existing BAS investment |
| Comfort maintenance | High | Documented comfort metrics alongside energy savings |
| Failsafe behavior | High | Graceful degradation if cloud/system fails — building must remain comfortable |
| Integration breadth | Medium | Works with multiple BAS vendors, not just one |
| Grid-interactive capability | Medium | Demand response, load flexibility, time-of-use optimization |
| M&V methodology | Medium | Transparent, standards-based measurement of savings |

## Red Flags & Common Pitfalls

- **Savings claims without third-party verification** — Any vendor can claim 30% savings; ask for IPMVP-verified results
- **Requires full BAS replacement** — If the vendor says you need to replace your existing system, explore overlay options first
- **No fallback mode** — If the optimization platform goes offline, the building HVAC must continue operating safely
- **Ignores occupant comfort** — Energy savings achieved by making occupants uncomfortable will generate complaints and tenant dissatisfaction
- **Black box algorithms** — You should be able to understand why the system makes the decisions it does
- **No consideration of your specific building type** — HVAC optimization for an office is very different from a hospital

## Contract Clauses to Include

- **Performance guarantees:** Minimum energy savings percentage with measurement methodology specified
- **Comfort thresholds:** Maximum allowable deviation from setpoints, complaint response procedures
- **Failsafe requirements:** System must default to safe, comfortable operation if optimization fails
- **Savings verification:** Independent M&V at 6 and 12 months post-deployment
- **Data access:** Owner retains access to all optimization data, setpoint changes, and performance logs
