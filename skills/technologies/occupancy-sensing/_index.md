---
id: "occupancy-sensing"
title: "Occupancy Sensing & Space Utilization Analytics"
category: "technology"
tags: ["occupancy", "sensors", "space-utilization", "people-counting", "hybrid-work"]
building_types: ["office", "hospital", "mixed-use", "retail"]
outcomes: ["reduce-energy-costs", "improve-tenant-experience"]
standards: ["bacnet", "mqtt"]
canvas_sections: [1, 2, 3, 4, 7]
last_updated: "2026-05-28"
version: "1.0"
---

## Overview

Occupancy sensing measures whether spaces are occupied, how many people are present, and how spaces are used over time. In smart buildings, this data drives two primary outcomes: energy savings (only condition spaces that are actually occupied) and space optimization (understand which spaces are used, underused, or over-provisioned).

Post-pandemic hybrid work patterns have made occupancy sensing essential for offices. When only 40–60% of desks are occupied on any given day, operating a building as if it were fully occupied wastes significant energy and creates poor space utilization data.

## How It Works

Occupancy sensing technologies vary significantly in capability and cost:

| Technology | Detects | Accuracy | Privacy | Cost |
|---|---|---|---|---|
| **PIR (Passive Infrared)** | Presence (binary) | Low–Medium | High (no PII) | Low |
| **Ultrasonic** | Presence (binary) | Medium | High | Low |
| **LiDAR (3D ToF)** | Count + position | High | High (no images) | Medium |
| **Computer vision (AI camera)** | Count + behavior | Very high | Low (images) | Medium–High |
| **Bluetooth/Wi-Fi positioning** | Count + identity | Medium | Medium (MAC/device) | Low (if infra exists) |
| **Desk sensors (pressure/IR)** | Desk-level presence | High | High | Medium |
| **CO2-based estimation** | Approximate count | Low | High | Low |
| **Radar (mmWave)** | Count + presence | High | High (no images) | Medium |

The choice depends on the use case: binary presence detection for HVAC control, headcount for space analytics, or positioning for wayfinding and utilization heatmaps.

## Key Standards & Protocols

- **BACnet** — For feeding occupancy data to BAS/BMS for HVAC control
- **MQTT** — Lightweight protocol for sensor-to-cloud data transmission
- **Bluetooth Low Energy (BLE)** — For beacon-based positioning systems
- **Wi-Fi (802.11)** — For device-based occupancy detection using existing infrastructure
- **ASHRAE 62.1** — Ventilation standard that allows DCV based on occupancy sensing

## Market Context

The occupancy sensing market is driven by three forces:

1. **Hybrid work** — Offices need real data on which spaces are actually used to right-size their portfolio and optimize desk-to-employee ratios
2. **Energy efficiency** — Demand-controlled ventilation and lighting based on real occupancy rather than schedules delivers 15–25% HVAC savings
3. **Building certifications** — WELL, SmartScore, and LEED credits reward occupancy-responsive building operations

The market is shifting from simple binary sensors to AI-powered analytics platforms that combine multiple data sources (sensors, Wi-Fi, calendar, badge data) to provide a unified occupancy picture.

## Building-Type Considerations

### Office
Primary driver is space utilization analytics for portfolio decisions (consolidation, subleasing) and hybrid work support (hotdesking, room booking). Integration with HVAC for demand-controlled ventilation and with lighting for occupancy-responsive dimming.

### Hospital
Patient room occupancy for bed management, waiting room monitoring, and staff location awareness. Privacy requirements are elevated due to HIPAA. LiDAR or radar preferred over camera-based solutions in clinical settings.

### Mixed-Use
Different occupancy patterns across functions (retail peaks at lunch/evening, offices peak mid-morning, residential is inverse). Analytics must account for shared spaces (lobbies, parking, amenity areas) serving multiple populations.

### Retail
Customer traffic counting, dwell time analysis, conversion rate measurement (visitors vs. purchasers). Integration with POS systems for correlating occupancy with sales data.

## Cost Benchmarks

- **PIR/ultrasonic sensors (per zone):** $50–$150 installed
- **LiDAR people counters (per entry point):** $500–$1,500 installed
- **Desk-level sensors (per desk):** $100–$300 installed
- **Wi-Fi-based occupancy analytics (platform):** $0.05–$0.20 per sq ft annually
- **Computer vision analytics (per camera):** $200–$500 per camera + $50–$150/camera/month software
- **Space utilization analytics platform:** $0.10–$0.50 per sq ft annually
- **Typical ROI:** 6–18 months when tied to energy savings or space consolidation decisions

## Key Vendors

People counting & space analytics:
- **Density** — LiDAR-based people counting, analytics platform
- **VergeSense** — AI-powered sensor platform for space utilization
- **Disruptive Technologies** — Miniature wireless sensors (desk, room)
- **Irisys (InfraRed Integrated Systems)** — Thermal people counting
- **Xovis** — 3D stereo vision people flow analytics

Wi-Fi/BLE-based:
- **Cisco Spaces** — Wi-Fi-based occupancy and location analytics
- **Juniper Mist** — AI-driven Wi-Fi with occupancy analytics
- **Kontakt.io** — BLE-based indoor positioning and occupancy

Integrated workplace platforms:
- **Robin** — Desk/room booking + occupancy
- **Envoy** — Workplace platform with occupancy data
- **SpaceIQ / Archibus** — IWMS with occupancy integration
