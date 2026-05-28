---
id: "rfi-template-vendor-information"
title: "RFI Section 3: Vendor Information Requested"
category: "template"
tags: ["rfi", "template", "vendor", "technology-overview"]
canvas_sections: [3]
last_updated: "2026-05-28"
version: "1.0"
---

## Purpose

This section tells vendors exactly what information to provide about their technology, organization, and capabilities. Modeled on the GSA GPG/DOE RFI structure, it uses structured questions with character limits to ensure comparable, evaluable responses.

## Structure

### 3.1 Company Information
- Company name, address, URL
- Number of employees (global and local)
- Years in business
- Financial stability indicators
- Relevant certifications and accreditations

### 3.2 Technology Overview
- Product/service name(s) being proposed
- Technology category and type (hardware, software, service, combination)
- Executive summary: value proposition in 200 words or fewer
- Detailed functionality description
- Architecture diagram (edge, cloud, hybrid)

### 3.3 Use Case Response
For each use case defined in Section 2, vendors should describe:
- How their technology addresses the use case
- What components are required
- What data inputs are needed
- What outputs/results the owner can expect
- How this has been demonstrated in comparable buildings

### 3.4 Integration Capabilities
- Supported communication protocols (BACnet, MQTT, Modbus, REST API, etc.)
- Specific building systems previously integrated with
- API documentation availability
- Semantic data modeling approach (Haystack, Brick, ASHRAE 223P)
- Data export capabilities and formats

### 3.5 Ease of Implementation
Using a tiered scale (modeled on GSA):
- **Low complexity:** Plug-and-play with existing infrastructure, operated by typical building staff
- **Medium complexity:** Requires training, minor adjustments to existing infrastructure
- **High complexity:** Requires extensive training, significant integration effort, specialized personnel
- Physical requirements (weight, space, power, network)
- Is the technology networked? Describe the network architecture.

### 3.6 Reference Projects
- Minimum 3 reference projects in comparable building types
- For each: building type, size, scope, deployment date, contact information
- Any case studies with published performance data

## Guidance for AI Generation

- Generate structured questions that are specific to the technology categories and building type selected by the user
- Include character/word limits on vendor responses to ensure concise, comparable answers
- Pull specific questions from the technology rfi-guidance.md files for each selected technology
- Frame questions around the outcomes defined in Section 2, not around specific technology features
