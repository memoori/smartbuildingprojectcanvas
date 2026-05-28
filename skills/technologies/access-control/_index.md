---
id: "access-control"
title: "Access Control & Physical Security"
category: "technology"
tags: ["access-control", "security", "identity", "piam", "credentials"]
building_types: ["office", "hospital", "mixed-use", "hotel", "retail"]
outcomes: ["improve-tenant-experience", "reduce-energy-costs"]
standards: ["nist-800-53"]
canvas_sections: [1, 2, 3, 4, 6]
last_updated: "2026-05-28"
version: "1.0"
---

## Overview

Access control systems manage who can enter a building, when, and where. In smart buildings, access control extends beyond door locks to become a core data source — triggering HVAC conditioning, lighting activation, elevator dispatch, and occupancy analytics based on credential events.

Access control is the largest smart building IoT segment by device count: 421 million devices globally in 2024, growing at 12.4% CAGR to 846 million by 2030. Healthcare represents 9.9% of global access control spending ($1.49B in 2024); retail represents 8.2% ($1.23B).

## How It Works

Modern access control consists of:

1. **Credentials** — What the user presents: mobile (BLE/NFC), card (RFID/smart card), biometric (face, fingerprint, iris), or PIN
2. **Readers** — Devices at entry points that read credentials
3. **Controllers** — Decision-making hardware that validates credentials against permissions and triggers door hardware
4. **Management software** — Central platform for provisioning users, setting access rules, monitoring events, and generating reports
5. **Integration layer** — APIs and event streams that connect access events to other building systems

The trend is toward **mobile-first credentials** (phone-based access via BLE or NFC), **cloud-managed platforms**, and **frictionless entry** (touchless, tailgating detection, facial recognition where legally permitted).

## Key Standards & Protocols

- **OSDP v2** (Open Supervised Device Protocol) — Secure, bidirectional communication between reader and controller, replacing legacy Wiegand
- **ONVIF Profile D** — Video-access integration standard
- **PSIA** (Physical Security Interoperability Alliance) — Data exchange standards
- **FICAM** (Federal Identity, Credential, and Access Management) — US federal standard
- **Mobile credential standards** — Apple Wallet, Google Wallet credential APIs
- **BACnet** — For integration with BMS (e.g., triggering HVAC based on access events)

## Market Context

The access control market is consolidating around cloud-native platforms and mobile credentials. Key trends:

- **Cloud-managed access** replacing on-premise server-based systems, reducing IT infrastructure needs
- **Mobile credentials** displacing physical cards — lower cost per credential, easier provisioning, better user experience
- **Physical Identity and Access Management (PIAM)** platforms unifying physical and logical (IT) access under one identity
- **Video-access convergence** — Linking video surveillance with access events for verification and forensics
- **Visitor management** integration — Pre-registered visitors receiving temporary mobile credentials

## Building-Type Considerations

### Office
Tenant experience is the primary driver. Mobile access, touchless entry, visitor management integration, and elevator dispatch based on credentials. Multi-tenant buildings need partitioned access with property management oversight.

### Hospital
Layered security model: public zones (lobby, café), restricted zones (patient floors, pharmacy), and critical zones (OR, NICU, data center). Infant security, asset tracking integration, and duress/lockdown capabilities are healthcare-specific requirements.

### Mixed-Use
Multiple access control domains (residential, office, retail, parking) that may share common areas. Residents need 24/7 access; office tenants need business-hours access; retail has public-facing entries. Unified identity management across domains is the key challenge.

## Cost Benchmarks

- **Cloud-managed access per door:** $1,500–$3,500 installed (reader + controller + door hardware + cabling)
- **Mobile credential platform:** $2–$5 per user per month (replaces card costs)
- **On-premise server-based system per door:** $2,000–$5,000 installed (higher upfront, lower ongoing)
- **Visitor management add-on:** $100–$300 per month per lobby
- **PIAM platform:** $5,000–$50,000 annually depending on organization size
- **Integration with BMS/elevator dispatch:** $10,000–$50,000 project cost

## Key Vendors

Cloud-native platforms:
- **Brivo** — Cloud-first access control
- **Openpath** (Motorola Solutions) — Mobile-first, cloud-managed
- **Verkada** — Unified physical security (access + video + sensors)
- **Kisi** — Cloud access control for coworking and offices

Enterprise/traditional:
- **Genetec** (Security Center) — Unified security platform
- **Lenel S2** (Carrier) — Enterprise access control
- **CCURE 9000** (Johnson Controls) — Large-scale enterprise
- **Gallagher** — High-security, global enterprise
- **HID Global** (ASSA ABLOY) — Credentials, readers, mobile access platform
