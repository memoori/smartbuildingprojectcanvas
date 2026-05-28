---
id: "occupancy-sensing-rfi-guidance"
title: "Occupancy Sensing — RFI Guidance"
category: "technology"
tags: ["occupancy", "rfi", "procurement", "space-utilization"]
last_updated: "2026-05-28"
version: "1.0"
---

## Questions to Ask Vendors

### Technology Overview
- What sensing technology do you use (PIR, LiDAR, computer vision, radar, Wi-Fi, BLE, desk sensors)? Why this approach?
- What does your system measure: binary presence, headcount, directional flow, positioning, or desk-level occupancy?
- What accuracy rates do you achieve in comparable deployments? How is accuracy validated?
- Does your system require network infrastructure (PoE, Wi-Fi) or can sensors operate independently (battery, cellular)?
- How does your system handle privacy? Is any personally identifiable information captured, stored, or transmitted?

### Use Cases & Analytics
- Describe the analytics and dashboards your platform provides. Can users create custom reports?
- How does your platform handle real-time occupancy vs. historical utilization trends?
- Can your system support demand-controlled ventilation by feeding real-time data to a BAS/BMS?
- Does your platform integrate with room/desk booking systems? Which ones?
- How does your system handle multi-floor and multi-building portfolio analytics?

### Integration
- What protocols does your system use to communicate occupancy data (BACnet, MQTT, REST API, webhooks)?
- How does your system integrate with existing BAS/BMS for HVAC and lighting control?
- Can your data be exported for analysis in external tools (Power BI, Tableau, Excel)?
- What calendar system integrations do you support (Outlook, Google, Teams)?

### Deployment
- What are the physical installation requirements (power, mounting, cabling, line-of-sight)?
- How long does a typical deployment take per floor?
- What ongoing maintenance is required (battery replacement, calibration, firmware updates)?
- How do you handle sensor failures or data gaps?

## Evaluation Criteria

| Criterion | Weight | What to Look For |
|---|---|---|
| Privacy-by-design | High | No PII captured, no images stored, GDPR/CCPA compliant |
| BAS integration | High | Real-time feed to BMS for demand-controlled HVAC/lighting |
| Accuracy & validation | High | Published accuracy rates, methodology for validation |
| Analytics depth | Medium | Historical trends, utilization heatmaps, booking correlation |
| Installation simplicity | Medium | Wireless/battery options, minimal infrastructure needed |
| Portfolio scalability | Medium | Multi-building dashboards, cross-site benchmarking |
| Data export | Medium | Open API, standard formats, no lock-in on analytics |

## Red Flags & Common Pitfalls

- **Camera-based systems without clear privacy safeguards** — Computer vision offers high accuracy but raises privacy concerns. Ensure edge processing (no images leave the device) and compliance with local privacy laws
- **Accuracy claims without methodology** — "99% accuracy" means nothing without specifying conditions, validation method, and what's being measured
- **No BAS integration path** — If occupancy data can't drive HVAC/lighting, you lose the energy savings use case
- **Battery-powered sensors with short life** — Ask for actual battery life in comparable deployments, not theoretical maximums
- **Vendor-locked analytics** — If you can't export raw data, you can't do independent analysis or switch platforms

## Contract Clauses to Include

- **Privacy compliance:** Vendor must certify compliance with applicable privacy regulations and provide data processing agreements
- **Accuracy guarantees:** Minimum accuracy thresholds with measurement methodology and remediation if not met
- **Data ownership:** All occupancy data is owned by the building owner, exportable in standard formats
- **Sensor lifecycle:** Battery life guarantees, replacement terms, firmware update commitments
- **BAS integration SLA:** Maximum latency for real-time occupancy data delivery to BMS
