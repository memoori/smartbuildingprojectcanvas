---
id: "access-control-rfi-guidance"
title: "Access Control — RFI Guidance"
category: "technology"
tags: ["access-control", "rfi", "procurement", "security"]
last_updated: "2026-05-28"
version: "1.0"
---

## Questions to Ask Vendors

### Technology Overview
- Describe your platform architecture (cloud-managed, on-premise, hybrid). Where is access decision-making performed?
- What credential types do you support (mobile BLE/NFC, RFID card, biometric, PIN)? What is your mobile credential strategy?
- Do your readers support OSDP v2? Are you still deploying Wiegand in any configurations?
- How does your system handle offline operation if cloud connectivity is lost?
- What is your approach to multi-tenant buildings where a property manager needs oversight across independent tenant access domains?

### Integration & Interoperability
- How does your access control system integrate with BMS/BAS for occupancy-triggered HVAC and lighting?
- Can your system integrate with elevator dispatch systems? Which elevator vendors have you integrated with?
- Describe your API capabilities. Can third-party systems consume access events in real-time?
- How does your system integrate with visitor management platforms?
- Can your platform serve as a unified identity layer for both physical and logical (IT network) access?

### Cybersecurity & Privacy
- How are credentials encrypted in transit and at rest?
- Describe your approach to controller hardening. What happens if a reader or controller is physically tampered with?
- If you offer biometric capabilities, how do you handle biometric data privacy regulations (BIPA, GDPR)?
- What audit logging capabilities does your platform provide?

### Scalability & Migration
- What is the maximum number of doors/readers your platform supports per site and across a portfolio?
- If we have an existing access control system, what is the migration path? Can you reuse existing door hardware?
- What is your credential migration strategy for transitioning users from physical cards to mobile?

## Evaluation Criteria

| Criterion | Weight | What to Look For |
|---|---|---|
| Mobile credential maturity | High | Native mobile support (not a bolt-on), Apple/Google Wallet integration |
| Cybersecurity posture | High | OSDP v2, encrypted credentials, SOC 2 certification, tamper detection |
| BMS integration capability | High | Real-time event API for triggering HVAC/lighting/elevator based on access |
| Multi-tenant management | High | Independent tenant domains with property management oversight |
| Open APIs | Medium | RESTful APIs, webhook support, real-time event streaming |
| Migration path | Medium | Can reuse existing wiring/hardware, phased migration support |
| Visitor management | Medium | Built-in or integrated visitor pre-registration, temporary credentials |
| Total cost of ownership | Medium | Per-door pricing transparency, credential costs, ongoing platform fees |

## Red Flags & Common Pitfalls

- **Still deploying Wiegand** — Wiegand is an insecure, unencrypted, unidirectional protocol from the 1980s. Modern systems should use OSDP v2
- **Proprietary credentials that only work with their readers** — Creates complete vendor lock-in for future expansion
- **No offline failover** — Cloud-managed systems must continue to operate locally if internet connectivity is lost
- **Per-credential fees for mobile** — Some vendors charge high per-user mobile credential fees that exceed card costs at scale
- **No API for BMS integration** — If access events can't trigger HVAC/lighting, you lose a major smart building benefit
- **Biometric data stored off-premise without clear privacy controls** — Regulatory risk, especially under BIPA/GDPR

## Contract Clauses to Include

- **Credential portability:** Owner must be able to export user database and access rules in standard formats
- **Hardware compatibility:** Vendor must specify which third-party door hardware (locks, strikes) is compatible
- **Offline operation guarantees:** System must continue to grant/deny access for a minimum period without cloud connectivity
- **Privacy compliance:** Vendor must comply with applicable biometric and personal data regulations in all jurisdictions where deployed
- **Firmware update policy:** Regular security updates with documented patching schedule and backward compatibility commitments
