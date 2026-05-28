---
id: "energy-management-emis"
title: "Energy Management & Information Systems (EMIS)"
category: "technology"
tags: ["energy", "emis", "metering", "analytics", "grid-interactive", "demand-response"]
building_types: ["office", "hospital", "mixed-use", "retail", "data-center"]
outcomes: ["reduce-energy-costs", "achieve-leed"]
standards: ["bacnet", "mqtt", "ashrae-90-1"]
canvas_sections: [1, 2, 4, 6, 7]
last_updated: "2026-05-28"
version: "1.0"
---

## Overview

Energy Management and Information Systems (EMIS) encompass the software, hardware, and services used to monitor, analyze, and optimize a building's energy consumption. This ranges from basic utility bill tracking to real-time sub-metering, automated fault detection, demand response participation, and grid-interactive building strategies.

EMIS costs range from $0.50–$3.00 per sq ft total, with software at $0.01–$0.20 per sq ft annually. The investment is typically justified by 10–30% energy cost reductions, with JLL estimating a 3:1 ROI over 5 years for smart building technology investments broadly.

## How It Works

EMIS operates at multiple levels of sophistication:

1. **Utility tracking** — Aggregating utility bills, benchmarking against ENERGY STAR or similar standards, identifying trends
2. **Sub-metering** — Real-time monitoring of energy consumption by system (HVAC, lighting, plug loads) or zone (floor, tenant)
3. **Automated diagnostics** — Rule-based or ML-driven identification of energy waste, equipment faults, and deviation from expected performance
4. **Optimization** — Active control adjustments to reduce consumption: setpoint optimization, demand limiting, load shifting
5. **Grid interaction** — Participating in demand response programs, managing on-site generation/storage, optimizing against time-of-use rates

## Key Standards & Protocols

- **ENERGY STAR Portfolio Manager** — EPA benchmarking tool, basis for many compliance requirements
- **ASHRAE 90.1** — Energy Standard for Buildings
- **IPMVP** — International Performance Measurement and Verification Protocol
- **Green Button** — Standard for utility data access (used by US utilities)
- **BACnet** — For accessing BAS energy-related data points
- **Modbus** — Common for utility meter communication
- **MQTT** — For IoT energy sensors and sub-meters

## Market Context

Key trends in the EMIS market:

- **Grid-Interactive Efficient Buildings (GEB)** are emerging as a major theme. GSA demonstrated potential 165 MW peak load reduction across federal portfolio. Buildings that can modulate load in response to grid signals create value beyond just reducing consumption.
- **Energy-as-a-Service (EaaS)** models: vendors like AlphaStruxure (Schneider) and Calibrant Energy (Siemens) offer guaranteed energy outcomes tied to capital investment
- **IRA funding** in the US: $3.4B for federal building portfolios, $1B specifically for smart/sustainable technologies
- **EU EPBD mandate:** From 2025, non-residential buildings with heating >290 kW must install interoperable BACS; threshold drops to 70 kW by 2029
- **Carbon accounting** requirements are adding a data layer beyond just energy — tracking Scope 1, 2, and 3 emissions

## Building-Type Considerations

### Office
Tenant sub-metering for cost allocation in multi-tenant buildings. After-hours energy use is often 50%+ of total — significant opportunity. ENERGY STAR benchmarking for marketing and compliance.

### Hospital
24/7 operations with high base loads. Focus on central plant optimization, demand limiting (without affecting patient care), and cogeneration/CHP management. Medical equipment loads are largely non-discretionary.

### Mixed-Use
Complex sub-metering requirements across residential, commercial, and retail tenants. Different rate structures and billing models. Shared central plant energy allocation.

## Cost Benchmarks

- **EMIS platform (software):** $0.01–$0.20 per sq ft annually
- **Sub-metering hardware + installation:** $500–$2,000 per meter point
- **Comprehensive EMIS deployment:** $0.50–$3.00 per sq ft total (hardware + software + commissioning)
- **Typical energy savings:** 10–30% reduction in energy costs
- **Payback period:** 1–3 years for metering/analytics, 3–7 years for comprehensive EMIS with sub-metering
- **Demand response revenue:** $50–$200 per kW of curtailable load annually (varies by market)

## Key Vendors

EMIS platforms:
- **Lucid (BuildingOS)** — Portfolio energy analytics and benchmarking
- **EnergyCAP** — Utility bill management and energy accounting
- **Hatchet / Kairos** — Real-time energy analytics
- **Aquicore** — Real-time metering and analytics for CRE
- **GridPoint** — Energy management for distributed portfolios

Grid-interactive / demand response:
- **Enel X (Enel Group)** — Demand response aggregation
- **CPower** — Distributed energy management
- **Voltus** — Virtual power plant platform
- **AutoGrid** — AI-driven flexibility management

Sub-metering hardware:
- **Dent Instruments** — Power meters and data loggers
- **Schneider Electric (PowerLogic)** — Power monitoring
- **Continental Control Systems (WattNode)** — Revenue-grade sub-meters
