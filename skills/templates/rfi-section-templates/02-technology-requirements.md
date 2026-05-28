---
id: "rfi-template-technology-requirements"
title: "RFI Section 2: Technology Requirements & Use Cases"
category: "template"
tags: ["rfi", "template", "requirements", "use-cases"]
canvas_sections: [2, 6]
last_updated: "2026-05-28"
version: "1.0"
---

## Purpose

This section describes what business outcomes the technology must achieve, specific use cases, and required building system interfaces. Following the outcomes-based procurement principle, it defines WHAT the technology should accomplish, not HOW.

## Structure

### 2.1 Desired Outcomes
- For each selected outcome, describe:
  - The current state (problem or opportunity)
  - The desired future state
  - How success will be measured
- Example: "We currently spend $4.50/sq ft on energy. Our target is $3.50/sq ft within 18 months of deployment."

### 2.2 Use Cases
- For each technology category in scope, describe specific use cases:
  - Who is the user/beneficiary?
  - What should happen?
  - What triggers the action?
  - What is the expected result?
- Example: "When a meeting room has been unoccupied for 15 minutes, HVAC setpoints should adjust to unoccupied mode and lighting should dim to minimum."

### 2.3 Building System Integration Requirements
- Which existing systems must the new technology integrate with?
- What data must flow between systems and in which direction?
- What protocols are in use (BACnet, Modbus, proprietary)?
- Are there any systems that cannot be modified or replaced?

### 2.4 Future-Proofing Requirements
- Expected technology lifecycle (how long should this investment last?)
- Upgrade path requirements
- Interoperability standards that must be supported
- Data portability requirements

### 2.5 Constraints
- Regulatory requirements (HIPAA, local codes, etc.)
- Cybersecurity requirements (reference NIST, IEC 62443)
- Privacy requirements
- Physical constraints (historic building, limited ceiling space, etc.)
- Budget constraints (if disclosed)

## Guidance for AI Generation

- Define outcomes, not solutions: "identify whether meeting rooms are occupied" not "install PIR sensors"
- Include enough operational context for vendors to propose appropriate solutions
- Be explicit about existing systems and integration requirements — this is where most projects fail
- Include future-proofing requirements based on the building's expected operational lifecycle
- Reference applicable standards by name (ASHRAE 90.1, BACnet, etc.)
