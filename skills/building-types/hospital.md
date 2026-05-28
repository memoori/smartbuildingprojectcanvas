---
id: "hospital"
title: "Healthcare Facilities"
category: "building-type"
tags: ["hospital", "healthcare", "clinical", "patient-safety", "hipaa"]
outcomes: ["reduce-energy-costs", "improve-tenant-experience"]
canvas_sections: [1, 2, 3, 4, 5, 7]
last_updated: "2026-05-28"
version: "1.0"
---

## Overview

Healthcare facilities represent 9.9% of global access control spending ($1.49B in 2024) and are among the most complex environments for smart building technology. ACEEE research shows 14% energy savings are achievable, but the constraints are more demanding than any other building type: patient safety, regulatory compliance (HIPAA, Joint Commission), 24/7 operations, and strict indoor environmental quality requirements.

The fundamental tension in healthcare is between optimization and safety. Every technology decision must answer: "What happens if this system fails while a patient is in surgery?"

## Key Technology Priorities

1. **HVAC with clinical-grade controls** — Operating rooms, isolation rooms, and pharmacy clean rooms have strict air change, temperature, humidity, and pressure requirements. HVAC optimization must focus on non-critical zones and central plant efficiency while maintaining clinical compliance.

2. **Access control with layered security** — Public zones (lobby, café), restricted zones (patient floors, pharmacy), and critical zones (OR, NICU, data center). Infant security systems, duress/lockdown capabilities, and integration with nurse call systems.

3. **Energy management with 24/7 base loads** — Hospitals run continuously with high base loads from medical equipment, data centers, and life safety systems. Focus on central plant optimization, cogeneration/CHP, and demand management without affecting patient care.

4. **Asset tracking (RTLS)** — Real-time location of mobile medical equipment (infusion pumps, wheelchairs, ventilators), patient flow management, and staff workflow optimization.

5. **Indoor air quality monitoring** — Continuous monitoring of particulate matter, VOCs, CO2, temperature, and humidity. Post-COVID awareness has elevated IEQ from a compliance requirement to a patient/staff safety imperative.

## Unique Considerations

### Regulatory Landscape
- **HIPAA** — Any system that touches patient data (occupancy near patient rooms, access logs, location tracking) must comply
- **Joint Commission** — Accreditation requirements for physical environment, life safety, and emergency management
- **ASHRAE 170** — Ventilation of Health Care Facilities (prescriptive air change requirements by room type)
- **FGI Guidelines** — Facility Guidelines Institute standards for healthcare facility design

### Clinical vs. Non-Clinical Zones
The smart building opportunity in hospitals is primarily in non-clinical zones:
- Administrative offices, conference rooms, lobbies — treat like standard office
- Parking structures, cafeterias, public areas — occupancy-responsive operations
- Central plant — optimization of chillers, boilers, steam systems

Clinical zones have limited optimization flexibility due to prescriptive ventilation and environmental requirements.

### Infection Control
HVAC plays a critical role in infection control through:
- Pressure relationships between rooms (positive for ORs, negative for isolation)
- Minimum air changes per hour
- HEPA filtration requirements
- Continuous monitoring and alarming for out-of-spec conditions

### Privacy Requirements
Occupancy sensing in hospitals must use privacy-preserving technologies (LiDAR, radar, thermal) rather than camera-based systems in patient areas. All data systems must be evaluated for HIPAA compliance.

## Common Use Cases for RFIs

- "We need to reduce energy costs in our campus without affecting clinical operations"
- "We want real-time monitoring of pressure relationships in our OR suites and isolation rooms"
- "We need to track our mobile medical equipment to reduce loss and improve availability"
- "We want to upgrade our access control to support mobile credentials while maintaining our layered security model"
- "We need to ensure our ventilation systems comply with the latest ASHRAE 170 requirements"

## KPIs to Measure Success

- Energy use intensity (EUI) — kBtu per sq ft (benchmarked against ENERGY STAR for hospitals)
- Clinical environmental compliance rate — % of monitored rooms within spec for temperature, humidity, pressure, air changes
- Equipment utilization rate (for tracked assets)
- Security incident response time
- Patient satisfaction (HCAHPS survey scores, specifically environment-of-care questions)
- Unplanned downtime of critical building systems
