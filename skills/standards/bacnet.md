---
id: "bacnet"
title: "BACnet (ASHRAE Standard 135)"
category: "standard"
tags: ["bacnet", "protocol", "interoperability", "ashrae", "building-automation"]
building_types: ["office", "hospital", "mixed-use", "hotel", "retail", "data-center"]
canvas_sections: [2, 3, 6]
last_updated: "2026-05-28"
version: "1.0"
---

## Overview

BACnet (Building Automation and Control Networks) is the dominant open communication protocol for building automation systems, defined by ASHRAE Standard 135. It enables interoperability between devices from different manufacturers — HVAC controllers, lighting systems, fire panels, and access control systems can exchange data using a common language.

BACnet provides the communication grammar (how devices talk to each other) but not the semantic vocabulary (what the data means). This is why supplementary standards like Project Haystack, Brick Schema, and ASHRAE 223P exist — to add meaning to BACnet data points.

## Key Concepts

- **Objects:** BACnet represents everything as objects (Analog Input, Binary Output, Schedule, Trend Log, etc.)
- **Services:** Operations that devices perform (Read Property, Write Property, Subscribe COV, etc.)
- **Network architectures:** BACnet/IP (over TCP/IP networks), BACnet MS/TP (over RS-485 serial), BACnet/SC (Secure Connect — encrypted BACnet/IP)
- **Device profiles:** B-AAC (Advanced Application Controller), B-ASC (Application Specific Controller), B-BC (Building Controller), etc.

## Why It Matters for RFIs

BACnet support is the minimum interoperability requirement for any building automation procurement. When writing RFIs:

- **Require BACnet compliance** — Ask vendors to specify their BACnet conformance class and provide a PICS (Protocol Implementation Conformance Statement)
- **Specify BACnet/SC for new installations** — BACnet Secure Connect adds TLS encryption to BACnet/IP, addressing cybersecurity concerns
- **Don't assume BACnet = interoperability** — Two BACnet devices can communicate but still use incompatible naming conventions and data structures. Semantic tagging (Haystack/Brick) is needed for true data interoperability
- **Legacy integration** — Many existing buildings have BACnet MS/TP devices on RS-485 networks. Ask vendors how they bridge between MS/TP and IP

## RFI Questions Related to BACnet

- What BACnet conformance class do your devices support? Provide PICS documentation.
- Do your devices support BACnet Secure Connect (BACnet/SC)?
- How do your devices handle BACnet MS/TP to BACnet/IP gateway functionality?
- What BACnet objects and services does your system expose for third-party integration?
- Can all data points in your system be accessed via BACnet, or are some only available through proprietary interfaces?
